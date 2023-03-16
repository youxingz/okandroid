package com.cardioflex.motor.leadfluid

import android.annotation.SuppressLint
import android.content.Context
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.widget.*
import com.cardioflex.motor.R
import com.cardioflex.motor.utils.parseInt
import com.google.android.material.snackbar.Snackbar
import com.serotonin.modbus4j.ModbusMaster
import com.serotonin.modbus4j.exception.ModbusTransportException
import io.okandroid.OkAndroid
import io.okandroid.sensor.motor.LeadFluidPump
import io.okandroid.sensor.motor.LeadFluidPumpObservable
import io.okandroid.serial.SerialDevice
import io.okandroid.serial.modbus.Modbus
import io.reactivex.rxjava3.disposables.Disposable
import io.reactivex.rxjava3.schedulers.Schedulers


class ControlPaneLeadFluidPumpX(
    private val context: LeadFluidActivityX,
    private val device: SerialDevice,
    private val slaveId: Int
) : LinearLayout(context) {

    private lateinit var motor: LeadFluidPumpObservable
    private lateinit var titleText: TextView
    private lateinit var btnTurn: ToggleButton

    // velocity
    private lateinit var velocityText: TextView
    private lateinit var directionText: TextView
    private lateinit var velocityToggle: ToggleButton

    // 周期内
    private lateinit var velocityEdit1: EditText
    private lateinit var timeEdit1: EditText
    private lateinit var directionToggle1: ToggleButton
    private lateinit var velocityEdit2: EditText
    private lateinit var timeEdit2: EditText
    private lateinit var directionToggle2: ToggleButton

    // clear
    private lateinit var clearDirectionToggle: ToggleButton
    private lateinit var clearToggle: ToggleButton

    private lateinit var root: View

    private var disposableVelocity: Disposable? = null
    private var disposableDirection: Disposable? = null

    private var working: Boolean = false
    private lateinit var modbusMaster: ModbusMaster

    private var isExceptionInWorking = false

    init {
        initModbus()
        initView()
    }

    private fun initModbus() {
        try {
            val modbus = Modbus(device)
            modbusMaster = modbus.master()
            modbusMaster.retries = 5
            motor = LeadFluidPumpObservable(LeadFluidPump(modbusMaster, slaveId))
        } catch (e: ModbusTransportException) {
//            e.printStackTrace()
        }
    }

    @SuppressLint("ResourceType")
    private fun initView() {
        val inflater = context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
        root = inflater.inflate(R.layout.view_controlpane_leadfluidpump_x, this);
        // bind
        titleText = root.findViewById(R.id.title_text)
        btnTurn = root.findViewById(R.id.turn_btn)
        // velocity
        velocityText = root.findViewById(R.id.velocity_text)
        directionText = root.findViewById(R.id.direction_text)
        velocityToggle = root.findViewById(R.id.btn_velocity)
        velocityEdit1 = root.findViewById(R.id.velocity_edit1)
        timeEdit1 = root.findViewById(R.id.time_edit1)
        directionToggle1 = root.findViewById(R.id.direction_btn1)
        velocityEdit2 = root.findViewById(R.id.velocity_edit2)
        timeEdit2 = root.findViewById(R.id.time_edit2)
        directionToggle2 = root.findViewById(R.id.direction_btn2)
        // clear
        clearDirectionToggle = root.findViewById(R.id.direction_btn_clear)
        clearToggle = root.findViewById(R.id.clear_btn)

        val filename = device.device.name
        titleText.text = "蠕动泵【${slaveId}号 | 串口：$filename】"

        btnTurn.setOnCheckedChangeListener { _, isChecked ->
            if (isExceptionInWorking) {
                isExceptionInWorking = false
                return@setOnCheckedChangeListener
            }
            motor.turn(isChecked).subscribeOn(Schedulers.io()).observeOn(OkAndroid.mainThread())
                .subscribe({
                    Snackbar.make(
                        this, "【蠕动泵 $slaveId 号】${if (isChecked) "启动" else "急停"}成功", 0
                    ).show()
                }, { e ->
                    e.printStackTrace()
                    e.localizedMessage?.let { context.appendLog(it) }
                    Snackbar.make(this, "【蠕动泵 $slaveId 号】${if (isChecked) "启动" else "急停"}失败", 0)
                        .show()
                })
            working = isChecked
            // loop in thread
            if (isChecked) {
                Schedulers.newThread().createWorker().schedule {
                    loop()
                    // make false
                    OkAndroid.mainThread().createWorker().schedule {
                        isExceptionInWorking = true
                        btnTurn.isChecked = false
//                        modbusMaster.destroy()
//                        initModbus()
                    }
                }
            }
        }

        // velocity read
        velocityToggle.setOnCheckedChangeListener { _, isChecked ->
            if (isChecked) {
                if (disposableVelocity != null && !disposableVelocity!!.isDisposed) {
                    disposableVelocity!!.dispose();
                }
                if (disposableDirection != null && !disposableDirection!!.isDisposed) {
                    disposableDirection!!.dispose()
                }
                disposableVelocity = motor.velocity().subscribeOn(Schedulers.newThread())
                    .observeOn(OkAndroid.mainThread()).subscribe({
                        velocityText.text = "${it / 10} RPM"
                    }, { e ->
                        e.printStackTrace()
                        e.localizedMessage?.let { context.appendLog(it) }
                        Snackbar.make(this, "【蠕动泵 $slaveId 号】速度读取失败，请重试", 0).show()
                        velocityToggle.isChecked = false
                    })
                disposableDirection = motor.direction().subscribeOn(Schedulers.newThread())
                    .observeOn(OkAndroid.mainThread()).subscribe({
                        directionText.text = if (it == 0) "顺时针↩️" else "逆时针↪️"
                    }, { e ->
                        e.printStackTrace()
                        e.localizedMessage?.let { context.appendLog(it) }
                        Snackbar.make(this, "【蠕动泵 $slaveId 号】方向读取失败，请重试", 0).show()
                        velocityToggle.isChecked = false
                    })
            } else {
                if (disposableVelocity != null && !disposableVelocity!!.isDisposed) {
                    disposableVelocity!!.dispose()
                }
                if (disposableDirection != null && !disposableDirection!!.isDisposed) {
                    disposableDirection!!.dispose()
                }
            }
        }
        // clear
        clearToggle.setOnCheckedChangeListener { _, isChecked ->
            val direction = if (clearDirectionToggle.isChecked) 0 else 1
            setPeriodItem(200, direction)
            motor.turn(isChecked).subscribeOn(Schedulers.io()).observeOn(OkAndroid.mainThread())
                .subscribe({
                    Snackbar.make(
                        this, "【蠕动泵 $slaveId 号】高速${if (isChecked) "启动" else "急停"}成功", 0
                    ).show()
                }, { e ->
                    e.printStackTrace()
                    e.localizedMessage?.let { context.appendLog(it) }
                    Snackbar.make(this, "【蠕动泵 $slaveId 号】高速${if (isChecked) "启动" else "急停"}失败", 0)
                        .show()
                })
        }
        clearDirectionToggle.setOnCheckedChangeListener { _, isChecked ->
            val direction = if (isChecked) 0 else 1
            setPeriodItem(200, direction)
        }
    }


    private fun loop() {
        while (working) {
            var success: Boolean
            val speed1 = parseInt(velocityEdit1.text.toString())
            val time1 = parseInt(timeEdit1.text.toString())
            val direction1 = if (directionToggle1.isChecked) 0 else 1
            val speed2 = parseInt(velocityEdit2.text.toString())
            val time2 = parseInt(timeEdit2.text.toString())
            val direction2 = if (directionToggle2.isChecked) 0 else 1

            Log.i("WORKING", "working1...: $speed1 rpm, $time1 ms")
            success = setPeriodItem(speed1, direction1)
            if (!success) {
                break
            }
            Thread.sleep(time1.toLong())
            Log.i("WORKING", "working2...: $speed2 rpm, $time2 ms")
            success = setPeriodItem(speed2, direction2)
            if (!success) {
                break
            }
            Thread.sleep(time2.toLong())
        }
    }

    // - direction: 1: 逆, 0: 顺
    @SuppressLint("CheckResult")
    private fun setPeriodItem(speed: Int, direction: Int): Boolean {
        motor.direction(direction).subscribeOn(Schedulers.io())
            .observeOn(OkAndroid.mainThread()).subscribe({
            }, {
//                it.printStackTrace()
                working = false
            })
//        if (!working) return false
        motor.velocity(speed * 10).subscribeOn(Schedulers.io())
            .observeOn(OkAndroid.mainThread())
            .subscribe({
            }, { e ->
//                e.printStackTrace()
//                e.localizedMessage?.let { context.appendLog(it) }
                working = false
            })
        return working
    }
}
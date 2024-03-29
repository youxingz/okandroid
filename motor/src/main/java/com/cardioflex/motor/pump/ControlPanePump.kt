package com.cardioflex.motor.pump

import android.annotation.SuppressLint
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.widget.*
import com.cardioflex.motor.R
import com.google.android.material.snackbar.Snackbar
import com.serotonin.modbus4j.exception.ModbusTransportException
import io.okandroid.OkAndroid
import io.okandroid.sensor.motor.JieHengPeristalticPump
import io.okandroid.sensor.motor.JieHengPeristalticPumpObservable
import io.okandroid.serial.SerialDevice
import io.okandroid.serial.modbus.ModbusQueued
import io.okandroid.serial.modbus.ModbusMasterCreator
import io.reactivex.rxjava3.disposables.Disposable
import io.reactivex.rxjava3.schedulers.Schedulers


class ControlPanePump(
    context: Context,
    private val device: SerialDevice,
    private val slaveId: Int
) :
    LinearLayout(context) {

    private lateinit var pump: JieHengPeristalticPumpObservable
    private lateinit var titleText: TextView
    private lateinit var btnTurn: ToggleButton

    @SuppressLint("UseSwitchCompatOrMaterialCode")
    private lateinit var switchDirection: Switch
    private lateinit var textVelocity: TextView
    private lateinit var btnVelocity: ToggleButton
    private lateinit var btnVelocityEdit: Button
    private lateinit var editVelocity: EditText

    private lateinit var root: View

    private var disposableVelocity: Disposable? = null
    private var speed: Int = 0

    init {
        initModbus()
        initView()
    }

    private fun initModbus() {
        try {
            val modbus = ModbusQueued(
                device.device.name,
                ModbusMasterCreator.create(device)
            )
            val modbusMaster = modbus.master()
            modbusMaster.retries = 3
            pump = JieHengPeristalticPumpObservable(JieHengPeristalticPump(modbusMaster, slaveId))
        } catch (e: ModbusTransportException) {
            e.printStackTrace()
        }
    }

    @SuppressLint("ResourceType")
    private fun initView() {
        val inflater = context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
        root = inflater.inflate(R.layout.view_controlpane_pump, this);
        // bind
        titleText = root.findViewById(R.id.title_text)
        btnTurn = root.findViewById(R.id.turn_btn)
        switchDirection = root.findViewById(R.id.direction_btn)
        textVelocity = root.findViewById(R.id.velocity_text)
        btnVelocity = root.findViewById(R.id.btn_velocity)
        btnVelocityEdit = root.findViewById(R.id.btn_velocity_edit)
        editVelocity = root.findViewById(R.id.velocity_edit)
//        btnTurnContinue = findViewById(R.id.turn_on_btn)

        val filename = device.device.name
        titleText.text = "蠕动泵【${slaveId}号 | 串口：$filename】"

        btnTurn.setOnCheckedChangeListener { v, isChecked ->
            if (speed == 0) {
                Snackbar.make(v, "请先设置速度", 0).show()
                btnTurn.isChecked = false
            } else {
                pump.turn(isChecked).subscribeOn(Schedulers.io()).observeOn(OkAndroid.mainThread())
                    .subscribe({
                        Snackbar.make(this, "【蠕动泵 $slaveId 号】启停设置成功", 0).show()
                    }, {
                        it.printStackTrace()
                        Snackbar.make(this, "【蠕动泵 $slaveId 号】启停失败", 0).show()
                    })
            }
        }
        switchDirection.setOnCheckedChangeListener { _, isChecked ->
            pump.direction(if (isChecked) 1 else 0).subscribeOn(Schedulers.io())
                .observeOn(OkAndroid.mainThread()).subscribe({
                    Snackbar.make(this, "【蠕动泵 $slaveId 号】方向设置成功", 0).show()
                }, {
                    it.printStackTrace()
                    Snackbar.make(this, "【蠕动泵 $slaveId 号】方向设置失败", 0).show()
                })
        }

        btnVelocity.setOnCheckedChangeListener { _, isChecked ->
            if (isChecked) {
                if (disposableVelocity != null && !disposableVelocity!!.isDisposed) {
                    disposableVelocity!!.dispose();
                }
                disposableVelocity = pump.velocity().subscribeOn(Schedulers.newThread())
                    .observeOn(OkAndroid.mainThread()).subscribe({
                        textVelocity.text = "$it RPM"
                    }, {
                        it.printStackTrace()
                        Snackbar.make(this, "【蠕动泵 $slaveId 号】速度读取失败，请重试", 0).show()
                        btnVelocity.isChecked = false
                    })
            } else {
                if (disposableVelocity != null && !disposableVelocity!!.isDisposed) {
                    disposableVelocity!!.dispose();
                }
            }
        }
        btnVelocityEdit.setOnClickListener { v ->
            val text = editVelocity.text.toString()
            speed = Integer.parseInt(text)
            pump.velocity(speed).subscribeOn(Schedulers.io()).observeOn(OkAndroid.mainThread())
                .subscribe({
                    Snackbar.make(v, "【蠕动泵 $slaveId 号】速度设置成功 [$speed] RPM", 0).show();
                }, {
                    it.printStackTrace()
                    Snackbar.make(this, "【蠕动泵 $slaveId 号】速度设置失败", 0).show()
                })
        }
    }

}
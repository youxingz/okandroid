package io.okandroid.bluetooth.le.service;

import android.bluetooth.BluetoothGattCharacteristic;
import android.bluetooth.BluetoothGattDescriptor;

import java.util.UUID;

import io.okandroid.OkAndroid;
import io.okandroid.bluetooth.OkBluetoothException;
import io.okandroid.bluetooth.le.OkBleCharacteristic;
import io.okandroid.bluetooth.le.OkBleClient;
import io.reactivex.rxjava3.annotations.NonNull;
import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.core.Observer;
import io.reactivex.rxjava3.core.Single;
import io.reactivex.rxjava3.core.SingleSource;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.schedulers.Schedulers;

public abstract class AbstractService {
    public static final UUID CLIENT_CHARACTERISTIC_CONFIG_DESC = UUID.fromString("00002902-0000-1000-8000-00805f9b34fb");
    protected OkBleClient client;
    protected String serviceName;

    public AbstractService(String serviceName, OkBleClient client) {
        this.serviceName = serviceName;
        this.client = client;
    }


    protected <T> Single<T> writeOnce(UUID serviceUUID, UUID characteristicUUID, byte[] data, int writeType, CharacteristicValueTaker<T> characteristicValueTaker) {
        return client.writeCharacteristic(serviceUUID, characteristicUUID, data, writeType).flatMap(characteristic -> (SingleSource<T>) observer -> {
            if (characteristic != null) {
                observer.onSuccess(characteristicValueTaker.takeValue(characteristic)); // hex byte array.
            } else {
                observer.onError(new OkBluetoothException(String.format("BLE device characteristic write fail, detail: %s / %s", serviceName, characteristicUUID)));
            }
        });
    }

    protected @NonNull <T> Single<T> readOnce(UUID serviceUUID, UUID characteristicUUID, CharacteristicValueTaker<T> characteristicValueTaker) {
        return client.readCharacteristic(serviceUUID, characteristicUUID).flatMap(okBleCharacteristic -> (SingleSource<T>) observer -> {
            BluetoothGattCharacteristic characteristic = okBleCharacteristic.getCharacteristic();
            if (characteristic != null) {
                observer.onSuccess(characteristicValueTaker.takeValue(characteristic));
            } else {
                observer.onError(new OkBluetoothException(String.format("BLE device characteristic read fail, detail: %s / %s", serviceName, characteristicUUID)));
            }
        });
    }


    protected <T> Observable<T> observeNotification(UUID serviceUUID, UUID characteristicUUID, UUID descriptorUUID, CharacteristicValueTaker<T> characteristicValueTaker) {
        if (!client.isConnected()) {
            throw new IllegalArgumentException(new OkBluetoothException("BLE device is not connected."));
        }
        BluetoothGattCharacteristic characteristic = client.getCharacteristic(serviceUUID, characteristicUUID);
        if (characteristic == null) {
            throw new IllegalArgumentException(new OkBluetoothException(String.format("BLE device not support: [NOTIFY] %s / %s", serviceName, characteristicUUID)));
        }
        BluetoothGattDescriptor descriptor = characteristic.getDescriptor(descriptorUUID);
        if (descriptor == null) {
            throw new IllegalArgumentException(new OkBluetoothException(String.format("BLE device not support: [NOTIFY] %s / %s / %s", serviceName, characteristicUUID, descriptorUUID)));
        }
        return client.observeNotification(characteristic, descriptor).map(characteristic_ -> characteristicValueTaker.takeValue(characteristic_.getCharacteristic()));

        //     .observeOn(OkAndroid.mainThread()).subscribeOn(Schedulers.io()).subscribe(new Observer<OkBleCharacteristic>() {
        // @Override
        // public void onSubscribe(@NonNull Disposable d) {
        //     System.out.println(d.isDisposed());
        // }
        //
        // @Override
        // public void onNext(@NonNull OkBleCharacteristic okBleCharacteristic) {
        //     BluetoothGattCharacteristic characteristic = okBleCharacteristic.getCharacteristic();
        //     if (characteristic == null) return;
        //     if (emitter != null && !emitter.isDisposed()) {
        //         emitter.onNext(characteristicValueTaker.takeValue(characteristic)); // hex byte array.
        //     }
        // }
        //
        // @Override
        // public void onError(@NonNull Throwable e) {
        //     if (emitter != null && !emitter.isDisposed()) {
        //         emitter.onError(e);
        //     }
        // }
        //
        // @Override
        // public void onComplete() {
        //     if (emitter != null && !emitter.isDisposed()) {
        //         emitter.onComplete();
        //     }
        // }
        // });
    }

    protected interface CharacteristicValueTaker<T> {
        T takeValue(BluetoothGattCharacteristic characteristic);
    }
}

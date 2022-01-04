bluetooth.onBluetoothConnected(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
bluetooth.onBluetoothDisconnected(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        RingbitCar.forward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        RingbitCar.brake()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        RingbitCar.back()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        RingbitCar.brake()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        RingbitCar.turnleft()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        RingbitCar.brake()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        RingbitCar.turnright()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        RingbitCar.brake()
        RingbitCar.running_distance(RingbitCar.Direction_run.forward, 0)
    }
})
let strip: neopixel.Strip = null
bluetooth.startUartService()
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))

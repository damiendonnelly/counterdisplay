function explode () {
    item = 0
    tm.showNumber(item)
    music.playMelody("C5 B A G F E D C ", 120)
}
function wrong () {
    timerPause = timerPause - 100
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    success = 1111
    tm.showNumber(success)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.A, function () {
    tm.on()
})
input.onButtonPressed(Button.AB, function () {
    item = 60
    resetCounter += 1
    wrong()
    if (resetCounter == 8) {
        explode()
    }
})
input.onButtonPressed(Button.B, function () {
    tm.off()
})
input.onGesture(Gesture.Shake, function () {
    explode()
})
let tm: TM1637.TM1637LEDs = null
let item = 0
let resetCounter = 0
let timerPause = 0
let success = 0
success = 0
timerPause = 1000
resetCounter = 0
item = 60
tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
basic.forever(function () {
    while (item != 0 && success == 0) {
        tm.showNumber(item)
        if (item > 10) {
            music.playTone(196, music.beat(BeatFraction.Eighth))
        } else {
            music.playTone(440, music.beat(BeatFraction.Sixteenth))
        }
        item += -1
        if (item == 0) {
            explode()
        }
        basic.pause(timerPause)
    }
})

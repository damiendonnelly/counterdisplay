input.onButtonPressed(Button.A, function () {
    tm.on()
})
input.onButtonPressed(Button.AB, function () {
    item = 60
})
input.onButtonPressed(Button.B, function () {
    tm.off()
})
let tm: TM1637.TM1637LEDs = null
let item = 0
item = 60
tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
randint(item, 7),
4
)
basic.forever(function () {
    tm.showNumber(item)
    if (item > 10) {
        music.playTone(196, music.beat(BeatFraction.Eighth))
    } else {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
    }
    item += -1
    if (item == -1) {
        music.playMelody("C5 B A G F E D C ", 378)
    }
    basic.pause(1000)
})

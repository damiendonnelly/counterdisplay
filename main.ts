function explode () {
    item = 0
    tm.showNumber(item)
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showIcon(IconNames.Skull)
}
function wrong () {
    timerPause = timerPause - 100
    basic.showString("No!")
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    win()
})
input.onButtonPressed(Button.A, function () {
    tm.on()
})
function win () {
    success = 1111
    tm.showNumber(success)
    music.playMelody("C D E F G A B C5 ", 120)
    for (let index = 0; index < 30; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . . . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . # . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
}
input.onSound(DetectedSound.Loud, function () {
    wrong()
    basic.showString("Be quiet, shhhhh!")
    basic.showString("" + (input.soundLevel()))
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
    wrong()
    basic.showString("Don't shake me!\"")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
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
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
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
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})

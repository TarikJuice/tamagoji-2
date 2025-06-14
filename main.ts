radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Spiel = 1
        menue = 10
    }
    if (receivedNumber == 1) {
        Spiel = 2
        Seite = 10
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (menue == 0) {
        basic.setLedColors(0xffffff, 0xffffff, 0xffffff, 0)
        menue = 1
        basic.showString("MENUE", 50)
        Seite = 1
    }
    if (menue == 1) {
        if (Seite > 1) {
            Seite += -1
        } else {
            Seite = 4
        }
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Seite == 1) {
        for (let index = 0; index < 4; index++) {
            Seite = 0
            basic.setLedColors(0xffffff, 0xffffff, 0xffffff, 0)
            basic.showLeds(`
                . # . # .
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
        }
        menue = 0
        Hunger += 60
    }
    if (Seite == 2) {
        let Energie = 0
        while (Energie < 0) {
        	
        }
    }
    if (Seite == 3) {
        radio.sendNumber(0)
        menue = 10
    }
    if (Seite == 4) {
        menue = 0
        Seite = 0
    }
    if (Spiel == 1) {
        Spiel = 2
        Seite = 10
        radio.sendNumber(1)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (menue == 1) {
        if (Seite < 4) {
            Seite += 1
        } else {
            Seite = 1
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (menue == 0) {
        menue = -1
        basic.pause(2000)
        menue = 0
    }
})
let Seite = 0
let Spiel = 0
let menue = 0
menue = 0
let Hunger = 60
radio.setGroup(1)
loops.everyInterval(1000, function () {
    Hunger += -1
})
basic.forever(function () {
    if (menue == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (menue == -2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (Spiel == 1) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
    if (Spiel == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (menue == -1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
    }
})
basic.forever(function () {
    if (menue == 0) {
        // Hunger ist wie in minecraft das Hungerkeulensystem
        if (Hunger == 0) {
            basic.setLedColors(0xffffff, 0xffffff, 0xffffff)
        }
        if (Hunger > 0) {
            if (Hunger < 60) {
                basic.setLedColors(0xff0000, 0xffffff, 0xffffff)
            }
        }
        if (Hunger > 60) {
            if (Hunger < 120) {
                basic.setLedColors(0xff0000, 0xff0000, 0xffffff)
            }
        }
        if (Hunger > 120) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        }
    }
})
basic.forever(function () {
    // Seiten des Menues
    if (Seite == 1) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (Seite == 2) {
        basic.showLeds(`
            . . # # .
            . . # # .
            . # # # .
            . # # . .
            . # . . .
            `)
    }
    if (Seite == 3) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
    }
    if (Seite == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # . # .
            `)
    }
})
basic.forever(function () {
    if (Hunger == 0) {
        music.play(music.createSoundExpression(WaveShape.Square, 1031, 1031, 254, 240, 5000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})

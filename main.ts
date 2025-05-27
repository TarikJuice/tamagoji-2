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
            Seite = 3
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
        menue = 0
        Seite = 0
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (menue == 1) {
        if (Seite < 3) {
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
let menue = 0
// 0 Hauptmenue
// 1 Selectmenue
menue = 0
let Hunger = 60
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
            # . . . #
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

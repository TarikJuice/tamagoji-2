def on_button_a():
    global menue, Seite
    if menue == 0:
        basic.set_led_colors(0xffffff, 0xffffff, 0xffffff, 0)
        menue = 1
        basic.show_string("MENUE", 50)
        Seite = 1
    if menue == 1:
        if Seite > 1:
            Seite += -1
        else:
            Seite = 3
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    global Seite, menue, Hunger
    if Seite == 1:
        for index in range(4):
            Seite = 0
            basic.set_led_colors(0xffffff, 0xffffff, 0xffffff, 0)
            basic.show_leds("""
                . # . # .
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                """)
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                """)
        menue = 0
        Hunger += 60
    if Seite == 3:
        menue = 0
        Seite = 0
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global Seite
    if menue == 1:
        if Seite < 3:
            Seite += 1
        else:
            Seite = 1
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_gesture_shake():
    global menue
    if menue == 0:
        menue = -1
        basic.pause(2000)
        menue = 0
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Seite = 0
menue = 0
# 0 Hauptmenue
# 1 Selectmenue
menue = 0
Hunger = 60

def on_every_interval():
    global Hunger
    Hunger += -1
loops.every_interval(1000, on_every_interval)

def on_forever():
    if menue == 0:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
    if menue == -2:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
basic.forever(on_forever)

def on_forever2():
    if menue == -1:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            """)
basic.forever(on_forever2)

def on_forever3():
    if menue == 0:
        # Hunger ist wie in minecraft das Hungerkeulensystem
        if Hunger == 0:
            basic.set_led_colors(0xffffff, 0xffffff, 0xffffff)
        if Hunger > 0:
            if Hunger < 60:
                basic.set_led_colors(0xff0000, 0xffffff, 0xffffff)
        if Hunger > 60:
            if Hunger < 120:
                basic.set_led_colors(0xff0000, 0xff0000, 0xffffff)
        if Hunger > 120:
            basic.set_led_colors(0xff0000, 0xff0000, 0xff0000)
basic.forever(on_forever3)

def on_forever4():
    # Seiten des Menues
    if Seite == 1:
        basic.show_leds("""
            . . . # .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            """)
    if Seite == 2:
        basic.show_leds("""
            . . # # .
            . . # # .
            . # # # .
            . # # . .
            . # . . .
            """)
    if Seite == 3:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # . # .
            """)
basic.forever(on_forever4)

def on_forever5():
    if Hunger == 0:
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                1031,
                1031,
                254,
                240,
                5000,
                SoundExpressionEffect.VIBRATO,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever5)

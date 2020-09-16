def on_forever():
    if input.temperature() > 40:
        basic.show_leds("""
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            . . . . .
            """)
basic.forever(on_forever)

def on_forever2():
    if input.temperature() < 40:
        basic.show_leds("""
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
basic.forever(on_forever2)

basic.forever(function on_forever() {
    if (input.temperature() > 40) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            . . . . .
            `)
    }
    
})
basic.forever(function on_forever2() {
    if (input.temperature() < 40) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    
})

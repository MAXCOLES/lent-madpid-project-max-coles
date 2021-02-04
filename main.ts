function start_level () {
    scene.setBackgroundColor(randint(3, 7))
    count = 0
    for (let level = 0; level <= 10 + level; level++) {
        foods = sprites.create(img`
            ...........ccccc66666...........
            ........ccc4444444444666........
            ......cc444444444bb4444466......
            .....cb4444bb4444b5b444444b.....
            ....eb4444b5b44444b44444444b....
            ...ebb44444b4444444444b444446...
            ..eb6bb444444444bb444b5b444446..
            ..e6bb5b44444444b5b444b44bb44e..
            .e66b4b4444444444b4444444b5b44e.
            .e6bb444444444444444444444bb44e.
            eb66b44444bb444444444444444444be
            eb66bb444b5b44444444bb44444444be
            fb666b444bb444444444b5b4444444bf
            fcb666b44444444444444bb444444bcf
            .fbb6666b44444444444444444444bf.
            .efbb66666bb4444444444444444bfe.
            .86fcbb66666bbb44444444444bcc688
            8772effcbbbbbbbbbbbbbbbbcfc22778
            87722222cccccccccccccccc22226678
            f866622222222222222222222276686f
            fef866677766667777776667777fffef
            fbff877768f86777777666776fffffbf
            fbeffeefffeff7766688effeeeefeb6f
            f6bfffeffeeeeeeeeeeeeefeeeeebb6e
            f66ddfffffeeeffeffeeeeeffeedb46e
            .c66ddd4effffffeeeeeffff4ddb46e.
            .fc6b4dddddddddddddddddddb444ee.
            ..ff6bb444444444444444444444ee..
            ....ffbbbb4444444444444444ee....
            ......ffebbbbbb44444444eee......
            .........fffffffcccccee.........
            ................................
            `, SpriteKind.Food)
        foods.setPosition(randint(20, 140), randint(20, 140))
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.over(true)
})
let foods: Sprite = null
let count = 0
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.builtin.brick)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
music.siren.play()

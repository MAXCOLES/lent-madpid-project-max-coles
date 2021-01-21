scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.over(true)
})
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
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020101010101010101010101010101010201010102020101010101010103020202020201020101020101010101010101010102020201010202020202010101020101020101010101010201020101010201010201010102020202010101010102020202010101020101020201010101010101020201010201010101010101010101010201010102010101010101010202010102020202020202020201010101020101010102010101010102010101010202020202020101010101020101010101010102010101010102020202040101010101020101010101020101010101010101010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 . 2 2 2 . . 2 2 2 2 2 2 2 
    . . . . . . 2 . 2 2 . 2 2 2 2 2 
    2 2 2 2 2 . . . 2 2 . . . . . 2 
    2 2 . 2 2 . 2 2 2 2 2 2 . 2 . 2 
    2 2 . 2 2 . 2 2 2 . . . . 2 2 2 
    2 2 . . . . 2 2 2 . 2 2 . . 2 2 
    2 2 2 2 2 . . 2 2 . 2 2 2 2 2 2 
    2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 
    2 . . 2 2 . . . . . . . . . 2 2 
    2 2 . 2 2 2 2 . 2 2 2 2 2 . 2 2 
    2 2 . . . . . . 2 2 2 2 2 . 2 2 
    2 2 2 2 2 . 2 2 2 2 2 . . . . . 
    2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundCenter,sprites.builtin.brick,sprites.castle.tileDarkGrass2], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.builtin.brick)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)

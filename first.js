

function preload() {

this.load.image('cell', './resources/criptJS/assets/cell.png');
this.load.image('background', './resources/scriptJS/assets/background.jpg');
this.load.spritesheet('spaceP', './resources/scriptJS/assets/spritesheet.png', { frameWidth: 122.4, frameHeight: 136 });
this.load.image('lava', './resources/scriptJS/assets/lava.png');
this.load.spritesheet('tile', './resources/scriptJS/assets/tiles.png', { frameWidth: 128, frameHeight: 128 });
this.load.image('platform', './resources/scriptJS/assets/platform.jpg');


this.load.spritesheet('enemy', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy1', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy2', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy3', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy4', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy5', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy6', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy7', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy8', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy9', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.spritesheet('enemy10', './resources/scriptJS/assets/enemy1.png', { frameWidth: 65, frameHeight: 75 });
this.load.image('game_Over', './resources/scriptJS/assets/game_Over.jpg');
this.load.image('spike', './resources/scriptJS/assets/spike.png');

}


const gameState = {}




function create() {
gameState.background = this.add.image(0, 0, 'background').setOrigin(0);
gameState.background = this.add.image(1000, 0, 'background').setOrigin(0);
gameState.background = this.add.image(2000, 0, 'background').setOrigin(0);
gameState.background = this.add.image(3000, 0, 'background').setOrigin(0);
gameState.background = this.add.image(4000, 0, 'background').setOrigin(0);
gameState.background = this.add.image(5000, 0, 'background').setOrigin(0);
gameState.background = this.add.image(6000, 0, 'background').setOrigin(0);


gameState.platform = this.physics.add.image(2100, 750, 'platform').setScale(0.7);
gameState.platform.setSize(230, 240, false);
gameState.platform.setImmovable(true);
gameState.platform.body.allowGravity = false;
gameState.platform.setVelocityX(50);



gameState.player = this.physics.add.sprite(285, 600, 'spaceP').setScale(2.2); 

gameState.player.setGravityY(80);
gameState.player.setCollideWorldBounds(true);
gameState.player.setSize(100, 112, false);

gameState.lava = this.physics.add.image(2000, 740, 'lava').setScale(2);
gameState.lava.setSize(800, 130, true);
gameState.lava.body.allowGravity = false;




gameState.cell = this.add.image(0,0, 'cell').setOrigin(0);
gameState.cell = this.add.image(0,448, 'cell').setOrigin(0);
gameState.cell = this.add.image(0,600, 'cell').setOrigin(0);


gameState.tile = this.physics.add.sprite(0,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(155,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(310,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(465,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(620,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(775,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(930,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(1085,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(1240,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(1395,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(1550,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(2225,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(2380,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(2535,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(2690,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(2845,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3000,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3155,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3310,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3465,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3465,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3465,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3620,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3775,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(3930,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(4085,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(4240,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(4395,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(4550,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(4705,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(4860,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(5015,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(5170,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(5325,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(5480,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(5635,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);
gameState.tile = this.physics.add.sprite(5790,850, 'tile').setScale(1.2).setOrigin(0);
gameState.tile.setImmovable(true);
gameState.tile.body.allowGravity = false;
this.physics.add.collider(gameState.player, gameState.tile);

gameState.spike = this.physics.add.image(1000,740, 'spike').setScale(1)
gameState.spike.setSize(76, 120, true);
gameState.spike.body.allowGravity = false;





this.cameras.main.setZoom(0.64);
 this.cameras.main.setBounds(0, 0, 3000 * 2, 500 * 2, true, true, true, true);


 this.physics.world.setBounds(0, 0, 3000 * 2, 500 * 2, true, true, true, true);

 this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5)

 gameState.enemy = this.physics.add.sprite(3000, 800,  'enemy').setScale(4);
 gameState.enemy.setCollideWorldBounds(true);

 gameState.enemy1 = this.physics.add.sprite(3800, 400, 'enemy1').setScale(4);
 gameState.enemy1.setCollideWorldBounds(true);


 //player Animation

 this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('spaceP', { start: 0, end: 11 }),
    frameRate: 20,
    repeat: -1
});


this.anims.create({
    key: 'turn',
    frames: [ { key: 'spaceP', frame: 12 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('spaceP', { start: 0, end: 11 }),
    frameRate: 20,
    repeat: -1
});



this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('spaceP', { start: 12, end: 14 }),
    frameRate: 20,
    repeat: -1

});




this.physics.add.collider(gameState.player, gameState.platform); 
 

this.physics.add.collider(gameState.player, gameState.lava, lavaKILL, null, this);
this.physics.add.collider(gameState.player, gameState.spike, spikeKILL, null, this);



gameState.cursors = this.input.keyboard.createCursorKeys();

                                          

}

function lavaKILL (player, lava) {
  gameState.game_Over = this.add.image(player.x, player.y, 'game_Over');
  this.physics.pause();

}

function spikeKILL (player, spike) {
  gameState.game_Over = this.add.image(player.x, player.y, 'game_Over').setScale(2);
  this.physics.pause();
}



function update() {

    if(gameState.cursors.left.isDown) {
        gameState.player.setVelocityX(-310);
        gameState.player.anims.play('left', true);
        gameState.player.flipX = true;
      } else if (gameState.cursors.right.isDown) {
           gameState.player.setVelocityX(310);
           gameState.player.anims.play('right', true);
           gameState.player.flipX = false;
           } else {
            gameState.player.setVelocityX(0);
            gameState.player.anims.play('right', false);
        }  
       

          if (gameState.cursors.up.isDown && gameState.player.body.touching.down)
          {
              gameState.player.setVelocityY(-630);
              gameState.player.anims.play('up', true);
          }
          
                                                                              

     if (gameState.platform.x >= 2100)
     {
         gameState.platform.setVelocityX(-50);
     }
     else if (gameState.platform.x <= 1800)
     {
         gameState.platform.setVelocityX(50);
     }

}


const config = {
  type: Phaser.AUTO,
  width: 1350,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 600 },
    }
},
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);
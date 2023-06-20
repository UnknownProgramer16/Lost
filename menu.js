class menu extends Phaser.Scene {
  constructor() {
    super("StartGame");
  }
  preload(){
  this.load.image('back', './resources/scriptJS/assets/homeBackground.jpg');
  this.load.image('start', './resources/scriptJS/assets/start.png');
  this.load.image('LOST', './resources/scriptJS/assets/LOST.png');
  this.load.audio('song', './resources/scriptJS/assets/song.mp3');
  }
  create(){
   this.music = this.sound.play("song");
   this.add.image(675, 300, 'back').setScale(0.35);
   this.add.image(675, 130, 'LOST').setScale(.6);
   const helloButton = this.add.image(750, 400, 'start').setScale(1);
   helloButton.setInteractive();
   helloButton.on('pointerdown', () => { this.scene.start("play"); });

  }
   }

        
        
      

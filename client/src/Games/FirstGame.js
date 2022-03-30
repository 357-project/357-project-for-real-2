import Phaser from "phaser";

export const FirstGame = {
    initialize: true,
    game: {
        width: 300,
        height: 300,
        type: Phaser.AUTO,
        scene: {
            init: function() {
                this.cameras.main.setBackgroundColor('#24252A')

            },
            create: function() {
                this.helloWorld = this.add.text(
                    this.cameras.main.centerX,
                    this.cameras.main.centerY,
                    "POOP", {
                        font: "40px Arial",
                        fill: "#ffffff"
                    }
                );
                this.helloWorld.setOrigin(1);
            },
            update: function() {
                this.helloWorld.angle += 5;
            }
        }
    }
}

import { Common, VISIBLE_SCREEN } from './Common.esm.js';
import { DATALOADED_EVENT_NAME } from './Loader.esm.js';
import { canvas } from './Canvas.esm.js';
import { media } from './Media.esm.js';
import { resultScreen } from './ResultScreen.esm.js';
import { userData } from './UserData.esm.js';
import { mainMenu } from './MainMenu.esm.js';
import { Sprite } from './Sprite.esm.js';
import { Paddle } from './Paddle.esm.js';
import { keyboardController, KEY_CODE_LEFT, KEY_CODE_PAUSE, KEY_CODE_RIGHT } from './KeyboardController.esm.js';
import { Ball } from './Ball.esm.js';
import { GameState } from './GameState.esm.js';

const PLAYER_SPEED = 10;

class Game extends Common {
    constructor() {
        super();

    }

    playLevel(level) {
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel);

        this.background = new Sprite(0, 33, 800, 450, media.spriteImage, 0, 0);
        this.paddle = new Paddle();
        this.ball = new Ball();
        this.gameState = new GameState(level);
        this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
        this.changeVisibilityScreen(mainMenu.miniSettingsLayerElement, VISIBLE_SCREEN);
        media.isInLevel = true;
        media.playBackgroundMusic();
        this.animate();
    }

    animate() {
        this.ball.moveAndCheckCollision(this.gameState.getGameBoard());
        this.handeKeyboardClick();
        this.checkCollisionBallWithPaddle();
        this.drawSprites();
        this.checkEndOfGame();
    }

    handeKeyboardClick() {
        const { clickedKey: key } = keyboardController;

        if (!key) {
            return;
        }

        if (key === KEY_CODE_PAUSE) {
            this.gameState.isGamePaused = true;
            keyboardController.clickedKey = null;
            return;
        }

        if (!this.gameState.isGamePaused && key === KEY_CODE_LEFT) {
            for (let i = PLAYER_SPEED; this.paddle.movePlayerLeft() && i; i--);
            keyboardController.clickedKey = null;
            return;
        }

        if (!this.gameState.isGamePaused && key === KEY_CODE_RIGHT) {
            for (let i = PLAYER_SPEED; this.paddle.movePlayerRight() && i; i--);
            keyboardController.clickedKey = null;
            return;
        }
    }

    checkCollisionBallWithPaddle() {
        const { dx, dy } = this.ball;

        if (dy < 0) {
            return;
        }

        const vector = { dx, dy };

        if (this.ball.checkCollisionWithAnotherSprite(vector, this.paddle)) {
            this.ball.dy = -(Math.floor(Math.random() * 3) + 3);
        }
    }

    drawSprites() {
        this.background.draw(0, 1.25);
        this.gameState.getGameBoard().forEach(block => block.draw());
        this.paddle.draw();
        this.ball.draw();
    }

    checkEndOfGame() {
        if (this.ball.hadHitOnBottomEdge()) {
            media.isInLevel = false;
            media.stopBackgroundMusic();
            resultScreen.viewResultScreen(false);

        } else {
            this.animationFrame = window.requestAnimationFrame(() => this.animate());

        }
    }
}

export const game = new Game();
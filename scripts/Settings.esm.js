import { Common, HIDDEN_SCREEN } from './Common.esm.js';
import { media } from './Media.esm.js';

const SETTINGS_SCREEN_ID = 'js-settings-screen';
const MUSIC_ON_OFF_ID = 'js-music-on-off';
const MUSIC_VOLUME_INCREASE_ID = 'js-music-volume-increse';
const MUSIC_VOLUME_DECREASE_ID = 'js-music-volume-decraese';
const SOUND_ON_OFF_ID = 'js-sound-on-off';
const SOUND_VOLUME_INCREASE_ID = 'js-sound-volume-increse';
const SOUND_VOLUME_DRCREASE_ID = 'js-sound-volume-decrease';
const SETTINGS_EXIT_BUTTON_ID = 'js-settings-screen-exit-button';

class Settings extends Common {
    constructor() {
        super(SETTINGS_SCREEN_ID);
        this.bindsToElement();
    }

    bindsToElement() {
        const exitSettingsElement = this.bindToElement(SETTINGS_EXIT_BUTTON_ID);

        const musicONOffElement = this.bindToElement(MUSIC_ON_OFF_ID);
        const musicVolumeUpElement = this.bindToElement(MUSIC_VOLUME_INCREASE_ID);
        const musicVolumeDownElement = this.bindToElement(MUSIC_VOLUME_DECREASE_ID);

        const soundOnOffElement = this.bindToElement(SOUND_ON_OFF_ID);
        const soundVolumeUpElement = this.bindToElement(SOUND_VOLUME_INCREASE_ID);
        const soundVolumeDownElement = this.bindToElement(SOUND_VOLUME_DRCREASE_ID);


        exitSettingsElement.addEventListener('click', () => this.changeVisibilityScreen(this.element, HIDDEN_SCREEN));

        musicONOffElement.addEventListener('click', () => media.toggleMusicOnOff())
        musicVolumeUpElement.addEventListener('click', () => media.increaseMusicVolume());
        musicVolumeDownElement.addEventListener('click', () => media.decreaseMusicVolume());

        soundOnOffElement.addEventListener('click', () => media.toggleSoundOnOff());
        soundVolumeUpElement.addEventListener('click', () => media.increaseSoundVolume());
        soundVolumeDownElement.addEventListener('click', () => media.decreaseSoundVolume());
    }
}

export const settings = new Settings();
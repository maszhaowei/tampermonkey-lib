import { KeyboardKeyCode } from "./class";

export const KeyboardKeyCodes = {
    Space: new KeyboardKeyCode('Space', ' '),
    Enter: new KeyboardKeyCode('Enter', 'Enter'),
    Escape: new KeyboardKeyCode('Escape', 'Escape'),
    KeyC: new KeyboardKeyCode('KeyC', 'c'),
    KeyD: new KeyboardKeyCode('KeyD', 'd'),
    KeyF: new KeyboardKeyCode('KeyF', 'f'),
    KeyG: new KeyboardKeyCode('KeyG', 'g'),
    KeyI: new KeyboardKeyCode('KeyI', 'i'),
    KeyQ: new KeyboardKeyCode('KeyQ', 'q'),
    KeyR: new KeyboardKeyCode('KeyR', 'r'),
    KeyS: new KeyboardKeyCode('KeyS', 's'),
    KeyV: new KeyboardKeyCode('KeyV', 'v'),
    KeyW: new KeyboardKeyCode('KeyW', 'w'),
    BracketLeft: new KeyboardKeyCode('BracketLeft', '['),
    BracketRight: new KeyboardKeyCode('BracketRight', ']'),
    ArrowLeft: new KeyboardKeyCode('ArrowLeft', 'ArrowLeft'),
    ArrowRight: new KeyboardKeyCode('ArrowRight', 'ArrowRight'),
    ArrowUp: new KeyboardKeyCode('ArrowUp', 'ArrowUp'),
    ArrowDown: new KeyboardKeyCode('ArrowDown', 'ArrowDown'),
    Numpad0: new KeyboardKeyCode('Numpad0', '0'),
    Numpad1: new KeyboardKeyCode('Numpad1', '1'),
    Numpad2: new KeyboardKeyCode('Numpad2', '2'),
    Numpad3: new KeyboardKeyCode('Numpad3', '3'),
    Numpad4: new KeyboardKeyCode('Numpad4', '4'),
    Numpad5: new KeyboardKeyCode('Numpad5', '5'),
    Numpad6: new KeyboardKeyCode('Numpad6', '6'),
    Numpad7: new KeyboardKeyCode('Numpad7', '7'),
    Numpad8: new KeyboardKeyCode('Numpad8', '8'),
    Numpad9: new KeyboardKeyCode('Numpad9', '9'),
    F8: new KeyboardKeyCode('F8', 'F8')
};
/**
 * @enum {string}
 */
export const TooltipPosition = {
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right',
    LEFT_TOP: 'left-top',
    LEFT_CENTER: 'left-center',
    LEFT_BOTTOM: 'left-bottom',
    RIGHT_TOP: 'right-top',
    RIGHT_CENTER: 'right-center',
    RIGHT_BOTTOM: 'right-bottom',
    CENTER_CENTER: 'center-center',
}

/**
 * The readiness state of the HTMLMediaElement. 
 * @enum {number} 
 */
export const MediaReadyState = {
    /** No information is available about the media resource. */
    HAVE_NOTHING: 0,
    /** Enough of the media resource has been retrieved that the metadata attributes are initialized. Seeking will no longer raise an exception. */
    HAVE_METADATA: 1,
    /** Data is available for the current playback position, but not enough to actually play more than one frame. */
    HAVE_CURRENT_DATA: 2,
    /** Data for the current playback position as well as for at least a little bit of time into the future is available (in other words, at least two frames of video, for example). */
    HAVE_FUTURE_DATA: 3,
    /** Enough data is available—and the download rate is high enough—that the media can be played through to the end without interruption. */
    HAVE_ENOUGH_DATA: 4
};
/**
 * @enum {string}
 */
export const MediaEvents = {
    DURATION_CHANGE: 'durationchange',
    LOADED_METADATA: 'loadedmetadata',
    PAUSE: 'pause',
    PLAY: 'play',
    VOLUME_CHANGE: 'volumechange'
};
import { KeyboardKeyCode, _TooltipPosition } from "./class";
import { EnumHelper } from "./utils";

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
    Digit0: new KeyboardKeyCode("Digit0", "0"),
    Digit1: new KeyboardKeyCode("Digit1", "1"),
    Digit2: new KeyboardKeyCode("Digit2", "2"),
    Digit3: new KeyboardKeyCode("Digit3", "3"),
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
export const TooltipPosition = _TooltipPosition;

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
    ABORT: 'abort',
    CAN_PLAY: 'canplay',
    CAN_PLAY_THROUGH: 'canplaythrough',
    DURATION_CHANGE: 'durationchange',
    ENDED: 'ended',
    LOADED_METADATA: 'loadedmetadata',
    PAUSE: 'pause',
    PLAY: 'play',
    RATE_CHANGE: 'ratechange',
    TIME_UPDATE: 'timeupdate',
    VOLUME_CHANGE: 'volumechange'
};
/**
 * @enum {string}
 */
export const GlobalEvents = {
    CLICK: 'click',
    DBLCLICK: 'dblclick',
    KEYDOWN: 'keydown',
    LOAD: 'load',
    MESSAGE: 'message',
    MOUSEDOWN: 'mousedown',
    WHEEL: 'wheel',
    /**
     * 
     * @returns {string[]}
     */
    toValueArray: function () {
        return EnumHelper.toValueArray(GlobalEvents);
    }
}
/**
 * @enum {string}
 */
export const MessageLevel = {
    SUCCESS: 'success',
    INFO: 'info',
    CAUTION: 'caution',
    ERROR: 'error',
    /**
     * 
     * @param {string} value 
     * @returns 
     */
    test: function (value) {
        return EnumHelper.test(MessageLevel, value);
    }
}
/** @enum {string} */
export const DocumentReadyState = {
    // The document is still loading.
    LOADING: 'loading',
    // The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading. 
    INTERACTIVE: 'interactive',
    // The document and all sub-resources have finished loading. The state indicates that the load event is about to fire.
    COMPLETE: 'complete'
}
/** @enum {string} */
export const ConsoleOutputLevel = {
    DEBUG: 'debug',
    INFO: 'info',
    LOG: 'log',
    WARN: 'warn',
    ERROR: 'error'
}
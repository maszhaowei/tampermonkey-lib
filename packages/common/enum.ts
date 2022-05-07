export const KeyboardKeyCodes = {
    Space: { code: 'Space', key: ' ' },
    Enter: { code: 'Enter', key: 'Enter' },
    Escape: { code: 'Escape', key: 'Escape' },
    KeyA: { code: 'KeyA', key: 'a' },
    KeyB: { code: 'KeyB', key: 'b' },
    KeyC: { code: 'KeyC', key: 'c' },
    KeyD: { code: 'KeyD', key: 'd' },
    KeyE: { code: 'KeyE', key: 'e' },
    KeyF: { code: 'KeyF', key: 'f' },
    KeyG: { code: 'KeyG', key: 'g' },
    KeyI: { code: 'KeyI', key: 'i' },
    KeyQ: { code: 'KeyQ', key: 'q' },
    KeyR: { code: 'KeyR', key: 'r' },
    KeyS: { code: 'KeyS', key: 's' },
    KeyT: { code: 'KeyT', key: 't' },
    KeyV: { code: 'KeyV', key: 'v' },
    KeyW: { code: 'KeyW', key: 'w' },
    BracketLeft: { code: 'BracketLeft', key: '[' },
    BracketRight: { code: 'BracketRight', key: ']' },
    ArrowLeft: { code: 'ArrowLeft', key: 'ArrowLeft', keyCode: 37, which: 37 },
    ArrowRight: { code: 'ArrowRight', key: 'ArrowRight', keyCode: 39, which: 39 },
    ArrowUp: { code: 'ArrowUp', key: 'ArrowUp', keyCode: 38, which: 38 },
    ArrowDown: { code: 'ArrowDown', key: 'ArrowDown', keyCode: 40, which: 40 },
    Digit0: { code: 'Digit0', key: '0' },
    Digit1: { code: 'Digit1', key: '1' },
    Digit2: { code: 'Digit2', key: '2' },
    Digit3: { code: 'Digit3', key: '3' },
    Digit4: { code: 'Digit4', key: '4' },
    Digit5: { code: 'Digit5', key: '5' },
    Digit6: { code: 'Digit6', key: '6' },
    Digit7: { code: 'Digit7', key: '7' },
    Digit8: { code: 'Digit8', key: '8' },
    Digit9: { code: 'Digit9', key: '9' },
    Numpad0: { code: 'Numpad0', key: '0' },
    Numpad1: { code: 'Numpad1', key: '1' },
    Numpad2: { code: 'Numpad2', key: '2' },
    Numpad3: { code: 'Numpad3', key: '3' },
    Numpad4: { code: 'Numpad4', key: '4' },
    Numpad5: { code: 'Numpad5', key: '5' },
    Numpad6: { code: 'Numpad6', key: '6' },
    Numpad7: { code: 'Numpad7', key: '7' },
    Numpad8: { code: 'Numpad8', key: '8' },
    Numpad9: { code: 'Numpad9', key: '9' },
    F8: { code: 'F8', key: 'F8' }
};

export const enum TooltipPosition {
    TOP_LEFT = 'top-left',
    TOP_CENTER = 'top-center',
    TOP_RIGHT = 'top-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_CENTER = 'bottom-center',
    BOTTOM_RIGHT = 'bottom-right',
    LEFT_TOP = 'left-top',
    LEFT_CENTER = 'left-center',
    LEFT_BOTTOM = 'left-bottom',
    RIGHT_TOP = 'right-top',
    RIGHT_CENTER = 'right-center',
    RIGHT_BOTTOM = 'right-bottom',
    CENTER_CENTER = 'center-center',
}

/**
 * The readiness state of the HTMLMediaElement. 
 * @enum {number} 
 */
export const enum MediaReadyState {
    /** No information is available about the media resource. */
    HAVE_NOTHING = 0,
    /** Enough of the media resource has been retrieved that the metadata attributes are initialized. Seeking will no longer raise an exception. */
    HAVE_METADATA = 1,
    /** Data is available for the current playback position, but not enough to actually play more than one frame. */
    HAVE_CURRENT_DATA = 2,
    /** Data for the current playback position as well as for at least a little bit of time into the future is available (in other words, at least two frames of video, for example). */
    HAVE_FUTURE_DATA = 3,
    /** Enough data is available—and the download rate is high enough—that the media can be played through to the end without interruption. */
    HAVE_ENOUGH_DATA = 4
}
/**
 * @enum {string}
 */
export const enum MediaEvents {
    ABORT = 'abort',
    CAN_PLAY = 'canplay',
    CAN_PLAY_THROUGH = 'canplaythrough',
    DURATION_CHANGE = 'durationchange',
    ENDED = 'ended',
    LOADED_METADATA = 'loadedmetadata',
    PAUSE = 'pause',
    PLAY = 'play',
    RATE_CHANGE = 'ratechange',
    TIME_UPDATE = 'timeupdate',
    VOLUME_CHANGE = 'volumechange'
}
/**
 * @enum {string}
 */
export const enum GlobalEvents {
    CLICK = 'click',
    CONTEXTMENU = 'contextmenu',
    DBLCLICK = 'dblclick',
    KEYDOWN = 'keydown',
    KEYUP = 'keyup',
    LOAD = 'load',
    MESSAGE = 'message',
    MOUSEDOWN = 'mousedown',
    WHEEL = 'wheel'
}
/**
 * @enum {string}
 */
export const enum MessageLevel {
    SUCCESS = 'success',
    INFO = 'info',
    CAUTION = 'caution',
    ERROR = 'error'
}
/** @enum {string} */
export const enum DocumentReadyState {
    // The document is still loading.
    LOADING = 'loading',
    // The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading. 
    INTERACTIVE = 'interactive',
    // The document and all sub-resources have finished loading. The state indicates that the load event is about to fire.
    COMPLETE = 'complete'
}
/** @enum {string} */
export const enum ConsoleOutputLevel {
    DEBUG = 'debug',
    INFO = 'info',
    LOG = 'log',
    WARN = 'warn',
    ERROR = 'error'
}
/** @enum {number} */
export const enum ErrorCode {
    COMMON = -10000,
    SUCCESS = 0,
    EXCEED_MAX_RETRY = 10000
}
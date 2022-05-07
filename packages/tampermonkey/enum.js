/**
 * @enum {string}
 */
export const MessageTypes = {
    GENERAL: 'general',
    SITE_INFO: 'site_info',
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    SWITCH_PLAYING_VIDEO: 'switch_playing_video',
    REMOVE_IFRAME: 'remove_iframe',
    READY_FOR_MESSAGE: 'ready_for_message',
    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',
    KEYDOWN: 'keydown',
    KEYUP: 'keyup',
    VIEWPORT_DIMENSION: 'viewport_dimension',
    /**
     * 
     * @param {string} value 
     * @returns 
     */
    hasValue: function (value) {
        if (value === MessageTypes.hasValue) return false;
        for (let i in MessageTypes) {
            if (this[i] === value) return true;
        }
        return false;
    }
};
/**
 * @enum {string}
 */
export const PlayerMessageTypes = {
    PREVIOUS_EPISODE: 'previous_episode',
    NEXT_EPISODE: 'next_episode',
    EXIT_PLAYER: 'exit_player'
};
/**
 * @enum {string}
 */
export const EMOJIS = {
    angry: [
        ',,Ծ‸Ծ,,',
        '(╯‵□′)╯︵┻━┻'
    ],
    happy: [
        '=‿=✧',
        '●ω●',
        '(/ ▽ \\)',
        '(=・ω・=)',
        '(●\'◡\'●)ﾉ♥',
        '<(▰˘◡˘▰)>',
        '(⁄ ⁄•⁄ω⁄•⁄ ⁄)',
        '(ง,,• ᴗ •,,)ง ✧',
        '>ㅂ<ﾉ ☆'
    ],
    shock: [
        'Σ( ° △ °|||)︴',
        '┌( ಠ_ಠ)┘',
        '(ﾟДﾟ≡ﾟдﾟ)!?',
        '∑(っ °Д °;)っ'
    ],
    sad: [
        '＞︿＜',
        '＞△＜',
        '●︿●',
        '(´；ω；`)'
    ],
    helpless: [
        '◐▽◑',
        'ʅ（´◔౪◔）ʃ',
        '_(:3 」∠)_',
        '_(┐「ε:)_',
        '(°▽°)ﾉ',
        '←◡←',
        '_(•̀ᴗ•́ 」∠ ❀)_',
        '_φ(･ω･` )'
    ],
    custom: [
        '(`･ω･´)',
        '(^_-)-☆',
        '༼ つ ◕_◕ ༽つ',
        '(☞ﾟヮﾟ)☞',
        '( ͡° ͜ʖ ͡°)',
        '(っ˘ڡ˘ς)',
        '(⌐■_■)',
        '( ͡~ ͜ʖ ͡°)',
        '(╯°□°）╯︵ ┻━┻',
        '(͡•_ ͡• )'
    ]
};
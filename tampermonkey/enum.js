/**
 * @enum {string}
 */
export const MessageTypes = {
    GENERAL: 'general',
    SITE_INFO: 'site_info',
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    SWITCH_PLAYING_VIDEO: 'switch_playing_video',
    READY_FOR_MESSAGE: 'ready_for_message',
    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',
    KEYDOWN: 'keydown',
    VIEWPORT_DIMENSION: 'resize',
    /**
     * 
     * @param {string} value 
     * @returns 
     */
    test: function (value) {
        if (value === MessageTypes.test) return false;
        for (let i in MessageTypes) {
            if (this[i] === value) return true;
        }
        return false;
    }
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
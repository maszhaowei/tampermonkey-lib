import { VideoInstance } from "./class";
/**
 * @enum {VideoInstance}
 */
export const VideoInstances = {
    AVGLE: new VideoInstance("button.vjs-play-control", undefined, "button.vjs-fullscreen-control"),
    AVGLE_EMBED: new VideoInstance("button.vjs-play-control", undefined, "button.vjs-fullscreen-control"),
    BILIBILI: new VideoInstance("div.bilibili-player-video-btn-start", "button.bilibili-player-iconfont-volume",
        "div.bilibili-player-video-btn-fullscreen button", "div.bilibili-player-video-web-fullscreen button"),
    BILIBILI_BANGUMI: new VideoInstance("div.squirtle-video-start", "div.squirtle-volume-icon",
        "div.squirtle-video-fullscreen", "div.squirtle-video-pagefullscreen"),
    BUYCAR5: new VideoInstance("button.dplayer-play-icon", "button.dplayer-volume-icon", "button.dplayer-full-icon"),
    DIOUS: new VideoInstance("button.dplayer-play-icon", "button.dplayer-volume-icon", "button.dplayer-full-icon"),
    JABLE: new VideoInstance(undefined, "button[data-plyr=mute]", "button[data-plyr=fullscreen]"),
    MM9842: new VideoInstance(undefined, "div.jw-icon-volume", "div.jw-icon-fullscreen"),
    QINGBEIBAN: new VideoInstance("button.dplayer-play-icon", "button.dplayer-volume-icon", "button.dplayer-full-icon"),
    QXWK: new VideoInstance("button.dplayer-play-icon", "button.dplayer-volume-icon", "button.dplayer-full-icon"),
    YOUTUBE_EMBED: new VideoInstance("button.ytp-play-button", "button.ytp-mute-button", "button.ytp-fullscreen-button"),
};
// eslint-disable-next-line no-use-before-define
const gmInfo = (typeof GM_info === 'undefined'?{}:GM_info);
export const scriptInfo = gmInfo && gmInfo.script;
export const scriptName = scriptInfo && scriptInfo.name;
export const iframeFullscreenClassName = 'player-fullscreen-fix';
export const iframeFullscreenSelector = '.' + iframeFullscreenClassName;
export const eventDelegateClassName = 'zw-event-delegate';
export const eventDelegateSelector = '.' + eventDelegateClassName;
export const topOverlayClassName = 'zw-top-overlay';
export const topOverlaySelector = '.' + topOverlayClassName;

export const bodyWebFullscreenClassName = 'player-mode-webfullscreen';
export const containerWebFullscreenClassName = 'mode-webfullscreen';
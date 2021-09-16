// eslint-disable-next-line no-use-before-define
const gmInfo = (typeof GM_info === 'undefined'?{}:GM_info);
export const scriptInfo = gmInfo && gmInfo.script;
export const scriptName = scriptInfo && scriptInfo.name;
export const iframeFullscreenClass = 'player-fullscreen-fix';
export const eventDelegateClass = 'zw-event-delegate';
export const topOverlayClass = 'zw-top-overlay';

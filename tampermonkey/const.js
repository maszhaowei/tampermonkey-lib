const gmInfo = (typeof GM_info === 'undefined'?{}:GM_info);
export const scriptInfo = gmInfo && gmInfo.script;
export const scriptName = scriptInfo && scriptInfo.name;
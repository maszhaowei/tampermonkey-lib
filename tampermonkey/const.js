const defaultScriptInfo = { name: 'Tampermonkey' };
export const scriptInfo = typeof GM_info === 'undefined' ? defaultScriptInfo : GM_info.script;
export const scriptName = scriptInfo && scriptInfo.name;
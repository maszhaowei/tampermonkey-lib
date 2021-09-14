import * as CommonConst from './common/const.js';
import * as TConst from './tampermonkey/const.js';
export const Const = Object.assign({}, CommonConst, TConst);

import * as commonUtil from './common/util.js';
import * as tUtil from './tampermonkey/util.js';
export const util = Object.assign({}, commonUtil, tUtil);

import * as commonUI from './common/ui.js';
import * as tUI from './tampermonkey/ui.js';
export const ui = Object.assign({}, commonUI, tUI);
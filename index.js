import * as CommonClass from './common/class.js';
import * as TClass from './tampermonkey/class.js';
export const Class = Object.assign({}, CommonClass, TClass);

import * as CommonEnum from './common/enum.js';
import * as TEnum from './tampermonkey/enum.js';
export const Enum = Object.assign({}, CommonEnum, TEnum);


import * as CommonConst from './common/const.js';
import * as TConst from './tampermonkey/const.js';
export const Const = Object.assign({}, CommonConst, TConst);

import { util as commonUtil } from './common/util.js';
import { util as tUtil } from './tampermonkey/util.js';
export const util = Object.assign({}, commonUtil, tUtil);

import { ui as commonUI } from './common/ui.js';
import { ui as tUI } from './tampermonkey/ui.js';
export const ui = Object.assign({}, commonUI, tUI);
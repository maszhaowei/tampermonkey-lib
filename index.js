import * as clib from './common/main';
import * as tlib from './tampermonkey/main';
import * as slib from './site/main';
import * as plib from './player/main';
import * as bllib from './bilibililive/main';

export const Class = Object.assign(clib.Class, slib.Class, plib.Class);
export const Enum = Object.assign(clib.Enum, tlib.Enum, slib.Enum, plib.Enum);
export const Const = Object.assign(clib.Const, tlib.Const, plib.Const);
export const ui = Object.assign(clib.ui, tlib.ui);
export const util = Object.assign(clib.util, tlib.util, slib.util, bllib.util);
export const Utils = Object.assign(clib.Utils, tlib.Utils, bllib.Utils);
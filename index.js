import * as clib from './common/main';
import * as tlib from './tampermonkey/main';
import * as plib from './player/main';
export const Class = Object.assign({}, clib.Class, tlib.Class, plib.Class);
export const Enum = Object.assign({}, clib.Enum, tlib.Enum, plib.Enum);
export const Const = Object.assign({}, clib.Const, tlib.Const, plib.Const);
export const util = Object.assign({}, clib.util, tlib.util);
export const ui = Object.assign({}, clib.ui, tlib.ui, plib.ui);
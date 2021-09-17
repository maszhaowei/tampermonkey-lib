import * as clib from './common/main';
import * as tlib from './tampermonkey/main';
export const Class = Object.assign({}, clib.Class, tlib.Class);
export const Enum = Object.assign({}, clib.Enum, tlib.Enum);
export const Const = Object.assign({}, clib.Const, tlib.Const);
export const util = Object.assign({}, clib.util, tlib.util);
export const ui = Object.assign({}, clib.ui, tlib.ui);
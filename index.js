import * as clib from './common/main';
import * as tlib from './tampermonkey/main';
import * as slib from './site/main';
import * as plib from './player/main';

export const Class = Object.assign(clib.Class, slib.Class, plib.Class);
export const Enum = Object.assign(clib.Enum, tlib.Enum, slib.Enum, plib.Enum);
export const Const = Object.assign(clib.Const, tlib.Const, plib.Const);
export const ui = Object.assign(clib.ui, plib.ui);
export const util = Object.assign(clib.util, tlib.util, slib.util, plib.util);
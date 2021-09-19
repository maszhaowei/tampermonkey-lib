import * as clib from './common/main';
import * as tlib from './tampermonkey/main';
import * as slib from './site/main';
import * as plib from './player/main';

let libs = [clib, tlib, slib, plib];
function mergeMember(member) {
    let result = {};
    for (let i = 0; i < libs.length; i++) {
        let lib = libs[i];
        if (lib[member]) Object.assign(result, lib[member]);
    }
    return result;
}
export const Class = mergeMember('Class');
export const Enum = mergeMember('Enum');
export const Const = mergeMember('Const');
export const util = mergeMember('util');
export const ui = mergeMember('ui');
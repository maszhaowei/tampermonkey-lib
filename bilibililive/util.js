import { util as cutil } from '../common/util';
export const util = {
    getBilibiliToken: function () {
        return cutil.getCookie("bili_jct");
    }
};
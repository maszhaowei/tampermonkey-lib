import { Couple, CustomError } from "../common/class";
import { ErrorCode } from "../common/enum";
import { util as tutil } from "../tampermonkey/util";
import { util as blutil } from "./util";

/**
 * 
 * @param {Promise<BilibiliApiResponse|BilibiliLiveApiResponse>} rspPromise 
 * @returns 
 */
async function processRsp(rspPromise) {
    const rsp = await rspPromise;
    if (rsp.code !== 0) throw new CustomError(rsp.code, rsp.message);
    return rsp.data;
}
export class BilibiliApiRequest {
    /**
     * 
     * @param {string} url 
     * @param {URLSearchParams} [param] 
     * @returns {Promise<BilibiliApiResponse>}
     */
    static #get(url, param) {
        if (param) url += '?' + param.toString();
        return tutil.gmGet(url);
    }
    /**
     * 
     * @param {string} url 
     * @param {Object.<string,string>} [headers]
     * @param {Document | XMLHttpRequestBodyInit} [data]
     * @returns {Promise<BilibiliApiResponse>}
     */
    static #post(url, headers, data) {
        return tutil.gmPost(url, headers, data);
    }
    /**
     * 
     * @param {number} uid 
     * @returns {Promise<string>}
     */
    static getNotice(uid) {
        return processRsp(this.#get(`https://api.bilibili.com/x/space/notice?mid=${uid}&jsonp=jsonp`));
    }
    /**
     * 
     * @param {number} mid 
     * @returns {Promise<UserInfoResponseData>}
     */
    static getUserInfo(mid) {
        return processRsp(this.#get(`https://api.bilibili.com/x/space/acc/info?mid=${mid}&jsonp=jsonp`));
    }
    /**
     * 
     * @param {number} mid 
     * @param {number} pageNumber 
     * @param {number} [pageSize] - Default to 50. Max is 50.
     * @returns {Promise<FollowingResponseData>}
     */
    static getFollowings(mid, pageNumber, pageSize = 50) {
        return processRsp(this.#get(`https://api.bilibili.com/x/relation/followings?vmid=${mid}&pn=${pageNumber}&ps=${pageSize}`));
    }
    /**
     * 
     * @returns {Promise<NavInfo>}
     */
    static getNav() {
        return processRsp(this.#get('https://api.bilibili.com/x/web-interface/nav'));
    }
}
export class BilibiliLiveApiRequest {
    /**
     * 
     * @param {string} url 
     * @param {URLSearchParams} [param] 
     * @returns {Promise<BilibiliLiveApiResponse>}
     */
    static #get(url, param) {
        if (param) url += '?' + param.toString();
        return tutil.gmGet(url);
    }
    /**
     * 
     * @param {string} url 
     * @param {Object.<string,string>} [headers]
     * @param {Document | XMLHttpRequestBodyInit} [data]
     * @returns {Promise<BilibiliLiveApiResponse>}
     */
    static #post(url, headers, data) {
        return tutil.gmPost(url, headers, data);
    }
    /**
     * 
     * @param {string} roomID 
     * @param {string} areaParentID 
     * @param {string} areaID 
     * @returns {Promise<GiftConfigResponseData>}
     */
    static getGiftConfig(roomID, areaParentID, areaID) {
        let param = new URLSearchParams();
        param.append('platform', 'pc');
        param.append('room_id', roomID);
        param.append('area_parent_id', areaParentID);
        param.append('area_id', areaID);
        return processRsp(this.#get('https://api.live.bilibili.com/xlive/web-room/v1/giftPanel/giftConfig', param));
    }
    /**
     * 获取礼物包裹
     * @param {number} roomID 
     * @returns {Promise<GiftBagResponseData>}
     */
    static getGiftBagList(roomID) {
        let param = new URLSearchParams();
        param.append('t', new Date().getTime());
        param.append('room_id', roomID);
        return processRsp(this.#get('https://api.live.bilibili.com/xlive/web-room/v1/gift/bag_list', param));
    }
    static sendBag(uid, giftID, anchorUID, giftNum, bagID, roomID, rnd) {
        let token = blutil.getBilibiliToken();
        let param = new URLSearchParams();
        param.append('uid', uid);
        param.append('gift_id', giftID);
        param.append('ruid', anchorUID);
        param.append('send_ruid', 0);
        param.append('gift_num', giftNum);
        param.append('bag_id', bagID);
        param.append('platform', 'pc');
        param.append('biz_code', 'Live');
        param.append('biz_id', roomID);
        param.append('rnd', rnd);
        param.append('storm_beat_id', 0);
        param.append('metadata', '');
        param.append('price', 0);
        param.append('csrf_token', token);
        param.append('csrf', token);
        param.append('visit_id', '');
        return processRsp(this.#post("https://api.live.bilibili.com/xlive/revenue/v1/gift/sendBag", undefined, param.toString()));
    }
    /**
     * 
     * @returns {Promise<WearedMedalInfo>}
     */
    static getWearedMedal() {
        return processRsp(this.#get("https://api.live.bilibili.com/live_user/v1/UserInfo/get_weared_medal"));
    }
    static getMedalListInRoom() {
        return processRsp(this.#get("https://api.live.bilibili.com/fans_medal/v1/FansMedal/get_list_in_room"));
    }
    static async #tryGetMedalCenterList(retry) {
        let curPage = 1;
        let totalPage = 0;
        /** @type {MyMedal[]} */
        let fansMedalList = [];
        let totalCount = 0;
        do {
            /** @type {MyMedalResponseData} */
            let data = await processRsp(this.#get(`https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals?page=${curPage}&page_size=10&retry=${retry}`));
            totalCount = data.count;
            if (Array.isArray(data.items)) {
                data.items.forEach(serverFansMedal => {
                    /** @type {MyMedal} */
                    let myMedal = serverFansMedal;
                    // ServerFansMedal.roomid is in fact the value of short_id
                    myMedal.short_id = serverFansMedal.roomid;
                    delete serverFansMedal.roomid;
                    fansMedalList.push(myMedal);
                })
            }
            totalPage = data.page_info.total_page;
            curPage++;
        } while (curPage <= totalPage);
        return new Couple(fansMedalList, totalCount);
    }
    /**
     * 
     * @returns {Promise<MyMedal[]>}
     */
    static async getMedalCenterList() {
        /** @type {MyMedal[]} */
        let fansMedalList = [];
        let totalCount = 0;
        let retryTimes = 0;
        let anchorIds = [];
        while (retryTimes <= 3) {
            let medals = await this.#tryGetMedalCenterList(retryTimes);
            totalCount = medals[1];
            for (let medal of medals[0]) {
                if (!anchorIds.includes(medal.target_id)) {
                    fansMedalList.push(medal);
                    anchorIds.push(medal.target_id);
                    if (fansMedalList.length == totalCount) return fansMedalList;
                }
            }
            /** @todo 该接口查询到的数据排序不固定，存在重复数据时重新查询当前页 */
            retryTimes++;
        }

        throw new CustomError(ErrorCode.EXCEED_MAX_RETRY, `超过最大重试次数，已获取${fansMedalList.length}枚勋章，实际拥有${totalCount}枚勋章`);
    }
    /**
     * 
     * @param {number} medalId 
     * @returns 
     */
    static wearMedal(medalId) {
        if (!medalId) throw new CustomError(ErrorCode.COMMON, "Invalid medalId: " + medalId);
        let token = blutil.getBilibiliToken();
        if (!token) throw new CustomError(ErrorCode.COMMON, 'Failed to get bilibili token');
        let param = new URLSearchParams();
        param.append('medal_id', medalId);
        param.append('csrf_token', token);
        param.append('csrf', token);
        return processRsp(this.#post("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear", undefined, param.toString()));
    }
    /**
     * 获取发送礼物后的预期勋章状态
     * @param {number} targetId 
     * @param {number} giftId 
     * @param {number} price 
     * @param {number} coinType 
     * @returns {Promise<MedalExpectationResponseData>}
     */
    static getMedalExpectation(targetId, giftId, price, coinType) {
        let param = new URLSearchParams();
        param.append('target_id', targetId);
        param.append('price', price);
        param.append('coin_type', coinType);
        param.append('gift_id', giftId);
        param.append('platform', 'pc');
        return processRsp(this.#get('https://api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/room', param.toString()));
    }
    /**
     * 接口支持最多29个roomid. {@link uids}有值时服务器将会忽略{@link roomIds}.
     * @param {number[]} [roomIds] - Live room id or short id.
     * @param {number[]} [uids] - User id.
     * @returns {Promise<BasicRoomInfos>}
     */
    static getBasicRoomInfos(roomIds = [], uids = []) {
        let param = new URLSearchParams();
        roomIds.forEach(roomid => param.append('room_ids', roomid));
        uids.forEach(uid => param.append('uids', uid));
        param.append('req_biz', 'web_room_componet');
        return processRsp(this.#get(`https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo`, param));
    }
    /**
     * 
     * @param {number} roomId 
     * @returns {Promise<RoomInfoByUserResponseData>}
     */
    static getRoomInfoByUser(roomId) {
        return processRsp(this.#get(`https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?room_id=${roomId}`));
    }
    /**
     * 
     * @param {number} roomId 
     * @returns {Promise<RoomInfoByRoomResponseData>}
     */
    static getRoomInfoByRoom(roomId) {
        return processRsp(this.#get(`https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom?room_id=${roomId}`));
    }
    /**
     * 
     * @param {string} msg 
     * @param {number} rnd 
     * @param {number} roomId 
     * @param {number} [bubble] - Default to 0.
     * @param {number} [mode] - Default to 1.
     * @param {number} [color] - Defalut to 16777215(white).
     * @returns {Promise<SendMsgResponseData>}
     */
    static sendDanmu(msg, rnd, roomId, bubble = 0, mode = 1, color = 16777215) {
        let token = blutil.getBilibiliToken();
        if (!token) throw new CustomError(ErrorCode.COMMON, 'Failed to get bilibili token');
        let data = { bubble: bubble, msg: msg, color: color, mode: mode, fontsize: 25, rnd: rnd, roomid: roomId, csrf: token, csrf_token: token };
        let form = new FormData();
        Object.keys(data).forEach(key => form.append(key, data[key]));
        // Don't set content-type to auto generated formdata boundary.
        return processRsp(this.#post('https://api.live.bilibili.com/msg/send', {}, form));
    }
    /**
     * 
     * @param {number} roomid 
     * @returns {Promise<DanmuHistoryResponseData>}
     */
    static getDanmuHistory(roomid) {
        return processRsp(this.#get(`https://api.live.bilibili.com/xlive/web-room/v1/dM/gethistory?roomid=${roomid}`));
    }
    /**
     * 
     * @param {number} roomid 
     * @returns {Promise<WidgetBannerListResponseData>}
     */
    static getWidgetBannerList(roomid) {
        return processRsp(this.#get(`https://api.live.bilibili.com/xlive/activity-interface/v1/widgetBanner/GetWidgetBannerList?room_id=${roomid}&platform=pc`));
    }
}

export class BilibiliUtils {

    /**
     * 
     * @param {number} anchorId 
     * @returns {Promise<ExpectationMedalInfo>}
     */
    static async getAnchorMedal(anchorId) {
        return (await BilibiliLiveApiRequest.getMedalExpectation(anchorId, 1, 100, 2)).current?.medal;
    }

    /**
     * 
     * @param {number[]} roomIds - Live room id or short id. 0 will cause server to return error.
     * @returns {Promise<Map<number,BasicRoomInfo>>}
     */
    static async getBasicRoomInfosByRoom(roomIds) {
        let batchRoomIds = [];
        do {
            batchRoomIds.push(roomIds.splice(0, 20));
        } while (roomIds.length > 0);
        let pRoomInfos = batchRoomIds.map(ids => BilibiliLiveApiRequest.getBasicRoomInfos(ids));
        return Promise.all(pRoomInfos).then(basicRoomInfosArr => {
            /** @type {Map<number,BasicRoomInfo>} */
            let map = new Map();
            basicRoomInfosArr.forEach(basicRoomInfos => {
                // 没有查询到room信息
                if (!basicRoomInfos.by_room_ids) return;
                for (let id in basicRoomInfos.by_room_ids) {
                    let basicRoomInfo = basicRoomInfos.by_room_ids[id];
                    if (basicRoomInfo.short_id) map.set(basicRoomInfo.short_id, basicRoomInfo);
                    map.set(basicRoomInfo.room_id, basicRoomInfo);
                }
            })
            return map;
        });
    }
    /**
     * 
     * @param {number[]} uids 
     * @returns {Promise<Map<number,BasicRoomInfo>>}
     */
    static async getBasicRoomInfosByUser(uids) {
        return BilibiliLiveApiRequest.getBasicRoomInfos(undefined, uids).then(basicRoomInfos => {
            /** @type {Map<number,BasicRoomInfo>} */
            let map = new Map();
            if (!basicRoomInfos.by_uids) return map;
            for (let uid in basicRoomInfos.by_uids) {
                let basicRoomInfo = basicRoomInfos.by_uids[uid];
                map.set(basicRoomInfo.uid, basicRoomInfo);
            }
            return map;
        });
    }
    /**
     * 
     * @returns {Promise<ExtendedMedal[]>}
     */
    static async getExtendedMedalList() {
        /** @type {MyMedal[]} 需要进一步查询roomid */
        let needQueryMedals = []
        /** @type {ExtendedMedal[]} */
        let extendedMedals = [];
        (await BilibiliLiveApiRequest.getMedalCenterList()).forEach(medal => {
            if (medal.short_id) {
                needQueryMedals.push(medal);
            }
            // short_id为0时查询roominfo服务器会报错500
            else {
                /** @type {ExtendedMedal} */
                let extendedMedal = medal;
                extendedMedal.short_id = extendedMedal.roomid = 0;
                extendedMedals.push(extendedMedal);
            }
        });
        let basicRoomInfos = await this.getBasicRoomInfosByRoom(needQueryMedals.map(medal => medal.short_id));
        needQueryMedals.forEach(medal => {
            /** @type {ExtendedMedal} */
            let extendedMedal = medal;
            extendedMedal.roomid = basicRoomInfos.get(medal.short_id).room_id;
            extendedMedals.push(extendedMedal);
        });
        return extendedMedals;
    }
    /**
     * 
     * @param {number} roomid 
     * @returns 
     */
    static async isLiveEnbaled(roomid) {
        return !!(await BilibiliLiveApiRequest.getWidgetBannerList(roomid)).list;
    }
}
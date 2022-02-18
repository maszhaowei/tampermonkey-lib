import { util as tutil } from "../tampermonkey/util";
import { util as blutil } from "./util";

export class BilibiliLiveRequest {
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
     * @returns {Promise<BilibiliLiveApiResponse<GiftConfigResponseData>>}
     */
    static getGiftConfig(roomID, areaParentID, areaID) {
        let param = new URLSearchParams();
        param.append('platform', 'pc');
        param.append('room_id', roomID);
        param.append('area_parent_id', areaParentID);
        param.append('area_id', areaID);
        return this.#get('https://api.live.bilibili.com/xlive/web-room/v1/giftPanel/giftConfig', param);
    }
    /**
     * 获取礼物包裹
     * @param {number} roomID 
     * @returns {Promise<BilibiliLiveApiResponse<GiftBagResponseData>>}
     */
    static getGiftBagList(roomID) {
        let param = new URLSearchParams();
        param.append('t', new Date().getTime());
        param.append('room_id', roomID);
        return this.#get('https://api.live.bilibili.com/xlive/web-room/v1/gift/bag_list', param);
    }
    static sendBag(uid, giftID, anchorUID, giftNum, bagID, roomID, rnd) {
        let token = this.getToken();
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
        return this.#post("https://api.live.bilibili.com/xlive/revenue/v1/gift/sendBag", param.toString());
    }
    /**
     * 
     * @returns {Promise<BilibiliLiveApiResponse<WearedMedalInfo>>}
     */
    static getWearedMedal() {
        return this.#get("https://api.live.bilibili.com/live_user/v1/UserInfo/get_weared_medal");
    }
    static getMedalListInRoom() {
        return this.#get("https://api.live.bilibili.com/fans_medal/v1/FansMedal/get_list_in_room");
    }
    static async getMedalCenterList() {
        let curPage = 1;
        let totalPage = 0;
        /** @type {MyMedal[]} */
        let fansMedalList = [];
        do {
            /** @type {MyMedalResponseData} */
            let data = await (await this.#get(`https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals?page=${curPage}&page_size=10`)).data;
            if (Array.isArray(data.items)) fansMedalList = fansMedalList.concat(data.items);
            totalPage = data.page_info.total_page;
            curPage++;
        } while (curPage <= totalPage);
        return fansMedalList;
    }
    /**
     * 
     * @param {number} medalId 
     * @returns 
     */
    static wearMedal(medalId) {
        if (!medalId) throw "invalid medalId: " + medalId;
        let token = blutil.getBilibiliToken();
        let param = new URLSearchParams();
        param.append('medal_id', medalId);
        param.append('csrf_token', token);
        param.append('csrf', token);
        return this.#post("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear", param.toString());
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
        return this.#get('https://api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/room', param.toString());
    }
    /**
     * 
     * @param {number} mid 
     * @returns {Promise<UserInfoResponseData>}
     */
    static getUserInfo(mid) {
        return this.#get(`https://api.bilibili.com/x/space/acc/info?mid=${mid}&jsonp=jsonp`);
    }
    /**
     * 
     * @param {number} mid 
     * @param {number} pageNumber 
     * @param {number} [pageSize] - Default to 50. Max is 50.
     * @returns {Promise<FollowingResponseData>}
     */
    static getFollowings(mid, pageNumber, pageSize = 50) {
        return this.#get(`https://api.bilibili.com/x/relation/followings?vmid=${mid}&pn=${pageNumber}&ps=${pageSize}`);
    }
    /**
     * 
     * @returns {Promise<NavInfo>}
     */
    static getNav() {
        return this.#get('https://api.bilibili.com/x/web-interface/nav');
    }
    /**
     * 
     * @param {number} roomId 
     * @returns {Promise<BasicRoomInfos>}
     */
    static getBasicRoomInfo(roomId) {
        return this.#get(`https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo?room_ids=${roomId}&req_biz=web_room_componet`);
    }
    /**
     * 
     * @param {string} msg 
     * @param {number} rnd 
     * @param {number} roomId 
     * @returns {Promise<BilibiliLiveApiResponse<SendMsgResponseData>>}
     */
    static sendDanmu(msg, rnd, roomId) {
        let token = blutil.getBilibiliToken();
        let data = { bubble: 0, msg: msg, color: 5566168, mode: 1, fontsize: 25, rnd: rnd, roomid: roomId, csrf: token, csrf_token: token };
        let form = new FormData();
        Object.keys(data).forEach(key => form.append(key, data[key]));
        // Don't set content-type to auto generated formdata boundary.
        return tutil.gmPost('https://api.live.bilibili.com/msg/send', {}, form);
    }
}
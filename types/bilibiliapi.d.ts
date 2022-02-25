interface Window {
    livePlayer: any;
    BilibiliLive: BilibiliLive;
}

interface BilibiliApiResponse<T> {
    code: number,
    message: string,
    ttl: number,
    data: T
}

interface BilibiliLive {
    INIT_TIME: number,
    RND: number,
    UID: number,
    ROOMID: number,
    ANCHOR_UID: number,
    COLORFUL_LOGGER: boolean,
    SHORT_ROOMID: number,
    AREA_ID: number,
    PARENT_AREA_ID: number,
}

interface GiftConfig {
    id: number, // 1
    name: string, // "辣条"
    price: number, // 100
    type: number, // 5
    coin_type: 'gold' | 'silver', // "silver"
    bag_gift: number, // 0
    effect: number, // 0
    corner_mark: string, // ""
    corner_background: string, // ""
    broadcast: number, // 0
    draw: number, // 0
    stay_time: number, // 3
    animation_frame_num: number, // 13
    desc: string, // "辣条是流行于哔哩哔哩的坊间美食，可以直接食用，也能用来打赌。"
    rule: string, // ""
    rights: string, // ""
    privilege_required: number, // 0
    count_map: any[],
    img_basic: string, // https://s1.hdslb.com/bfs/live/d57afb7c5596359970eb430655c6aef501a268ab.png
    img_dynamic: string, // https://i0.hdslb.com/bfs/live/d57afb7c5596359970eb430655c6aef501a268ab.png
    frame_animation: string, // https://i0.hdslb.com/bfs/live/85d4be8c3dea80e6de6c249dbd15d6e8090125f4.png
    gif: string, // https://i0.hdslb.com/bfs/live/d40ff17d533047cbb9b2bed4feb927cb0e71901c.gif
    webp: string, // https://i0.hdslb.com/bfs/live/07d4dad91d7f68d92cb6a324ad9395ae2adefd47.webp
    weight: number, // 1
    goods_id: number, // 15
    diy_count_map: number // 1
}

interface GiftConfigResponseData {
    list: GiftConfig[],
    combo_resources: any[],
    guard_resources: any[]
}

/* #region obsolete */
interface AnchorInfo {
    uid: number, // 433351
    uname: string, // "EdmundDZhang"
    gender: number, // 1
    face: string, // "https://i1.hdslb.com/bfs/face/50900541a74f7875867c38a1e8e572b44b388060.jpg"
    silence: 0 | 1, // 0
    masterVip: number, // 2
    masterRank: number, // 10000
    masterLevel: number, // 6
    masterHeadpic: string, // ""
    masterVerify: 0 | 1, // 0
    mobileVerified: 0 | 1, // 1
    identification: 0 | 1, // 1
    official: {
        role: number, // 2
        title: string, // "bilibili 2020百大UP主、直播签约主播"
        desc: string // "代表作：《这不是解说》《游戏蒙太奇》《DREAM.E游戏测评》"
    },
    rank: number, // 10000
    platform_user_level: number, // 6
    vip_type: number, // 2
    mobile_verify: 0 | 1, // 0
    official_verify: {
        role: number, // 2
        title: string, // "bilibili 2020百大UP主、直播签约主播"
        desc: string, // "代表作：《这不是解说》《游戏蒙太奇》《DREAM.E游戏测评》"
        type: number // -1
    }
}

interface RoomInfo {
    title: string, // 老头环，还是简单了。
    room_id: number, // 5050
    uid: number, // 433351
    online: number, // 4605959
    live_time: number, // 1645765849
    live_status: number, // 1
    short_id: number, // 0
    area: number, // 1
    area_name: string, // 单机联机
    area_v2_id: number, // 555
    area_v2_name: string, // 艾尔登法环
    area_v2_parent_name: string, // 单机游戏
    area_v2_parent_id: number, // 6
    uname: string, // EdmundDZhang
    face: string, // https://i1.hdslb.com/bfs/face/50900541a74f7875867c38a1e8e572b44b388060.jpg
    tag_name: string, // 以撒,minecraft,饥荒,彩虹六号,东方
    tags: string, // 老E,主机游戏,单机游戏
    cover_from_user: string, // https://i0.hdslb.com/bfs/live/room_cover/17c749332753cb813ef2d0a9d276ceec375907a2.jpg
    keyframe: string, // https://i0.hdslb.com/bfs/live-key-frame/keyframe02251625000000005050no75xu.jpg
    lock_till: string, // 0000-00-00 00:00:00
    hidden_till: string, // 0000-00-00 00:00:00
    broadcast_type: number, // 0
}

interface MedalBase {
    day_limit: number, // 1500
    guard_level: number, // 0
    intimacy: number, // 26415
    is_lighted: 0 | 1, // 1
    level: number, // 18
    medal_color_border: number, // 13081892
    medal_color_end: number, // 13081892
    medal_color_start: number, // 13081892
    medal_id: number, // 2
    medal_name: string, // 大母鹅
    next_intimacy: number, // 250000
    target_id: number, // 433351
    target_name: string, // EdmundDZhang
    today_feed: number, // 100
}

interface WearedMedalInfo extends MedalBase {
    guard_type: number, // 0
    is_receive: 0 | 1, // 1
    last_wear_time: number, // 1646323283
    lpl_status: number, // 0
    master_available: number, // 1
    master_status: number, // 1
    receive_channel: number, // 1
    receive_time: string, // 2020-04-07 20:44:02
    score: number, // 276316
    source: number, // 1
    status: number, // 1
    today_intimacy: number, // 100
    uid: number, // 206620
    target_face: string, // https://i1.hdslb.com/bfs/face/50900541a74f7875867c38a1e8e572b44b388060.jpg
    live_stream_status: number, // 0
    icon_code: number, // 0
    icon_text: string, // 
    rank: string, // -
    medal_color: number, // 13081892
    can_delete: boolean, // true
    is_union: 0 | 1, // 0
    roominfo: RoomInfo,
}

// target_name为空，需要重新查询
interface ExpectationMedalInfo extends MedalBase {
    uid: number, // 206620
    medal_color: number, // 13081892
    wearing_status: number, // 1
    medal_icon_id: number, // 0
    medal_icon_url: string, //  
}

interface ExpectationDesc {
    message: string, // {"需3.5万亲密度升级", "+1亲密度"},
    url: string // ""
}
interface MedalExpectation {
    medal: ExpectationMedalInfo,
    description: ExpectationDesc[]
}

interface MedalExpectationResponseData {
    current: MedalExpectation,
    received: boolean // true
    expectation: MedalExpectation,
    is_level_up: boolean, // false
    gift_id: number // 1
}

interface BagCountDesc {
    num: number, // 1
    text: string // {"", "全部"}
}
interface GiftBag {
    bag_id: number, // 256111524
    gift_id: number, // 1
    gift_name: string, // "辣条"
    gift_num: number, // 2
    gift_type: number, // 5
    expire_at: number, // 1633190400
    corner_mark: string, // "1天"
    corner_color: string, // ""
    count_map: BagCountDesc[],
    bind_roomid: number, // 0
    bind_room_text: string, // ""
    type: number, // 1
    card_image: string, // ""
    card_gif: string, // ""
    card_id: number, // 0
    card_record_id: number, // 0
    is_show_send: boolean, // false
}
interface GiftBagResponseData {
    list: GiftBag[],
    time: number // 0
}

interface UserInfoResponseData {
    mid: number, // 433351
    name: string, // "EdmundDZhang"
}
/** Data structure returned from server. */
interface ServerFansMedal extends MedalBase {
    can_deleted: boolean, // true
    guard_medal_title: string, // 未开启加成
    roomid: number, // 116（短号），可能为0表示直播间不存在
    status: number, // 1
    uname: string, // EdmundDZhang
}
interface MyMedalResponseData {
    items: ServerFansMedal[],
    page_info: {
        cur_page: number,
        total_page: number
    },
    count: number
}
/** 用{@link ServerFansMedal.roomid}填充short_id */
interface MyMedal extends MedalBase {
    can_deleted: boolean, // true
    guard_medal_title: string, // 未开启加成
    short_id: number, // 116
    status: number, // 1
    uname: string, // EdmundDZhang
}
interface ExtendedMedal extends MyMedal {
    roomid: number // 5050
}

interface FollowingMember {
    mid: number
}

interface FollowingResponseData {
    list: FollowingMember[],
    total: number
}

interface RoomDanmuConfig {
    mode: number, // 1
    color: number, // 5566168
    length: number, // 30
    room_id: number // 948391
}
interface RoomUserProperty {
    uname_color: string, // ""
    bubble: number, // 0
    danmu: RoomDanmuConfig,
    bubble_color: string // ""
}
interface RoomUserInfoResponseData {
    medal: {
        up_medal: {
            uid: number, // 546195
            medal_name: string, // "茄子"
            medal_color: number, // 6067854
            level: number // 1
        }
    },
    property: RoomUserProperty
}

interface NavInfo {
    mid: number, // 206620
}

interface BasicRoomInfo {
    room_id: number, // 5050
    uid: number, // 433351
    area_id: number, // 236
    live_status: 0 | 1,
    parent_area_id: number, // 6
    short_id: number, // 0(表示和room_id相同)
    uname: string, // "EdmundDZhang"
}

interface BasicRoomInfos {
    by_room_ids: {
        [key: string]: BasicRoomInfo
    }
}

interface SendMsgResponseData {
    mode_info: {
        mode: number,
        show_player_type: number,
        extra: string
    }
}

interface BilibiliLiveApiResponse<T> {
    code: number,
    data: T,
    message: string,
    msg: string
}

interface AdminHistory { }
interface RoomHistory { }
interface DanmuHistoryResponseData {
    admin: AdminHistory[],
    room: RoomHistory[],
}
import { LoginPlatform } from "@templates/user";

export const chartUpdated = "1688630567";

export const faq = {
  category: [
    { type: "qna", category: "전체" },
    { type: "qna", category: "기타" },
    { type: "qna", category: "리스트" },
    { type: "qna", category: "회원" },
    { type: "qna", category: "플레이어" },
  ],
  article: [
    {
      question: "왁뮤에서 노래를 들어도 유튜브 조회수에 반영이 되나요?",
      description:
        "반영됩니다. \n왁타버스 뮤직은 유튜브 기반 플레이어를 사용하여 재생되는 모든 음악이 조회수로 집계됩니다.",
      createAt: 1687696656,
      category: { type: "qna", category: "기타" },
    },
    {
      question: "나만의 플레이리스트 만들 수 있나요?",
      description:
        "만들 수 있습니다.\n로그인 후 보관함에서 '리스트 만들기'를 선택하면 생성이 가능합니다. 생성된 리스트는 앱과 연동이 됩니다.",
      createAt: 1687697114,
      category: { type: "qna", category: "리스트" },
    },
    {
      question: "회원탈퇴는 어떻게 할 수 있나요?",
      description:
        "'보관함' > 오른쪽 상단 '건의사항' > 오른쪽 상단 '회원탈퇴' 버튼을 통해 탈퇴할 수 있습니다.",
      createAt: 1687697156,
      category: { type: "qna", category: "회원" },
    },
    {
      question: "프로필을 편집할 수 있나요?",
      description:
        "‘보관함’ > 왼쪽 상단 ‘프로필’을 선택하면 프로필 사진과 닉네임 모두 편집 가능합니다.",
      createAt: 1687697201,
      category: { type: "qna", category: "회원" },
    },
    {
      question: "데이터 소모량이 어떻게 되나요?",
      description: "유튜브 영상과 비슷합니다.",
      createAt: 1687697242,
      category: { type: "qna", category: "기타" },
    },
    {
      question: "왁뮤목록에 없는 노래를 추가하려고 하는데 어떻게 해야 하나요?",
      description: "‘보관함’ > ‘건의사항’ > ‘문의하기’를 이용해주세요.",
      createAt: 1687697306,
      category: { type: "qna", category: "기타" },
    },
    {
      question: "썸네일 말고 영상이 나오게는 할 수 없나요?",
      description:
        "영상이 플레이되면 기능에 제약이 생기는 문제가 많아서 썸네일만 표시되도록 조정했습니다.",
      createAt: 1687697382,
      category: { type: "qna", category: "플레이어" },
    },
    {
      question: "특정 노래들이 다른 노래에 비해서 소리가 너무 작아요.",
      description:
        "유튜브에서 그대로 가져오기 때문에 원본이 소리가 작으면 작게 들립니다.",
      createAt: 1687697451,
      category: { type: "qna", category: "플레이어" },
    },
    {
      question: "가사가 아직 안나오는 곡들이 있어요.",
      description:
        "작업 중입니다. 가내수공업으로 직접 제작 중이니 이해 부탁드립니다.",
      createAt: 1687697499,
      category: { type: "qna", category: "기타" },
    },
    {
      question: "PC와 모바일이 연동이 되나요?",
      description:
        "계정이 연동되어 있어 내 리스트, 좋아요 등의 기능을 두 플랫폼 모두 사용하실 수 있습니다.",
      createAt: 1687697585,
      category: { type: "qna", category: "기타" },
    },
    {
      question: "iOS 백그라운드 재생 진입 시 잠시 끊겨요",
      description: "개발자 : “어쩔 수 없음”",
      createAt: 1687697669,
      category: { type: "qna", category: "플레이어" },
    },
    {
      question:
        "블루투스 연결이 끊기면 노래가 일시정지되지 않아서 노래가 나와요. 암살 방지 기능 안되나요?",
      description: "개발자 : “힘든 상황…”",
      createAt: 1687697703,
      category: { type: "qna", category: "기타" },
    },
    {
      question: "버그제보는 아무나 이용 가능한가요?",
      description:
        "네 가능합니다. \n다만 정말 필요할 경우에만 이용 바랍니다. 많은 데이터 이동으로 인한 서버 부담이 이어질 수 있습니다.",
      createAt: 1687697741,
      category: { type: "qna", category: "기타" },
    },
    {
      question: "안드로이드 백그라운드 재생 중 다음 곡으로 넘어가질 않아요",
      description:
        "배터리 절약 옵션과 충돌이 날 수 있습니다.\n'설정 > 애플리케이션 > 왁타버스 뮤직 > 배터리 > 제한 없음' 순서대로 설정 부탁드립니다.",
      createAt: 1689083213,
      category: { type: "qna", category: "플레이어" },
    },
  ],
};

export const userInfo = {
  username: "왁타버스 뮤직",
  via: "카카오톡",
};

export const dummySong = {
  songId: "dummySongId",
  title: "dummy'",
  artist: "dummy",
  remix: "",
  reaction: "",
  date: 230525,
  start: 0,
  end: 0,
  like: 0,
  total: { views: 580998, increase: 333, last: 21 },
};

export const recommended = [
  {
    key: "best",
    title: "역대 왁뮤 1위",
    public: true,
    createAt: 1686382026000,
    image: {
      round: 1,
      square: 1,
    },
    songs: [],
  },
  {
    key: "official",
    title: "ALL : MUSIC",
    public: true,
    createAt: 1686382026000,
    image: {
      round: 1,
      square: 1,
    },
    songs: [],
  },
  {
    key: "gomemsong",
    title: "가요제&학예회",
    public: true,
    createAt: 1675316173132,
    image: {
      round: 2,
      square: 2,
    },
    songs: [],
  },
  {
    key: "competition",
    title: "연말공모전",
    public: true,
    createAt: 1675316173132,
    image: {
      round: 2,
      square: 2,
    },
    songs: [],
  },
  {
    key: "carol",
    title: "캐롤",
    public: true,
    createAt: 1675316173132,
    image: {
      round: 2,
      square: 2,
    },
    songs: [],
  },
  {
    key: "hiphop",
    title: "힙합 SWAG",
    public: true,
    createAt: 1675316173132,
    image: {
      round: 2,
      square: 2,
    },
    songs: [],
  },
  {
    key: "worksong",
    title: "노동요",
    public: true,
    createAt: 1675316173132,
    image: {
      round: 2,
      square: 2,
    },
    songs: [],
  },
  {
    key: "confidence",
    title: "자신감 충전",
    public: true,
    createAt: 1686382026000,
    image: {
      round: 1,
      square: 1,
    },
    songs: [],
  },
];

export const songList = {
  song: [
    {
      songId: "K8WC6uWyC9I",
      title: "그냥 살아! (ft. 비챤)",
      artist: "김피탕앤짬뽕",
      remix: "",
      reaction: "",
      date: 220918,
      start: 16,
      end: 0,
      like: 0,
      total: { views: 7952476, increase: 319, last: 4 },
    },
    {
      songId: "TriBGtGgnuI",
      title: "기어와라 망냥냥양",
      artist: "비챤",
      remix: "큐컴버",
      reaction: "SlFfF_jdjUY",
      date: 220606,
      start: 0,
      end: 78,
      like: 0,
      total: { views: 634003, increase: 2, last: 228 },
    },
    {
      songId: "2kYrlukIXm4",
      title: "망냥냥캣 #Shorts",
      artist: "비챤",
      remix: "위윌왁휴",
      reaction: "",
      date: 220806,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 237721, increase: 0, last: 465 },
    },
    {
      songId: "Vt0lSTxSjaw",
      title:
        "Whatever (ft. 율음, 키드밀리, 그냥노창, The Quiett, Raf Sandou) (doubling. 히키킹)",
      artist: "sAewoo",
      remix: "",
      reaction: "",
      date: 220418,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 146842, increase: 0, last: 598 },
    },
    {
      songId: "WQApknUVDDg",
      title: "그냥 살아! (ft. 왁컬로이두)",
      artist: "비챤, 아컬로이드, 고컬로이드",
      remix: "꽃세계",
      reaction: "V92zyZobGLY",
      date: 221005,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 103967, increase: 0, last: 710 },
    },
    {
      songId: "oz5AoL3ovfA",
      title: "그냥 살아!&맘가는대로 (Live Ver.)",
      artist: "주르르",
      remix: "",
      reaction: "",
      date: 221218,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 63102, increase: 0, last: 851 },
    },
    {
      songId: "P8o69SEkBv4",
      title: "그냥 살아! (8bit Remix)",
      artist: "김피탕앤짬뽕",
      remix: "OVERSANS",
      reaction: "",
      date: 221014,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 10217, increase: 0, last: 1392 },
    },
    {
      songId: "SVbkvrB6Kvo",
      title: "비챤이 우와하고 망냥냥이 모찌모찌",
      artist: "비챤",
      remix: "Recci",
      reaction: "",
      date: 230219,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 7272, increase: 0, last: 1519 },
    },
    {
      songId: "P38Fs8bPPK8",
      title: "냥뇽갈비 #Shorts",
      artist: "징버거",
      remix: "kingbadnae",
      reaction: "",
      date: 230317,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 4698, increase: 0, last: 1635 },
    },
    {
      songId: "_Ulq7vQePSU",
      title: "그냥 살아",
      artist: "클리보",
      remix: "",
      reaction: "",
      date: 221222,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 4658, increase: 0, last: 1640 },
    },
    {
      songId: "kxufR-QnvkI",
      title: "너는 그냥 가만히 있으면 돼",
      artist: "왁컬로이두",
      remix: "해원이",
      reaction: "",
      date: 230129,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 1369, increase: 0, last: 1875 },
    },
  ],
  artist: [
    {
      songId: "NVm8Uzai9HY",
      title: "없는계절 (ft. 아이네, 씨잼, 윤훼이)",
      artist: "그냥노창",
      remix: "",
      reaction: "",
      date: 220402,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 343114, increase: 2, last: 357 },
    },
    {
      songId: "I92GTsOVG7E",
      title: "Whatever 가녹음 실패작 (doubling. 히키킹)",
      artist: "그냥노창",
      remix: "",
      reaction: "",
      date: 220418,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 321462, increase: 6, last: 378 },
    },
    {
      songId: "XFh92D_F03w",
      title: "Oh wow!",
      artist: "챤컬로이드, 망냥냥",
      remix: "큐컴버",
      reaction: "",
      date: 230622,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 33193, increase: 27, last: 1033 },
    },
  ],
  remix: [
    {
      songId: "9JzFQ_nJElk",
      title: "되감난 고장기버튼 (ft. 우왁굳)",
      artist: "이세계아이돌, 히키킹",
      remix: "그냥노창",
      reaction: "",
      date: 211229,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 98753, increase: 1, last: 723 },
    },
    {
      songId: "BxJFFFEQC48",
      title: "TRUE LOVER Remix",
      artist: "이세계오빠들",
      remix: "그냥노창",
      reaction: "",
      date: 221014,
      start: 0,
      end: 0,
      like: 0,
      total: { views: 33394, increase: 0, last: 1032 },
    },
    {
      songId: "OCimjWl9d8I",
      title: "겨울봄 Remix",
      artist: "이세계아이돌",
      remix: "그냥노창",
      reaction: "",
      date: 220813,
      start: 0,
      end: 108,
      like: 0,
      total: { views: 26135, increase: 1, last: 1090 },
    },
  ],
};

export const profileList = [
  {
    type: "panchi",
    version: 2,
  },
  {
    type: "ifari",
    version: 2,
  },
  {
    type: "dulgi",
    version: 2,
  },
  {
    type: "bat",
    version: 2,
  },
  {
    type: "segyun",
    version: 2,
  },
  {
    type: "gorani",
    version: 2,
  },
  {
    type: "jupock",
    version: 2,
  },
  {
    type: "ddong",
    version: 2,
  },
];

export const myListSongs = [
  {
    songId: "QgMFpuos4Rg",
    title: "LOCKDOWN",
    artist: "이세계아이돌",
    remix: "",
    reaction: "",
    date: 230622,
    start: 0,
    end: 0,
    like: 1,
    total: { views: 3004739, increase: 2894, last: 1 },
  },
  {
    songId: "SXE-gIU3yJs",
    title: "고멤가요제 MASHUP",
    artist: "아이네",
    remix: "",
    reaction: "",
    date: 221201,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 5105546, increase: 740, last: 3 },
  },
  {
    songId: "iLXmqg_HHRA",
    title: "스물셋",
    artist: "비챤",
    remix: "",
    reaction: "5pIR8SGmgkg",
    date: 230617,
    start: 0,
    end: 192,
    like: 0,
    total: { views: 883975, increase: 710, last: 2 },
  },
  {
    songId: "fgSXAKsq-Vo",
    title: "리와인드 (RE:WIND)",
    artist: "이세계아이돌",
    remix: "",
    reaction: "",
    date: 211222,
    start: 0,
    end: 270,
    like: 0,
    total: { views: 15676550, increase: 654, last: 4 },
  },
  {
    songId: "aK76gQHIm04",
    title: "징버거 궁시렁 Remix",
    artist: "징버거",
    remix: "레이지스피크",
    reaction: "zxVzfCawDyE",
    date: 221220,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 3028840, increase: 578, last: 5 },
  },
  {
    songId: "IK-z7xhiKB0",
    title: "PINK VENOM",
    artist: "저세계아이돌",
    remix: "",
    reaction: "",
    date: 230702,
    start: 0,
    end: 186,
    like: 0,
    total: { views: 283411, increase: 558, last: 6 },
  },
  {
    songId: "EA_gei4Fcxk",
    title: "Hot Summer",
    artist: "러브 미쓰 피쓰",
    remix: "",
    reaction: "",
    date: 230612,
    start: 0,
    end: 229,
    like: 0,
    total: { views: 1300552, increase: 479, last: 14 },
  },
  {
    songId: "DPEtmqvaKqY",
    title: "팬서비스",
    artist: "고세구",
    remix: "",
    reaction: "",
    date: 220111,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 9540461, increase: 462, last: 8 },
  },
  {
    songId: "qunpFTI90sU",
    title: "강풍 올백머리",
    artist: "징버거",
    remix: "",
    reaction: "JOWZiZWNjHg",
    date: 230426,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 2321698, increase: 462, last: 16 },
  },
  {
    songId: "gEKKOrvh92Y",
    title: "아이돌 #Shorts",
    artist: "징버거",
    remix: "",
    reaction: "",
    date: 230612,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 2545825, increase: 449, last: 13 },
  },
  {
    songId: "l8e1Byk1Dx0",
    title: "TRUE LOVER (ft. 행주)",
    artist: "이세계오빠들",
    remix: "",
    reaction: "",
    date: 220918,
    start: 0,
    end: 200,
    like: 0,
    total: { views: 8805280, increase: 446, last: 7 },
  },
  {
    songId: "_lwD3ILdKi0",
    title: "무희",
    artist: "뢴트게늄",
    remix: "",
    reaction: "",
    date: 230225,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 2979593, increase: 444, last: 9 },
  },
  {
    songId: "6hEvgKL0ClA",
    title: "Promise",
    artist: "릴파",
    remix: "",
    reaction: "",
    date: 211229,
    start: 0,
    end: 243,
    like: 0,
    total: { views: 7047127, increase: 440, last: 10 },
  },
  {
    songId: "mqcGI5QGmzk",
    title: "계절범죄",
    artist: "이노리(지하돌), 흰젓가락(주폭), 우앵두(지하돌)",
    remix: "",
    reaction: "CN8cZabPVgM",
    date: 230630,
    start: 0,
    end: 229,
    like: 0,
    total: { views: 118503, increase: 430, last: 15 },
  },
  {
    songId: "S2I6tRQtR58",
    title: "Grrr",
    artist: "왁컬로이두",
    remix: "큐컴버",
    reaction: "beBJf_eifnY",
    date: 230702,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 132930, increase: 422, last: 27 },
  },
  {
    songId: "p9TFQ9ySJLs",
    title: "봄도둑",
    artist: "징버거",
    remix: "",
    reaction: "",
    date: 230430,
    start: 0,
    end: 288,
    like: 0,
    total: { views: 1084810, increase: 402, last: 18 },
  },
  {
    songId: "lLIpFxWtqCQ",
    title:
      "사랑하긴 했었나요 스쳐가는 인연이었나요 짧지않은 우리 함께했던 시간들이 자꾸 내 마음을 가둬두네 (Baby I need you)",
    artist: "비챤",
    remix: "",
    reaction: "",
    date: 221216,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 3307240, increase: 371, last: 12 },
  },
  {
    songId: "KjySNSxgg3U",
    title: "저곳으로",
    artist: "징버거",
    remix: "",
    reaction: "GZDoPjRpAoQ",
    date: 230531,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 1632994, increase: 335, last: 11 },
  },
  {
    songId: "eWaBljLkd08",
    title: "Ballin'",
    artist: "징버거",
    remix: "",
    reaction: "",
    date: 230525,
    start: 0,
    end: 0,
    like: 0,
    total: { views: 580998, increase: 333, last: 21 },
  },
  {
    songId: "K8WC6uWyC9I",
    title: "그냥 살아! (ft. 비챤)",
    artist: "김피탕앤짬뽕",
    remix: "",
    reaction: "",
    date: 220918,
    start: 16,
    end: 0,
    like: 0,
    total: { views: 7952476, increase: 319, last: 23 },
  },
];

export const dumyListItem = {
  key: "key1",
  index: -1,
  title: "리스트제목열두글자자자자",
  createAt: 1684622625731,
  user: {
    userId: "a",
    name: "이름",
    platform: "naver" as LoginPlatform,
    profile: {
      type: "gorani",
      version: 2,
    },
  },
  image: {
    name: "1",
    version: 11,
  },
  songs: [],
};

export const myList = [dumyListItem, dumyListItem, dumyListItem];

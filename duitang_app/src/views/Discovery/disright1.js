import React from 'react';
import request from "../../utils/request"
function Login(props) {

    // request.get("/list/by_search", {
    //     kw: "动漫"
    // }).then(res => {
    //     console.log(res)
    // })

    const data = [
        {
            name: "爱豆",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "爱豆热度榜",
                        path: ""
                    }, {
                        id: "2",
                        name: "爱豆西装杀排行",
                        path: ""
                    }]
                }, {
                    name: "爱豆圈子",
                    data: [{
                        id: "3",
                        name: "Jennie",
                        path: ""
                    }, {
                        id: "4",
                        name: "朴彩英",
                        path: ""
                    }, {
                        id: "5",
                        name: "金泰妍",
                        path: ""
                    }, {
                        id: "6",
                        name: "田柾国",
                        path: ""
                    }, {
                        id: "7",
                        name: "徐艺洋",
                        path: ""
                    }, {
                        id: "8",
                        name: "金智秀",
                        path: ""
                    }, {
                        id: "9",
                        name: "赵露思",
                        path: ""
                    }, {
                        id: "10",
                        name: "小松菜奈",
                        path: ""
                    }, {
                        id: "11",
                        name: "吴宣仪",
                        path: ""
                    }, {
                        id: "12",
                        name: "王一博",
                        path: ""
                    }, {
                        id: "13",
                        name: "易烊千玺",
                        path: ""
                    }, {
                        id: "14",
                        name: "肖战",
                        path: ""
                    }, {
                        id: "15",
                        name: "蔡徐坤",
                        path: ""
                    }, {
                        id: "16",
                        name: "边伯贤",
                        path: ""
                    }, {
                        id: "17",
                        name: "Lisa",
                        path: ""
                    },
                    {
                        id: "18",
                        name: "虞书欣",
                        path: ""
                    },
                    {
                        id: "19",
                        name: "迪丽热巴",
                        path: ""
                    },
                    {
                        id: "20",
                        name: "鞠婧祎",
                        path: ""
                    },
                    {
                        id: "21",
                        name: "王俊凯",
                        path: ""
                    },
                    {
                        id: "22",
                        name: "金泰亨",
                        path: ""
                    },
                    {
                        id: "23",
                        name: "任嘉伦",
                        path: ""
                    },
                    {
                        id: "24",
                        name: "IU",
                        path: ""
                    },
                    {
                        id: "25",
                        name: "黄明昊",
                        path: ""
                    },
                    {
                        id: "26",
                        name: "华晨宇",
                        path: ""
                    },
                    {
                        id: "27",
                        name: "朴灿烈",
                        path: ""
                    },
                    {
                        id: "28",
                        name: "裴珠泫",
                        path: ""
                    },
                    {
                        id: "29",
                        name: "丁禹兮",
                        path: ""
                    },
                    {
                        id: "30",
                        name: "吴世勋",
                        path: ""
                    },
                    {
                        id: "31",
                        name: "赵小棠",
                        path: ""
                    },

                    {
                        id: "32",
                        name: "Somi",
                        path: ""
                    },
                    {
                        id: "33",
                        name: "姜贞羽",
                        path: ""
                    },
                    {
                        id: "34",
                        name: "孔雪儿",
                        path: ""
                    },
                    ]
                }
                ],
        },
        {
            name: "影视",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: ""
                    }, {
                        id: "2",
                        name: "热门",
                        path: ""
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "我，喜欢你",
                        path: ""
                    }, {
                        id: "4",
                        name: "长安诺",
                        path: ""
                    }, {
                        id: "5",
                        name: "且听凤鸣",
                        path: ""
                    }, {
                        id: "6",
                        name: "密室大逃脱",
                        path: ""
                    }, {
                        id: "7",
                        name: "夏日冲浪店",
                        path: ""
                    }, {
                        id: "8",
                        name: "这就是街舞",
                        path: ""
                    },
                    ]
                },
                {
                    name: "国内热剧",
                    data: [{
                        id: "9",
                        name: "琉璃",
                        path: ""
                    }, {
                        id: "10",
                        name: "以家人之名",
                        path: ""
                    }, {
                        id: "11",
                        name: "重启之极海听雷",
                        path: ""
                    }, {
                        id: "12",
                        name: "天舞纪",
                        path: ""
                    }, {
                        id: "13",
                        name: "锦绣南歌",
                        path: ""
                    }, {
                        id: "14",
                        name: "秋蝉",
                        path: ""
                    }, {
                        id: "15",
                        name: "幸福，触手可及！",
                        path: ""
                    }, {
                        id: "16",
                        name: "传闻中的陈芊芊",
                        path: ""
                    }, {
                        id: "17",
                        name: "韫色过浓",
                        path: ""
                    }, {
                        id: "18",
                        name: "清平乐",
                        path: ""
                    }, {
                        id: "19",
                        name: "民国奇探",
                        path: ""
                    }, {
                        id: "20",
                        name: "鬓边不是海棠红",
                        path: ""
                    }, {
                        id: "21",
                        name: "三千鸦杀",
                        path: ""
                    }, {
                        id: "22",
                        name: "冰糖炖雪梨",
                        path: ""
                    },
                        , {
                        id: "23",
                        name: "少主且慢行",
                        path: ""
                    }, {
                        id: "24",
                        name: "想见你",
                        path: ""
                    }, {
                        id: "25",
                        name: "下一站是幸福",
                        path: ""
                    }, {
                        id: "26",
                        name: "锦衣之下",
                        path: ""
                    }, {
                        id: "27",
                        name: "庆余年",
                        path: ""
                    }, {
                        id: "28",
                        name: "陈情令",
                        path: ""
                    }, {
                        id: "29",
                        name: "初恋那件小事",
                        path: ""
                    }, {
                        id: "30",
                        name: "亲爱的，热爱的",
                        path: ""
                    },
                    {
                        id: "31",
                        name: "我只喜欢你",
                        path: ""
                    },
                    ]
                },
                {
                    name: "热映电影",
                    data: [{
                        id: "32",
                        name: "冰雪奇缘2",
                        path: ""
                    }, {
                        id: "33",
                        name: "少年的你",
                        path: ""
                    }, {
                        id: "34",
                        name: "诛仙",
                        path: ""
                    }, {
                        id: "35",
                        name: "罗小黑战记",
                        path: ""
                    }, {
                        id: "36",
                        name: "哪吒之魔童降世",
                        path: ""
                    }, {
                        id: "37",
                        name: "天气之子",
                        path: ""
                    },
                    {
                        id: "38",
                        name: "千与千寻",
                        path: ""
                    }, {
                        id: "39",
                        name: "阿丽塔",
                        path: ""
                    },
                    ]
                },
                {
                    name: "国外热剧",
                    data: [{
                        id: "40",
                        name: "永远的君主",
                        path: ""
                    }, {
                        id: "41",
                        name: "梨泰院Clss",
                        path: ""
                    }, {
                        id: "42",
                        name: "喜欢的话请响铃",
                        path: ""
                    }, {
                        id: "43",
                        name: "我是大哥大",
                        path: ""
                    }, {
                        id: "44",
                        name: "轮到你了",
                        path: ""
                    }, {
                        id: "45",
                        name: "铁石心肠",
                        path: ""
                    },
                    ]
                },
                {
                    name: "国内综艺",
                    data: [{
                        id: "46",
                        name: "乘风破浪的姐姐",
                        path: ""
                    }, {
                        id: "47",
                        name: "青春有你2",
                        path: ""
                    }, {
                        id: "48",
                        name: "创造营2020",
                        path: ""
                    }, {
                        id: "49",
                        name: "向往的生活",
                        path: ""
                    }, {
                        id: "50",
                        name: "极限挑战",
                        path: ""
                    }, {
                        id: "51",
                        name: "中餐厅",
                        path: ""
                    },
                    {
                        id: "52",
                        name: "这就是街舞",
                        path: ""
                    },
                    ]
                },
                {
                    name: "国外综艺",
                    data: [{
                        id: "53",
                        name: "认识的哥哥",
                        path: ""
                    }, {
                        id: "54",
                        name: "produce101",
                        path: ""
                    },
                    ]
                },
                ],
        },
        {
            name: "动漫",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "宫崎骏的夏天",
                        path: ""
                    }, {
                        id: "2",
                        name: "热门",
                        path: ""
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "没落要塞",
                        path: ""
                    }, {
                        id: "4",
                        name: "从零开始的异世界",
                        path: ""
                    }, {
                        id: "5",
                        name: "我的青春恋爱物语果然有问题",
                        path: ""
                    }, {
                        id: "6",
                        name: "刀剑神域",
                        path: ""
                    },]
                },
                {
                    name: "游戏",
                    data: [{
                        id: "7",
                        name: "食物语",
                        path: ""
                    }, {
                        id: "8",
                        name: "恋与制作人",
                        path: ""
                    }, {
                        id: "9",
                        name: "暖暖",
                        path: ""
                    }, {
                        id: "10",
                        name: "明日方舟",
                        path: ""
                    }, {
                        id: "11",
                        name: "王者荣耀",
                        path: ""
                    }, {
                        id: "12",
                        name: "阴阳师",
                        path: ""
                    }, {
                        id: "13",
                        name: "第五人格",
                        path: ""
                    }]
                },
                {
                    name: "国漫",
                    data: [{
                        id: "14",
                        name: "百妖谱",
                        path: ""
                    }, {
                        id: "15",
                        name: "天宝伏妖录",
                        path: ""
                    }, {
                        id: "16",
                        name: "大连寺日志",
                        path: ""
                    }, {
                        id: "17",
                        name: "雾山五行",
                        path: ""
                    }, {
                        id: "18",
                        name: "魔道祖师",
                        path: ""
                    }, {
                        id: "19",
                        name: "凹凸世界",
                        path: ""
                    },
                    {
                        id: "20",
                        name: "全职高手",
                        path: ""
                    }, {
                        id: "21",
                        name: "红小豆",
                        path: ""
                    },
                    {
                        id: "22",
                        name: "非人哉",
                        path: ""
                    }, {
                        id: "23",
                        name: "小绿和小蓝",
                        path: ""
                    },
                    ]
                },
                {
                    name: "日漫",
                    data: [{
                        id: "24",
                        name: "辉夜大小姐想让我告白",
                        path: ""
                    }, {
                        id: "25",
                        name: "地缚少年花子君",
                        path: ""
                    }, {
                        id: "26",
                        name: "冰菓",
                        path: ""
                    }, {
                        id: "27",
                        name: "太宰治",
                        path: ""
                    }, {
                        id: "28",
                        name: "杀生丸",
                        path: ""
                    }, {
                        id: "29",
                        name: "JOJO的奇妙冒险",
                        path: ""
                    },
                    {
                        id: "30",
                        name: "一拳超人",
                        path: ""
                    }, {
                        id: "31",
                        name: "食戟之灵",
                        path: ""
                    }, {
                        id: "32",
                        name: "文豪野犬",
                        path: ""
                    },
                    {
                        id: "33",
                        name: "刺客守则",
                        path: ""
                    },
                    {
                        id: "34",
                        name: "一拳元气少女缘结神超人",
                        path: ""
                    }, {
                        id: "35",
                        name: "夏目友人帐",
                        path: ""
                    }, {
                        id: "36",
                        name: "名侦探柯南",
                        path: ""
                    },
                    {
                        id: "37",
                        name: "火影忍者",
                        path: ""
                    }, {
                        id: "38",
                        name: "干物妹小埋",
                        path: ""
                    }, {
                        id: "39",
                        name: "鬼灭之刃",
                        path: ""
                    },
                    {
                        id: "40",
                        name: "薄樱鬼",
                        path: ""
                    },
                    ]
                },
                {
                    name: "美漫",
                    data: [{
                        id: "41",
                        name: "地狱客栈",
                        path: ""
                    }, {
                        id: "42",
                        name: "马男波杰克",
                        path: ""
                    }, {
                        id: "43",
                        name: "瑞克和莫蒂",
                        path: ""
                    }, {
                        id: "44",
                        name: "咱们裸熊",
                        path: ""
                    }, {
                        id: "45",
                        name: "海绵宝宝",
                        path: ""
                    },
                    ]
                },

                ],

        },
        {
            name: "壁纸",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "壁纸TOP榜",
                        path: ""
                    }, {
                        id: "2",
                        name: "最新",
                        path: ""
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "表白图",
                        path: ""
                    }, {
                        id: "4",
                        name: "油画壁纸",
                        path: ""
                    }, {
                        id: "5",
                        name: "像素壁纸",
                        path: ""
                    }, {
                        id: "6",
                        name: "背景头像套图",
                        path: ""
                    }, {
                        id: "7",
                        name: "朋友圈一束光",
                        path: ""
                    }, {
                        id: "8",
                        name: "暴富",
                        path: ""
                    }, {
                        id: "9",
                        name: "姓氏",
                        path: ""
                    }, {
                        id: "10",
                        name: "转运",
                        path: ""
                    },]
                },
                {
                    name: "分类",
                    data: [{
                        id: "11",
                        name: "颜色",
                        path: ""
                    }, {
                        id: "12",
                        name: "可爱",
                        path: ""
                    }, {
                        id: "13",
                        name: "情侣",
                        path: ""
                    }, {
                        id: "14",
                        name: "少女心",
                        path: ""
                    }, {
                        id: "15",
                        name: "文字",
                        path: ""
                    }, {
                        id: "16",
                        name: "锁屏",
                        path: ""
                    }, {
                        id: "17",
                        name: "渐变",
                        path: ""
                    }
                        , {
                        id: "18",
                        name: "节日",
                        path: ""
                    }, {
                        id: "19",
                        name: "动漫",
                        path: ""
                    }, {
                        id: "20",
                        name: "横屏",
                        path: ""
                    }, {
                        id: "21",
                        name: "小熊",
                        path: ""
                    }, {
                        id: "22",
                        name: "小恐龙",
                        path: ""
                    }, {
                        id: "23",
                        name: "三屏",
                        path: ""
                    }, {
                        id: "24",
                        name: "蒸汽波",
                        path: ""
                    }, {
                        id: "25",
                        name: "bingbing",
                        path: ""
                    }, {
                        id: "26",
                        name: "电脑",
                        path: ""
                    }, {
                        id: "27",
                        name: "小清新",
                        path: ""
                    }, {
                        id: "28",
                        name: "爱豆",
                        path: ""
                    }, {
                        id: "29",
                        name: "影视剧",
                        path: ""
                    }, {
                        id: "30",
                        name: "聊天背景",
                        path: ""
                    }, {
                        id: "31",
                        name: "朋友圈背景",
                        path: ""
                    }, {
                        id: "32",
                        name: "节气",
                        path: ""
                    }, {
                        id: "33",
                        name: "考试",
                        path: ""
                    }, {
                        id: "34",
                        name: "杂图",
                        path: ""
                    }, {
                        id: "35",
                        name: "减肥",
                        path: ""
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "36",
                        name: "是Hoki",
                        path: ""
                    }, {
                        id: "37",
                        name: "真小辛子",
                        path: ""
                    }, {
                        id: "38",
                        name: "甜乖",
                        path: ""
                    }, {
                        id: "39",
                        name: "Ritacomet",
                        path: ""
                    }, {
                        id: "40",
                        name: "会穿越的方格子",
                        path: ""
                    }, {
                        id: "41",
                        name: "西汀原创壁纸",
                        path: ""
                    },
                    {
                        id: "42",
                        name: "小熊奶黄包",
                        path: ""
                    },]
                },

                ]
        },
        //头像
        {
            name: "头像",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "头像TOP榜",
                        path: ""
                    }, {
                        id: "2",
                        name: "热门",
                        path: ""
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "外卖",
                        path: ""
                    }, {
                        id: "4",
                        name: "迪士尼公主",
                        path: ""
                    }, {
                        id: "5",
                        name: "接头霸王",
                        path: ""
                    }, {
                        id: "6",
                        name: "食物",
                        path: ""
                    }, {
                        id: "7",
                        name: "口罩",
                        path: ""
                    }, {
                        id: "8",
                        name: "暴富",
                        path: ""
                    }, {
                        id: "9",
                        name: "咩咩羊",
                        path: ""
                    }, {
                        id: "10",
                        name: "和他用情头了",
                        path: ""
                    }, {
                        id: "11",
                        name: "经典影视剧",
                        path: ""
                    },]
                },
                {
                    name: "分类",
                    data: [{
                        id: "12",
                        name: "女生",
                        path: ""
                    }, {
                        id: "13",
                        name: "男生",
                        path: ""
                    }, {
                        id: "14",
                        name: "情侣",
                        path: ""
                    }, {
                        id: "15",
                        name: "闺蜜",
                        path: ""
                    }, {
                        id: "16",
                        name: "沙雕",
                        path: ""
                    }, {
                        id: "17",
                        name: "动漫",
                        path: ""
                    }
                        , {
                        id: "18",
                        name: "萌宠",
                        path: ""
                    }, {
                        id: "19",
                        name: "可爱",
                        path: ""
                    }, {
                        id: "20",
                        name: "欧美",
                        path: ""
                    }, {
                        id: "21",
                        name: "古风",
                        path: ""
                    }, {
                        id: "22",
                        name: "团队",
                        path: ""
                    }, {
                        id: "23",
                        name: "星黛露",
                        path: ""
                    }, {
                        id: "24",
                        name: "微信",
                        path: ""
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "25",
                        name: "秋小屋",
                        path: ""
                    }, {
                        id: "26",
                        name: "_magua",
                        path: ""
                    }, {
                        id: "27",
                        name: "伊个小希",
                        path: ""
                    }]
                },

                ]
        },
        //表情
        {
            name: "表情",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "表情包TOP榜",
                        path: ""
                    }, {
                        id: "2",
                        name: "热门",
                        path: ""
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "第一杯奶茶",
                        path: ""
                    }, {
                        id: "4",
                        name: "爱会消失",
                        path: ""
                    }, {
                        id: "5",
                        name: "网抑云",
                        path: ""
                    }, {
                        id: "6",
                        name: "王者瑶",
                        path: ""
                    }, {
                        id: "7",
                        name: "丸子妹",
                        path: ""
                    }, {
                        id: "8",
                        name: "跳舞小熊",
                        path: ""
                    }]
                },
                {
                    name: "网红系列",
                    data: [{
                        id: "9",
                        name: "小鲨鱼",
                        path: ""
                    }, {
                        id: "10",
                        name: "光遇",
                        path: ""
                    }, {
                        id: "11",
                        name: "小羊",
                        path: ""
                    }, {
                        id: "12",
                        name: "星之卡比",
                        path: ""
                    }, {
                        id: "13",
                        name: "独角兽",
                        path: ""
                    }, {
                        id: "14",
                        name: "Pengsoo",
                        path: ""
                    }
                        , {
                        id: "15",
                        name: "奥特曼",
                        path: ""
                    }, {
                        id: "16",
                        name: "沙雕羊驼",
                        path: ""
                    }, {
                        id: "17",
                        name: "玛卡巴卡",
                        path: ""
                    }]
                },
                {
                    name: "聊天必备",
                    data: [{
                        id: "18",
                        name: "拍一拍",
                        path: ""
                    }, {
                        id: "19",
                        name: "我要翻白眼",
                        path: ""
                    }, {
                        id: "20",
                        name: "挠头",
                        path: ""
                    }, {
                        id: "21",
                        name: "抱抱",
                        path: ""
                    }, {
                        id: "22",
                        name: "撒娇",
                        path: ""
                    }, {
                        id: "23",
                        name: "吨吨吨",
                        path: ""
                    }, {
                        id: "24",
                        name: "小表情",
                        path: ""
                    }, {
                        id: "25",
                        name: "你凶我",
                        path: ""
                    }, {
                        id: "26",
                        name: "晚安",
                        path: ""
                    }]
                },
                {
                    name: "影视动漫",
                    data: [{
                        id: "27",
                        name: "无价之姐",
                        path: ""
                    }, {
                        id: "28",
                        name: "甄嬛传",
                        path: ""
                    }, {
                        id: "29",
                        name: "皮卡丘",
                        path: ""
                    }, {
                        id: "30",
                        name: "猫和老鼠",
                        path: ""
                    }, {
                        id: "31",
                        name: "卡达鸭",
                        path: ""
                    }, {
                        id: "32",
                        name: "蜡笔小新",
                        path: ""
                    }]
                },
                {
                    name: "偶像爱豆",
                    data: [{
                        id: "33",
                        name: "易烊千玺",
                        path: ""
                    }, {
                        id: "34",
                        name: "王一博",
                        path: ""
                    }, {
                        id: "35",
                        name: "蔡徐坤",
                        path: ""
                    }, {
                        id: "36",
                        name: "任嘉伦",
                        path: ""
                    }, {
                        id: "37",
                        name: "迪丽热巴",
                        path: ""
                    }, {
                        id: "38",
                        name: "欧阳娜娜",
                        path: ""
                    }]
                },
                ]
        },
        //动图
        {
            name: "动图",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: ""
                    }, {
                        id: "2",
                        name: "热门",
                        path: ""
                    }]
                }, {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "动漫",
                        path: ""
                    }, {
                        id: "4",
                        name: "爱豆",
                        path: ""
                    }, {
                        id: "5",
                        name: "沙雕",
                        path: ""
                    }, {
                        id: "6",
                        name: "影视",
                        path: ""
                    }, {
                        id: "7",
                        name: "壁纸",
                        path: ""
                    }, {
                        id: "8",
                        name: "表情包",
                        path: ""
                    }, {
                        id: "9",
                        name: "美食",
                        path: ""
                    }, {
                        id: "10",
                        name: "少女心",
                        path: ""
                    }, {
                        id: "11",
                        name: "可爱",
                        path: ""
                    }, {
                        id: "12",
                        name: "宫崎骏",
                        path: ""
                    }, {
                        id: "13",
                        name: "新海诚",
                        path: ""
                    }, {
                        id: "14",
                        name: "好运",
                        path: ""
                    }
                        , {
                        id: "15",
                        name: "比心",
                        path: ""
                    }, {
                        id: "16",
                        name: "樱花",
                        path: ""
                    }, {
                        id: "17",
                        name: "下雨",
                        path: ""
                    }, {
                        id: "18",
                        name: "颜色",
                        path: ""
                    }]
                },
                ]
        }



    ]


    return (
        <div>

        </div>
    )
}
export default Login
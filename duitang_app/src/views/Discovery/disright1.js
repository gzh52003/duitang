import React from 'react';
import request from "../../utils/request"
function Login(props) {
    const tiaozhuang = (ee) => {
        props.history.push('/discovery/search/index/' + ee.name)
        // console.log(ee)
    }
    const xuan = props.match.params.name;
    // console.log(xuan)


    const data = [
        {
            name: "爱豆",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "爱豆热度榜",
                        path: "/images/dis_ido01_03.jpg"
                    }, {
                        id: "2",
                        name: "爱豆西装杀排行",
                        path: "/images/dis_ido01_05.jpg"
                    }]
                }, {
                    name: "爱豆圈子",
                    data: [{
                        id: "3",
                        name: "Jennie",
                        path: "/images/dis_ido01_09.jpg"
                    }, {
                        id: "4",
                        name: "朴彩英",
                        path: "/images/dis_ido01_10.jpg"
                    }, {
                        id: "5",
                        name: "金泰妍",
                        path: "/images/dis_ido01_13.jpg"
                    }, {
                        id: "6",
                        name: "田柾国",
                        path: "/images/dis_ido01_14.jpg"
                    }, {
                        id: "7",
                        name: "徐艺洋",
                        path: "/images/dis_ido01_17.jpg"
                    }, {
                        id: "8",
                        name: "金智秀",
                        path: "/images/dis_ido01_18.jpg"
                    }, {
                        id: "9",
                        name: "赵露思",
                        path: "/images/dis_ido01_21.jpg"
                    }, {
                        id: "10",
                        name: "小松菜奈",
                        path: "/images/dis_ido01_22.jpg"
                    }, {
                        id: "11",
                        name: "吴宣仪",
                        path: "/images/dis_ido01_25.jpg"
                    }, {
                        id: "12",
                        name: "王一博",
                        path: "/images/dis_ido01_26.jpg"
                    }, {
                        id: "13",
                        name: "易烊千玺",
                        path: "/images/dis_ido_02_03.jpg"
                    }, {
                        id: "14",
                        name: "肖战",
                        path: "/images/dis_ido_02_05.jpg"
                    }, {
                        id: "15",
                        name: "蔡徐坤",
                        path: "/images/dis_ido_02_09.jpg"
                    }, {
                        id: "16",
                        name: "边伯贤",
                        path: "/images/dis_ido_02_10.jpg"
                    }, {
                        id: "17",
                        name: "Lisa",
                        path: "/images/dis_ido_02_13.jpg"
                    },
                    {
                        id: "18",
                        name: "虞书欣",
                        path: "/images/dis_ido_02_14.jpg"
                    },
                    {
                        id: "19",
                        name: "迪丽热巴",
                        path: "/images/dis_ido_02_17.jpg"
                    },
                    {
                        id: "20",
                        name: "鞠婧祎",
                        path: "/images/dis_ido_02_18.jpg"
                    },
                    {
                        id: "21",
                        name: "王俊凯",
                        path: "/images/dis_ido_02_21.jpg"
                    },
                    {
                        id: "22",
                        name: "金泰亨",
                        path: "/images/dis_ido_02_23.jpg"
                    },
                    {
                        id: "23",
                        name: "任嘉伦",
                        path: "/images/dis_ido_02_26.jpg"
                    },
                    {
                        id: "24",
                        name: "IU",
                        path: "/images/dis_ido_02_27.jpg"
                    },
                    {
                        id: "25",
                        name: "黄明昊",
                        path: "/images/dis_ido_03_03.jpg"
                    },
                    {
                        id: "26",
                        name: "华晨宇",
                        path: "/images/dis_ido_03_05.jpg"
                    },
                    {
                        id: "27",
                        name: "朴灿烈",
                        path: "/images/dis_ido_03_09.jpg"
                    },
                    {
                        id: "28",
                        name: "裴珠泫",
                        path: "/images/dis_ido_03_10.jpg"
                    },
                    {
                        id: "29",
                        name: "丁禹兮",
                        path: "/images/dis_ido_03_13.jpg"
                    },
                    {
                        id: "30",
                        name: "吴世勋",
                        path: "/images/dis_ido_03_14.jpg"
                    },
                    {
                        id: "31",
                        name: "赵小棠",
                        path: "/images/dis_ido_03_17.jpg"
                    },

                    {
                        id: "32",
                        name: "Somi",
                        path: "/images/dis_ido_03_18.jpg"
                    },
                    {
                        id: "33",
                        name: "姜贞羽",
                        path: "/images/dis_ido_03_21.jpg"
                    },
                    {
                        id: "34",
                        name: "孔雪儿",
                        path: "/images/dis_ido_03_22.jpg"
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
                        path: "/images/dis_yingshi_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_yingshi_01_05.jpg"
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "我，喜欢你",
                        path: "/images/dis_yingshi_01_09.jpg"
                    }, {
                        id: "4",
                        name: "长安诺",
                        path: "/images/dis_yingshi_01_10.jpg"
                    }, {
                        id: "5",
                        name: "且听凤鸣",
                        path: "/images/dis_yingshi_01_13.jpg"
                    }, {
                        id: "6",
                        name: "密室大逃脱",
                        path: "/images/dis_yingshi_01_14.jpg"
                    }, {
                        id: "7",
                        name: "夏日冲浪店",
                        path: "/images/dis_yingshi_01_17.jpg"
                    }, {
                        id: "8",
                        name: "这就是街舞",
                        path: "/images/dis_yingshi_01_18.jpg"
                    },
                    ]
                },
                {
                    name: "国内热剧",
                    data: [
                        {
                            id: "60",
                            name: "密室大逃脱",
                            path: "/images/dis_yingshi_01_21.jpg"
                        }, {
                            id: "9",
                            name: "琉璃",
                            path: "/images/dis_yingshi_01_22.jpg"
                        }, {
                            id: "10",
                            name: "以家人之名",
                            path: "/images/dis_yingshi_01_25.jpg"
                        }, {
                            id: "11",
                            name: "重启之极海听雷",
                            path: "/images/dis_yingshi_01_26.jpg"
                        }, {
                            id: "12",
                            name: "天舞纪",
                            path: "/images/dis_yingshi_02_03.jpg"
                        }, {
                            id: "13",
                            name: "锦绣南歌",
                            path: "/images/dis_yingshi_02_05.jpg"
                        }, {
                            id: "14",
                            name: "秋蝉",
                            path: "/images/dis_yingshi_02_09.jpg"
                        }, {
                            id: "15",
                            name: "幸福，触手可及！",
                            path: "/images/dis_yingshi_02_10.jpg"
                        }, {
                            id: "16",
                            name: "传闻中的陈芊芊",
                            path: "/images/dis_yingshi_02_13.jpg"
                        }, {
                            id: "17",
                            name: "韫色过浓",
                            path: "/images/dis_yingshi_02_14.jpg"
                        }, {
                            id: "18",
                            name: "清平乐",
                            path: "/images/dis_yingshi_02_17.jpg"
                        }, {
                            id: "19",
                            name: "民国奇探",
                            path: "/images/dis_yingshi_02_18.jpg"
                        }, {
                            id: "20",
                            name: "鬓边不是海棠红",
                            path: "/images/dis_yingshi_02_21.jpg"
                        }, {
                            id: "21",
                            name: "三千鸦杀",
                            path: "/images/dis_yingshi_02_22.jpg"
                        }, {
                            id: "22",
                            name: "冰糖炖雪梨",
                            path: "/images/dis_yingshi_02_25.jpg"
                        },
                        , {
                            id: "23",
                            name: "少主且慢行",
                            path: "/images/dis_yingshi_02_26.jpg"
                        }, {
                            id: "24",
                            name: "想见你",
                            path: "/images/dis_yingshi_03_03.jpg"
                        }, {
                            id: "25",
                            name: "下一站是幸福",
                            path: "/images/dis_yingshi_03_05.jpg"
                        }, {
                            id: "26",
                            name: "锦衣之下",
                            path: "/images/dis_yingshi_03_09.jpg"
                        }, {
                            id: "27",
                            name: "庆余年",
                            path: "/images/dis_yingshi_03_10.jpg"
                        }, {
                            id: "28",
                            name: "陈情令",
                            path: "/images/dis_yingshi_03_13.jpg"
                        }, {
                            id: "29",
                            name: "初恋那件小事",
                            path: "/images/dis_yingshi_03_14.jpg"
                        }, {
                            id: "30",
                            name: "亲爱的，热爱的",
                            path: "/images/dis_yingshi_03_17.jpg"
                        },
                        {
                            id: "31",
                            name: "我只喜欢你",
                            path: "/images/dis_yingshi_03_18.jpg"
                        },
                    ]
                },
                {
                    name: "热映电影",
                    data: [{
                        id: "32",
                        name: "冰雪奇缘2",
                        path: "/images/dis_yingshi_03_21.jpg"
                    }, {
                        id: "33",
                        name: "少年的你",
                        path: "/images/dis_yingshi_03_22.jpg"
                    }, {
                        id: "34",
                        name: "诛仙",
                        path: "/images/dis_yingshi_03_25.jpg"
                    }, {
                        id: "35",
                        name: "罗小黑战记",
                        path: "/images/dis_yingshi_03_26.jpg"
                    }, {
                        id: "36",
                        name: "哪吒之魔童降世",
                        path: "/images/dis_yingshi_04_03.jpg"
                    }, {
                        id: "37",
                        name: "天气之子",
                        path: "/images/dis_yingshi_04_05.jpg"
                    },
                    {
                        id: "38",
                        name: "千与千寻",
                        path: "/images/dis_yingshi_04_09.jpg"
                    }, {
                        id: "39",
                        name: "阿丽塔",
                        path: "/images/dis_yingshi_04_10.jpg"
                    },
                    ]
                },
                {
                    name: "国外热剧",
                    data: [{
                        id: "40",
                        name: "永远的君主",
                        path: "/images/dis_yingshi_04_13.jpg"
                    }, {
                        id: "41",
                        name: "梨泰院Clss",
                        path: "/images/dis_yingshi_04_14.jpg"
                    }, {
                        id: "42",
                        name: "喜欢的话请响铃",
                        path: "/images/dis_yingshi_04_17.jpg"
                    }, {
                        id: "43",
                        name: "我是大哥大",
                        path: "/images/dis_yingshi_04_18.jpg"
                    }, {
                        id: "44",
                        name: "轮到你了",
                        path: "/images/dis_yingshi_04_21.jpg"
                    }, {
                        id: "45",
                        name: "铁石心肠",
                        path: "/images/dis_yingshi_04_22.jpg"
                    },
                    ]
                },
                {
                    name: "国内综艺",
                    data: [{
                        id: "46",
                        name: "乘风破浪的姐姐",
                        path: "/images/dis_yingshi_05_03.jpg"
                    }, {
                        id: "47",
                        name: "青春有你2",
                        path: "/images/dis_yingshi_05_05.jpg"
                    }, {
                        id: "48",
                        name: "创造营2020",
                        path: "/images/dis_yingshi_05_09.jpg"
                    }, {
                        id: "49",
                        name: "向往的生活",
                        path: "/images/dis_yingshi_05_10.jpg"
                    }, {
                        id: "50",
                        name: "极限挑战",
                        path: "/images/dis_yingshi_05_13.jpg"
                    }, {
                        id: "51",
                        name: "中餐厅",
                        path: "/images/dis_yingshi_05_14.jpg"
                    },
                    {
                        id: "52",
                        name: "这就是街舞",
                        path: "/images/dis_yingshi_05_18.jpg"
                    },
                    ]
                },
                {
                    name: "国外综艺",
                    data: [{
                        id: "53",
                        name: "认识的哥哥",
                        path: "/images/dis_yingshi_05_20.jpg"
                    }, {
                        id: "54",
                        name: "produce101",
                        path: "/images/dis_yingshi_05_21.jpg"
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
                        path: "/images/dis_dongman_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_dongman_01_05.jpg"
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "没落要塞",
                        path: "/images/dis_dongman_01_09.jpg"
                    }, {
                        id: "4",
                        name: "从零开始的异世界",
                        path: "/images/dis_dongman_01_10.jpg"
                    }, {
                        id: "5",
                        name: "我的青春恋爱物语果然有问题",
                        path: "/images/dis_dongman_01_13.jpg"
                    }, {
                        id: "6",
                        name: "刀剑神域",
                        path: "/images/dis_dongman_01_14.jpg"
                    },]
                },
                {
                    name: "游戏",
                    data: [{
                        id: "7",
                        name: "食物语",
                        path: "/images/dis_dongman_01_17.jpg"
                    }, {
                        id: "8",
                        name: "恋与制作人",
                        path: "/images/dis_dongman_01_18.jpg"
                    }, {
                        id: "9",
                        name: "暖暖",
                        path: "/images/dis_dongman_01_21.jpg"
                    }, {
                        id: "10",
                        name: "明日方舟",
                        path: "/images/dis_dongman_01_22.jpg"
                    }, {
                        id: "11",
                        name: "王者荣耀",
                        path: "/images/dis_dongman_01_25.jpg"
                    }, {
                        id: "12",
                        name: "阴阳师",
                        path: "/images/dis_dongman_01_26.jpg"
                    }, {
                        id: "13",
                        name: "第五人格",
                        path: "/images/dis_dongman_02_03.jpg"
                    }]
                },
                {
                    name: "国漫",
                    data: [{
                        id: "14",
                        name: "百妖谱",
                        path: "/images/dis_dongman_02_06.jpg"
                    }, {
                        id: "15",
                        name: "天宝伏妖录",
                        path: "/images/dis_dongman_02_08.jpg"
                    }, {
                        id: "16",
                        name: "大连寺日志",
                        path: "/images/dis_dongman_02_12.jpg"
                    }, {
                        id: "17",
                        name: "雾山五行",
                        path: "/images/dis_dongman_02_13.jpg"
                    }, {
                        id: "18",
                        name: "魔道祖师",
                        path: "/images/dis_dongman_02_16.jpg"
                    }, {
                        id: "19",
                        name: "凹凸世界",
                        path: "/images/dis_dongman_02_17.jpg"
                    },
                    {
                        id: "20",
                        name: "全职高手",
                        path: "/images/dis_dongman_02_20.jpg"
                    }, {
                        id: "21",
                        name: "红小豆",
                        path: "/images/dis_dongman_02_21.jpg"
                    },
                    {
                        id: "22",
                        name: "非人哉",
                        path: "/images/dis_dongman_02_24.jpg"
                    }, {
                        id: "23",
                        name: "小绿和小蓝",
                        path: "/images/dis_dongman_02_25.jpg"
                    },
                    ]
                },
                {
                    name: "日漫",
                    data: [{
                        id: "24",
                        name: "辉夜大小姐想让我告白",
                        path: "/images/dis_dongman_03_03.jpg"
                    }, {
                        id: "25",
                        name: "地缚少年花子君",
                        path: "/images/dis_dongman_03_05.jpg"
                    }, {
                        id: "26",
                        name: "冰菓",
                        path: "/images/dis_dongman_03_09.jpg"
                    }, {
                        id: "27",
                        name: "太宰治",
                        path: "/images/dis_dongman_03_10.jpg"
                    }, {
                        id: "28",
                        name: "杀生丸",
                        path: "/images/dis_dongman_03_13.jpg"
                    }, {
                        id: "29",
                        name: "JOJO的奇妙冒险",
                        path: "/images/dis_dongman_03_14.jpg"
                    },
                    {
                        id: "30",
                        name: "一拳超人",
                        path: "/images/dis_dongman_03_17.jpg"
                    }, {
                        id: "31",
                        name: "食戟之灵",
                        path: "/images/dis_dongman_03_18.jpg"
                    }, {
                        id: "32",
                        name: "文豪野犬",
                        path: "/images/dis_dongman_03_21.jpg"
                    },
                    {
                        id: "33",
                        name: "刺客守则",
                        path: "/images/dis_dongman_03_22.jpg"
                    },
                    {
                        id: "34",
                        name: "一拳元气少女缘结神超人",
                        path: "/images/dis_dongman_03_25.jpg"
                    }, {
                        id: "35",
                        name: "夏目友人帐",
                        path: "/images/dis_dongman_03_26.jpg"
                    }, {
                        id: "36",
                        name: "名侦探柯南",
                        path: "/images/dis_dongman_04_03.jpg"
                    },
                    {
                        id: "37",
                        name: "火影忍者",
                        path: "/images/dis_dongman_04_05.jpg"
                    }, {
                        id: "38",
                        name: "干物妹小埋",
                        path: "/images/dis_dongman_04_09.jpg"
                    }, {
                        id: "39",
                        name: "鬼灭之刃",
                        path: "/images/dis_dongman_04_10.jpg"
                    },
                    {
                        id: "40",
                        name: "薄樱鬼",
                        path: "/images/dis_dongman_04_13.jpg"
                    },
                    ]
                },
                {
                    name: "美漫",
                    data: [{
                        id: "41",
                        name: "地狱客栈",
                        path: "/images/dis_dongman_04_15.jpg"
                    }, {
                        id: "42",
                        name: "马男波杰克",
                        path: "/images/dis_dongman_04_16.jpg"
                    }, {
                        id: "43",
                        name: "瑞克和莫蒂",
                        path: "/images/dis_dongman_04_19.jpg"
                    }, {
                        id: "44",
                        name: "咱们裸熊",
                        path: "/images/dis_dongman_04_20.jpg"
                    }, {
                        id: "45",
                        name: "海绵宝宝",
                        path: "/images/dis_dongman_04_23.jpg"
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
                        path: "/images/dis_bizhi_01_03.jpg"
                    }, {
                        id: "2",
                        name: "最新",
                        path: "/images/dis_bizhi_01_05.jpg"
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "表白图",
                        path: "/images/dis_bizhi_01_09.jpg"
                    }, {
                        id: "4",
                        name: "油画壁纸",
                        path: "/images/dis_bizhi_01_10.jpg"
                    }, {
                        id: "5",
                        name: "像素壁纸",
                        path: "/images/dis_bizhi_01_13.jpg"
                    }, {
                        id: "6",
                        name: "背景头像套图",
                        path: "/images/dis_bizhi_01_14.jpg"
                    }, {
                        id: "7",
                        name: "朋友圈一束光",
                        path: "/images/dis_bizhi_01_17.jpg"
                    }, {
                        id: "8",
                        name: "暴富",
                        path: "/images/dis_bizhi_01_18.jpg"
                    }, {
                        id: "9",
                        name: "姓氏",
                        path: "/images/dis_bizhi_01_21.jpg"
                    }, {
                        id: "10",
                        name: "转运",
                        path: "/images/dis_bizhi_01_22.jpg"
                    },]
                },
                {
                    name: "分类",
                    data: [{
                        id: "11",
                        name: "颜色",
                        path: "/images/dis_bizhi_01_25.jpg"
                    }, {
                        id: "12",
                        name: "可爱",
                        path: "/images/dis_bizhi_01_26.jpg"
                    }, {
                        id: "13",
                        name: "情侣",
                        path: "/images/dis_bizhi_02_03.jpg"
                    }, {
                        id: "14",
                        name: "少女心",
                        path: "/images/dis_bizhi_02_05.jpg"
                    }, {
                        id: "15",
                        name: "文字",
                        path: "/images/dis_bizhi_02_10.jpg"
                    }, {
                        id: "16",
                        name: "锁屏",
                        path: "/images/dis_bizhi_02_11.jpg"
                    }, {
                        id: "17",
                        name: "渐变",
                        path: "/images/dis_bizhi_02_15.jpg"
                    }
                        , {
                        id: "18",
                        name: "节日",
                        path: "/images/dis_bizhi_02_16.jpg"
                    }, {
                        id: "19",
                        name: "动漫",
                        path: "/images/dis_bizhi_02_19.jpg"
                    }, {
                        id: "20",
                        name: "横屏",
                        path: "/images/dis_bizhi_02_20.jpg"
                    }, {
                        id: "21",
                        name: "小熊",
                        path: "/images/dis_bizhi_02_23.jpg"
                    }, {
                        id: "22",
                        name: "小恐龙",
                        path: "/images/dis_bizhi_02_24.jpg"
                    }, {
                        id: "23",
                        name: "三屏",
                        path: "/images/dis_bizhi_02_27.jpg"
                    }, {
                        id: "24",
                        name: "蒸汽波",
                        path: "/images/dis_bizhi_03_03.jpg"
                    }, {
                        id: "25",
                        name: "bingbing",
                        path: "/images/dis_bizhi_03_05.jpg"
                    }, {
                        id: "26",
                        name: "电脑",
                        path: "/images/dis_bizhi_03_09.jpg"
                    }, {
                        id: "27",
                        name: "小清新",
                        path: "/images/dis_bizhi_03_10.jpg"
                    }, {
                        id: "28",
                        name: "爱豆",
                        path: "/images/dis_bizhi_03_13.jpg"
                    }, {
                        id: "29",
                        name: "影视剧",
                        path: "/images/dis_bizhi_03_14.jpg"
                    }, {
                        id: "30",
                        name: "聊天背景",
                        path: "/images/dis_bizhi_03_17.jpg"
                    }, {
                        id: "31",
                        name: "朋友圈背景",
                        path: "/images/dis_bizhi_03_18.jpg"
                    }, {
                        id: "32",
                        name: "节气",
                        path: "/images/dis_bizhi_03_21.jpg"
                    }, {
                        id: "33",
                        name: "考试",
                        path: "/images/dis_bizhi_03_22.jpg"
                    }, {
                        id: "34",
                        name: "杂图",
                        path: "/images/dis_bizhi_03_25.jpg"
                    }, {
                        id: "35",
                        name: "减肥",
                        path: "/images/dis_bizhi_04_03.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "36",
                        name: "是Hoki",
                        path: "/images/dis_bizhi_04_05.jpg"
                    }, {
                        id: "37",
                        name: "真小辛子",
                        path: "/images/dis_bizhi_04_05.jpg"
                    }, {
                        id: "38",
                        name: "甜乖",
                        path: "/images/dis_bizhi_04_07.jpg"
                    }, {
                        id: "39",
                        name: "Ritacomet",
                        path: "/images/dis_bizhi_04_12.jpg"
                    }, {
                        id: "40",
                        name: "会穿越的方格子",
                        path: "/images/dis_bizhi_04_14.jpg"
                    }, {
                        id: "41",
                        name: "西汀原创壁纸",
                        path: "/images/dis_bizhi_04_15.jpg"
                    },
                    {
                        id: "42",
                        name: "小熊奶黄包",
                        path: "/images/dis_bizhi_04_19.jpg"
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
                        path: "/images/dis_touxiang_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_touxiang_01_05.jpg"
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "外卖",
                        path: "/images/dis_touxiang_01_09.jpg"
                    }, {
                        id: "4",
                        name: "迪士尼公主",
                        path: "/images/dis_touxiang_01_10.jpg"
                    }, {
                        id: "5",
                        name: "接头霸王",
                        path: "/images/dis_touxiang_01_13.jpg"
                    }, {
                        id: "6",
                        name: "食物",
                        path: "/images/dis_touxiang_01_14.jpg"
                    }, {
                        id: "7",
                        name: "口罩",
                        path: "/images/dis_touxiang_01_17.jpg"
                    }, {
                        id: "9",
                        name: "咩咩羊",
                        path: "/images/dis_touxiang_01_18.jpg"
                    }, {
                        id: "10",
                        name: "和他用情头了",
                        path: "/images/dis_touxiang_01_21.jpg"
                    }, {
                        id: "11",
                        name: "经典影视剧",
                        path: "/images/dis_touxiang_01_22.jpg"
                    },]
                },
                {
                    name: "分类",
                    data: [{
                        id: "12",
                        name: "女生",
                        path: "/images/dis_touxiang_01_25.jpg"
                    }, {
                        id: "13",
                        name: "男生",
                        path: "/images/dis_touxiang_01_26.jpg"
                    }, {
                        id: "14",
                        name: "情侣",
                        path: "/images/dis_touxiang_02_03.jpg"
                    }, {
                        id: "15",
                        name: "闺蜜",
                        path: "/images/dis_touxiang_02_05.jpg"
                    }, {
                        id: "16",
                        name: "沙雕",
                        path: "/images/dis_touxiang_02_09.jpg"
                    }, {
                        id: "17",
                        name: "动漫",
                        path: "/images/dis_touxiang_02_10.jpg"
                    }
                        , {
                        id: "18",
                        name: "萌宠",
                        path: "/images/dis_touxiang_02_13.jpg"
                    }, {
                        id: "19",
                        name: "可爱",
                        path: "/images/dis_touxiang_02_14.jpg"
                    }, {
                        id: "20",
                        name: "欧美",
                        path: "/images/dis_touxiang_02_17.jpg"
                    }, {
                        id: "21",
                        name: "古风",
                        path: "/images/dis_touxiang_02_18.jpg"
                    }, {
                        id: "22",
                        name: "团队",
                        path: "/images/dis_touxiang_02_21.jpg"
                    }, {
                        id: "23",
                        name: "星黛露",
                        path: "/images/dis_touxiang_02_22.jpg"
                    }, {
                        id: "24",
                        name: "微信",
                        path: "/images/dis_touxiang_02_25.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "25",
                        name: "秋小屋",
                        path: "/images/dis_touxiang_03_03.jpg"
                    }, {
                        id: "26",
                        name: "_magua",
                        path: "/images/dis_touxiang_03_05.jpg"
                    }, {
                        id: "27",
                        name: "伊个小希",
                        path: "/images/dis_touxiang_03_07.jpg"
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
                        path: "/images/dic_biaoqing_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dic_biaoqing_01_05.jpg"
                    }]
                }, {
                    name: "近期最热",
                    data: [{
                        id: "3",
                        name: "第一杯奶茶",
                        path: "/images/dic_biaoqing_01_09.jpg"
                    }, {
                        id: "4",
                        name: "爱会消失",
                        path: "/images/dic_biaoqing_01_11.jpg"
                    }, {
                        id: "5",
                        name: "网抑云",
                        path: "/images/dic_biaoqing_01_13.jpg"
                    }, {
                        id: "6",
                        name: "王者瑶",
                        path: "/images/dic_biaoqing_01_17.jpg"
                    }, {
                        id: "7",
                        name: "丸子妹",
                        path: "/images/dic_biaoqing_01_18.jpg"
                    }, {
                        id: "8",
                        name: "跳舞小熊",
                        path: "/images/dic_biaoqing_01_19.jpg"
                    }]
                },
                {
                    name: "网红系列",
                    data: [{
                        id: "9",
                        name: "小鲨鱼",
                        path: "/images/dic_biaoqing_01_23.jpg"
                    }, {
                        id: "10",
                        name: "光遇",
                        path: "/images/dic_biaoqing_01_24.jpg"
                    }, {
                        id: "11",
                        name: "小羊",
                        path: "/images/dic_biaoqing_01_25.jpg"
                    }, {
                        id: "12",
                        name: "星之卡比",
                        path: "/images/dic_biaoqing_01_29.jpg"
                    }, {
                        id: "13",
                        name: "独角兽",
                        path: "/images/dic_biaoqing_01_30.jpg"
                    }, {
                        id: "14",
                        name: "Pengsoo",
                        path: "/images/dic_biaoqing_01_31.jpg"
                    }
                        , {
                        id: "15",
                        name: "奥特曼",
                        path: "/images/dic_biaoqing_01_35.jpg"
                    }, {
                        id: "16",
                        name: "沙雕羊驼",
                        path: "/images/dic_biaoqing_01_36.jpg"
                    }, {
                        id: "17",
                        name: "玛卡巴卡",
                        path: "/images/dic_biaoqing_01_37.jpg"
                    }]
                },
                {
                    name: "聊天必备",
                    data: [{
                        id: "18",
                        name: "拍一拍",
                        path: "/images/dis_biaoqing_02_03.jpg"
                    }, {
                        id: "19",
                        name: "我要翻白眼",
                        path: "/images/dis_biaoqing_02_05.jpg"
                    }, {
                        id: "20",
                        name: "挠头",
                        path: "/images/dis_biaoqing_02_07.jpg"
                    }, {
                        id: "21",
                        name: "抱抱",
                        path: "/images/dis_biaoqing_02_12.jpg"
                    }, {
                        id: "22",
                        name: "撒娇",
                        path: "/images/dis_biaoqing_02_13.jpg"
                    }, {
                        id: "23",
                        name: "吨吨吨",
                        path: "/images/dis_biaoqing_02_14.jpg"
                    }, {
                        id: "24",
                        name: "小表情",
                        path: "/images/dis_biaoqing_02_18.jpg"
                    }, {
                        id: "25",
                        name: "你凶我",
                        path: "/images/dis_biaoqing_02_19.jpg"
                    }, {
                        id: "26",
                        name: "晚安",
                        path: "/images/dis_biaoqing_02_20.jpg"
                    }]
                },
                {
                    name: "影视动漫",
                    data: [{
                        id: "27",
                        name: "无价之姐",
                        path: "/images/dis_biaoqing_02_24.jpg"
                    }, {
                        id: "28",
                        name: "甄嬛传",
                        path: "/images/dis_biaoqing_02_25.jpg"
                    }, {
                        id: "29",
                        name: "皮卡丘",
                        path: "/images/dis_biaoqing_02_26.jpg"
                    }, {
                        id: "30",
                        name: "猫和老鼠",
                        path: "/images/dis_biaoqing_02_30.jpg"
                    }, {
                        id: "31",
                        name: "卡达鸭",
                        path: "/images/dis_biaoqing_02_31.jpg"
                    }, {
                        id: "32",
                        name: "蜡笔小新",
                        path: "/images/dis_biaoqing_02_32.jpg"
                    }]
                },
                {
                    name: "偶像爱豆",
                    data: [{
                        id: "33",
                        name: "易烊千玺",
                        path: "/images/dis_biaoqing_03_03.jpg"
                    }, {
                        id: "34",
                        name: "王一博",
                        path: "/images/dis_biaoqing_03_05.jpg"
                    }, {
                        id: "35",
                        name: "蔡徐坤",
                        path: "/images/dis_biaoqing_03_07.jpg"
                    }, {
                        id: "36",
                        name: "任嘉伦",
                        path: "/images/dis_biaoqing_03_12.jpg"
                    }, {
                        id: "37",
                        name: "迪丽热巴",
                        path: "/images/dis_biaoqing_03_13.jpg"
                    }, {
                        id: "38",
                        name: "欧阳娜娜",
                        path: "/images/dis_biaoqing_03_14.jpg"
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
                        path: "/images/dis_dongtu_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_dongtu_01_05.jpg"
                    }]
                }, {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "动漫",
                        path: "/images/dis_dongtu_01_09.jpg"
                    }, {
                        id: "4",
                        name: "爱豆",
                        path: "/images/dis_dongtu_01_10.jpg"
                    }, {
                        id: "5",
                        name: "沙雕",
                        path: "/images/dis_dongtu_01_13.jpg"
                    }, {
                        id: "6",
                        name: "影视",
                        path: "/images/dis_dongtu_01_14.jpg"
                    }, {
                        id: "7",
                        name: "壁纸",
                        path: "/images/dis_dongtu_01_17.jpg"
                    }, {
                        id: "8",
                        name: "表情包",
                        path: "/images/dis_dongtu_01_18.jpg"
                    }, {
                        id: "9",
                        name: "美食",
                        path: "/images/dis_dongtu_01_21.jpg"
                    }, {
                        id: "10",
                        name: "少女心",
                        path: "/images/dis_dongtu_01_22.jpg"
                    }, {
                        id: "11",
                        name: "可爱",
                        path: "/images/dis_dongtu_01_25.jpg"
                    }, {
                        id: "12",
                        name: "宫崎骏",
                        path: "/images/dis_dongtu_01_26.jpg"
                    }, {
                        id: "13",
                        name: "新海诚",
                        path: "/images/dis_dongtu_01_03.jpg"
                    }, {
                        id: "14",
                        name: "好运",
                        path: "/images/dis_dongtu_02_05.jpg"
                    }
                        , {
                        id: "15",
                        name: "比心",
                        path: "/images/dis_dongtu_02_09.jpg"
                    }, {
                        id: "16",
                        name: "樱花",
                        path: "/images/dis_dongtu_02_10.jpg"
                    }, {
                        id: "17",
                        name: "下雨",
                        path: "/images/dis_dongtu_02_13.jpg"
                    }, {
                        id: "18",
                        name: "颜色",
                        path: "/images/dis_dongtu_02_14.jpg"
                    }]
                },
                ]
        },
        // 文字
        {
            name: "文字",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "秋日句子",
                        path: "/images/dis_wenzi_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_wenzi_01_05.jpg"
                    }]
                }, {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "句子",
                        path: "/images/dis_wenzi_01_09.jpg"
                    }, {
                        id: "4",
                        name: "手写",
                        path: "/images/dis_wenzi_01_10.jpg"
                    }, {
                        id: "5",
                        name: "歌词",
                        path: "/images/dis_wenzi_01_13.jpg"
                    }, {
                        id: "6",
                        name: "诗歌",
                        path: "/images/dis_wenzi_01_14.jpg"
                    }, {
                        id: "7",
                        name: "台词",
                        path: "/images/dis_wenzi_01_17.jpg"
                    }, {
                        id: "8",
                        name: "备忘录",
                        path: "/images/dis_wenzi_01_18.jpg"
                    }, {
                        id: "9",
                        name: "聊天记录",
                        path: "/images/dis_wenzi_01_21.jpg"
                    }, {
                        id: "10",
                        name: "情话",
                        path: "/images/dis_wenzi_01_22.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "11",
                        name: "见字丶如面",
                        path: "/images/dis_wenzi_01_25.jpg"
                    }, {
                        id: "12",
                        name: "且挽兰芷步阡陌",
                        path: "/images/dis_wenzi_01_27.jpg"
                    }, {
                        id: "13",
                        name: "明御炎",
                        path: "/images/dis_wenzi_01_29.jpg"
                    }]
                },
                ]
        },
        // 素材
        {
            name: "素材",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_sucai_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_sucai_01_05.jpg"
                    }]
                }, {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "App图标",
                        path: "/images/dis_sucai_01_09.jpg"
                    }, {
                        id: "4",
                        name: "手写",
                        path: "/images/dis_sucai_01_10.jpg"
                    }, {
                        id: "5",
                        name: "水印",
                        path: "/images/dis_sucai_01_13.jpg"
                    }, {
                        id: "6",
                        name: "手幅",
                        path: "/images/dis_sucai_01_14.jpg"
                    }, {
                        id: "7",
                        name: "手账",
                        path: "/images/dis_sucai_01_17.jpg"
                    }, {
                        id: "8",
                        name: "举牌",
                        path: "/images/dis_sucai_01_18.jpg"
                    }, {
                        id: "9",
                        name: "溶图",
                        path: "/images/dis_sucai_01_21.jpg"
                    }, {
                        id: "10",
                        name: "古风",
                        path: "/images/dis_sucai_01_22.jpg"
                    }, {
                        id: "11",
                        name: "二维码",
                        path: "/images/dis_sucai_01_25.jpg"
                    }, {
                        id: "12",
                        name: "橡皮章",
                        path: "/images/dis_sucai_01_26.jpg"
                    }, {
                        id: "13",
                        name: "抠图",
                        path: "/images/dis_sucai_02_03.jpg"
                    }, {
                        id: "14",
                        name: "绘画",
                        path: "/images/dis_sucai_02_05.jpg"
                    }, {
                        id: "15",
                        name: "封面",
                        path: "/images/dis_sucai_02_09.jpg"
                    }, {
                        id: "16",
                        name: "节日",
                        path: "/images/dis_sucai_02_10.jpg"
                    }, {
                        id: "17",
                        name: "边框",
                        path: "/images/dis_sucai_02_13.jpg"
                    }, {
                        id: "18",
                        name: "背景",
                        path: "/images/dis_sucai_02_14.jpg"
                    },]
                },
                ]
        },
        // 萌宠
        {
            name: "萌宠",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_mengchong_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_mengchong_01_05.jpg"
                    }]
                }, {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "喵星人",
                        path: "/images/dis_mengchong_01_09.jpg"
                    }, {
                        id: "4",
                        name: "汪星人",
                        path: "/images/dis_mengchong_01_10.jpg"
                    }, {
                        id: "5",
                        name: "吸猪",
                        path: "/images/dis_mengchong_01_13.jpg"
                    }, {
                        id: "6",
                        name: "动物星球",
                        path: "/images/dis_mengchong_01_14.jpg"
                    }, {
                        id: "7",
                        name: "猫日",
                        path: "/images/dis_mengchong_01_17.jpg"
                    }, {
                        id: "8",
                        name: "猫叔",
                        path: "/images/dis_mengchong_01_18.jpg"
                    }, {
                        id: "9",
                        name: "红小胖",
                        path: "/images/dis_mengchong_01_21.jpg"
                    }, {
                        id: "10",
                        name: "Bodi",
                        path: "/images/dis_mengchong_01_22.jpg"
                    }]
                },
                ]
        },
        // 绘画
        {
            name: "绘画",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "画师大大安利",
                        path: "/images/dis_huihua_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_huihua_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "画师",
                        path: "/images/dis_huihua_01_09.jpg"
                    }, {
                        id: "4",
                        name: "插画",
                        path: "/images/dis_huihua_01_10.jpg"
                    }, {
                        id: "5",
                        name: "水彩",
                        path: "/images/dis_huihua_01_13.jpg"
                    }, {
                        id: "6",
                        name: "线稿",
                        path: "/images/dis_huihua_01_14.jpg"
                    }, {
                        id: "7",
                        name: "饭绘",
                        path: "/images/dis_huihua_01_17.jpg"
                    }, {
                        id: "8",
                        name: "油画",
                        path: "/images/dis_huihua_01_18.jpg"
                    }, {
                        id: "9",
                        name: "儿童画",
                        path: "/images/dis_huihua_01_21.jpg"
                    }, {
                        id: "10",
                        name: "水墨画",
                        path: "/images/dis_huihua_01_22.jpg"
                    }, {
                        id: "11",
                        name: "墙绘",
                        path: "/images/dis_huihua_01_25.jpg"
                    }, {
                        id: "12",
                        name: "设计",
                        path: "/images/dis_huihua_01_26.jpg"
                    }, {
                        id: "13",
                        name: "漫画",
                        path: "/images/dis_huihua_02_03.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "14",
                        name: "未来魔法师",
                        path: "/images/dis_huihua_02_06.jpg"
                    }, {
                        id: "15",
                        name: "貝貝爺爺",
                        path: "/images/dis_huihua_02_08.jpg"
                    },
                    {
                        id: "1",
                        name: "兔子的理想世界",
                        path: "/images/dis_huihua_02_10.jpg"
                    },]
                }
                ]
        },
        // 手作
        {
            name: "手作",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_shouyi_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_shouyi_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "手账",
                        path: "/images/dis_shouyi_01_09.jpg"
                    }, {
                        id: "4",
                        name: "纸艺",
                        path: "/images/dis_shouyi_01_10.jpg"
                    }, {
                        id: "5",
                        name: "拼豆",
                        path: "/images/dis_shouyi_01_13.jpg"
                    }, {
                        id: "6",
                        name: "布艺",
                        path: "/images/dis_shouyi_01_14.jpg"
                    }, {
                        id: "7",
                        name: "羊毛毡",
                        path: "/images/dis_shouyi_01_17.jpg"
                    }, {
                        id: "8",
                        name: "环创",
                        path: "/images/dis_shouyi_01_18.jpg"
                    }, {
                        id: "9",
                        name: "刺绣",
                        path: "/images/dis_shouyi_01_21.jpg"
                    }, {
                        id: "10",
                        name: "废物利用",
                        path: "/images/dis_shouyi_01_22.jpg"
                    }, {
                        id: "11",
                        name: "编织",
                        path: "/images/dis_shouyi_01_25.jpg"
                    }, {
                        id: "12",
                        name: "橡皮章",
                        path: "/images/dis_shouyi_01_26.jpg"
                    }, {
                        id: "13",
                        name: "黏土",
                        path: "/images/dis_shouyi_02_03.jpg"
                    }, {
                        id: "14",
                        name: "热缩片",
                        path: "/images/dis_shouyi_02_05.jpg"
                    }, {
                        id: "15",
                        name: "滴胶",
                        path: "/images/dis_shouyi_02_09.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "16",
                        name: "Trista手账生活",
                        path: "/images/dis_shouyi_02_11.jpg"
                    }, {
                        id: "17",
                        name: "=猫小面=",
                        path: "/images/dis_shouyi_02_13.jpg"
                    },
                    {
                        id: "18",
                        name: "Smith小先森",
                        path: "/images/dis_shouyi_02_15.jpg"
                    },]
                }
                ]
        },
        // 时尚
        {
            name: "时尚",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_shishang_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_shishang_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "穿搭",
                        path: "/images/dis_shishang_01_09.jpg"
                    }, {
                        id: "4",
                        name: "模特",
                        path: "/images/dis_shishang_01_10.jpg"
                    }, {
                        id: "5",
                        name: "秀场",
                        path: "/images/dis_shishang_01_13.jpg"
                    }, {
                        id: "6",
                        name: "街拍",
                        path: "/images/dis_shishang_01_14.jpg"
                    }, {
                        id: "7",
                        name: "大牌",
                        path: "/images/dis_shishang_01_17.jpg"
                    }, {
                        id: "8",
                        name: "时尚博主",
                        path: "/images/dis_shishang_01_18.jpg"
                    }, {
                        id: "9",
                        name: "杂志大片",
                        path: "/images/dis_shishang_01_21.jpg"
                    }]
                }
                ]
        },
        // 美妆
        {
            name: "美妆",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_meizhuang_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_meizhuang_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "化妆教程",
                        path: "/images/dis_meizhuang_01_09.jpg"
                    }, {
                        id: "4",
                        name: "护肤",
                        path: "/images/dis_meizhuang_01_10.jpg"
                    }, {
                        id: "5",
                        name: "瘦身",
                        path: "/images/dis_meizhuang_01_13.jpg"
                    }, {
                        id: "6",
                        name: "美甲",
                        path: "/images/dis_meizhuang_01_14.jpg"
                    }, {
                        id: "7",
                        name: "发型",
                        path: "/images/dis_meizhuang_01_17.jpg"
                    }, {
                        id: "8",
                        name: "发色",
                        path: "/images/dis_meizhuang_01_18.jpg"
                    }, {
                        id: "9",
                        name: "汉服古风",
                        path: "/images/dis_meizhuang_01_21.jpg"
                    }, {
                        id: "10",
                        name: "饰品",
                        path: "/images/dis_meizhuang_01_22.jpg"
                    }, {
                        id: "11",
                        name: "香水",
                        path: "/images/dis_meizhuang_01_25.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "12",
                        name: "美少女PINK酱",
                        path: "/images/dis_meizhuang_02_03.jpg"
                    }, {
                        id: "13",
                        name: "杨卷话yuki",
                        path: "/images/dis_meizhuang_02_05.jpg"
                    },
                    {
                        id: "14",
                        name: "废柴柒哥",
                        path: "/images/dis_meizhuang_02_08.jpg"
                    }, {
                        id: "15",
                        name: "鹿边的松树",
                        path: "/images/dis_meizhuang_02_14.jpg"
                    }, {
                        id: "16",
                        name: "南灵岛有小鹿",
                        path: "/images/dis_meizhuang_02_16.jpg"
                    },
                    {
                        id: "17",
                        name: "种草小芒果",
                        path: "/images/dis_meizhuang_02_17.jpg"
                    },]
                }
                ]
        },
        // 婚礼
        {
            name: "婚礼",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_hunli_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_hunli_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "新娘造型",
                        path: "/images/dis_hunli_01_09.jpg"
                    }, {
                        id: "4",
                        name: "伴娘造型",
                        path: "/images/dis_hunli_01_10.jpg"
                    }, {
                        id: "5",
                        name: "伴手礼",
                        path: "/images/dis_hunli_01_13.jpg"
                    }, {
                        id: "6",
                        name: "手捧花",
                        path: "/images/dis_hunli_01_14.jpg"
                    }, {
                        id: "7",
                        name: "婚礼现场",
                        path: "/images/dis_hunli_01_17.jpg"
                    }, {
                        id: "8",
                        name: "请柬",
                        path: "/images/dis_hunli_01_18.jpg"
                    }, {
                        id: "9",
                        name: "结婚蛋糕",
                        path: "/images/dis_hunli_01_21.jpg"
                    }, {
                        id: "10",
                        name: "结婚照",
                        path: "/images/dis_hunli_01_22.jpg"
                    }]
                }
                ]
        },
        // 美食
        {
            name: "美食",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_meishi_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_meishi_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "早餐",
                        path: "/images/dis_meishi_01_09.jpg"
                    }, {
                        id: "4",
                        name: "饮品",
                        path: "/images/dis_meishi_01_10.jpg"
                    }, {
                        id: "5",
                        name: "零食",
                        path: "/images/dis_meishi_01_13.jpg"
                    }, {
                        id: "6",
                        name: "甜点",
                        path: "/images/dis_meishi_01_14.jpg"
                    }, {
                        id: "7",
                        name: "西餐",
                        path: "/images/dis_meishi_01_17.jpg"
                    }, {
                        id: "8",
                        name: "面食",
                        path: "/images/dis_meishi_01_18.jpg"
                    }, {
                        id: "9",
                        name: "菜谱",
                        path: "/images/dis_meishi_01_21.jpg"
                    }, {
                        id: "10",
                        name: "家常菜",
                        path: "/images/dis_meishi_01_22.jpg"
                    },]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "11",
                        name: "sherry4-7",
                        path: "/images/dis_meishi_02_03.jpg"
                    }, {
                        id: "12",
                        name: "傲客城市菜单",
                        path: "/images/dis_meishi_02_05.jpg"
                    },
                    {
                        id: "13",
                        name: "夏厨陈二十",
                        path: "/images/dis_meishi_02_07.jpg"
                    }, {
                        id: "14",
                        name: "麦子厨房",
                        path: "/images/dis_meishi_02_12.jpg"
                    }, {
                        id: "15",
                        name: "食光知味",
                        path: "/images/dis_meishi_02_14.jpg"
                    },
                    {
                        id: "16",
                        name: "颖涵的快厨房",
                        path: "/images/dis_meishi_02_15.jpg"
                    },]
                }
                ]
        },
        // 家居
        {
            name: "家居",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_jiaju_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_jiaju_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "室内布置",
                        path: "/images/dis_jiaju_01_09.jpg"
                    }, {
                        id: "4",
                        name: "寝室",
                        path: "/images/dis_jiaju_01_10.jpg"
                    }, {
                        id: "5",
                        name: "阳台庭院",
                        path: "/images/dis_jiaju_01_13.jpg"
                    }, {
                        id: "6",
                        name: "多肉植物",
                        path: "/images/dis_jiaju_01_14.jpg"
                    }, {
                        id: "7",
                        name: "卧室",
                        path: "/images/dis_jiaju_01_17.jpg"
                    }, {
                        id: "8",
                        name: "小户型",
                        path: "/images/dis_jiaju_01_18.jpg"
                    }, {
                        id: "9",
                        name: "工作间",
                        path: "/images/dis_jiaju_01_21.jpg"
                    }, {
                        id: "10",
                        name: "衣帽间",
                        path: "/images/dis_jiaju_01_22.jpg"
                    }, {
                        id: "11",
                        name: "家具",
                        path: "/images/dis_jiaju_01_25.jpg"
                    },]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "12",
                        name: "开始吧芍药姑娘",
                        path: "/images/dis_jiaju_02_03.jpg"
                    }, {
                        id: "13",
                        name: "桑塔露露的礼物盒",
                        path: "/images/dis_jiaju_02_05.jpg"
                    },
                    {
                        id: "14",
                        name: "月球家居",
                        path: "/images/dis_jiaju_02_07.jpg"
                    }, {
                        id: "15",
                        name: "居小仙",
                        path: "/images/dis_jiaju_02_12.jpg"
                    }, {
                        id: "16",
                        name: "收了纳个Queen",
                        path: "/images/dis_jiaju_02_13.jpg"
                    },
                    {
                        id: "17",
                        name: "在家ZAIJIA",
                        path: "/images/dis_jiaju_02_15.jpg"
                    },]
                }
                ]
        },
        // 旅行
        {
            name: "旅行",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_lvxing_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_lvxing_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "日本",
                        path: "/images/dis_lvxing_01_09.jpg"
                    }, {
                        id: "4",
                        name: "韩国",
                        path: "/images/dis_lvxing_01_10.jpg"
                    }, {
                        id: "5",
                        name: "东南亚",
                        path: "/images/dis_lvxing_01_13.jpg"
                    }, {
                        id: "6",
                        name: "国内",
                        path: "/images/dis_lvxing_01_14.jpg"
                    }, {
                        id: "7",
                        name: "民宿",
                        path: "/images/dis_lvxing_01_17.jpg"
                    }, {
                        id: "8",
                        name: "欧美",
                        path: "/images/dis_lvxing_01_18.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "9",
                        name: "KLOOK客路旅行",
                        path: "/images/dis_lvxing_01_21.jpg"
                    }, {
                        id: "10",
                        name: "小墨与阿猴",
                        path: "/images/dis_lvxing_01_23.jpg"
                    },
                    {
                        id: "11",
                        name: "Roy和Sue的奇妙旅行",
                        path: "/images/dis_lvxing_01_25.jpg"
                    }, {
                        id: "12",
                        name: "十万公里的蜜月",
                        path: "/images/dis_lvxing_01_29.jpg"
                    }, {
                        id: "13",
                        name: "北京小风子",
                        path: "/images/dis_lvxing_01_30.jpg"
                    },
                    {
                        id: "14",
                        name: "长九",
                        path: "/images/dis_lvxing_01_31.jpg"
                    },]
                }
                ]
        },
        // 摄影
        {
            name: "摄影",
            datalist:
                [{
                    name: "",
                    data: [{
                        id: "1",
                        name: "随便看看",
                        path: "/images/dis_sheying_01_03.jpg"
                    }, {
                        id: "2",
                        name: "热门",
                        path: "/images/dis_sheying_01_05.jpg"
                    }]
                },
                {
                    name: "分类",
                    data: [{
                        id: "3",
                        name: "复古",
                        path: "/images/dis_sheying_01_09.jpg"
                    }, {
                        id: "4",
                        name: "ins风",
                        path: "/images/dis_sheying_01_10.jpg"
                    }, {
                        id: "5",
                        name: "教程",
                        path: "/images/dis_sheying_01_13.jpg"
                    }, {
                        id: "6",
                        name: "古风",
                        path: "/images/dis_sheying_01_14.jpg"
                    }]
                },
                {
                    name: "原创作者",
                    data: [{
                        id: "7",
                        name: "洪小漩",
                        path: "/images/dis_sheying_01_17.jpg"
                    }, {
                        id: "8",
                        name: "airphoto",
                        path: "/images/dis_sheying_01_19.jpg"
                    },
                    {
                        id: "9",
                        name: "旅拍誌",
                        path: "/images/dis_sheying_01_21.jpg"
                    }, {
                        id: "10",
                        name: "人民攻摄",
                        path: "/images/dis_sheying_01_26.jpg"
                    }, {
                        id: "11",
                        name: "七七小菇凉",
                        path: "/images/dis_sheying_01_28.jpg"
                    },
                    {
                        id: "12",
                        name: "吟游摄",
                        path: "/images/dis_sheying_01_30.jpg"
                    },]
                }
                ]
        }
    ]

    const [xuan1] = data.filter(item => {
        if (item.name === xuan) {
            return item
        }
    })
    // console.log(xuan1.datalist)

    return (
        <div>
            {
                // xuan1.forE

                xuan1.datalist.map(item => {
                    return (

                        <div>
                            <div style={{ fontSize: "24px", fontWeight: "bold", padding: "14px 0" }}>{item.name}</div>
                            {item.data.map(items => {
                                if (item.name === "原创作者") {
                                    return <div style={{ width: "32%", height: "80px", display: "inline-block", marginLeft: "1%" }} onClick={() => tiaozhuang(items)}><img src={items.path} style={{ width: "100%", height: "100%" }} alt="" /><div style={{ paddingTop: "8px", textAlign: "center" }}>{items.name}</div></div>
                                } else {
                                    return <div style={{ width: "48%", height: "80px", display: "inline-block", marginLeft: "1%" }} onClick={() => tiaozhuang(items)}><img src={items.path} style={{ width: "100%", height: "100%" }} alt="" /><div style={{ paddingTop: "8px", textAlign: "center" }}>{items.name}</div></div>
                                }

                            })}
                        </div>
                    )

                })

            }
            <div style={{ height: "50px" }}></div>
        </div >
    )
}
export default Login
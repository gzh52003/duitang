import React from 'react';
import { Carousel } from 'antd-mobile';


function Login(props) {
    // const data = ['1', '2', '3']
    // console.log("dis")
    // const data1 = ["李芯", "中秋节", "ios14桌面壁纸", "重启之极海听雷", "推搪游乐园", "好运壁纸", "鱼鱼气泡水", "国庆", "杨芸晴", "水光", "有翡", "绿色背景图", "bang dream", "画手表格", "爱会消失", "superme", "古风灯笼", "盘子画", "权恩妃", "天空壁纸"]
    const dataa = [{
        id: "1",
        name: "李芯",
        path: "/images/dis_03.jpg"
    }, {
        id: "2",
        name: "中秋节",
        path: "/images/dis_05.jpg"
    }
        , {
        id: "3",
        name: "ios14桌面壁纸",
        path: "/images/dis_10.jpg"
    }
        , {
        id: "4",
        name: "重启之极海听雷",
        path: "/images/dis_12.jpg"
    }
        , {
        id: "5",
        name: "推搪游乐园",
        path: "/images/dis_15.jpg"
    }
        , {
        id: "6",
        name: "好运壁纸",
        path: "/images/dis_17.jpg"
    }
        , {
        id: "7",
        name: "鱼鱼气泡水",
        path: "/images/dis_20.jpg"
    }
        , {
        id: "8",
        name: "国庆",
        path: "/images/dis_22.jpg"
    }
        , {
        id: "9",
        name: "杨芸晴",
        path: "/images/dis_26.jpg"
    }
        , {
        id: "10",
        name: "水光",
        path: "/images/dis_28.jpg"
    }
        , {
        id: "11",
        name: "有翡",
        path: "/images/dis_03_03.jpg"
    }
        , {
        id: "12",
        name: "绿色背景图",
        path: "/images/dis_03_05.jpg"
    }
        , {
        id: "13",
        name: "bang dream",
        path: "/images/dis_03_09.jpg"
    }

        , {
        id: "14",
        name: "画手表格",
        path: "/images/dis_03_11.jpg"
    }
        , {
        id: "15",
        name: "爱会消失",
        path: "/images/dis_03_14.jpg"
    }
        , {
        id: "16",
        name: "superme",
        path: "/images/dis_03_16.jpg"
    }
        , {
        id: "17",
        name: "古风灯笼",
        path: "/images/dis_03_19.jpg"
    }
        , {
        id: "18",
        name: "盘子画",
        path: "/images/dis_03_21.jpg"
    }
        , {
        id: "19",
        name: "权恩妃",
        path: "/images/dis_03_24.jpg"
    }, {
        id: "20",
        name: "天空壁纸",
        path: "/images/dis_03_27.jpg"
    }
    ]

    const tiaozhuan = (ee) => {
        // console.log(ee)
        props.history.push('/discovery/search/index/' + ee.name)
    }

    return (
        <div style={{ paddingTop: "3%" }}>
            <Carousel
                autoplay={true}
                infinite={true}
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                style={{ height: "106px", width: "70vw", marginLeft: "5%", }}
            >
                {/* {
                    data.map(item => (
                        <div style={{ display: 'inline-block', width: '100%', height: "200px", marginLeft: "5%", background: "#58bc58" }} key={item}>{item}</div>
                    ))
                } */}
                <div style={{ display: 'inline-block', width: '100%', height: "90px", }} key={"asd"}><img src="/img/s10.jpg" alt="" style={{ width: "100%", height: "100%" }} /></div>
                <div style={{ display: 'inline-block', width: '100%', height: "90px" }} key={"asd"}><img src="/img/bymeself.jpg" alt="" style={{ width: "100%", height: "100%" }} /></div>
            </Carousel>
            <div >
                {
                    dataa.map(item => {
                        return <div style={{ display: "inline-block", width: "48%", height: "120px", marginLeft: "1%" }} key={item.id} onClick={() => tiaozhuan(item)}>
                            <img src={item.path} alt="" style={{ width: "100%", height: "110px" }} />
                        </div>
                    })
                }

            </div>
            <div style={{ height: "50px" }}>

            </div>
        </div >
    )
}
export default Login
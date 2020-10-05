import React, { Suspense, lazy } from 'react';
// import { Flex, WhiteSpace } from 'antd-mobile';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Carousel, Tabs } from 'antd-mobile';
import { createForm } from 'rc-form';

import Disright from "./disright";
import Disright1 from "./disright1";



function Discovery(props) {

    // let [showw, changeshow] = useState(false);

    const aaa = [{ title: "热门搜索", key: "1" },
    { title: "爱豆", key: "2" },
    { title: "影视", key: "3" },
    { title: "动漫", key: "4" },
    { title: "壁纸", key: "5" },
    { title: "头像", key: "6" },
    { title: "表情", key: "7" },
    { title: "动图", key: "8" },
    { title: "文字", key: "9" },
    { title: "素材", key: "10" },
    { title: "萌宠", key: "11" },
    { title: "绘画", key: "12" },
    { title: "手作", key: "13" },
    { title: "时尚", key: "14" },
    { title: "美妆", key: "15" },
    { title: "婚礼", key: "16" },
    { title: "美食", key: "17" },
    { title: "家居", key: "18" },
    { title: "旅行", key: "19" },
    { title: "摄影", key: "20" },]

    const bbb = (a, b) => {
        // console.log(a, b)
        if (a.title === "热门搜索") {
            props.history.push('/discovery/home/home')
        } else {
            props.history.push('/discovery/home/other/' + a.title)
        }

    }


    let tiaozhuan = () => {
        props.history.push('/discovery/search')
        // console.log(props)
        // props.match.path = "/search"
    }

    return (
        <div className="content">
            <div style={{ height: "50px", borderBottom: "1px solid #ddd" }}>
                <div style={{ float: "left", paddingTop: "10px" }} >
                    <span className={"iconfont icon-search"} style={{ position: "relative", left: "20px" }}></span>
                    {/* <WingBlank> */}
                    <Carousel className="my-carousel"
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay
                        infinite
                        autoplayInterval={5000}
                        style={{ width: '64vw', borderWidth: '1px', borderColor: '#f25555', borderStyle: 'solid', padding: '8px', borderRadius: '10px', paddingLeft: '30px', display: "inline-block" }}

                    >

                        <div className="v-item" style={{ fontSize: '14px', color: '#999' }} onClick={tiaozhuan}>大家都在搜“画手表格”</div>
                        <div className="v-item" style={{ fontSize: '14px', color: '#999' }} onClick={tiaozhuan}>大家都在搜“放假表情包”</div>
                        <div className="v-item" style={{ fontSize: '14px', color: '#999' }} onClick={tiaozhuan}>大家都在搜“沉默的真相”</div>
                        <div className="v-item" style={{ fontSize: '14px', color: '#999' }} onClick={tiaozhuan}>大家都在搜“拼接壁纸”</div>
                        <div className="v-item" style={{ fontSize: '14px', color: '#999' }} onClick={tiaozhuan}>大家都在搜“模糊女头”</div>
                        <div className="v-item" style={{ fontSize: '14px', color: '#999' }} onClick={tiaozhuan}>大家都在搜“鱼鱼气泡水”</div>
                        <div className="v-item" style={{ fontSize: '14px', color: '#999' }} onClick={tiaozhuan}>大家都在搜“月亮背景图”</div>
                    </Carousel>
                    {/* </WingBlank> */}
                </div>
                <div style={{ float: "right", paddingRight: "3%" }}><span className={"iconfont icon-saoma"} style={{ fontSize: "36px", lineHeight: "50px", color: "orange" }}></span></div>
            </div>

            {/* 下面的内容 */}
            <div>
                <div style={{ display: "inline-block", width: "20vw", }} >

                    <Tabs tabs={aaa}
                        initialPage={'1'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onChange={(tab, index) => { bbb(tab, index) }}
                        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        renderTabBar={aaa => <Tabs.DefaultTabBar {...aaa} page={20} />}>
                        {
                            aaa.map(item => {
                                return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                                    {item}
                                </div>
                            })
                        }
                    </Tabs>

                </div>
                <div style={{ display: "inline-block", width: "76vw", float: "right" }}>
                    {/* <Suspense fallback={<div>loading...</div>}> */}
                    <Switch>
                        <Route path="/discovery/home/home" component={Disright}></Route>
                        <Route path="/discovery/home/other/:name" component={Disright1}></Route>
                        <Redirect from="/discovery/home" to="/discovery/home/home" exact />
                    </Switch>
                    {/* </Suspense> */}
                </div>
            </div>
        </div >
    )
}
export default Discovery
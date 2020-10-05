import React from 'react';
import request from "../../utils/request"
import { NavBar, SearchBar, Button } from 'antd-mobile';
import "./search1.css"
function Login(props) {

    request.get("/list/by_search", {
        kw: "动漫"
    }).then(res => {
        console.log(res)
    })

    const tiaozhuang = (ee) => {
        props.history.push('/discovery/search/list/' + ee)
    }

    const list = ["你的国庆头像", "ios14桌面布局", "拯救国庆剧荒", "兔子头像", "库洛米表情包", "莫兰迪色壁纸", "半是蜜糖半是伤", "周游水星", "张艺兴"]

    const chacha = () => {
        let aa = document.querySelector(".search1_input .am-search-value").value;
        props.history.push('/discovery/search/list/' + aa)
    }

    // const { getFieldProps } = props.form;
    return (
        <div>
            <NavBar
                mode="light"
                icon={<i className="iconfont icon-arrow-left" style={{ color: "#222", fontSize: "24px" }}></i>}
                onLeftClick={() => props.history.go(-1)}
                rightContent={[
                    <span style={{ color: "#e00" }} onClick={chacha}>搜索</span>
                ]}
            >
                <SearchBar
                    // value={this.state.value}
                    // value={"水墨背景图"}
                    style={{ width: "70vw", backgroundColor: "#fff" }}
                    className="search1_input"
                    placeholder="Search"
                    placeholder="水墨背景图"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    // onFocus={() => console.log('onFocus')}
                    // onBlur={() => console.log('onBlur')}
                    showCancelButton={true}
                    cancelText={" "}

                // onChange={this.onChange}
                />
            </NavBar>


            {/* 热门搜索 */}
            <div>
                <div style={{ padding: "14px 1%", color: "#888", fontSize: "16px" }}>热门搜索</div>
                {/* <Button type="ghost" inline size="small" style={{ marginRight: '4px' }} onClick={tiaozhuang(this)}>ghost</Button> */}
                <div style={{ padding: "0 3%" }}>
                    {
                        list.map(item =>
                            <Button type="ghost" inline size="small" style={{ marginRight: '3%', background: "#bbb", color: "#222", marginBottom: "1%" }} onClick={() => tiaozhuang(item)}>{item}</Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Login
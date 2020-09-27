import React from 'react';
import { NavBar, Icon, Carousel, WingBlank, Grid, Tag } from 'antd-mobile';
import axios from 'axios';
const goodsMenu = [{
    icon: '/img/category_flower1.png',
    text: '鲜花',
    path: '/goods/goodslist'
}, {
    icon: '/img/category_flower2.png',
    text: '永生花',
    path: '/goods/goodslist'
}, {
    icon: '/img/category_cake.png',
    text: '蛋糕',
    path: '/goods/goodslist'
}, {
    icon: '/img/category_gift.png',
    text: '礼品',
    path: '/goods/goodslist'
}, {
    icon: '/img/category_chocolate.png',
    text: '其他',
    path: '/goods/goodslist'
}]
const data = Array.from(goodsMenu).map((_val, i) => ({
    icon: _val.icon,
    text: _val.text,
}));

class Goods extends React.Component {
    state = {
        hour: '',
        min: '',
        sec: '',
        tabs: [
            { title: 'First Tab' },
            { title: 'Second Tab' },
        ]
    }
    gotolist = (el, idx) => {
        this.props.history.push('/goods/goodslist/' + el.text + idx);
    }
    componentDidMount() {
        let t;
        let time2 = new Date('2020-10-1 11:00:00').getTime()
        let time1 = Date.now()
        let chaTime = time2 - time1

        let hours = parseInt(chaTime / 1000 / 60 / 60)
        let min = parseInt((chaTime / 1000 / 60) % 60);
        let sec = parseInt((chaTime / 1000) % 60);
        this.setState({
            ...this.state,
            hours: hours,
            min: min,
            sec: sec
        })
        clearInterval(t)
        t = setInterval(() => {
            time1 = Date.now()
            let chaTime = time2 - time1
            let hours = parseInt(chaTime / 1000 / 60 / 60)
            let min = parseInt((chaTime / 1000 / 60) % 60);
            let sec = parseInt((chaTime / 1000) % 60);
            this.setState({
                ...this.state,
                hours: hours,
                min: min,
                sec: sec
            })
        }, 1000)

    }
    render() {
        return (
            <>
                <div>
                    <NavBar
                        mode="light"
                        icon={<img src='/img/logo.jpg' style={{ height: '36px', width: '14vw' }} />}
                        rightContent={<i className='iconfont icon-bangzhu' style={{ color: '#ccc', fontSize: '20px' }}></i>}
                        style={{ position: 'fixed', top: 0, zIndex: '100', width: '100%' }}
                    >
                        <Icon type="search" size='sm' style={{ position: 'absolute', left: '25vw', color: '#f25555' }} />
                        <WingBlank>
                            <Carousel className="my-carousel"
                                vertical
                                dots={false}
                                dragging={false}
                                swiping={false}
                                autoplay
                                infinite
                                style={{ width: '64vw', borderWidth: '1px', borderColor: '#f25555', borderStyle: 'solid', padding: '8px', borderRadius: '10px', paddingLeft: '30px' }}
                            >
                                <div className="v-item" style={{ fontSize: '14px', color: '#999' }}>值呀，给你看有优惠的好东西</div>
                                <div className="v-item" style={{ fontSize: '14px', color: '#999' }}>淘宝前搜卷，下单更值呀</div>
                            </Carousel>
                        </WingBlank>
                    </NavBar>

                    <div style={{ background: 'linear-gradient(to bottom, #fff 10%, #cdcdcd)' }}>
                        <div style={{ height: '45px' }}></div>
                        <Grid data={data} hasLine={false} columnNum='5' style={{ height: '90px' }} onClick={(el, idx) => { this.gotolist(el, idx) }} />

                        <div style={{ background: '#fff', padding: '12px', boxSizing: 'border-box', width: '90vw', height: '35.5vh', marginTop: '10px', margin: '10px auto', borderRadius: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ width: '60%', height: '6.4vh' }}>
                                    <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>拼手速</h3>
                                    <p>本场剩余<b style={{color:'#ee8581'}}>{this.state.hours}</b> 时 <b style={{color:'#ee8581'}}>{this.state.min}</b> 分 <b style={{color:'#ee8581'}}>{this.state.sec}</b> 秒</p>
                                </div>

                                <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        {/* <p style={{ fontWeight: 'bold' }}>11:00</p>
                                        <button style={{ border: 'none', background: '#ee8581', color: '#fff', borderRadius: '10px' }}>进行中</button> */}
                                    </div>

                                    {/* <p style={{ width: '1px', background: '#ccc', height: '100%' }}></p> */}
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><p style={{ fontWeight: 'bold', color: '#777777' }}>11:00</p>
                                        <button style={{ border: 'none', background: '#ee8581', borderRadius: '10px', color: '#fff' }}>进行中</button></div>
                                </div>

                            </div>
                            <div className='pinContain' style={{width:'100%',overflowX:'auto'}}>
                                <div style={{display:'flex',justifyContent:'space-between',width:'90vw'}}>
                                    <div style={{width:'34vw',marginRight:'10px',border:'solid 1px #ebebeb',borderRadius:'10px',height:'24.8vh',background:'url("/img/pin1.jpg") no-repeat',backgroundSize:'34vw 17vh'}}>
                                        {/* <img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/> */}
                                        <div style={{height:'16vh'}}></div>
                                        <p style={{padding:'6px',color:'#444444',boxSizing:'border-box',width:'34vw',fontSize:'12px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>好趣味麻辣脆锅巴办公室桶装零食品小吃营养休闲小米锅巴</p>
                                        <Tag data-seed="logId" style={{marginLeft:'5px',background:'#ec655f',border:'none',color:'#fff',transform:'scale(0.85)'}} small={true}>券10元</Tag>
                                        <p style={{color:'#ec655f',fontSize:'12px',paddingLeft:'6px',transform:'scale(0.8)'}}>到手价<strong style={{fontSize:'18px'}}>￥5.49</strong></p>
                                    </div>
                                    <div style={{width:'34vw',marginRight:'10px',border:'solid 1px #ebebeb',borderRadius:'10px',height:'24.8vh',background:'url("/img/pin1.jpg") no-repeat',backgroundSize:'34vw 17vh'}}>
                                        {/* <img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/> */}
                                        <div style={{height:'16vh'}}></div>
                                        <p style={{padding:'6px',color:'#444444',boxSizing:'border-box',width:'34vw',fontSize:'12px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>好趣味麻辣脆锅巴办公室桶装零食品小吃营养休闲小米锅巴</p>
                                        <p style={{color:'#ec655f',fontSize:'12px',paddingLeft:'6px'}}>到手价<strong style={{fontSize:'18px'}}>￥5.49</strong></p>
                                    </div>
                                    <div style={{width:'34vw',border:'solid 1px #ebebeb',borderRadius:'10px',height:'24.8vh',background:'url("/img/pin1.jpg") no-repeat',backgroundSize:'34vw 17vh'}}>
                                        {/* <img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/> */}
                                        <div style={{height:'16vh'}}></div>
                                        <p style={{padding:'6px',color:'#444444',boxSizing:'border-box',width:'34vw',fontSize:'12px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>好趣味麻辣脆锅巴办公室桶装零食品小吃营养休闲小米锅巴</p>
                                        <p style={{color:'#ec655f',fontSize:'12px',paddingLeft:'6px'}}>到手价<strong style={{fontSize:'18px'}}>￥5.49</strong></p>
                                    </div>
                                    <div style={{width:'34vw',border:'solid 1px #ebebeb',borderRadius:'10px',height:'24.8vh',background:'url("/img/pin1.jpg") no-repeat',backgroundSize:'34vw 17vh'}}>
                                        {/* <img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/> */}
                                        <div style={{height:'16vh'}}></div>
                                        <p style={{padding:'6px',color:'#444444',boxSizing:'border-box',width:'34vw',fontSize:'12px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>好趣味麻辣脆锅巴办公室桶装零食品小吃营养休闲小米锅巴</p>
                                        <p style={{color:'#ec655f',fontSize:'12px',paddingLeft:'6px'}}>到手价<strong style={{fontSize:'18px'}}>￥5.49</strong></p>
                                    </div>
                                    <div style={{width:'34vw',border:'solid 1px #ebebeb',borderRadius:'10px',height:'24.8vh',background:'url("/img/pin1.jpg") no-repeat',backgroundSize:'34vw 17vh'}}>
                                        {/* <img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/> */}
                                        <div style={{height:'16vh'}}></div>
                                        <p style={{padding:'6px',color:'#444444',boxSizing:'border-box',width:'34vw',fontSize:'12px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>好趣味麻辣脆锅巴办公室桶装零食品小吃营养休闲小米锅巴</p>
                                        <p style={{color:'#ec655f',fontSize:'12px',paddingLeft:'6px'}}>到手价<strong style={{fontSize:'18px'}}>￥5.49</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#fff', width: '90vw', height: '22.3vh', marginTop: '10px', margin: '10px auto', borderRadius: '20px' }}>
                            <div></div>
                        </div>
                    </div>

                </div>

            </>
        )
    }

}
export default Goods
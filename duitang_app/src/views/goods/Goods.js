import React from 'react';
import { NavBar, Icon, Carousel, WingBlank, Grid, Tag, List } from 'antd-mobile';
import axios from 'axios';

const Item = List.Item;
const Brief = Item.Brief;
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
    // state={
    //   hour:'',
    //   min:'',
    //   sec:''
    state = {
        hour: '',
        min: '',
        sec: '',
        tabs: [
            { title: 'First Tab' },
            { title: 'Second Tab' },
        ],
        pinShow: [],
        jingXuanMenu: [],
        youhui: '',
        data: ['1', '2', '3'],
        imgHeight: '12vh',
    }
    gotolist = (el, idx) => {
        console.log(this.props, el, idx);
        this.props.history.push('/goods/goodslist/' + el.text + idx);
    }
    async componentDidMount() {
        const { data } = await axios.post('http://120.24.63.27:2001/api/goods/list')
        this.setState({
            ...this.state,
            pinShow: data.data
        })
        const { data: result } = await axios.post('http://120.24.63.27:2001/api/goods/list', { page: 2, size: 20 })

        this.setState({
            ...this.state,
            jingXuanMenu: result.data,
            youhui: parseInt((Math.random() * 20) + 1)
        })

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
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
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

                    <div style={{ background: 'linear-gradient(to bottom, #fff , #cdcdcd)', paddingBottom: '30px' }}>
                        <div style={{ height: '45px' }}></div>
                        <Grid data={data} hasLine={false} columnNum='5' style={{ height: '90px' }} onClick={(el, idx) => { this.gotolist(el, idx) }} />

                        <div style={{ background: '#fff', padding: '12px', boxSizing: 'border-box', width: '90vw', height: '35.5vh', marginTop: '10px', margin: '10px auto', borderRadius: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ width: '60%', height: '6.4vh' }}>
                                    <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>拼手速</h3>
                                    <p>本场剩余<b style={{ color: '#ee8581' }}>{this.state.hours}</b> 时 <b style={{ color: '#ee8581' }}>{this.state.min}</b> 分 <b style={{ color: '#ee8581' }}>{this.state.sec}</b> 秒</p>
                                </div>

                                <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <p style={{ fontWeight: 'bold' }}>11:00</p>
                                        <button style={{ border: 'none', background: '#ee8581', color: '#fff', borderRadius: '10px' }}>进行中</button>
                                    </div>

                                    <p style={{ width: '1px', background: '#ccc', height: '100%' }}></p>

                            </div>
                            <div className='pinContain' style={{ width: '100%', overflowX: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90vw' }}>
                                    {
                                        this.state.pinShow.map(item => <div onClick={() => this.props.history.push('/goods/goodsdetails/' + item.ItemCode)} style={{ width: '34vw', marginRight: '10px', border: 'solid 1px #ebebeb', borderRadius: '10px', height: '24.8vh', background: `url(${'http://120.24.63.27:2005/img/' + item.ItemCode + '.jpg_220x240.jpg'}) no-repeat`, backgroundSize: '34vw 17vh' }}>
                                            {/* <img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/> */}
                                            <div style={{ height: '17vh' }}></div>
                                            <p style={{ padding: '0 6px', color: '#444444', boxSizing: 'border-box', width: '34vw', fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.Cpmc}</p>
                                            <Tag data-seed="logId" style={{ marginLeft: '5px', background: '#ec655f', border: 'none', color: '#fff', transform: 'scale(0.85)' }} small={true}>券10元</Tag>
                                            <p style={{ color: '#ec655f', fontSize: '12px', transform: 'scale(0.9)' }}>到手价<strong style={{ fontSize: '18px' }}>￥{item.Price}</strong></p>
                                        </div>)
                                    }

                                </div>
                            </div>
                        </div>

                        <div style={{ width: '90vw', height: '22.3vh', marginTop: '10px', margin: '10px auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                                <div style={{ width: '49.7%', borderRadius: '20px 0 0 0', background: '#fff url("/img/dapai_03.jpg") no-repeat right center', backgroundSize: 'contain', padding: '12px', boxSizing: 'border-box' }}>
                                    <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>大额券</h3>
                                    <p style={{ fontSize: '12px', color: '#d6d6d6' }}>领券省超多</p>
                                </div>

                                <div style={{ width: '49.7%', display: 'flex', justifyContent: 'space-between', background: '#fff url("/img/dapai_06.jpg") no-repeat right center', backgroundSize: 'contain', borderRadius: '0 20px 0 0' }}>
                                    <div style={{ background: '#fff', alignItems: 'center', padding: '12px', boxSizing: 'border-box' }}>
                                        <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>口碑Top10</h3>
                                        <p style={{ fontSize: '12px', color: '#d6d6d6' }}>大家都在买</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ background: '#fff', width: '100%', height: '12vh', borderRadius: '0 0 20px 20px' }}>
                                <WingBlank>
                                    <Carousel
                                        autoplay={false}
                                        infinite
                                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                        afterChange={index => console.log('slide to', index)}
                                        style={{ height: '12vh' }}
                                        dots={false}
                                        autoplay={false}
                                    >
                                        {this.state.data.map(val => (
                                            <>
                                                <div style={{ display: 'flex', marginTop: '6px' }}>
                                                    <img style={{ width: '30%', height: '10vh', display: 'inline-block', marginRight: '10px' }} src="https://c-ssl.duitang.com/uploads/item/202009/25/20200925163316_LKWmj.jpeg" alt="" />
                                                    <span style={{ verticalAlign: 'middle', fontSize: '12px', color: '#565656' }}>谁说爱吃月饼是“中老年”喜好？这些月饼，今年中秋一定要吃到</span>
                                                </div>
                                            </>
                                        ))}
                                    </Carousel>
                                </WingBlank>
                            </div>


                        </div>

                        <div className="jingXuan" style={{ width: '100%', background: '#fff', padding: '10px 4.8vw 0', boxSizing: 'border-box' }}>
                            <h2 style={{ fontSize: '16px' }}>值呀精选</h2>
                            <p style={{ fontSize: '12px', color: '#ababab', margin: '6px 0px' }}>这些优惠值得看！每天更新哦</p>
                            {
                                this.state.jingXuanMenu.map(item => <Item align="top" thumb={'http://120.24.63.27:2005/img/' + item.ItemCode + '.jpg_220x240.jpg'} style={{ width: '100%' }} multipleLine onClick={() => { this.props.history.push('/goods/goodsdetails/' + item.ItemCode + '?youhui=' + this.state.youhui) }}>
                                    {item.Instro}
                                    <Brief><strong style={{ color: '#ee8581', fontSize: '16px', marginRight: '8px' }}>￥{item.Price}</strong><del style={{ color: '#d6d6d6', fontSize: '12px' }}>原价 ￥{item.LinePrice}</del></Brief>
                                    <div style={{ width: '100%', boxSizing: 'border-box', paddingRight: '14px', display: 'flex', justifyContent: 'space-between' }}><p style={{ background: '#ec655f', width: '60px', color: '#fff', borderRadius: '4px', textAlign: 'center' }}>领{this.state.youhui}元券</p><span style={{ color: '#d6d6d6', fontSize: '12px' }}>天猫</span></div>
                                </Item>)
                            }


                        </div>
                    </div>

                    <div style={{ width: '90vw', height: '22.3vh', marginTop: '10px', margin: '10px auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                            <div style={{ width: '49.7%', borderRadius: '20px 0 0 0', background: '#fff url("/img/dapai_03.jpg") no-repeat right center', backgroundSize: 'contain', padding: '12px', boxSizing: 'border-box' }}>
                                <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>大额券</h3>
                                <p style={{ fontSize: '12px', color: '#d6d6d6' }}>领券省超多</p>
                            </div>

                            <div style={{ width: '49.7%', display: 'flex', justifyContent: 'space-between', background: '#fff url("/img/dapai_06.jpg") no-repeat right center', backgroundSize: 'contain', borderRadius: '0 20px 0 0' }}>
                                <div style={{ background: '#fff', alignItems: 'center', padding: '12px', boxSizing: 'border-box' }}>
                                    <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>口碑Top10</h3>
                                    <p style={{ fontSize: '12px', color: '#d6d6d6' }}>大家都在买</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: '#fff', width: '100%', height: '12vh', borderRadius: '0 0 20px 20px' }}>
                            <WingBlank>
                                <Carousel
                                    autoplay={false}
                                    infinite
                                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                    afterChange={index => console.log('slide to', index)}
                                    style={{ height: '12vh' }}
                                    dots={false}
                                    autoplay={false}
                                >
                                    {this.state.data.map(val => (
                                        <>
                                            <div style={{ display: 'flex', marginTop: '6px' }}>
                                                <img style={{ width: '30%', height: '10vh', display: 'inline-block', marginRight: '10px' }} src="https://c-ssl.duitang.com/uploads/item/202009/25/20200925163316_LKWmj.jpeg" alt="" />
                                                <span style={{ verticalAlign: 'middle', fontSize: '12px', color: '#565656' }}>谁说爱吃月饼是“中老年”喜好？这些月饼，今年中秋一定要吃到</span>
                                            </div>
                                        </>
                                    ))}
                                </Carousel>
                            </WingBlank>
                        </div>
                    </div>

                    {/* <div className="jingXuan" style={{ width: '100%', background: '#fff',   padding: '10px 4.8vw 0', boxSizing: 'border-box' }}>
                        <h2 style={{ fontSize: '16px' }}>值呀精选</h2>
                        <p style={{ fontSize: '12px', color: '#ababab', margin: '6px 0px' }}>这些优惠值得看！每天更新哦</p>
                        {
                            this.state.jingXuanMenu.map(item => <Item align="top" thumb={'http://120.24.63.27:2001/img/' + item.ItemCode + '.jpg_220x240.jpg'} style={{ width: '100%' }} multipleLine onClick={() => { this.props.history.push('/goods/goodsdetails/' + item.ItemCode + '?youhui=' + this.state.youhui) }}>
                                {item.Instro}
                                <Brief><strong style={{ color: '#ee8581', fontSize: '16px', marginRight: '8px' }}>￥{item.Price}</strong><del style={{ color: '#d6d6d6', fontSize: '12px' }}>原价 ￥{item.LinePrice}</del></Brief>
                                <div style={{ width: '100%', boxSizing: 'border-box', paddingRight: '14px', display: 'flex', justifyContent: 'space-between' }}><p style={{ background: '#ec655f', width: '60px', color: '#fff', borderRadius: '4px', textAlign: 'center' }}>领{this.state.youhui}元券</p><span style={{ color: '#d6d6d6', fontSize: '12px' }}>天猫</span></div>
                            </Item>)
                        }


                    </div> */}
                </div>


                </div>
            </>
        )
    }

}
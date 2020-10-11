import React from 'react';
import { Tabs, SearchBar, WingBlank, Carousel, Button } from 'antd-mobile';



class Home extends React.Component {
    state = {
        value: '',
        tabs: [
            { title: '关注' },
            { title: '推荐' },
            { title: '热榜' },
            { title: '少女感' },
            { title: '新鲜' },
        ],
        hotlist:[
            { title: '人气榜' },
            { title: '新星榜' },
            { title: '热评榜' },
        ],
        hotlistIdx:0,
        weizhi: 27,
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    changeTag=(a,idx)=>{
        this.setState({...this.state,hotlistIdx:idx});
        console.log(a,idx,this.state,'122');
        if(this.state.hotlistIdx==idx){ console.log(this.state);}
    }
    onChange = (tab, value) => {
        console.log(tab, value)
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                data: ['/img/recomend1.png', '/img/recomend2.png', '/img/recomend3.png'],
            });
        }, 100);
    }
    render() {
        return (
            <div className="content">
                <SearchBar placeholder="Search" maxLength={8} />
                <Tabs tabs={this.state.tabs}
                    initialPage={1}
                    tabBarUnderlineStyle={{ border: "1px #f25555 solid", width: "5%", left: this.state.weizhi + "%" }}
                    tabBarActiveTextColor="#f25555"
                    style={{ marginBottom: '10px' }}
                    onChange={(tab, index) => { this.setState({ ...this.state, weizhi: index * 20 + 7 }) }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '578px' }}>
                        <div style={{ background: 'url("/img/focus_bg.jpg")center center no-repeat', width: '100%', height: '100%', backgroundSize: '414px 736px', display: 'block' }}>
                            <Button style={{ background: '#f25555', borderRadius: '25px', color: '#fff', fontSize: '12px', width: '42vw', position: 'fixed', bottom: 0, left: 0, top: 0, right: 0, margin: 'auto' }} onClick={() => { console.log('跳转到关注达人') }}>去关注堆糖达人</Button>
                        </div>
                    </div>
                    <div style={{ alignItems: 'center', justifyContent: 'center', height: '1500px' }}>
                        <div style={{ background: '#fff', padding: '10px 0' }}>
                            <WingBlank style={{ margin: "0 auto", width: '85vw' }}>
                                <Carousel
                                    autoplay={false}
                                    infinite
                                    autoplay={true}
                                    dots={true}
                                    dotStyle={{ background: 'transparent', border: 'solid 1px #fff' }}
                                    dotActiveStyle={{ background: '#f25555' }}
                                >
                                    {this.state.data.map(val => (
                                        <a
                                            key={val}
                                            style={{ display: 'inline-block', width: '100%', height: '20vh' }}
                                        >
                                            <img
                                                src={val}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                    window.dispatchEvent(new Event('resize'));
                                                    // this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))}
                                </Carousel>
                            </WingBlank>
                        </div>
                        <div className='dynamic' style={{ marginBottom: '10px', width: '100%', background: '#fff', padding: '2.1vw 4.5vh' }}>
                            <dl style={{ display: 'flex' }}>
                                <dt style={{ width: '8vw', marginRight: '10px' }}><img style={{ width: '100%', height: '100%', borderRadius: '8vw' }} src='/img/pin1.jpg' alt='' /></dt>
                                <dd>
                                    <h5 className="username">雯雯114</h5>
                                    <h6 className="hotContent">热门内容</h6>
                                </dd>
                            </dl>
                            <p style={{ color: '#4d4d4d', marginBottom: '6px' }}>鱼鱼气泡水</p>
                            <div style={{ width: '100%', height: '20vh', background: 'pink' }}></div>
                            <p style={{ color: '#c4c4c4' }}><span style={{ marginRight: '40px' }}><i style={{ fontSize: '20px' }} className='iconfont icon-dianzan1'></i>33</span><span><i style={{ fontSize: '14px' }} className='iconfont icon-pinglun'></i>2</span><span><i style={{ float: 'right', fontWeight: 'bold' }} className='iconfont icon-gengduo'></i></span></p>
                        </div>
                        <div className='dynamic' style={{ background: '#fff', marginBottom: '20px', width: '100%', padding: '2.1vw 4.5vh' }}>
                            <dl style={{ display: 'flex' }}>
                                <dt style={{ width: '8vw', marginRight: '10px' }}><img style={{ width: '100%', height: '100%', borderRadius: '8vw' }} src='/img/pin1.jpg' alt='' /></dt>
                                <dd>
                                    <h5 className="username">雯雯114</h5>
                                    <h6 className="hotContent">热门内容</h6>
                                </dd>
                            </dl>
                            <p style={{ color: '#4d4d4d', marginBottom: '6px' }}>鱼鱼气泡水</p>
                            <div style={{ width: '100%', height: '20vh', background: 'pink' }}></div>
                            <p style={{ color: '#c4c4c4' }}><span style={{ marginRight: '40px' }}><i style={{ fontSize: '20px' }} className='iconfont icon-dianzan1'></i>33</span><span><i style={{ fontSize: '14px' }} className='iconfont icon-pinglun'></i>2</span><span><i style={{ float: 'right', fontWeight: 'bold' }} className='iconfont icon-gengduo'></i></span></p>
                        </div>
                    </div>
                    <div className='hotlist' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',padding:'0 20px', backgroundColor: '#fff' }}>
                        <Tabs tabs={this.state.hotlist}
                            initialPage={1}
                            tabBarActiveTextColor='#f25555'
                            tabBarInactiveTextColor='#ccc'
                            tabBarUnderlineStyle={{border:'solid 1px transparent'}}
                            onTabClick={this.changeTag}
                        >
                            <div style={{ backgroundColor: '#fff',height:'2000px'}}>
                                
                                <div style={{display:'flex',width:'100%',padding:'20px 16px',borderBottom:'solid 1px #f3f3f3'}}>
                                    <h6 style={{color:'#f25555'}}>1</h6>
                                    <div className='renQiCon' style={{display:'flex',width:'100%'}}>
                                        <div className='renQiImg' style={{width:'100px',margin:'0 16px'}}><img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/></div>
                                        <div className='renQiMsg' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%'}}>
                                            <div>
                                                <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                                                    <dl style={{display:'flex'}}>
                                                        <dt><img src='' alt='' /></dt>
                                                        <dd style={{fontSize:'12px'}}>惊醒火山</dd>
                                                    </dl>
                                                    <button style={{border:'solid 1px #f25555',background:'#fff',color:'#f25555',borderRadius:'12px',fontSize:'12px',padding:'4px 12px'}}>关注</button>
                                                </div>
                                                <h5 style={{fontSize:'14px'}}>jennie可爱~ /小黄君</h5>
                                            </div>
                                            <p style={{color:'#f25555'}}><i className='iconfont icon-hot-fill'></i>2.32w</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display:'flex',width:'100%',padding:'20px 16px',borderBottom:'solid 1px #f3f3f3'}}>
                                    <h6 style={{color:'#f25555'}}>1</h6>
                                    <div className='renQiCon' style={{display:'flex',width:'100%'}}>
                                        <div className='renQiImg' style={{width:'100px',margin:'0 16px'}}><img src='/img/pin1.jpg' alt='' style={{width:'100%'}}/></div>
                                        <div className='renQiMsg' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%'}}>
                                            <div>
                                                <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                                                    <dl style={{display:'flex'}}>
                                                        <dt><img src='' alt='' /></dt>
                                                        <dd style={{fontSize:'12px'}}>惊醒火山</dd>
                                                    </dl>
                                                    <button style={{border:'solid 1px #f25555',background:'#fff',color:'#f25555',borderRadius:'12px',fontSize:'12px',padding:'4px 12px'}}>关注</button>
                                                </div>
                                                <h5 style={{fontSize:'14px'}}>jennie可爱~ /小黄君</h5>
                                            </div>
                                            <p style={{color:'#f25555'}}><i className='iconfont icon-hot-fill'></i>2.32w</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                新星榜
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                热评榜
                            </div>
                        </Tabs>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of 4 tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of5 tab
                    </div>
                </Tabs>


            </div>
        )
    }

}
export default Home
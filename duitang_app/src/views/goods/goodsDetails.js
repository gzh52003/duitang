import React from 'react';
import { NavBar, Icon,Toast,Modal } from 'antd-mobile';
import { connect } from 'react-redux'
import axios from 'axios'

const alert = Modal.alert;
class goodsDetails extends React.PureComponent {
    state = {
        goodsDetailsDese: [],
        money: ''
    }

    async componentDidMount() {
        this.props.dispatch({ type: 'tabbar', show: true })
        const { id } = this.props.match.params
        const { data } = await axios.get('http://120.24.63.27:2001/api/goods/single/' + id)
        // console.log(data);
        this.setState({
            goodsDetailsDese: data.data
        })
        this.setState({
            ...this.state,
            money: parseInt((Math.random() * 20) + 1)
        })
    }
    componentWillUnmount() {
        this.props.dispatch({ type: 'tabbar', show: true })
    }
    render() {
        const { ItemCode, Instro, Price, Cpmc, LinePrice, tag_promo } = this.state.goodsDetailsDese
        return (
            <>
                <div className="content" style={{ background: '#fff', paddingBottom: '20px' }}>
                    <NavBar
                        mode="light"
                        icon={<i className='iconfont icon-arrow-left' style={{ color: '#333', fontSize: '20px' }}></i>}
                        onLeftClick={() => this.props.history.go(-1)}
                        rightContent={[
                            <Icon key="1" type="ellipsis" style={{ color: '#333' }} onClick={() => console.log('000')} />,
                        ]}
                    >好券详情</NavBar>
                    <div className='goodspic' style={{ width: '100%' }}>
                        <img src={'http://120.24.63.27:2005/img/' + ItemCode + '.jpg_220x240.jpg'} alt='' style={{ width: '100%' }} />
                    </div>
                    <h3 style={{ fontSize: '18px', paddingLeft: '20px', paddingBottom: '8px' }}>{Instro}</h3>
                    <h6 style={{ fontSize: '14px', paddingLeft: '20px', paddingBottom: '8px', color: '#555' }}>{Cpmc}</h6>
                    <p style={{ width: '100%', paddingLeft: '20px', paddingBottom: '8px', paddingRight: '20px', boxSizing: 'border-box' }}><b style={{ marginRight: '20px', fontSize: '18px', color: '#f25555' }}>￥{Price}</b><span style={{ color: '#ccc' }}>原价￥<del>{LinePrice}</del></span></p>
                    <p style={{ paddingLeft: '20px', paddingBottom: '8px', color: '#777' }}>天猫&ensp;|&ensp;{tag_promo}</p>
                    <div style={{ with: '100%', padding: '10px', background: '#f8d9de', height: '20px', marginLeft: '20px', marginRight: '20px', borderBottom: '1px solid pink', display: 'flex', justifyContent: 'space-between' }}>
                        <strong style={{ fontWeight: 'normal' }}>优惠信息</strong>
                        <button style={{ height: '20px', width: '70px', fontSize: '10px', background: '#f25555', border: 'none', color: '#fff', borderRadius: '5px' }} onClick={()=>window.location.href="https://www.taobao.com/"} inline>领{this.state.money}元券</button>
                    </div>
                </div>

                <div style={{ width: '100%', height: '50px', borderTopColor: '#e4e4e4', borderTopStyle: 'solid', borderTopWidth: '1px', background: '#fff', position: 'fixed', bottom: '0', display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ width: '50%', textAlign: 'center', lineHeight: '50px' }}>领券立省{this.state.money}元</p>
                    <button style={{ width: '50%', background: '#f25555', color: '#fff', border: 'none' }} onClick={() =>
                            alert('提示', '是否跳转淘宝', [
                            { text: '取消', onPress: () =>
                            new Promise((resolve) => {
                              Toast.info('好的，已经取消了', 1);
                              setTimeout(resolve, 1000);
                            })},
                            {
                                text: '确定',
                                onPress: () =>
                                    new Promise(() => {
                                        window.location.href="https://www.taobao.com/"
                                    }),
                            },
                        ])
                    }>领券购买</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        hidden: state.hidden,
    }
}
goodsDetails = connect(mapStateToProps)(goodsDetails)
export default goodsDetails
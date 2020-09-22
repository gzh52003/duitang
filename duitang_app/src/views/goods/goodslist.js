import React from 'react';
import { NavBar, List } from 'antd-mobile';
import { connect } from 'react-redux'

const Item = List.Item;
const Brief = Item.Brief;
class Goodslist extends React.Component {
    componentWillMount() {
        this.props.dispatch({ type: 'tabbar', show: true })
        console.log(this.props, 123);
    }
    componentWillUnmount() {
        this.props.dispatch({ type: 'tabbar', show: false })
    }
    render() {
        let { id } = this.props.match.params
        id = id.substring(0, id.length - 1)

        return (
            <>
                <NavBar
                    mode="light"
                    icon={<i className='iconfont icon-arrow-left' style={{ color: '#333', fontSize: '20px' }}></i>}
                    onLeftClick={() => {
                        return this.props.history.push('/goods')
                    }}
                    style={{ fontSize: '12px' }}
                >{id}</NavBar>

                <List renderHeader={() => <img src='https://img02.hua.com/slider/18_youflower_m.jpg' alt='' style={{width:'100%'}}/>} className="my-list">
                    <Item  align="top" thumb="https://img02.hua.com/slider/18_youflower_m.jpg" multipleLine>
                    韩式系列/慢慢喜欢你.艾莎玫瑰16枝韩式系列/慢慢喜欢你.艾莎玫瑰16枝 <Brief style={{color:'#f25555',fontSize:'12px'}}>到手<span style={{color:'#f25555',fontWeight:'bold',fontSize:'18px'}}>￥6.8</span></Brief>
                    </Item>
                </List>
            </>
        )
    }

}
const mapStateToProps = function (state) {
    return {
        hidden: state.hidden,
    }
}
Goodslist = connect(mapStateToProps)(Goodslist)
export default Goodslist
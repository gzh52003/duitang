import React from 'react';


import { NavBar, Icon,Carousel, WingBlank,Grid } from 'antd-mobile';
const goodsMenu=[{
    icon:'/img/category_flower1.png',
    text:'鲜花',
    path:'/goods/goodslist'
},{
    icon:'/img/category_flower2.png',
    text:'永生花',
    path:'/goods/goodslist'
},{
    icon:'/img/category_cake.png',
    text:'蛋糕',
    path:'/goods/goodslist'
},{
    icon:'/img/category_gift.png',
    text:'礼品',
    path:'/goods/goodslist'
},{
    icon:'/img/category_chocolate.png',
    text:'巧克力',
    path:'/goods/goodslist'
}]
const data = Array.from(goodsMenu).map((_val, i) => ({
    icon: _val.icon,
    text: _val.text,
  }));

class Goods extends React.Component {
    state={
      
    }
    gotolist=(el,idx)=>{
        console.log(this.props,el,idx);
        this.props.history.push('/goods/goodslist/'+el.text+idx);
    }
    
    render() {
        return (
            <>
                <div>
                <NavBar
                    mode="light"
                    icon={<img src='/img/logo.jpg' style={{  height: '36px' }} />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={<i className='iconfont icon-bangzhu' style={{color:'#ccc',fontSize:'20px'} }></i>}
                    style={{position:'fixed',top:0,zIndex:'100'}}
                >
                    <Icon type="search" size='sm' style={{position:'absolute',left:'100px',color:'#f25555'}} />
                    <WingBlank>
                        <Carousel className="my-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                            style={{width:'240px',borderWidth:'1px',borderColor:'#f25555',borderStyle:'solid',padding:'8px',borderRadius:'10px',paddingLeft:'30px'}}
                            
                        >
                            
                            <div className="v-item" style={{fontSize:'14px',color:'#999'}}>值呀，给你看有优惠的好东西</div>
                            <div className="v-item" style={{fontSize:'14px',color:'#999'}}>淘宝前搜卷，下单更值呀</div>
                        </Carousel>
                    </WingBlank>
                </NavBar>
                
                <div style={{background:'linear-gradient(to bottom, #fff 10%, #cdcdcd)'}}>  
                    <div style={{height:'45px'}}></div>
                    
                    <Grid data={data} hasLine={false} columnNum='5' style={{height:'90px'}} onClick={(el,idx)=>{this.gotolist(el,idx)}} />

                </div>
                </div>
               
            </>
        )
    }

}
export default Goods
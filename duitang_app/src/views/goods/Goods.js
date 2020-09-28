import React from 'react';


import { NavBar, Icon,Carousel, WingBlank,Grid } from 'antd-mobile';
import axios from 'axios';
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
    text:'其他',
    path:'/goods/goodslist'
}]
const data = Array.from(goodsMenu).map((_val, i) => ({
    icon: _val.icon,
    text: _val.text,
  }));

class Goods extends React.Component {
    state={
      hour:'',
      min:'',
      sec:''
    }
    gotolist=(el,idx)=>{
        console.log(this.props,el,idx);
        this.props.history.push('/goods/goodslist/'+el.text+idx);
    }
    componentDidMount(){
        const time =  new Date().toLocaleString()
        console.log(time);
        const data = axios.get('http://10.3.138.24:2006/api/user/batch')
        console.log(data);
    }
    render() {
        return (
            <>
                <div>
                    <NavBar
                        mode="light"
                        icon={<img src='/img/logo.jpg' style={{  height: '36px',width:'14vw' }} />}
                        rightContent={<i className='iconfont icon-bangzhu' style={{color:'#ccc',fontSize:'20px'} }></i>}
                        style={{position:'fixed',top:0,zIndex:'100',width:'100%'}}
                    >
                        <Icon type="search" size='sm' style={{position:'absolute',left:'25vw',color:'#f25555'}} />
                        <WingBlank>
                            <Carousel className="my-carousel"
                                vertical
                                dots={false}
                                dragging={false}
                                swiping={false}
                                autoplay
                                infinite
                                style={{width:'64vw',borderWidth:'1px',borderColor:'#f25555',borderStyle:'solid',padding:'8px',borderRadius:'10px',paddingLeft:'30px'}}
                                
                            >
                                
                                <div className="v-item" style={{fontSize:'14px',color:'#999'}}>值呀，给你看有优惠的好东西</div>
                                <div className="v-item" style={{fontSize:'14px',color:'#999'}}>淘宝前搜卷，下单更值呀</div>
                            </Carousel>
                        </WingBlank>
                    </NavBar>
                    
                    <div style={{background:'linear-gradient(to bottom, #fff 10%, #cdcdcd)'}}>  
                        <div style={{height:'45px'}}></div>
                        <Grid data={data} hasLine={false} columnNum='5' style={{height:'90px'}} onClick={(el,idx)=>{this.gotolist(el,idx)}} />
                        <div style={{background:'#fff',padding:'12px',boxSizing:'border-box',width:'90vw',height:'35.5vh',marginTop:'10px',margin:'10px auto',borderRadius:'20px'}}>
                            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                                <div style={{width:'60%',height:'6.4vh'}}>
                                    <h3 style={{marginBottom:'5px',fontWeight:'bold'}}>拼手速</h3>
                                    <p>本场剩余<b>11</b>时<b>11</b>分<b>11</b>秒</p>
                                </div>
                                <div style={{width:'40%',display:'flex',justifyContent:'space-between'}}>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}><p style={{fontWeight:'bold'}}>11:00</p>
                                    <button style={{border:'none',background:'#ee8581',color:'#fff',borderRadius:'10px'}}>进行中</button></div>
                                    <p style={{width:'1px',background:'#ccc',height:'100%'}}></p>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}><p style={{fontWeight:'bold',color:'#777777'}}>21:00</p>
                                    <button style={{border:'none',background:'#f6f6f6',borderRadius:'10px',color:'#ec7874'}}>进行中</button></div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div style={{background:'#fff',width:'90vw',height:'22.3vh',marginTop:'10px',margin:'10px auto',borderRadius:'20px'}}>
                            <div></div>
                        </div>
                    </div>
                </div>
               
            </>
        )
    }

}
export default Goods
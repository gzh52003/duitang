import React from 'react';
import { Tabs, WhiteSpace, SearchBar,WingBlank,Carousel } from 'antd-mobile';



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
        weizhi: 27,
        data: ['1', '2', '3'],
        imgHeight: 176,
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
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                ...this.state,
              data: ['/img/recomend1.png', '/img/recomend2.png', '/img/recomend3.png'],
            });
          }, 100);
    }
    render() {
        console.log(this.state,"fdsacvf");
        return (
            <div className="content">
                <SearchBar placeholder="Search" maxLength={8} />
                <Tabs tabs={this.state.tabs}
                    initialPage={1}
                    tabBarUnderlineStyle={{ border: "1px #f25555 solid", width: "5%", left: this.state.weizhi + "%" }}
                    tabBarActiveTextColor="#f25555"
                    style={{marginBottom:'10px'}}
                    onChange={(tab, index) => { this.setState({ ...this.state,weizhi: index * 20 + 7 }) }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    111111111111111
                    </div>
                    <div style={{ paddingTop:'10px', alignItems: 'center', justifyContent: 'center', height: '1500px', backgroundColor: '#fff' }}>
                        <WingBlank style={{margin:"0 auto"}}>
                            <Carousel
                                autoplay={false}
                                infinite
                                autoplay={true}
                                dots={true}
                                dotStyle={{background:'transparent',border:'solid 1px #fff'}}
                                dotActiveStyle={{background:'#f25555'}}
                                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                afterChange={index => console.log('slide to', index)}
                            >
                                {this.state.data.map(val => (
                                    <a
                                        key={val}
                                        style={{ display: 'inline-block', width: '100%', height:'149px' }}
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
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
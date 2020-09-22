import React from 'react';
import { Tabs, WhiteSpace, SearchBar } from 'antd-mobile';



class Home extends React.Component {
    state = {
        value: ''
    }

    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
   
    render() {
        return (
            <div className="content">  
                <SearchBar
                    value={this.state.value}
                    placeholder="大家都在搜"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                />
                <Tabs 
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                     </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
                

            </div>
        )
    }

}
export default Home
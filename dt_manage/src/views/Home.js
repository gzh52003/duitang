import React from 'react';
import { Row, Col, Card } from 'antd';
// import echartTheme from './../themeLight'
// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';


import request from "../utils/request.js";



class Home extends React.PureComponent {
    state = {
        sixteen: 0,
        seventeen: 0,
        eightteen: 0,
        nineteen: 0,
        sixhuo: 0,
        sevenhuo: 0,
        eigthhuo: 0,
        ninehuo: 0,
        sixfa: 0,
        sevenfa: 0,
        eightfa: 0,
        ninefa: 0,
        aa: true,
    }

    getOption = () => {
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['动漫', '美女', '可爱', '古风', '风景']
            },
            series: [
                {
                    name: '类别',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 435, name: '动漫' },
                        { value: 1010, name: '美女' },
                        { value: 634, name: '可爱' },
                        { value: 535, name: '古风' },
                        { value: 748, name: '风景' }
                    ]
                }
            ]
        };

        return option
    }


    getOption1 = () => {

        let option = {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['product', '注册用户', '活跃用户', '发布用户'],
                source: [
                    { product: '2016', '注册用户': this.state.sixteen, '活跃用户': this.state.sixhuo, '发布用户': this.state.sixfa },
                    { product: '2017 ', '注册用户': this.state.seventeen, '活跃用户': this.state.sevenhuo, '发布用户': this.state.sevenfa },
                    { product: '2018', '注册用户': this.state.eightteen, '活跃用户': this.state.eigthhuo, '发布用户': this.state.eightfa },
                    { product: '2019 ', '注册用户': this.state.nineteen, '活跃用户': this.state.ninehuo, '发布用户': this.state.ninefa }
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [
                { type: 'bar' },
                { type: 'bar' },
                { type: 'bar' }
            ]
        };
        if (this.state.aa) {
            this.setState({
                aa: false
            })
            request.get("/list/search", {
                kw: "头像",
                size: 500,
                page: 1

            }).then((res) => {
                let a = []
                res.data.map(item => {
                    // console.log(item.add_datetime_ts)
                    // let time = new Date(item.add_datetime);
                    item.add_datetime = item.add_datetime.substring(0, 4)
                    if (item.add_datetime === "2016") {
                        // option.dataset.source[0].注册用户 = option.dataset.source[0].注册用户 + 1
                        this.setState({
                            sixteen: this.state.sixteen + 1,
                            sixhuo: this.state.sixhuo + parseInt(Math.random() * 5),
                            sixfa: this.state.sixfa + parseInt(Math.random() * 4)
                        })
                    } else if (item.add_datetime === "2017") {
                        this.setState({
                            seventeen: this.state.seventeen + 1,
                            sevenhuo: this.state.sevenhuo + parseInt(Math.random() * 5),
                            sevenfa: this.state.sevenfa + parseInt(Math.random() * 4)
                        })
                    } else if (item.add_datetime === "2018") {
                        this.setState({
                            eightteen: this.state.eightteen + 1,
                            eigthhuo: this.state.eigthhuo + parseInt(Math.random() * 5),
                            eightfa: this.state.eightfa + parseInt(Math.random() * 4)
                        })
                    } else if (item.add_datetime === "2019") {
                        this.setState({
                            nineteen: this.state.nineteen + 1,
                            ninehuo: this.state.ninehuo + parseInt(Math.random() * 5),
                            ninefa: this.state.ninefa + parseInt(Math.random() * 4)
                        })
                    }
                })

            })

            // console.log(res.data)
            // console.log(option.series[0].data)

        }

        return option
    }

    componentWillMount() {
        // request.get("/list/search", {
        //     kw: "壁纸",
        //     size: 500,
        //     page: 1

        // }).then((res) => {
        //     // console.log(res)
        // })

        // request.get("/list/search", {
        //     kw: "壁纸",
        //     size: 1500,
        //     page: 1
        // }).then((res) => {
        //     console.log(res)
        // })
    }




    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <Card title="用户浏览记录" style={{ background: "#666", border: "1px solid #999" }}>
                            <ReactEcharts option={this.getOption()} theme="Imooc" style={{ height: '400px' }} />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} >
                        <Card title="用户类型" style={{ border: "1px solid #999" }} >
                            <ReactEcharts option={this.getOption1()} theme="Imooc" style={{ height: '400px' }} />
                        </Card>
                    </Col>

                </Row>

            </div >
        )
    }
}


export default Home;
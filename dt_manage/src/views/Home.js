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

class Home extends React.PureComponent {

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
                    { product: '6月', '注册用户': 43.3, '活跃用户': 85.8, '发布用户': 23.7 },
                    { product: '7月 ', '注册用户': 83.1, '活跃用户': 73.4, '发布用户': 35.1 },
                    { product: '8月', '注册用户': 86.4, '活跃用户': 65.2, '发布用户': 42.5 },
                    { product: '9月 ', '注册用户': 72.4, '活跃用户': 53.9, '发布用户': 43.1 }
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                { type: 'bar' },
                { type: 'bar' },
                { type: 'bar' }
            ]
        };
        return option
    }





    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card title="用户浏览记录" style={{ background: "#666", border: "1px solid yellow" }}>
                            <ReactEcharts option={this.getOption()} theme="Imooc" style={{ height: '400px' }} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="用户类型" style={{ background: "#58bc58", border: "1px solid yellow" }}>
                            <ReactEcharts option={this.getOption1()} theme="Imooc" style={{ height: '400px' }} />
                        </Card>
                    </Col>

                </Row>

            </div >
        )
    }
}


export default Home;
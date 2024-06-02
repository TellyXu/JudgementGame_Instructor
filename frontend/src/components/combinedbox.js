import * as echarts from 'echarts';
import { useEffect, useRef } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from "reactstrap";

function BoxEchart({ pData1, name1, keyName1, Xname1, Yname1, pData2, name2, keyName2, Xname2, Yname2 }) {
    const chartRefaBox = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const prepareData = (data, keyName) => {
            const sourceData = data.map(item => item[keyName]);
            const avg = (sourceData.reduce((acc, val) => acc + val, 0) / sourceData.length).toFixed(2);
            const max = Math.max(...sourceData).toFixed(2);
            const min = Math.min(...sourceData).toFixed(2);
            return { sourceData, avg, max, min };
        };

        const data1 = prepareData(pData1, keyName1);
        const data2 = prepareData(pData2, keyName2);

        const option = {
            title: {
                text: `${name1}`,
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    let data = params.seriesName === 'boxplot1' ? data1 : data2;
                    if (params.seriesType === 'boxplot') {
                        return [
                            `${params.seriesName}<br/>`,
                            `Max: ${data.max}<br/>`,
                            `Upper Quartile: ${params.data[4]}<br/>`,
                            `Median: ${params.data[3]}<br/>`,
                            `Lower Quartile: ${params.data[2]}<br/>`,
                            `Min: ${data.min}<br/>`,
                            `Average: ${data.avg}`
                        ].join('');
                    }
                    return `Point Value: ${params.data[1]}`;
                }
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                nameGap: 30,
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name: `${Yname1}/${Yname2}`,
                splitArea: {
                    show: true
                }
            },
            dataset: [
                {
                    // prettier-ignore
                    source: [
                        [...pData1.map(item => item[keyName1])],
                    ]
                },
                {
                    // prettier-ignore
                    source: [
                        [...pData2.map(item => item[keyName1])],

                    ]
                },

                { transform: { type: 'boxplot', config: { itemNameFormatter: Xname1 } } },
                { fromDatasetIndex: 1, fromTransformResult: 1 },
                //
                { transform: { type: 'boxplot', config: { itemNameFormatter: Xname2 } } },
                { fromDatasetIndex: 2, fromTransformResult: 2 }
            ],
            series: [
                { name: 'boxplot1', type: 'boxplot', datasetIndex: 1 },
                { name: 'outlier1', type: 'scatter', datasetIndex: 1 },
                { name: 'boxplot2', type: 'boxplot', datasetIndex: 2 },
                { name: 'outlier2', type: 'scatter', datasetIndex: 2 }
            ]
        };

        if (!chartInstanceRef.current) {
            chartInstanceRef.current = echarts.init(chartRefaBox.current);
        }
        chartInstanceRef.current.setOption(option);
    }, [pData1, pData2]);

    return (
        <div style={{ textAlign: "center" }}>
            <Card style={{ padding: '10px' }}>
                <div ref={chartRefaBox} style={{ height: "300px", width: "480px" }}></div>
            </Card>
        </div>
    );
}

export default BoxEchart;

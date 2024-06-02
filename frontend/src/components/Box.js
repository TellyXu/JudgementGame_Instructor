import * as echarts from 'echarts';
import { useEffect, useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

function BoxEchart({ pData, name, keyName, Xname, Yname}) {
  const chartRefaBox = useRef(null);
  const chartInstanceRef = useRef(null);


  useEffect(() => {
    const sourceData = pData.map(item => item[keyName]);
    const avg = (sourceData.reduce((acc, val) => acc + val, 0) / sourceData.length).toFixed(2);
    const max = Math.max(...sourceData).toFixed(2);
    const min = Math.min(...sourceData).toFixed(2);

    if(name==='survey2'){
      console.log('pData',pData)
    }

    const option = {
      title: [
        {
          text: name,
          left: 'center'
        },
        {
          text: '',// 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
          borderColor: '#999',
          borderWidth: 1,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20
          },
          left: '10%',
          top: '90%'
        }
      ],
      dataset: [
        {
          // prettier-ignore
          source: [
            [...pData.map(item => item[keyName])],
          ]
        },
        {
          transform: {
            type: 'boxplot',
            config: { itemNameFormatter: Xname }
          }
        },
        {
          fromDatasetIndex: 1,
          fromTransformResult: 1
        }
      ],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params) {
          if (params.seriesType === 'boxplot') {
            return [
              `Max: ${max}<br/>`,
              `Upper Quartile: ${params.data[4]}<br/>`,
              `Median: ${params.data[3]}<br/>`,
              `Lower Quartile: ${params.data[2]}<br/>`,
              `Min: ${min}<br/>`,
              `Average: ${avg}`
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
        name: Yname,
        splitArea: {
          show: true
        }
      },
      series: [
        {
          name: 'boxplot',
          type: 'boxplot',
          datasetIndex: 1
        },
        {
          name: 'outlier',
          type: 'scatter',
          datasetIndex: 2
        }
      ]
    };

    if (!chartInstanceRef.current) {
      chartInstanceRef.current = echarts.init(chartRefaBox.current);
    }
    chartInstanceRef.current.setOption(option);

  }, [name, pData]);

  return (
    <div style={{ textAlign: "center" }}>
      <Card style={{ padding: '10px' }}>
        <div ref={chartRefaBox} style={{ height: "300px", width: "480px" }}></div>
      </Card>
    </div>
  );
}

export default BoxEchart;

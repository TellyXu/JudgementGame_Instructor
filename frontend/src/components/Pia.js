import * as echarts from 'echarts';
import { useEffect, useRef } from "react";
import { Card } from "reactstrap";

function Pia({ pData, keyName, tag, filter, isDiyData }) {
  const chartRefPia = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {

    let data = []

    if (!isDiyData) {
      data = [
        { value: pData.filter(item => item[keyName] === filter[0]).length, name: tag[0] },
        { value: pData.filter(item => item[keyName] === filter[1]).length, name: tag[1] }
      ]
    } else {
      if (filter.length === 3) {
        data = [
          { value: pData.filter(item => item[keyName] === filter[0]).length, name: tag[0] },
          { value: pData.filter(item => item[keyName] === filter[1]).length, name: tag[1] },
          { value: pData.filter(item => item[keyName] === filter[2]).length, name: tag[2] },
        ]
      } else {
        data = [
          { value: pData.filter(item => item[keyName] === filter[0]).length, name: tag[0] },
          { value: pData.filter(item => item[keyName] === filter[1]).length, name: tag[1] },
          { value: pData.filter(item => item[keyName] === filter[2]).length, name: tag[2] },
          { value: pData.filter(item => item[keyName] === filter[3]).length, name: tag[3] },
          { value: pData.filter(item => item[keyName] === filter[4]).length, name: tag[4] },
          { value: pData.filter(item => item[keyName] === filter[5]).length, name: tag[5] },
          { value: pData.filter(item => item[keyName] === filter[6]).length, name: tag[6] },
        ]
        if (filter.length === 10) {
          data.push({ value: pData.filter(item => item[keyName] === filter[7]).length, name: tag[7] },)
          data.push({ value: pData.filter(item => item[keyName] === filter[8]).length, name: tag[8] },)
          data.push({ value: pData.filter(item => item[keyName] === filter[9]).length, name: tag[9] },)
        }
      }
    }

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} {b} : {c} ({d}%)",
        fontWeight: 'bold'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data
        }
      ]
    };

    if (!chartInstanceRef.current) {
      chartInstanceRef.current = echarts.init(chartRefPia.current);
    }
    chartInstanceRef.current.setOption(option);

  }, [pData]); // Dependence on pData ensures re-render only when pData changes

  return (
    <div style={{ textAlign: "center" }}>
      <Card>
        <div ref={chartRefPia} style={{ height: "260px", width: filter.length === 10 ? "450px" : "380px", margin:'0 auto' }}></div>
      </Card>
    </div>
  );
}

export default Pia;

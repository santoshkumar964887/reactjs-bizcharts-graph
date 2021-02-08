import React from 'react';
import {
  G2,
  Chart,
  Tooltip,
  Interval,
  Interaction,
  registerTheme,
} from 'bizcharts';
registerTheme('default', {
  defaultColor: '#505050',
  // 颜色序列
  colors10: [
    '#125CCC',
    '#198BFB',
    '#FFC93D',
    '#FF756C',
    '#E86452',
    '#6DC8EC',
    '#945FB9',
    '#FF9845',
    '#1E9493',
    '#FF99C3',
  ],
  geometries: {
    interval: {
      rect: {
        default: {
          style: { fill: '#6DC8EC', fillOpacity: 0.95 },
        },
        active: { style: { stroke: '#5AD8A6', lineWidth: 1 } },
        inactive: { style: { fillOpacity: 0.3, strokeOpacity: 0.3 } },
        selected: {},
      },
    },
  },
});

const data = [
  { name: 'London', month: 'Jan.', avgRainfall: 18.9 },
  { name: 'London', month: 'Feb.', avgRainfall: 28.8 },
  { name: 'London', month: 'Mar.', avgRainfall: 39.3 },
  { name: 'London', month: 'Apr.', avgRainfall: 20.4 },
  { name: 'London', month: 'May', avgRainfall: 47 },
  { name: 'London', month: 'Jun.', avgRainfall: 20.3 },
  { name: 'London', month: 'Jul.', avgRainfall: 24 },
  { name: 'London', month: 'Aug.', avgRainfall: null },
  { name: 'Paris', month: 'Jan.', avgRainfall: 19.9 },
  { name: 'Paris', month: 'Feb.', avgRainfall: 28.8 },
  { name: 'Paris', month: 'Mar.', avgRainfall: 29.3 },
  { name: 'Paris', month: 'Apr.', avgRainfall: null },
  { name: 'Paris', month: 'May', avgRainfall: 67 },
  { name: 'Paris', month: 'Jun.', avgRainfall: null },
  { name: 'Paris', month: 'Jul.', avgRainfall: 23 },
  { name: 'Paris', month: 'Aug.', avgRainfall: null },
];

const scale = {
  month: {
    alias: '月份',
  },
  avgRainfall: {
    alias: '月均降雨量',
  },
};

function Grouped() {
  return (
    <div>
      <Chart
        height={500}
        width={500}
        padding='auto'
        data={data}
        autoFit
        filter={[
          ['avgRainfall', (val) => val != null], // 图表将会只渲染过滤后的数据
        ]}
      >
        <Interval
          adjust={[
            {
              type: 'dodge',
              marginRatio: 0,
            },
          ]}
          color='name'
          position='month*avgRainfall'
        />
        <Tooltip shared />
        <Interaction type='active-region' />
      </Chart>
      {/* <Chart
        height={400}
        scale={scale}
        autoFit
        data={data}
        interactions={['active-region']}
        appendPadding={[20, 0, 0, 0]}
      >
        <Interval position='year*sales' color='year' />
        <Tooltip shared />
      </Chart> */}
    </div>
  );
}

export default Grouped;

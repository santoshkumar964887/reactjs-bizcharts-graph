import React from 'react';
import {
  Chart,
  registerShape,
  Geom,
  Axis,
  Tooltip,
  Interval,
  Interaction,
  Coordinate,
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
          style: { fill: '#6DC8EC', stroke: 'red', fillOpacity: 0.95 },
        },
        active: { style: { stroke: '#5AD8A6', lineWidth: 1 } },
        inactive: { style: { fillOpacity: 0.3, strokeOpacity: 0.3 } },
        selected: {},
      },
    },
  },
});
const data = [
  {
    type: 'section-1',
    value: 20,
  },
  {
    type: 'section-2',
    value: 18,
  },
  {
    type: 'section-3',
    value: 32,
  },
  {
    type: 'section-4',
    value: 15,
  },
]; // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值

const sliceNumber = 0.0; // 自定义 other 的图形，增加两条线

registerShape('interval', 'sliceShape', {
  draw(cfg, container) {
    const points = cfg.points;
    let path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y - sliceNumber]);
    path.push(['L', points[2].x, points[2].y - sliceNumber]);
    path.push(['L', points[3].x, points[3].y]);
    path.push('Z');
    path = this.parsePath(path);
    return container.addShape('path', {
      attrs: {
        fill: cfg.color,
        path: path,
      },
    });
  },
});

class SliderChart extends React.Component {
  render() {
    return (
      <Chart data={data} height={400} width={400} autoFit>
        <Coordinate type='theta' radius={0.8} innerRadius={0.75} />
        <Axis visible={false} />
        <Tooltip showTitle={false} />
        <Interval
          adjust='stack'
          position='value'
          color='type'
          shape='sliceShape'
        />
        <Interaction type='element-single-selected' />
      </Chart>
    );
  }
}

export default SliderChart;

import React from 'react';
import HistogramGraph from './HistogramGraph';
import PieChart from './PieChart';
import HistogramTwoColumnChart from './HistogramTwoColumnChart';
import IndiaChart from './IndiaChart';
import Horizontal from './HorizontalBarChart';
export const Main = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <IndiaChart />
      <HistogramGraph />
      <PieChart />
      <HistogramTwoColumnChart />
      <Horizontal />
    </div>
  );
};

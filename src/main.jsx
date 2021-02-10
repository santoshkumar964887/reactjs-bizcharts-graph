import React from 'react';
import Grouped from './chart1';
import SliderChart from './Chart2';
import Demo from './chart3';
import App from './App';
import Horizontal from './chart4';
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
      <App />
      <Grouped />
      <SliderChart />
      <Demo />
      <Horizontal />
    </div>
  );
};

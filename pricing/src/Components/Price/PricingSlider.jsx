import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PricingSlider = ({ value, onChange }) => {
  return (
    <Slider 
      value={value} 
      onChange={onChange} 
      max={500000}
      step={10000}
      railStyle={{ backgroundColor: '#e5e7eb', height: 8 }}
      trackStyle={{ backgroundColor: '#22c55e', height: 8 }}  // Green color for the track
      handleStyle={{
        borderColor: '#6366f1',
        height: 24,
        width: 24,
        marginLeft: -12,
        marginTop: -8,
        backgroundColor: '#fff',
        border: '2px solid #6366f1',
      }}
    />
  );
};

export default PricingSlider;

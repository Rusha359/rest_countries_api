import React from 'react';
import { Spin } from 'antd';

export const Loading = ({ text }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Spin size="large" />
      <p>{text}</p>
    </div>
  );
};

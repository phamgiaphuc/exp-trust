import React from 'react';
import ExpCard from './ExpCard';

const Certi = () => {
  return (
    <div className='flex flex-col gap-2  items-center'>
      <h1 className='font-bold text-3xl '>Certification</h1>
      <ExpCard
        verify='success'
        title='Semi-Finalist GDSC Hackathon'
        exp='As Fe Dev'
        provider='son'
        date='1/1/2024'
      ></ExpCard>
      <ExpCard
        verify='pending'
        title='Semi-Finalist GDSC Hackathon'
        exp='As Fe Dev'
        provider='son'
        date='1/1/2024'
      ></ExpCard>
    </div>
  );
};

export default Certi;

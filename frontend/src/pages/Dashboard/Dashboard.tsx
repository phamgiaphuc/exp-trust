import React from 'react';
import NavColumn from './NavColumn.tsx';

const Dashboard: React.FC = () => {
  return (
    <div className='w-full h-screen flex flex-col items-start justify-center bg-[#E2E2E2]'>
      <NavColumn />
    </div>
  );
};
export default Dashboard;

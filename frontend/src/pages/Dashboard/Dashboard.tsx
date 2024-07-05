import React from 'react';
import { Outlet } from 'react-router-dom';
import NavColumn from './NavColumn';

const Dashboard: React.FC = () => {
  return (
    <div className='w-full h-screen flex flex-row items-start justify-start bg-[#E2E2E2]'>
      <NavColumn />
      <main className='bg-white w-full'>
        <Outlet />
      </main>
    </div>
  );
};
export default Dashboard;

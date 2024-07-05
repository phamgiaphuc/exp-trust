import React from 'react';
import NavColumn from './NavColumn.tsx';
import { Outlet } from 'react-router-dom';

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

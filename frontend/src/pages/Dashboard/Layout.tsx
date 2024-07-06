import React from 'react';
import { Outlet } from 'react-router-dom';
import NavColumn from './NavColumn';

const DashboardLayout: React.FC = () => {
  return (
    <div className='flex relative'>
      <NavColumn />
      <div className='flex-1 ml-80'>
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;

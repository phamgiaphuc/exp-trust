import React from 'react';
import { Outlet } from 'react-router-dom';
import NavColumn from './NavColumn';

const DashboardLayout: React.FC = () => {
  return (
    <div className='flex'>
      <NavColumn />
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;

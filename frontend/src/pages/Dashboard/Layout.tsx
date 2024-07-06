import { Outlet } from 'react-router-dom';
import NavColumn from './NavColumn';

const DashboardLayout = () => {
  return (
    <div className='flex relative'>
      <NavColumn />
      <div className='flex-1 ml-[16.7%]'>
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;

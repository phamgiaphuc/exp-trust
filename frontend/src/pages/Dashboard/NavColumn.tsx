import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Avatar from '../../assets/avatar.png';
import { LuLayoutDashboard, LuUserCircle } from 'react-icons/lu';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoSettingsOutline, IoWalletOutline } from 'react-icons/io5';
import { FaUserLock } from 'react-icons/fa';

const navColumnData = [
  {
    id: '1',
    path: '/dashboard',
    label: 'Dashboard',
    icon: <LuLayoutDashboard className='w-6 h-6' />
  },
  {
    id: '2',
    path: '/dashboard/admin',
    label: 'Admin dashboard',
    icon: <FaUserLock className='w-6 h-6' />
  },
  {
    id: '3',
    path: '/dashboard/profile',
    label: 'Profile',
    icon: <LuUserCircle className='w-6 h-6' />
  },
  {
    id: '4',
    path: '/dashboard/linkedin',
    label: 'Explorer',
    icon: <IoLogoLinkedin className='w-6 h-6' />
  },
  {
    id: '5',
    path: '/dashboard/settings',
    label: 'Settings',
    icon: <IoSettingsOutline className='w-6 h-6' />
  },
  {
    id: '6',
    path: '/dashboard/sub',
    label: 'Subscription',
    isDiff: true,
    icon: <IoWalletOutline className='w-6 h-6' />
  }
];

const NavColumn = () => {
  const location = useLocation();
  return (
    <div className='bg-gradient-to-br from-[#EEF0FF] to-[#F5F5F5] fixed top-0 flex flex-col items-center gap-6 min-h-screen w-1/6 border-r border-r-gray-400 p-4'>
      <Link to={'/dashboard'} className='flex gap-2 items-center'>
        <img src={Logo} alt='website-et-logo' className='w-10 h-10' />
        <span className='text-3xl font-semibold'>ExpTrust</span>
      </Link>
      <div className='flex flex-col items-center'>
        <img src={Avatar} alt='user-avatar' className='w-16 h-16' />
        <span className='text-lg font-semibold mt-2'>Pham The Binh</span>
        <span className='font-light text-slate-400'>ExpTrust HR</span>
      </div>
      <div className='text-center w-full'>
        <span className='font-semibold text-lg'>Main menu</span>
        <div className='flex flex-col mt-4 gap-2'>
          {navColumnData.map((nav) => (
            <Link
              key={nav.id}
              to={nav.path}
              className={`flex gap-2 items-center rounded-xl px-6 py-2 ${
                location.pathname === nav.path ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
              } ${nav.isDiff ? 'bg-gradient-to-r from-[#4F4F4F] to-[#2009AA] text-white' : ''}`}
            >
              {nav.icon}
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavColumn;

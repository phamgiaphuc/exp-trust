import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='w-full relative'>
      <div className='flex items-center justify-between px-4 py-2'>
        <Link to={'/'}>
          <img src={Logo} alt='website-et-logo' className='w-10 h-10' />
        </Link>
        <div className='flex items-center gap-8 py-2 px-6 bg-gradient-to-br from-[#EEF0FF] to-[#F5F5F5] translate-x-16 border border-slate-600 rounded-2xl shadow-xl'>
          <Link to={'/'} className='hover:underline underline-offset-2 font-medium cursor-pointer'>
            Home
          </Link>
          <Link to={'/'} className='hover:underline underline-offset-2 font-medium cursor-pointer'>
            About us
          </Link>
          <Link to={'/'} className='hover:underline underline-offset-2 font-medium cursor-pointer'>
            Features
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <Link to={'/login'} className='px-4 py-2 hover:bg-slate-200 rounded-2xl cursor-pointer'>
            Login
          </Link>
          <Link to={'/signup'} className='px-4 py-2 hover:bg-slate-200 rounded-2xl cursor-pointer'>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import { Link } from 'react-router-dom';

const LoginForm = () => {
  const inputStyle: string = 'border-2 outline-none h-16 text-lg p-2 rounded-lg';
  return (
    <div className=' h-full w-8/12 flex-col flex justify-center  '>
      <div className='flex-col flex items-center w-full gap-8'>
        <div className=' w-8/12'>
          <h1 className='text-5xl pb-4 font-bold'>Welcome Back</h1>
          <h1 className='text-3xl'>Please enter login details below</h1>
          <div className='flex-row gap-2  text-3xl font-normal flex'>
            <h1>or sign up at</h1>
            <Link className='text-blue-600' to={'/signup/individual'}>
              sign up
            </Link>
          </div>
        </div>
        <form className='flex flex-col gap-4 w-8/12'>
          <input className={inputStyle} type='text' placeholder='Email or Phone Number' />
          <input className={inputStyle} type='password' placeholder='Password' />
          <Link className='text-lg' to={'/'}>
            forgot password?
          </Link>
          <button className=' bg-[#702CFF] text-white text-2xl h-16 rounded-lg font-semibold' type='submit'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

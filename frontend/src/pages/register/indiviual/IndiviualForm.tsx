import { Link } from 'react-router-dom';

const IndiviualForm = () => {
  return (
    <div className='h-full flex flex-col justify-center gap-4 w-6/12'>
      <h1 className='text-5xl pb-4 font-bold'>Get Started</h1>
      <div>
        <h1 className='text-3xl '>Please enter the detail below</h1>
        <h1 className='text-3xl '>
          or sign in{' '}
          {
            <Link className='text-blue-600' to={'/login'}>
              here
            </Link>
          }
        </h1>
      </div>
      <form className='flex pt-4 gap-5 flex-col'>
        <input className={inputStyle} type='text' name='email' placeholder='Email' id='' />
        <input className={inputStyle} type='password' name='password' placeholder='Password' id='' />
        <input className={inputStyle} type='password' name='confirm-password' placeholder='Confirm Password' id='' />
        <button className=' bg-[#702CFF] text-white text-2xl h-16 rounded-lg font-semibold' type='submit'>
          Sign Up
        </button>
        <Link
          to={'/signup/company'}
          className=' bg-gray-400 text-white text-2xl h-16 rounded-lg font-semibold flex justify-center items-center '
          type='submit'
        >
          You’re in Human Resources ?
        </Link>
      </form>
    </div>
  );
};

export default IndiviualForm;

const inputStyle: string = ' border-2 outline-none h-16 text-lg p-2 rounded-lg';

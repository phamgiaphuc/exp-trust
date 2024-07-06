import React from 'react';
import login from '../../../assets/login.png';
import IndiviualForm from './IndiviualForm';
import exptrust from '../../../assets/exptrust.png';
import { Link } from 'react-router-dom';

const IndiviualPage = () => {
  return (
    <div className='flex flex-row w-screen bg-gradient-to-r p-4 from-[#EEFDFF] to-[#FDFDFD] h-screen'>
      <div className='w-6/12 flex justify-center'>
        <img className='h-full  ' src={login} alt='' />
      </div>
      <div className='w-6/12 flex justify-center  '>
        <IndiviualForm />
        <Link to='/'>
          <img src={exptrust} className=' object-fit w-auto   size-12 ' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default IndiviualPage;

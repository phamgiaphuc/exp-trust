import React from 'react';
import exptrust from '../../../assets/exptrust.png';
import CompanyForm from './CompanyForm.tsx';
import { Link } from 'react-router-dom';

const CompanyPage: React.FC = () => {
  return (
    <div className='flex flex-row w-screen bg-gradient-to-r p-4 from-[#EEFDFF] to-[#FDFDFD] h-screen'>
      <div className='w-6/12 flex justify-start'>
        <img src={exptrust} className='size-12 w-auto object-fit ml-[25px]' alt='' />
        <CompanyForm />
      </div>
      <div className='w-6/12 flex justify-center'>
        <Link to='/'>
          <img src={exptrust} className=' object-fit w-auto   size-12 ' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default CompanyPage;

import React from 'react';
import NavBar from './NavBar.tsx';
import Welcome from './Welcome.tsx';

const LandingPage: React.FC = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-between'>
      <NavBar />
      <Welcome />
    </div>
  );
};
export default LandingPage;

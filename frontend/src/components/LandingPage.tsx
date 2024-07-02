import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className='LandingPage'>
      <header className='max-w mx-auto flex items-center justify-between' style={styles.header}>
        <div className='flex items-center justify-between' style={styles.nav}>
          <a href='#' className='text-gray-900 px-3 py-2 rounded-md text-sm font-medium' style={styles.navtext}>Home</a>
          <a href='#' className='text-gray-900 px-3 py-2 rounded-md text-sm font-medium' style={styles.navtext}>About us</a>
          <a href='#' className='text-gray-900 px-3 py-2 rounded-md text-sm font-medium' style={styles.navtext}>Features</a>
        </div>
      </header>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#0000FF',
    height: '91px',
  },
  nav: {
    backgroundColor: '#CBCBCB',
    width: '433px',
    height: '44px',
  },
  navtext: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
  }
};

export default LandingPage;
import React from 'react';
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline'
import IosMoon from 'react-ionicons/lib/IosMoon'

import './Header.styles.scss';

const Header = ({isDarkFlag, setIsDarkFlag}) => {
  return (
    <header className='Header'>
      <div className="Header__content">
        <p className='Header__title'>Where in the world?</p>
        <div className='Header__darkModeContent' onClick={() => setIsDarkFlag(!isDarkFlag)}>
          {!isDarkFlag ?
            <IosMoonOutline fontSize="24px" color="var(--color-text)"/>
            :
            <IosMoon fontSize="24px" color="var(--color-text)"/>}
          <p className='Header__darkModeTitle'>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
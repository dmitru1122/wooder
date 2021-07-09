import { React, useState } from 'react';
import info from '../../../assets/header-info.png';
import burgerBar from '../../../assets/burger-bar.png';
import './Header.scss';

const HeaderMenuContent = () => (
  <>
    <div className='menu__item app-text--uppercase app-text app-text--l app-text--letter-spacing-11'>Wooder</div>
    <div className='menu__item app-text--uppercase app-text app-text--m'>
      <a href='$'>
        <span className='app-text--uppercase app-text app-text--m app-text--grey app-text--bold'>Home</span>
      </a>
    </div>
    <div className='menu__item app-text--uppercase app-text app-text--m'>
      <a href='$' className='app-text--grey'>
        Products
      </a>
    </div>
    <div className='menu__item'>
      <button className='button-none' type='button'>
        <span className='app-text--uppercase app-text app-text--m app-text--grey'>About</span>
      </button>
    </div>
  </>
);

const BurgerBar = () => (
  <div className='header__burger-menu burger-menu app-text--uppercase app-text app-text--m'>
    <img src={burgerBar} alt='burger-bar' />
    <span className='app-text--grey burger-menu__title'>Menu</span>
  </div>
);

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleClickBurgerBar = () => {
    console.log('click');
    setIsShowMenu(!isShowMenu);
  };
  return (
    <div className='header container'>
      <div className='burger-bar desktop'>
        <BurgerBar />
      </div>

      <div className='header__menu desktop'>
        <HeaderMenuContent />
      </div>

      <div className='header__info'>
        <a href='*' title='Open info'>
          <img src={info} alt='info' title='Open info' />
        </a>
      </div>
      <div className='burger-bar burger-bar--mobile mobile' onClick={handleClickBurgerBar} role='presentation'>
        <BurgerBar />
      </div>
      {isShowMenu ? (
        <article className='header__menu header__menu--mobile mobile'>
          <HeaderMenuContent />
        </article>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;

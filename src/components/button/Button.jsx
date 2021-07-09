import PropsTypes from 'prop-types';
import React from 'react';
import arrowYellow from '../../assets/arrow-right-yelllow.png';
import arrowWhite from '../../assets/arrow.png';
import videoSmallPreview from '../../assets/videoSmallPreview.png';

import './Button.scss';

const propType = {
  type: PropsTypes.string,
};

const defaultProp = {
  type: '',
};

const ButtonAddTo = () => {
  return (
    <button className='button--add button app-text app-text--m app-text--uppercase' type='button'>
      ADD to collection
      <span className='bg' />
    </button>
  );
};

function Button(props) {
  const { type } = props;

  if (type === 'link') {
    <>
      <button type='button' className='button-none  button-cs button--link'>
        <span className='button-cs__title app-text app-text--white app-text--s app-text--uppercase app-text--letter-spacing-3'>
          Learn more
        </span>
        <img src={arrowWhite} alt='arrow' className='button-cs__image' />
      </button>
      ;
      <hr />
    </>;
  }

  if (type === 'add') {
    return <ButtonAddTo />;
  }

  if (type === 'video') {
    // <React.Fragment className='button'>
    return (
      <button type='button' className='button-none button-cs'>
        <img src={videoSmallPreview} alt='arrow' className='button-cs__image' />
        <span className='button-cs__title app-text app-text--uppercase app-text--white app-text--s app-text--uppercase app-text--letter-spacing-3'>
          Watch video
        </span>
      </button>
    );
    // </React.Fragment>;
  }

  return (
    // <React.Fragment className='button'>
    <button type='button' className=' button-none'>
      <div className='app-text app-text--s app-text--uppercase app-text--letter-spacing-3'>
        Learn more
        <img src={arrowYellow} alt='arrow' />
      </div>
    </button>
    // </React.Fragment>
  );
}

Button.propTypes = propType;
Button.defaultProps = defaultProp;

export default Button;

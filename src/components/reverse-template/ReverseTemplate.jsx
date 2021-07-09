import { React, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import './ReverseTemplate.scss';
import line from '../../assets/reverse-template-line-bottom.png';

const Button = lazy(() => import('../button/Button'));

const propTypes = {
  type: PropTypes.string,
  img: PropTypes.objectOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  right: PropTypes.string,
  number: PropTypes.string,
  clickPlayHandler: PropTypes.func,
};
const defaultProps = {
  type: '',
  img: '',
  title: '',
  description: '',
  link: '',
  right: '',
  number: null,
  clickPlayHandler: null,
};

const decoration = (number, right) => (
  <div className={`description__bottom-decoration description__bottom-decoration--${right}`}>
    <div className='description__bottom-decoration__item app-text app-text--l app-text--letter-spacing-3'>{number}</div>
    <div className='description__bottom-decoration__item'>
      <img src={line} alt='decoration' />
    </div>
  </div>
);

function ReverseTemplate(props) {
  const { img, title, description, link, right, type, number, clickPlayHandler } = props;
  // const click = () => {
  //   console.log('click');
  //   console.log(clickPlayHandler);
  // };
  // const clickPlayHandler = '';
  return (
    <section className={`reverse-block container reverse-block--${right} reverse-block--${type}`}>
      <div className='description'>
        <div className='description__row'>
          <div className='description__item'>
            <hr
              className={`description__hr description__hr-title ${
                type === 'video' ? 'description__hr-title--white' : ''
              }`}
            />
          </div>
          <div className='description__item'>
            <h2
              className={`description__title app-text app-text--uppercase app-text--xl app-text--letter-spacing-3 ${
                type === 'video' ? 'app-text--yellow' : ''
              }`}>
              {title}
            </h2>
          </div>
        </div>
        <div className='description__row'>
          <div className='description__item'>
            <hr className='description__hr description__hr-text' />
          </div>
          <div
            className={`description__item app-text app-text--weight-normal ${
              type === 'video' ? 'app-text--white' : ''
            }`}>
            <p className='description__text'> {description}</p>
          </div>
        </div>
        <div className='description__row'>
          <div className='description__item' />
          <div className='description__item' onClick={clickPlayHandler} role='presentation'>
            <Suspense fallback={<div>...Loading</div>}>
              {type === 'video' ? <Button type='video' link={link} /> : <Button type='underscore' link={link} />}
            </Suspense>
          </div>
        </div>

        {number ? decoration(number, right) : <></>}
      </div>
      <div className={`img-block reverse-block__img-block--${right}`}>
        {img ? <img src={img} alt={title} /> : <></>}
      </div>
    </section>
  );
}

ReverseTemplate.propTypes = propTypes;
ReverseTemplate.defaultProps = defaultProps;

export default ReverseTemplate;

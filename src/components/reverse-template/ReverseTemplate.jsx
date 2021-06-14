import { React } from 'react';
import PropTypes from 'prop-types';

import './ReverseTemplate.scss';
import line from '../../assets/reverse-template-line-bottom.png';
import arr from '../../assets/arrow-right-yelllow.png';
import firstLine from '../../assets/reverse-template-first-line.png';
import secondLine from '../../assets/reverse-template-second-line.png';

const propTypes = {
  img: PropTypes.objectOf(PropTypes.object),
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  right: PropTypes.string,
};
const defaultProps = {
  img: '',
  title: '',
  description: '',
  link: '',
  right: '',
};

function ReverseTemplate(props) {
  const { img, title, description, link, right } = props;
  return (
    <section className={`reverse-block container reverse-block--${right}`}>
      <div className='reverse-block__description'>
        <div className='description__row'>
          <div className='description__item'>
            <img src={firstLine} alt='Line' />
          </div>
          <div className='description__item'>
            <h2 className='description__title app-text app-text--uppercase app-text--xl app-text--letter-spacing-3'>
              {title}
            </h2>
          </div>
        </div>
        <div className='description__row'>
          <div className='description__item'>
            <img src={secondLine} alt='Line' />
          </div>
          <div className='description__item app-text app-text--weight-normal'>
            <p> {description}</p>
          </div>
        </div>
        <div className='description__row'>
          <div className='description__item' />
          <div className='description__item'>
            <div className='app-text app-text--s app-text--uppercase app-text--letter-spacing-3'>
              <a href={link}>
                Learn more
                <img src={arr} alt='arrow' />
              </a>
            </div>
          </div>
        </div>

        <div className={`description__bottom-decoration description__bottom-decoration--${right}`}>
          <div className='description__bottom-decoration__item app-text app-text--l app-text--letter-spacing-3'>
            01.
          </div>
          <div className='description__bottom-decoration__item'>
            <img src={line} alt='decoration' />
          </div>
        </div>
      </div>
      <div className={`reverse-block__img-block reverse-block__img-block--${right}`}>
        {img ? <img src={img} alt={title} /> : <></>}
      </div>
      {/* <Suspense fallback={<div>...Loading</div>}>
          <ReverseTemplate />
        </Suspense> */}
    </section>
  );
}

ReverseTemplate.propTypes = propTypes;
ReverseTemplate.defaultProps = defaultProps;

export default ReverseTemplate;

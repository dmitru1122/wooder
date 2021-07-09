import { lazy, Suspense, useState } from 'react';
import PropTypes from 'prop-types';

import './VideoTemplate.scss';
import VideoPreviewImage from '../../assets/play-btn-big.png';

const ReverseTemplate = lazy(() => import('../reverse-template/ReverseTemplate'));

const propType = {
  preview: PropTypes.shape({
    type: PropTypes.string,
    img: PropTypes.objectOf(PropTypes.object),
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    right: PropTypes.string,
    number: PropTypes.string,
  }),
};

const defaultProps = {
  preview: PropTypes.shape({
    type: '',
    img: '',
    title: '',
    description: '',
    link: '',
    right: '',
    number: null,
  }),
};

function Video(props) {
  const { preview } = props;
  const [isPlay, setIsPlay] = useState(false);

  const handleClick = () => {
    console.log('i am here');
    setIsPlay(!isPlay);
  };
  return (
    <section className='video'>
      <div className='video__container'>
        {!isPlay ? (
          <div className='video__container__preview'>
            <Suspense fallback={<div>...Loading</div>}>
              <ReverseTemplate
                type={preview.type}
                title={preview.title}
                description={preview.description}
                link={preview.link}
                right={preview.right}
                img={VideoPreviewImage}
                clickPlayHandler={handleClick}
              />
            </Suspense>
          </div>
        ) : (
          <>
            <iframe
              className='video__container__content'
              src='https://www.youtube.com/embed/FyZh8SUUkPs?autoplay=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;'
              allowFullScreen
            />
          </>
        )}
      </div>
    </section>
  );
}

Video.propTypes = propType;
Video.defaultProps = defaultProps;

export default Video;

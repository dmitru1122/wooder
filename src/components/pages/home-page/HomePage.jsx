// import { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import backgrounLeft from '../../../assets/main-background-left.png';
import backgrounRight from '../../../assets/main-background-right.png';
import circleFirst from '../../../assets/main-screen-circle-0.png';
import circleSecond from '../../../assets/main-screen-circle-1.png';
import circleThird from '../../../assets/main-screen-circle-2.png';
import circleFourth from '../../../assets/main-screen-circle-3.png';
import mouse from '../../../assets/mouse.png';
import arrowRight from '../../../assets/arrow.png';
import arrowLong from '../../../assets/arrow-long.png';
import furnitureImg from '../../../assets/furniture-img.png';
import decorImg from '../../../assets/decor.png';
// import aboutUsImage from '../../../assets/furniture-img.png';

// const VideoTemplate = lazy(() => import('../../video-tepmplate/VideoTemplate'));
// const ReverseTemplate = lazy(() => import('../../reverse-template/ReverseTemplate'));
// const BackgroundImage = lazy(() => import('../../background-image/BackgroundImage'));

import VideoTemplate from '../../video-tepmplate/VideoTemplate';
import ReverseTemplate from '../../reverse-template/ReverseTemplate';
import BackgroundImage from '../../background-image/BackgroundImage';

const furniture = {
  type: 'block',
  title: 'Furniture',
  description: `Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating
  new places made of reclaimed barnwood`,
  link: '',
  img: furnitureImg,
  right: '',
  number: '01.',
};
const decoration = {
  type: 'block',
  title: 'decoration',
  description: `Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating
  new places made of reclaimed barnwood`,
  link: '',
  img: decorImg,
  right: 'right',
  number: '02.',
};

const professional = {
  preview: {
    type: 'video',
    title: 'We do the design of any complexity',
    description: `This is a team of professionals that make the furniture and wood decor high standard. Createing modern
  design. Adhering to the global quality standards. And we are doing work with love.`,
    link: '',
    img: '',
    right: '',
  },
  video: {
    link: 'youtube',
  },
};
const aboutUs = {
  type: 'block',
  title: 'About us',
  description: `We are a team of prfessionals in the wood processing and the creation of wooden furniture of the hightest class`,
  link: '',
  img: furnitureImg,
  right: '',
};

const propType = {
  aboutUsRef: PropTypes.objectOf(PropTypes.object),
  productsRef: PropTypes.objectOf(PropTypes.object),
  homeRef: PropTypes.objectOf(PropTypes.object),
};
const defaultProp = {
  aboutUsRef: null,
  productsRef: null,
  homeRef: null,
};
const handleScrollButtom = () => {
  document.body.scrollTo(0, 1000);
  window.scrollTo(0, 1000);
};

function Home(props) {
  const { aboutUsRef, productsRef, homeRef } = props;
  return (
    <main className='home'>
      <section className='main-screen container' ref={homeRef}>
        <div className='main-screen__background-left'>
          {/* <Suspense fallback={<div>...Loading</div>}> */}
          <BackgroundImage img={backgrounLeft} />
          {/* </Suspense> */}
        </div>
        <div className='main-screen__background-right'>
          {/* <Suspense fallback={<div>...Loading</div>}> */}
          <BackgroundImage img={backgrounRight} />
          {/* </Suspense> */}
        </div>
        {/* <div className='main-screen__background-left'>
          <Suspense fallback={<div>...Loading</div>}>
            <BackgroundImage imgName='left' />
          </Suspense>
        </div>
        <div className='main-screen__background-right'>
          <Suspense fallback={<div>...Loading</div>}>
            <BackgroundImage imgName='right' />
          </Suspense>
        </div> */}
        <div className='main-screen__number rotate-right'>
          <div className='main-screen__number__title app-text app-text--xxl app-text--yellow'> — 01</div>
          <div className='number__circle'>
            <img src={circleFourth} alt='circle' />
          </div>
          <div className='number__circle'>
            <img src={circleThird} alt='circle' />
          </div>
          <div className='number__circle'>
            <img src={circleSecond} alt='circle' />
          </div>
          <div className='number__circle'>
            <img src={circleFirst} alt='circle' />
          </div>
        </div>

        <div className='main-screen__main'>
          <div>
            <h1 className='main-screen__title app-text app-text--xxxl app-text--yellow'>WOODER</h1>
          </div>
          <div className='main-screen__main__btn'>
            <button type='button' className='button-none button-cs'>
              <span className='app-text app-text--white app-text--s app-text--uppercase app-text--letter-spacing-3'>
                Learn more
              </span>
              <img src={arrowRight} alt='arrow' />
            </button>
          </div>
          <div className='main-screen__main__scroll '>
            <button type='button' className='button-none button' onClick={handleScrollButtom}>
              <div>
                <img className='app-text--white' src={mouse} alt='scroll' />
              </div>
              <div>
                <img className='app-text--white' src={arrowLong} alt='arrow' />
              </div>
              <div className='app-text app-text--uppercase app-text--white rotate-right app-text--grey'>Scroll</div>
            </button>
          </div>
        </div>
        <div className='main-screen__sidebaar'>
          <div className='rotate-right app-text--grey app-text app-text--s app-text--letter-spacing-3 app-text--uppercase'>
            Furniture & decor
          </div>
        </div>
      </section>
      <section className='furniture-decoration' ref={productsRef}>
        {/* <Suspense fallback={<div>...Loading</div>}> */}
        <ReverseTemplate
          title={furniture.title}
          description={furniture.description}
          img={furniture.img}
          link={furniture.link}
          right={furniture.right}
          number={furniture.number}
        />
        {/* </Suspense> */}
        {/* <Suspense fallback={<div>...Loading</div>}> */}
        <ReverseTemplate
          title={decoration.title}
          description={decoration.description}
          img={decoration.img}
          link={decoration.link}
          right={decoration.right}
          number={decoration.number}
        />
        {/* </Suspense> */}
      </section>

      <section className='video-professional'>
        {/* <Suspense fallback={<div>...Loading</div>}> */}
        <VideoTemplate preview={professional.preview} video={professional.video} />
        {/* </Suspense> */}
      </section>
      <section className='about-us' ref={aboutUsRef}>
        {/* <Suspense fallback={<div>...Loading</div>}> */}
        <ReverseTemplate
          title={aboutUs.title}
          description={aboutUs.description}
          img={aboutUs.img}
          link={aboutUs.link}
          right={aboutUs.right}
        />
        {/* </Suspensye> */}
      </section>
    </main>
  );
}

Home.propTypes = propType;
Home.defaultProps = defaultProp;
export default Home;

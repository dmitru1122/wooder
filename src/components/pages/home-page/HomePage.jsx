import { Suspense, lazy } from 'react';
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

const ReverseTemplate = lazy(() => import('../../reverse-template/ReverseTemplate'));
const BackgroundImage = lazy(() => import('../../background-image/BackgroundImage'));

const furniture = {
  title: 'Furniture',
  description: `Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating
  new places made of reclaimed barnwood`,
  link: '',
  img: furnitureImg,
  right: '',
};
const decoration = {
  title: 'decoration',
  description: `Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating
  new places made of reclaimed barnwood`,
  link: '',
  img: decorImg,
  right: 'right',
};

const professional = {
  type: 'video',
  title: 'We do the design of any complexity',
  description: `This is a team of professionals that make the furniture and wood decor high standard. Createing modern
  design. Adhering to the global quality standards. And we are doing work with love.`,
  link: '',
  // img: '',
  right: '',
};

function Home() {
  return (
    <div className='home'>
      <section className='main-screen container'>
        <div className='main-screen__background-left'>
          <Suspense fallback={<div>...Loading</div>}>
            <BackgroundImage img={backgrounLeft} />
          </Suspense>
          {/* <img src={backgrounLeft} alt='backgroun' /> */}
        </div>
        <div className='main-screen__background-right'>
          <Suspense fallback={<div>...Loading</div>}>
            <BackgroundImage img={backgrounRight} />
          </Suspense>
          {/* <img src={backgrounRight} alt='backgroun' /> */}
        </div>
        <div className='main-screen__number transform-right'>
          {/* <div>
            <img src='' alt='line' />
          </div> */}
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
            <button type='button' className='button-none'>
              <div>
                <img className='app-text--white' src={mouse} alt='scroll' />
              </div>
              <div>
                <img className='app-text--white' src={arrowLong} alt='arrow' />
              </div>
            </button>
          </div>
        </div>
        <div className='main-screen__sidebaar'>
          <div className='transform-right app-text--grey app-text app-text--s app-text--letter-spacing-3 app-text--uppercase'>
            Furniture & decor
          </div>
        </div>
      </section>
      <section>
        <Suspense fallback={<div>...Loading</div>}>
          <ReverseTemplate
            title={furniture.title}
            description={furniture.description}
            img={furniture.img}
            link={furniture.link}
            right={furniture.right}
          />
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <ReverseTemplate
            title={decoration.title}
            description={decoration.description}
            img={decoration.img}
            link={decoration.link}
            right={decoration.right}
          />
        </Suspense>
      </section>

      <section className='professional'>
        <div className='professional__preview'>
          <Suspense fallback={<div>...Loading</div>}>
            <ReverseTemplate
              type={professional.type}
              title={professional.title}
              description={professional.description}
              link={professional.link}
              right={professional.right}
            />
          </Suspense>
        </div>
      </section>
    </div>
  );
  // return <Suspense fallback={<div>Loading...</div>} />;
}

export default Home;

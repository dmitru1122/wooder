import { Suspense, lazy, React, useRef } from 'react';

import '../theme/main.scss';

const Header = lazy(() => import('../components/main-layout/header/Header'));
const Footer = lazy(() => import('../components/main-layout/footer/Footer'));
// const HomePage = lazy(() => import('../components/pages/home-page/HomePage'));

const Catalog = lazy(() => import('../components/pages/catalog/Catalog'));

function App() {
  const aboutUs = useRef(null);
  const products = useRef(null);
  const home = useRef(null);
  const scrollTo = (ref) => {
    let positionTop = 0;
    if (ref === 'aboutUs') {
      positionTop = aboutUs.current.offsetTop;
    }
    if (ref === 'products') {
      positionTop = products.current.offsetTop;
    }
    if (ref === 'home') {
      positionTop = home.current.offsetTop;
    }
    document.body.scrollTo(0, positionTop);
  };

  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Header scrollTo={scrollTo} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Catalog aboutUsRef={aboutUs} productsRef={products} homeRef={home} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

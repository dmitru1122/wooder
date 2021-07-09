import './Catalog.scss';
import Card from '../../shop-card/ShopCard';
import photoTest from '../../../assets/table.png';

function Catalog() {
  return (
    <main className='catalog'>
      <article className='sort-container'>sort by</article>
      <aside className='filter-container'>
        <div>Price</div>
        <div>Color</div>
      </aside>
      <article className='collection-container'>
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
        <Card title='Jeans' caption='cool modern jeans' img={photoTest} price='224.99' />
      </article>
    </main>
  );
}

export default Catalog;

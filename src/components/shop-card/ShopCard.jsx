import React from 'react';
import PropTypes from 'prop-types';
import './ShopCard.scss';
import Button from '../button/Button';

const propType = {
  title: PropTypes.string,
  caption: PropTypes.string,
  img: PropTypes.objectOf(PropTypes.object),
  price: PropTypes.string,
};

const defaultProp = {
  title: '',
  caption: '',
  img: {},
  price: '',
};

const ShopCard = (props) => {
  const { title, caption, img, price } = props;
  return (
    <div className='shop-card'>
      <div className='shop-card__title app-text--l app-text app-text--uppercase'>{title}</div>
      <div className='shop-card__description app-text app-text--ml'>{caption}</div>
      <div className='shop-card__slider'>
        <figure>
          <img className='shop-card__img' src={img} alt={title} />
        </figure>
      </div>

      <div className='shop-card__row'>
        <div className='shop-card__price app-text app-text app-text--sl app-text--uppercase'>{price}$</div>
        <Button type='add' />
      </div>
    </div>
  );
};

ShopCard.propTypes = propType;
ShopCard.defaultProps = defaultProp;
export default ShopCard;

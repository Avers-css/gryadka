import React, { useState } from 'react';
import style from './card.module.css';
import { CartIcon, CheckIcon, ThermometerIcon } from '../../../Components/Icons';

const Card = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart();
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className={style.card}>
      <div className={style.imageContainer}>
        <img src={product.image} alt={product.name} className={style.image} loading="lazy" />
        <span className={style.categoryTag}>
          {product.categoryName || 'Коллекционный чай'}
        </span>
      </div>

      <div className={style.body}>
        <div className={style.meta}>
          <span className={style.origin}>{product.origin || 'Китай'}</span>
          {product.year && <span className={style.year}>{product.year} г.</span>}
        </div>

        <h3 className={style.title}>{product.name}</h3>

        {product.notes && (
          <p className={style.notes} title={product.notes}>
            <strong>Ноты:</strong> {product.notes}
          </p>
        )}

        {product.temp && (
          <div className={style.brewInfo}>
            <ThermometerIcon size={14} className={style.brewIcon} />
            <span>Заваривание: {product.temp}</span>
          </div>
        )}

        <div className={style.footer}>
          <div className={style.priceBox}>
            <span className={style.price}>{product.price} ₽</span>
            <span className={style.weight}>за 100 грамм</span>
          </div>

          <button
            type="button"
            className={`${style.btn} ${added ? style.btnAdded : ''}`}
            onClick={handleAdd}
            aria-label={`Добавить ${product.name} в корзину`}
          >
            {added ? (
              <>
                <CheckIcon size={16} />
                <span>В корзине</span>
              </>
            ) : (
              <>
                <CartIcon size={16} />
                <span>В корзину</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
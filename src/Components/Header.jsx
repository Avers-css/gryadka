import React from 'react';
import s from './Header.module.css';
import { MapPinIcon, PhoneIcon, CartIcon } from './Icons';
import { Link } from 'react-router-dom';

const Header = ({ cartCount = 0 }) => {
  return (
    <header className={s.header}>
      <div className={s.brandWrapper}>
        <Link to="/" className={s.brand}>
          <div className={s.titles}>
            <span className={s.tagline}>Коллекционный китайский чай</span>
            <h1 className={s.mainTitle}>Китайская Чайная «Дракон и Феникс»</h1>
            <span className={s.subTitle}>Чайная гостиная и традиции Гунфу Ча</span>
          </div>
        </Link>
      </div>

      <div className={s.headerActions}>
        <div className={s.infoBlock}>
          <div className={s.infoItem}>
            <MapPinIcon size={15} className={s.infoIcon} />
            <span>ул. Чайная, 8 • Китай-город</span>
          </div>
          <div className={s.infoItem}>
            <PhoneIcon size={15} className={s.infoIcon} />
            <a href="tel:+74957892412" className={s.phoneLink}>+7 (495) 789-24-12</a>
          </div>
        </div>

        <Link to="/catalog" className={s.cartBtn} aria-label={`Корзина (${cartCount} товаров)`} title="Корзина">
          <CartIcon size={18} />
          <span className={s.cartText}>Корзина</span>
          <span className={s.cartBadge}>{cartCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
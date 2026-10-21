import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';
import { TeapotIcon, CupIcon, QuoteIcon, MapPinIcon, NewspaperIcon } from './Icons';

const Nav = () => {
  return (
    <nav className={style.nav} aria-label="Основная навигация">
      <NavLink
        to='/catalog'
        className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
      >
        <TeapotIcon size={18} className={style.icon} />
        <span>Каталог чая</span>
      </NavLink>

      <NavLink
        to='/ceremony'
        className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
      >
        <CupIcon size={18} className={style.icon} />
        <span>Чайная церемония</span>
      </NavLink>

      <NavLink
        to='/news'
        className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
      >
        <NewspaperIcon size={18} className={style.icon} />
        <span>Вестник</span>
      </NavLink>

      <NavLink
        to='/reviews'
        className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
      >
        <QuoteIcon size={18} className={style.icon} />
        <span>Отзывы гостей</span>
      </NavLink>

      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
      >
        <MapPinIcon size={18} className={style.icon} />
        <span>Контакты</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
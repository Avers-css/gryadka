import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './BottomNav.module.css';
import { TeapotIcon, CupIcon, NewspaperIcon, QuoteIcon, MapPinIcon } from './Icons';

const BottomNav = () => {
  return (
    <nav className={s.bottomNav} aria-label="Мобильная навигация">
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
      >
        <div className={s.iconWrapper}>
          <TeapotIcon size={20} className={s.icon} />
        </div>
        <span className={s.label}>Каталог</span>
      </NavLink>

      <NavLink
        to="/ceremony"
        className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
      >
        <div className={s.iconWrapper}>
          <CupIcon size={20} className={s.icon} />
        </div>
        <span className={s.label}>Церемония</span>
      </NavLink>

      <NavLink
        to="/news"
        className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
      >
        <div className={s.iconWrapper}>
          <NewspaperIcon size={20} className={s.icon} />
        </div>
        <span className={s.label}>Вестник</span>
      </NavLink>

      <NavLink
        to="/reviews"
        className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
      >
        <div className={s.iconWrapper}>
          <QuoteIcon size={20} className={s.icon} />
        </div>
        <span className={s.label}>Отзывы</span>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? `${s.tab} ${s.active}` : s.tab)}
      >
        <div className={s.iconWrapper}>
          <MapPinIcon size={20} className={s.icon} />
        </div>
        <span className={s.label}>Контакты</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;

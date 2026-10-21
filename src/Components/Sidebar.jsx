import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Sidebar.module.css';
import { LeafIcon, ThermometerIcon, ShieldCheckIcon, NewspaperIcon, ChevronRightIcon } from './Icons';

const Sidebar = ({ products = [] }) => {
  const location = useLocation();
  const isCatalog = location.pathname === '/' || location.pathname.startsWith('/catalog');
  const [showGuide, setShowGuide] = useState(false);

  const allCount = products.length;
  const puerCount = products.filter(p => p.category === 'puer').length;
  const oolongCount = products.filter(p => p.category === 'oolong').length;
  const greenCount = products.filter(p => p.category === 'green').length;
  const redCount = products.filter(p => p.category === 'red').length;
  const whiteCount = products.filter(p => p.category === 'white').length;

  return (
    <aside className={`${s.side} ${!isCatalog ? s.hideOnMobile : ''}`} aria-label="Фильтры сортов чая">
      <div className={s.sidebarHeader}>
        <div>
          <span className={s.tag}>Каталог сортов</span>
          <h2 className={s.title}>Коллекция</h2>
        </div>
        <button
          type="button"
          className={s.mobileGuideToggle}
          onClick={() => setShowGuide(!showGuide)}
          aria-expanded={showGuide}
          title="Температурный гид"
        >
          <ThermometerIcon size={14} />
          <span>{showGuide ? 'Скрыть гид' : 'Гид заваривания'}</span>
        </button>
      </div>

      <ul className={s.menuList}>
        <li className={s.item}>
          <NavLink
            to='/catalog/all'
            className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : s.navItem)}
          >
            <LeafIcon size={15} className={s.itemIcon} />
            <span className={s.name}>Все сорта</span>
            <span className={s.count}>{allCount}</span>
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            to='/catalog/puer'
            className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : s.navItem)}
          >
            <LeafIcon size={15} className={s.itemIcon} />
            <span className={s.name}>Пуэры</span>
            <span className={s.count}>{puerCount}</span>
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            to='/catalog/oolong'
            className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : s.navItem)}
          >
            <LeafIcon size={15} className={s.itemIcon} />
            <span className={s.name}>Утёсные улуны</span>
            <span className={s.count}>{oolongCount}</span>
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            to='/catalog/green'
            className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : s.navItem)}
          >
            <LeafIcon size={15} className={s.itemIcon} />
            <span className={s.name}>Зеленый чай</span>
            <span className={s.count}>{greenCount}</span>
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            to='/catalog/red'
            className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : s.navItem)}
          >
            <LeafIcon size={15} className={s.itemIcon} />
            <span className={s.name}>Красный чай</span>
            <span className={s.count}>{redCount}</span>
          </NavLink>
        </li>

        <li className={s.item}>
          <NavLink
            to='/catalog/white'
            className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : s.navItem)}
          >
            <LeafIcon size={15} className={s.itemIcon} />
            <span className={s.name}>Белый чай</span>
            <span className={s.count}>{whiteCount}</span>
          </NavLink>
        </li>
      </ul>

      <div className={`${s.tipCard} ${showGuide ? s.tipCardOpenMobile : ''}`}>
        <div className={s.tipHeader}>
          <ThermometerIcon size={18} className={s.tipIcon} />
          <h3 className={s.tipTitle}>Температурный гид</h3>
        </div>
        <p className={s.tipText}>
          Шу Пуэры требуют кипятка 95–100°C, улуны и красные — 90–95°C, а нежные зеленые и белые раскрываются при 75–85°C.
        </p>
      </div>

      <div className={s.badgeCard}>
        <ShieldCheckIcon size={18} className={s.badgeIcon} />
        <div className={s.badgeContent}>
          <h4 className={s.badgeTitle}>Гарантия подлинности</h4>
          <p className={s.badgeText}>Прямые поставки с плантаций без ароматизаторов и добавок.</p>
        </div>
      </div>

      <div className={s.newsWidget}>
        <div className={s.newsWidgetHeader}>
          <NewspaperIcon size={16} className={s.newsWidgetIcon} />
          <span className={s.newsWidgetTag}>Чайный вестник</span>
        </div>
        <p className={s.newsWidgetText}>Экспедиции в Уишань, мастер-классы и свежие сборы 2026 года.</p>
        <NavLink to='/news' className={s.newsWidgetLink}>
          <span>Перейти в новости</span>
          <ChevronRightIcon size={13} />
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import s from './Footer.module.css';
import { Link } from 'react-router-dom';
import { TeapotIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from './Icons';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.brandCol}>
          <div className={s.brandHeader}>
            <h3 className={s.brandName}>Китайская Чайная «Дракон и Феникс»</h3>
            <span className={s.brandSub}>Чайная гостиная и традиции Гунфу Ча</span>
          </div>
          <p className={s.brandDesc}>
            Аутентичный коллекционный чай прямиком из китайских провинций Юньнань, Фуцзянь и Чжэцзян. 
            Пространство тишины, осознанности и вековых традиций Гунфу Ча.
          </p>
          <div className={s.badge}>
            <TeapotIcon size={14} className={s.badgeIcon} />
            <span>Прямой импорт свежих сборов</span>
          </div>
        </div>

        <nav className={s.navCol} aria-label="Быстрые ссылки футера">
          <h4 className={s.colTitle}>Разделы</h4>
          <ul className={s.navList}>
            <li><Link to="/catalog">Все сорта</Link></li>
            <li><Link to="/catalog/puer">Выдержанные Пуэры</Link></li>
            <li><Link to="/catalog/oolong">Утёсные улуны</Link></li>
            <li><Link to="/catalog/green">Зеленый чай</Link></li>
            <li><Link to="/catalog/red">Красный чай</Link></li>
            <li><Link to="/catalog/white">Белый чай</Link></li>
            <li><Link to="/ceremony">Чайная церемония</Link></li>
            <li><Link to="/news">Чайный вестник</Link></li>
            <li><Link to="/reviews">Отзывы гостей</Link></li>
            <li><Link to="/contact">Контакты и адрес</Link></li>
          </ul>
        </nav>

        <div className={s.contactCol}>
          <h4 className={s.colTitle}>Чайная гостиная</h4>
          <ul className={s.contactList}>
            <li>
              <MapPinIcon size={16} className={s.contactIcon} />
              <span>Москва, ул. Чайная, д. 8, стр. 1 (м. Китай-город)</span>
            </li>
            <li>
              <PhoneIcon size={16} className={s.contactIcon} />
              <a href="tel:+74957892412">+7 (495) 789-24-12</a>
            </li>
            <li>
              <MailIcon size={16} className={s.contactIcon} />
              <a href="mailto:info@dragon-phoenix-tea.ru">info@dragon-phoenix-tea.ru</a>
            </li>
            <li>
              <ClockIcon size={16} className={s.contactIcon} />
              <span>Ежедневно: 10:00 – 22:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.bottomBar}>
        <span className={s.copyright}>
          © 2026 Чайная «Дракон и Феникс». Все права защищены.
        </span>
        <span className={s.disclaimer}>
          Специализированный проект по китайской чайной культуре
        </span>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './contact.module.css';
import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon, UserIcon, CheckIcon } from '../../Components/Icons';

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    setFormSent(true);
    setName('');
    setContact('');
    setMessage('');
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className={s.contactPage}>
      <header className={s.header}>
        <span className={s.tag}>Связь с чайной</span>
        <h2 className={s.title}>Контакты и Чайная Гостиная</h2>
        <p className={s.intro}>
          Мы рады ответить на любые вопросы о сортах чая, помочь подобрать посуду для домашнего заваривания 
          или забронировать отдельную чайную комнату для проведения вашей церемонии.
        </p>
      </header>

      <section className={s.contactCardsGrid} aria-label="Быстрые контакты">
        <NavLink
          to="/contact/workadress"
          className={({ isActive }) => (isActive ? `${s.card} ${s.active}` : s.card)}
        >
          <div className={s.iconWrapper}>
            <MapPinIcon size={20} />
          </div>
          <div className={s.cardInfo}>
            <span className={s.cardLabel}>Адрес чайной</span>
            <h3 className={s.cardTitle}>ул. Чайная, 8</h3>
            <span className={s.cardSub}>м. Китай-город</span>
          </div>
        </NavLink>

        <NavLink
          to="/contact/email"
          className={({ isActive }) => (isActive ? `${s.card} ${s.active}` : s.card)}
        >
          <div className={s.iconWrapper}>
            <MailIcon size={20} />
          </div>
          <div className={s.cardInfo}>
            <span className={s.cardLabel}>Электронная почта</span>
            <h3 className={s.cardTitle}>info@dragon-phoenix-tea.ru</h3>
            <span className={s.cardSub}>Для заказов и предложений</span>
          </div>
        </NavLink>

        <NavLink
          to="/contact/vk"
          className={({ isActive }) => (isActive ? `${s.card} ${s.active}` : s.card)}
        >
          <div className={s.iconWrapper}>
            <PhoneIcon size={20} />
          </div>
          <div className={s.cardInfo}>
            <span className={s.cardLabel}>ВКонтакте</span>
            <h3 className={s.cardTitle}>vk.com/dragonphoenix_tea</h3>
            <span className={s.cardSub}>Новости, статьи и анонсы</span>
          </div>
        </NavLink>

        <NavLink
          to="/contact/max"
          className={({ isActive }) => (isActive ? `${s.card} ${s.active}` : s.card)}
        >
          <div className={s.iconWrapper}>
            <UserIcon size={20} />
          </div>
          <div className={s.cardInfo}>
            <span className={s.cardLabel}>Старший мастер</span>
            <h3 className={s.cardTitle}>Павел Аверьянов</h3>
            <span className={s.cardSub}>Индивидуальные консультации</span>
          </div>
        </NavLink>
      </section>

      <section className={s.detailsSection}>
        <div className={s.resultBox}>
          <div className={s.resultHeader}>
            <span className={s.indicator}></span>
            <h3 className={s.resultTitle}>Подробные сведения</h3>
          </div>
          <div className={s.outletContent}>
            <Outlet />
          </div>
        </div>

        <div className={s.hoursCard}>
          <div className={s.hoursHeader}>
            <ClockIcon size={18} className={s.hoursIcon} />
            <h4>График работы гостиной</h4>
          </div>
          <ul className={s.hoursList}>
            <li>
              <span>Понедельник — Пятница:</span>
              <strong>10:00 – 22:00</strong>
            </li>
            <li>
              <span>Суббота — Воскресенье:</span>
              <strong>11:00 – 23:00</strong>
            </li>
            <li>
              <span>Чайные церемонии:</span>
              <strong>по предварительной записи</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className={s.formSection}>
        <div className={s.formHeader}>
          <h3 className={s.formSectionTitle}>Написать чайному сомелье</h3>
          <p className={s.formSectionDesc}>
            Если вы ищете конкретный сорт или хотите организовать выездную церемонию — оставьте сообщение.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={s.inquiryForm}>
          <div className={s.formRow}>
            <div className={s.inputGroup}>
              <label htmlFor="inquiry-name">Ваше имя</label>
              <input
                id="inquiry-name"
                type="text"
                placeholder="Как к вам обращаться"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={s.inputGroup}>
              <label htmlFor="inquiry-contact">Телефон или Email</label>
              <input
                id="inquiry-contact"
                type="text"
                placeholder="+7 (___) ___-__-__"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="inquiry-msg">Ваш вопрос или пожелание</label>
            <textarea
              id="inquiry-msg"
              rows="3"
              placeholder="Расскажите, какой чай вас интересует..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={s.submitBtn}>
            Отправить сообщение
          </button>

          {formSent && (
            <div className={s.successAlert}>
              <CheckIcon size={18} />
              <span>Спасибо! Мы свяжемся с вами в течение 30 минут.</span>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
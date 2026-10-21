import React, { useState } from 'react';
import s from './gallery.module.css';
import { CupIcon, TeapotIcon, CalendarIcon, ClockIcon, UserIcon, CheckIcon } from '../../Components/Icons';

const Gallery = () => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('2026-10-24');
  const [time, setTime] = useState('18:00');
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className={s.gallery}>
      <header className={s.header}>
        <span className={s.tag}>Традиции и ритуалы</span>
        <h2 className={s.title}>Китайская чайная церемония «Гунфу Ча»</h2>
        <p className={s.intro}>
          «Гунфу Ча» (功夫茶) переводится как <em>высшее мастерство чаепития</em>. 
          Это неспешная медитативная практика, зародившаяся в провинциях Гуандун и Фуцзянь, 
          где каждая деталь — от температуры горной воды до формы глиняного чайника — подчинена раскрытию духа чайного листа.
        </p>
      </header>

      <section className={s.bannerCard}>
        <div className={s.bannerInfo}>
          <div className={s.badge}>
            <CupIcon size={14} className={s.badgeIcon} />
            <span>Индивидуальные и групповые церемонии</span>
          </div>
          <h3 className={s.bannerTitle}>Забронировать чайное пространство</h3>
          <p className={s.bannerDesc}>
            Проведите уединенное чаепитие или встречу с близкими в аутентичной комнате с традиционной чапанью. 
            Мастер подберет редкий коллекционный сорт под ваше настроение и проведет церемонию по канонам династии Сун.
          </p>

          {!booked ? (
            <form onSubmit={handleBooking} className={s.bookingForm}>
              <div className={s.formGrid}>
                <div className={s.formGroup}>
                  <label htmlFor="booking-guests">
                    <UserIcon size={14} /> Количество гостей
                  </label>
                  <select
                    id="booking-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={s.select}
                  >
                    <option value="1">1 персона (уединенное)</option>
                    <option value="2">2 персоны (камерное)</option>
                    <option value="3-4">3–4 персоны</option>
                    <option value="5-6">5–6 персон (группа)</option>
                  </select>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="booking-date">
                    <CalendarIcon size={14} /> Дата встречи
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={s.input}
                    required
                  />
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="booking-time">
                    <ClockIcon size={14} /> Время
                  </label>
                  <select
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={s.select}
                  >
                    <option value="12:00">12:00</option>
                    <option value="14:30">14:30</option>
                    <option value="17:00">17:00</option>
                    <option value="19:30">19:30</option>
                  </select>
                </div>
              </div>

              <button type="submit" className={s.submitBtn}>
                Забронировать церемонию
              </button>
            </form>
          ) : (
            <div className={s.successBox}>
              <div className={s.successHeader}>
                <div className={s.checkCircle}>
                  <CheckIcon size={20} />
                </div>
                <div>
                  <h4 className={s.successTitle}>Бронь подтверждена</h4>
                  <p className={s.successText}>
                    Ждем вас: <strong>{date}</strong> в <strong>{time}</strong> ({guests} гост.). 
                    Администратор свяжется с вами за 2 часа для подтверждения.
                  </p>
                </div>
              </div>
              <button onClick={() => setBooked(false)} className={s.rebookBtn}>
                Изменить детали брони
              </button>
            </div>
          )}
        </div>
      </section>

      <section className={s.stepsSection}>
        <div className={s.sectionHeader}>
          <span className={s.subHeader}>Последовательность ритуала</span>
          <h3 className={s.sectionTitle}>Четыре канонических этапа церемонии</h3>
        </div>

        <div className={s.stepsGrid}>
          <article className={s.stepCard}>
            <div className={s.stepHead}>
              <span className={s.stepNum}>01</span>
              <span className={s.stepTerm}>Вэньху • 温壶</span>
            </div>
            <h4 className={s.stepName}>Прогрев посуды</h4>
            <p className={s.stepText}>
              Исинский чайник из пористой фиолетовой глины и пиалы омываются крутым кипятком. 
              Глина впитывает тепло, подготавливая ровный температурный режим для нежного листа.
            </p>
          </article>

          <article className={s.stepCard}>
            <div className={s.stepHead}>
              <span className={s.stepNum}>02</span>
              <span className={s.stepTerm}>Шанча • 赏茶</span>
            </div>
            <h4 className={s.stepName}>Знакомство с листом</h4>
            <p className={s.stepText}>
              Сухой сбор насыпается в чахэ («чайную ладью»). Гости передают чахэ друг другу, 
              согревают лист дыханием и слушают тонкий аромат сухого сырья перед первым контактом с водой.
            </p>
          </article>

          <article className={s.stepCard}>
            <div className={s.stepHead}>
              <span className={s.stepNum}>03</span>
              <span className={s.stepTerm}>Синча • 醒茶</span>
            </div>
            <h4 className={s.stepName}>Пробуждение чая</h4>
            <p className={s.stepText}>
              Первая заливка кипятком длится 3–5 секунд и мгновенно сливается на чапань. 
              Этот пролив очищает лист, смывает пыльцу и позволяет плотно скрученным улунам плавно раскрыться.
            </p>
          </article>

          <article className={s.stepCard}>
            <div className={s.stepHead}>
              <span className={s.stepNum}>04</span>
              <span className={s.stepTerm}>Пинча • 品茶</span>
            </div>
            <h4 className={s.stepName}>Вкушение проливов</h4>
            <p className={s.stepText}>
              Чай заваривают быстрыми проливами по 10–20 секунд, переливая через «чахай» (чашу справедливости), 
              чтобы плотность настоя была одинаковой в пиале каждого гостя.
            </p>
          </article>
        </div>
      </section>

      <section className={s.utensilsSection}>
        <div className={s.sectionHeader}>
          <span className={s.subHeader}>Атрибуты мастера</span>
          <h3 className={s.sectionTitle}>Чайная утварь Гунфу Ча</h3>
        </div>

        <div className={s.utensilsGrid}>
          <div className={s.utensilItem}>
            <TeapotIcon size={24} className={s.utensilIcon} />
            <div>
              <h5 className={s.utensilName}>Исинский чайник (Цзыша)</h5>
              <p className={s.utensilDesc}>Пористая глина дышит и накапливает чайные масла, обогащая настой от заварки к заварке.</p>
            </div>
          </div>
          <div className={s.utensilItem}>
            <CupIcon size={24} className={s.utensilIcon} />
            <div>
              <h5 className={s.utensilName}>Чахай (Чаша справедливости)</h5>
              <p className={s.utensilDesc}>Промежуточный сосуд, уравнивающий крепость и цвет напитка перед разливом по пиалам.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
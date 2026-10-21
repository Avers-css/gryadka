import React, { useState } from 'react';
import s from './reviews.module.css';
import { StarIcon, UserIcon, QuoteIcon, CheckIcon } from '../../Components/Icons';

const ReviewElement = ({ author, rating = 5, date, text }) => {
  const initial = author ? author.charAt(0).toUpperCase() : 'Ч';

  return (
    <article className={s.reviewCard}>
      <div className={s.cardHeader}>
        <div className={s.avatar}>{initial}</div>
        <div className={s.authorBox}>
          <div className={s.nameRow}>
            <h4 className={s.author}>{author}</h4>
            <span className={s.verifiedBadge}>
              <CheckIcon size={12} />
              <span>Проверенный гость</span>
            </span>
          </div>
          <div className={s.metaRow}>
            <div className={s.stars} aria-label={`Оценка: ${rating} из 5`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  size={14}
                  filled={star <= rating}
                  className={star <= rating ? s.starFilled : s.starEmpty}
                />
              ))}
            </div>
            {date && <span className={s.date}>{date}</span>}
          </div>
        </div>
      </div>
      <p className={s.text}>{text}</p>
    </article>
  );
};

const Reviews = ({ reviews = [], newReviewText = '', newReviewAuthor = '', dispatch }) => {
  const [authorInput, setAuthorInput] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const onAddReview = (e) => {
    e.preventDefault();
    const text = newReviewText.trim();
    if (!text) return;

    dispatch({
      type: 'ADD-REVIEW',
      reviewText: text,
      author: authorInput.trim() || 'Гость чайной',
      rating: rating
    });

    setAuthorInput('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const onReviewChange = (e) => {
    dispatch({ type: 'UPDATE-NEW-REVIEW-TEXT', newText: e.target.value });
  };

  return (
    <div className={s.reviews}>
      <header className={s.header}>
        <span className={s.tag}>Впечатления гостей</span>
        <h2 className={s.title}>Книга отзывов и чайных историй</h2>
        <p className={s.sub}>
          Мы бережно собираем отклики наших гостей о сортах чая, атмосфере в чайной гостиной и проведенных церемониях.
        </p>
      </header>

      <div className={s.layout}>
        <section className={s.list} aria-label="Список отзывов">
          {reviews.map((elem) => (
            <ReviewElement
              key={elem.id}
              author={elem.author}
              rating={elem.rating}
              date={elem.date}
              text={elem.text}
            />
          ))}
        </section>

        <aside className={s.formWrapper}>
          <form onSubmit={onAddReview} className={s.formCard}>
            <div className={s.formTitleBox}>
              <QuoteIcon size={18} className={s.quoteIcon} />
              <h3 className={s.formTitle}>Поделиться впечатлением</h3>
            </div>
            <p className={s.formDesc}>
              Расскажите, какой чай заваривали, как раскрылся вкус и аромат в вашей чашке.
            </p>

            <div className={s.fieldGroup}>
              <label htmlFor="review-author" className={s.label}>Ваше имя</label>
              <div className={s.inputWrapper}>
                <UserIcon size={16} className={s.fieldIcon} />
                <input
                  id="review-author"
                  type="text"
                  placeholder="Например: Анна"
                  value={authorInput}
                  onChange={(e) => setAuthorInput(e.target.value)}
                  className={s.input}
                />
              </div>
            </div>

            <div className={s.fieldGroup}>
              <label className={s.label}>Оценка чаепития</label>
              <div className={s.ratingSelector}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={s.starBtn}
                    aria-label={`Поставить ${star} звезд`}
                  >
                    <StarIcon
                      size={20}
                      filled={star <= rating}
                      className={star <= rating ? s.starFilled : s.starEmpty}
                    />
                  </button>
                ))}
                <span className={s.ratingValue}>{rating} из 5</span>
              </div>
            </div>

            <div className={s.fieldGroup}>
              <label htmlFor="review-text" className={s.label}>Текст отзыва</label>
              <textarea
                id="review-text"
                onChange={onReviewChange}
                value={newReviewText}
                className={s.textarea}
                placeholder="Опишите аромат, ноты вкуса, послевкусие или атмосферу..."
                rows="4"
                required
              />
            </div>

            <button type="submit" className={s.submitBtn}>
              Опубликовать отзыв
            </button>

            {submitted && (
              <div className={s.successNotice}>
                <CheckIcon size={16} />
                <span>Спасибо! Ваш отзыв опубликован.</span>
              </div>
            )}
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Reviews;
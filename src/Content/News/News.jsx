import React, { useState, useEffect } from 'react';
import s from './news.module.css';
import {
  CalendarIcon,
  ClockIcon,
  SearchIcon,
  TagIcon,
  SparklesIcon,
  HeartIcon,
  ChevronRightIcon,
  BookOpenIcon,
  SendIcon,
  XIcon,
  CheckIcon,
  UserIcon
} from '../../Components/Icons';

const CATEGORIES = [
  { id: 'all', label: 'Все материалы' },
  { id: 'arrivals', label: 'Новые поступления' },
  { id: 'masterclasses', label: 'Мастер-классы' },
  { id: 'events', label: 'События и дегустации' },
  { id: 'culture', label: 'Чайная культура' }
];

const News = ({ news = [], dispatch }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Закрытие модального окна по Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeArticle]);

  // Фильтрация новостей
  const filteredNews = news.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchCategory;

    const matchText =
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(query))) ||
      (item.author && item.author.toLowerCase().includes(query));

    return matchCategory && matchText;
  });

  const featuredArticle = news.find((item) => item.featured) || news[0];
  const regularNews = filteredNews.filter((item) => !item.featured || selectedCategory !== 'all' || searchQuery);

  const handleLike = (e, newsId) => {
    e.stopPropagation();
    if (dispatch) {
      dispatch({ type: 'TOGGLE-LIKE-NEWS', newsId });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = subscriberEmail.trim();
    if (!email || !email.includes('@')) return;

    if (dispatch) {
      dispatch({ type: 'SUBSCRIBE-NEWSLETTER', email });
    }
    setSubscribed(true);
    setSubscriberEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section className={s.newsWrapper} aria-labelledby="news-page-title">
      {/* Шапка страницы */}
      <header className={s.header}>
        <div className={s.headerIntro}>
          <span className={s.tag}>Хроники чайного дома</span>
          <h2 id="news-page-title" className={s.title}>Чайный Вестник и События</h2>
          <p className={s.subtitle}>
            Свежие экспедиции в горы Китая, сезонные поступления выдержанных пуэров, анонсы чайных церемоний и практические руководства от старших мастеров.
          </p>
        </div>

        {/* Панель фильтров и поиска */}
        <div className={s.toolbar}>
          <div className={s.categoryPills} role="tablist" aria-label="Категории новостей">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={selectedCategory === cat.id ? `${s.pill} ${s.pillActive}` : s.pill}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className={s.searchBox}>
            <SearchIcon size={16} className={s.searchIcon} />
            <input
              type="text"
              placeholder="Поиск по теме, автору или тегу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={s.searchInput}
              aria-label="Поиск по новостям"
            />
            {searchQuery && (
              <button
                type="button"
                className={s.clearSearchBtn}
                onClick={() => setSearchQuery('')}
                aria-label="Очистить поиск"
              >
                <XIcon size={14} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Главная новость (Featured Hero) — показывается в общем списке без поиска */}
      {selectedCategory === 'all' && !searchQuery && featuredArticle && (
        <article className={s.heroCard} onClick={() => setActiveArticle(featuredArticle)}>
          <div className={s.heroImageCol}>
            <img src={featuredArticle.image} alt={featuredArticle.title} className={s.heroImage} />
            <span className={s.heroBadge}>
              <SparklesIcon size={14} />
              <span>Главная тема</span>
            </span>
          </div>

          <div className={s.heroContentCol}>
            <div className={s.cardMeta}>
              <span className={s.categoryBadge}>{featuredArticle.categoryName}</span>
              <span className={s.metaItem}>
                <CalendarIcon size={14} />
                <span>{featuredArticle.date}</span>
              </span>
              <span className={s.metaItem}>
                <ClockIcon size={14} />
                <span>{featuredArticle.readTime}</span>
              </span>
            </div>

            <h3 className={s.heroTitle}>{featuredArticle.title}</h3>
            <p className={s.heroSummary}>{featuredArticle.summary}</p>

            {featuredArticle.highlights && (
              <ul className={s.heroHighlights}>
                {featuredArticle.highlights.map((h, i) => (
                  <li key={i} className={s.highlightItem}>
                    <CheckIcon size={13} className={s.checkIcon} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className={s.heroFooter}>
              <div className={s.authorInfo}>
                <UserIcon size={15} className={s.authorIcon} />
                <span>{featuredArticle.author}</span>
              </div>

              <div className={s.actionRow}>
                <button
                  type="button"
                  className={featuredArticle.isLiked ? `${s.likeBtn} ${s.likeActive}` : s.likeBtn}
                  onClick={(e) => handleLike(e, featuredArticle.id)}
                  title="Оценить новость"
                >
                  <HeartIcon size={16} filled={featuredArticle.isLiked} />
                  <span>{featuredArticle.likes}</span>
                </button>
                <button
                  type="button"
                  className={s.readMoreBtn}
                  onClick={() => setActiveArticle(featuredArticle)}
                >
                  <span>Читать статью</span>
                  <ChevronRightIcon size={16} />
                </button>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Сетка остальных новостей */}
      {filteredNews.length > 0 ? (
        <div className={s.newsGrid}>
          {regularNews.map((item) => (
            <article
              key={item.id}
              className={s.newsCard}
              onClick={() => setActiveArticle(item)}
            >
              <div className={s.cardImageWrapper}>
                <img src={item.image} alt={item.title} className={s.cardImage} loading="lazy" />
                <span className={s.cardCategory}>{item.categoryName}</span>
              </div>

              <div className={s.cardBody}>
                <div className={s.cardMetaRow}>
                  <span className={s.metaSmall}>
                    <CalendarIcon size={13} />
                    <span>{item.date}</span>
                  </span>
                  <span className={s.metaSmall}>
                    <ClockIcon size={13} />
                    <span>{item.readTime}</span>
                  </span>
                </div>

                <h4 className={s.cardTitle}>{item.title}</h4>
                <p className={s.cardSummary}>{item.summary}</p>

                {item.tags && item.tags.length > 0 && (
                  <div className={s.tagRow}>
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className={s.tagPill}>
                        <TagIcon size={11} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}

                <div className={s.cardFooter}>
                  <button
                    type="button"
                    className={item.isLiked ? `${s.likeSmallBtn} ${s.likeActive}` : s.likeSmallBtn}
                    onClick={(e) => handleLike(e, item.id)}
                    title="Мне нравится"
                  >
                    <HeartIcon size={14} filled={item.isLiked} />
                    <span>{item.likes}</span>
                  </button>

                  <button
                    type="button"
                    className={s.openLinkBtn}
                    onClick={() => setActiveArticle(item)}
                  >
                    <span>Подробнее</span>
                    <ChevronRightIcon size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={s.emptyState}>
          <BookOpenIcon size={40} className={s.emptyIcon} />
          <h4 className={s.emptyTitle}>Материалы не найдены</h4>
          <p className={s.emptyDesc}>
            По запросу «{searchQuery}» в категории ничего не найдено. Попробуйте изменить параметры поиска.
          </p>
          <button
            type="button"
            className={s.resetBtn}
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Показать все статьи
          </button>
        </div>
      )}

      {/* Интерактивный блок подписки на чайный клуб */}
      <section className={s.subscribeCard} aria-labelledby="subscribe-title">
        <div className={s.subContent}>
          <div className={s.subHeader}>
            <span className={s.subTag}>Чайный клуб «Дракон и Феникс»</span>
            <h3 id="subscribe-title" className={s.subTitle}>
              Получайте приглашения на закрытые дегустации
            </h3>
          </div>
          <p className={s.subDesc}>
            Присылаем раз в две недели честные отчеты о свежих сборах чая, уведомления о приезде редких сортов пуэра и скидки для членов клуба. Никакого спама.
          </p>
          {subscribed ? (
            <div className={s.subscribeSuccess}>
              <CheckIcon size={18} className={s.successCheck} />
              <span>Спасибо! Вы подписались на закрытый вестник чайного клуба.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={s.subscribeForm}>
              <input
                type="email"
                placeholder="Ваш e-mail для чайных вестей..."
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                required
                className={s.subscribeInput}
                aria-label="Электронная почта для подписки"
              />
              <button type="submit" className={s.subscribeBtn}>
                <SendIcon size={15} />
                <span>Подписаться</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Модальное окно полного чтения статьи */}
      {activeArticle && (
        <div className={s.modalOverlay} onClick={() => setActiveArticle(null)} role="dialog" aria-modal="true">
          <div className={s.modalCard} onClick={(e) => e.stopPropagation()}>
            <header className={s.modalHeader}>
              <div className={s.modalMeta}>
                <span className={s.categoryBadge}>{activeArticle.categoryName}</span>
                <span className={s.modalDate}>{activeArticle.date}</span>
                <span className={s.modalTime}>• {activeArticle.readTime} чтения</span>
              </div>
              <button
                type="button"
                className={s.modalCloseBtn}
                onClick={() => setActiveArticle(null)}
                aria-label="Закрыть статью"
              >
                <XIcon size={20} />
              </button>
            </header>

            <div className={s.modalBody}>
              <h2 className={s.modalTitle}>{activeArticle.title}</h2>

              <div className={s.modalAuthorRow}>
                <div className={s.authorAvatar}>
                  <UserIcon size={18} />
                </div>
                <div className={s.authorDetails}>
                  <span className={s.authorName}>{activeArticle.author}</span>
                  <span className={s.authorRole}>Чайный эксперт и обозреватель</span>
                </div>
              </div>

              <div className={s.modalImageWrapper}>
                <img src={activeArticle.image} alt={activeArticle.title} className={s.modalImage} />
              </div>

              <div className={s.modalTextContent}>
                {activeArticle.content && activeArticle.content.map((paragraph, index) => (
                  <p key={index} className={s.modalParagraph}>{paragraph}</p>
                ))}
              </div>

              {activeArticle.highlights && activeArticle.highlights.length > 0 && (
                <div className={s.modalHighlightsBox}>
                  <div className={s.highlightsHeader}>
                    <SparklesIcon size={16} className={s.sparkleIcon} />
                    <h4 className={s.highlightsTitle}>Ключевые моменты</h4>
                  </div>
                  <ul className={s.highlightsList}>
                    {activeArticle.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeArticle.tags && (
                <div className={s.modalTags}>
                  <span className={s.tagsLabel}>Теги публикации:</span>
                  <div className={s.tagsList}>
                    {activeArticle.tags.map((tag, i) => (
                      <span key={i} className={s.modalTagItem}>#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <footer className={s.modalFooter}>
              <button
                type="button"
                className={activeArticle.isLiked ? `${s.likeBtn} ${s.likeActive}` : s.likeBtn}
                onClick={(e) => handleLike(e, activeArticle.id)}
              >
                <HeartIcon size={16} filled={activeArticle.isLiked} />
                <span>{activeArticle.likes} ценителям понравилось</span>
              </button>

              <button
                type="button"
                className={s.modalDoneBtn}
                onClick={() => setActiveArticle(null)}
              >
                Закрыть
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;

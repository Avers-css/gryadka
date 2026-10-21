import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './catalog.module.css';
import Card from './Card/Card';
import { SearchIcon } from '../../Components/Icons';

const Catalog = ({ products = [], dispatch }) => {
  const { category } = useParams();
  const [search, setSearch] = useState('');

  // Фильтрация по категории из URL
  const categoryFiltered = (!category || category === 'all')
    ? products
    : products.filter(item => item.category === category);

  // Фильтрация по поисковой строке
  const filteredProducts = categoryFiltered.filter(item => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    return (
      item.name.toLowerCase().includes(query) ||
      (item.notes && item.notes.toLowerCase().includes(query)) ||
      (item.origin && item.origin.toLowerCase().includes(query))
    );
  });

  const getCategoryTitle = () => {
    switch (category) {
      case 'puer': return 'Выдержанные Пуэры';
      case 'oolong': return 'Утёсные и Светлые Улуны';
      case 'green': return 'Свежий Зеленый Чай';
      case 'red': return 'Красный Чай (Хун Ча)';
      case 'white': return 'Белый Чай (Бай Ча)';
      default: return 'Вся Коллекция Чая';
    }
  };

  const getCategoryDesc = () => {
    switch (category) {
      case 'puer': return 'Шу и Шэн пуэры с вековых деревьев провинции Юньнань естественной и ускоренной ферментации.';
      case 'oolong': return 'Знаменитые чаи с гор Уишань, Чаочжоу и острова Тайвань со сложной гаммой ароматов.';
      case 'green': return 'Ранние весенние сборы нежных флешей, богатые аминокислотами и свежестью.';
      case 'red': return 'Прогревающий чай сильной ферментации с медовыми, ржаными и ягодными оттенками.';
      case 'white': return 'Бережная сушка на солнце без скручивания, сохраняющая максимум природных антиоксидантов.';
      default: return 'Селекционные сорта китайского чая высшего грейда, отобранные напрямую у фермеров.';
    }
  };

  return (
    <section className={style.catalogWrapper} aria-labelledby="catalog-title">
      <div className={style.catalogHeader}>
        <div className={style.headerMain}>
          <span className={style.subTitle}>Оригинальный китайский лист</span>
          <h2 id="catalog-title" className={style.title}>{getCategoryTitle()}</h2>
          <p className={style.categoryDesc}>{getCategoryDesc()}</p>
        </div>

        <div className={style.controls}>
          <div className={style.searchBox}>
            <SearchIcon size={16} className={style.searchIcon} />
            <input
              type="text"
              placeholder="Поиск по названию или нотам..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={style.searchInput}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className={style.clearBtn}
                title="Очистить"
              >
                ×
              </button>
            )}
          </div>
          <div className={style.countBadge}>
            Найдено: <strong>{filteredProducts.length}</strong>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className={style.emptyState}>
          <h3>Сорта не найдены</h3>
          <p>Попробуйте изменить поисковый запрос или выбрать другую категорию.</p>
          <Link to="/catalog/all" className={style.resetBtn} onClick={() => setSearch('')}>
            Показать все сорта
          </Link>
        </div>
      ) : (
        <div className={style.grid}>
          {filteredProducts.map(p => (
            <Card
              key={p.id}
              product={p}
              onAddToCart={() => dispatch && dispatch({ type: 'ADD-TO-CART', product: p })}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Catalog;
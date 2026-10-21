import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Catalog from './Content/Catalog/Catalog';
import Reviews from './Content/Reviews/Reviews';
import Contact from './Content/Contact/Contact';
import Gallery from './Content/Gallery/Gallery';
import News from './Content/News/News';

const App = (props) => {
  const cartCount = props.state.cart ? props.state.cart.length : 0;

  return (
    <div className='app_wrapper'>
      <Header cartCount={cartCount} />
      <Nav />
      <div className='main_layout'>
        <Sidebar products={props.state.products} />
        <main className='content_area'>
          <Routes>
            <Route path='/' element={<Catalog products={props.state.products} dispatch={props.dispatch} />} />
            <Route path='/catalog' element={<Catalog products={props.state.products} dispatch={props.dispatch} />} />
            <Route path='/catalog/:category' element={<Catalog products={props.state.products} dispatch={props.dispatch} />} />
            <Route path='/ceremony' element={<Gallery />} />
            <Route path='/news' element={<News news={props.state.news} dispatch={props.dispatch} />} />
            <Route
              path='/reviews'
              element={
                <Reviews
                  reviews={props.state.reviews}
                  newReviewText={props.state.newReviewText}
                  newReviewAuthor={props.state.newReviewAuthor}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path='/contact/*' element={<Contact />}>
              <Route index element={<ContactOverview />} />
              <Route path='email' element={<ContactEmail />} />
              <Route path='vk' element={<ContactVk />} />
              <Route path='workadress' element={<ContactAddress />} />
              <Route path='max' element={<ContactMaster />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const ContactOverview = () => (
  <div style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
    <p style={{ marginBottom: '8px' }}>
      <strong>Чайная гостиная открыта ежедневно с 10:00 до 22:00.</strong>
    </p>
    <p>
      Выберите интересующий вас способ связи выше или приходите на дегустацию свежих сборов по адресу ул. Чайная, дом 8.
    </p>
  </div>
);

const ContactEmail = () => (
  <div style={{ lineHeight: '1.7' }}>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4px' }}>Официальная почта для заказов и предложений:</p>
    <a href="mailto:info@dragon-phoenix-tea.ru" style={{ color: 'var(--primary-jade)', fontWeight: '600', fontSize: '1.1rem', textDecoration: 'none' }}>
      info@dragon-phoenix-tea.ru
    </a>
  </div>
);

const ContactVk = () => (
  <div style={{ lineHeight: '1.7' }}>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4px' }}>Официальное сообщество ВКонтакте:</p>
    <a href="https://vk.com/dragonphoenix_tea" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-jade)', fontWeight: '600', fontSize: '1.1rem', textDecoration: 'none' }}>
      vk.com/dragonphoenix_tea
    </a>
  </div>
);

const ContactAddress = () => (
  <div style={{ lineHeight: '1.7', color: 'var(--text-primary)' }}>
    <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '4px' }}>г. Москва, ул. Чайная, д. 8, стр. 1</p>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>м. «Китай-город», выход №4 (пешком 4 минуты). Уютный вход со двора через чайную арку.</p>
  </div>
);

const ContactMaster = () => (
  <div style={{ lineHeight: '1.7', color: 'var(--text-primary)' }}>
    <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '4px' }}>Старший чайный мастер: Павел Аверьянов</p>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
      Сертифицированный специалист по варке чая методом Лу Юя и традиционной церемонии Гунфу Ча. Консультации по подбору глиняной посуды из Исина.
    </p>
  </div>
);

export default App;
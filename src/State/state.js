import shuPuer from '../image/Shu_puer.jpg';
import shenPuer from '../image/shen_puer.jpg';
import puerGunting from '../image/puer_gunting.jpg';
import puerBulang from '../image/puer_bulang.jpg';
import chagaoPuer from '../image/chagao.jpg';

import daxupao from '../image/daxupao.jpg';
import teguanin from '../image/teguanin.jpg';
import dancong from '../image/dancong.jpg';
import gabaAlishan from '../image/gaba.jpg';
import rougui from '../image/rougui.jpg';
import shuixian from '../image/shuixian.jpg';
import dongding from '../image/dongding.jpg';

import lunczin from '../image/lunczin.jpg';
import biluochun from '../image/biluochun.jpg';
import taipingHoukui from '../image/taiping_houkui.jpg';
import anjiBaicha from '../image/anji_baicha.jpg';
import lushanYunwu from '../image/lushan_yunwu.jpg';

import dianhong from '../image/dianhong.jpg';
import xiaozhong from '../image/xiaozhong.jpg';
import jinjunmei from '../image/jinjunmei.jpg';
import qimen from '../image/qimen.jpg';

import yinzhen from '../image/yinzhen.jpg';
import baimudan from '../image/baimudan.jpg';
import shoumei from '../image/shoumei.jpg';

import newsWuyi from '../image/news_wuyi.jpg';
import newsLuyu from '../image/news_luyu.jpg';
import newsYixing from '../image/news_yixing.jpg';

let store = {
  _state: {
    products: [
      /* === ПУЭРЫ (puer) === */
      {
        id: 1,
        name: 'Шу Пуэр «Золотой Павлин»',
        price: '850',
        image: shuPuer,
        category: 'puer',
        categoryName: 'Шу Пуэр',
        origin: 'Округ Мэнхай, Юньнань',
        year: '2019',
        temp: '95–100°C',
        notes: 'Чернослив, древесная кора, горький шоколад',
        inStock: true
      },
      {
        id: 2,
        name: 'Шэн Пуэр «Дикие Рощи»',
        price: '1100',
        image: shenPuer,
        category: 'puer',
        categoryName: 'Шэн Пуэр',
        origin: 'Горы Иу, Юньнань',
        year: '2021',
        temp: '90–95°C',
        notes: 'Сухофрукты, полевой мед, дымный шлейф',
        inStock: true
      },
      {
        id: 3,
        name: 'Шу Пуэр «Дворцовый Гунтин»',
        price: '980',
        image: puerGunting,
        category: 'puer',
        categoryName: 'Шу Пуэр',
        origin: 'Мэнхай, Юньнань',
        year: '2017',
        temp: '95–100°C',
        notes: 'Ореховая паста, старый дуб, сладкое послевкусие',
        inStock: true
      },
      {
        id: 4,
        name: 'Шэн Пуэр «Гора Буланшань»',
        price: '1350',
        image: puerBulang,
        category: 'puer',
        categoryName: 'Шэн Пуэр',
        origin: 'Массив Булан, Сишуанбаньна',
        year: '2015',
        temp: '90–95°C',
        notes: 'Камфора, горный мох, терпкая курага',
        inStock: true
      },
      {
        id: 5,
        name: 'Ча Гао «Смола Пуэра»',
        price: '1800',
        image: chagaoPuer,
        category: 'puer',
        categoryName: 'Экстракт пуэра',
        origin: 'Пуэр, Юньнань',
        year: '2023',
        temp: '95–100°C',
        notes: 'Густой кофейный настой, шоколад, чернослив',
        inStock: true
      },

      /* === УЛУНЫ (oolong) === */
      {
        id: 6,
        name: 'Да Хун Пао «Большой Красный Халат»',
        price: '1200',
        image: daxupao,
        category: 'oolong',
        categoryName: 'Утёсный улун',
        origin: 'Заповедник Уишань, Фуцзянь',
        year: '2024',
        temp: '90–95°C',
        notes: 'Печеные пряности, карамель, жареный орех',
        inStock: true
      },
      {
        id: 7,
        name: 'Тегуаньинь «Железная Богиня»',
        price: '950',
        image: teguanin,
        category: 'oolong',
        categoryName: 'Светлый улун',
        origin: 'Уезд Аньси, Фуцзянь',
        year: '2024',
        temp: '85–90°C',
        notes: 'Сирень, весенний луг, свежая орхидея',
        inStock: true
      },
      {
        id: 8,
        name: 'Фэн Хуан Дань Цун «Одинокие Пики»',
        price: '1400',
        image: dancong,
        category: 'oolong',
        categoryName: 'Гуандунский улун',
        origin: 'Гора Феникса, Чаочжоу',
        year: '2024',
        temp: '90–95°C',
        notes: 'Медовая орхидея, миндаль, тропические фрукты',
        inStock: true
      },
      {
        id: 9,
        name: 'Габа Алишань «Рубиновая»',
        price: '1650',
        image: gabaAlishan,
        category: 'oolong',
        categoryName: 'Тайваньский улун',
        origin: 'Горы Алишань, Тайвань',
        year: '2024',
        temp: '88–92°C',
        notes: 'Печеное яблоко, карамель, легкая ягодная кислинка',
        inStock: true
      },
      {
        id: 10,
        name: 'Жоу Гуй «Корица с Утёсов Уи»',
        price: '1300',
        image: rougui,
        category: 'oolong',
        categoryName: 'Утёсный улун',
        origin: 'Уишань, Фуцзянь',
        year: '2024',
        temp: '92–95°C',
        notes: 'Острая корица, сладкая карамель, минеральный утёсный фон',
        inStock: true
      },
      {
        id: 11,
        name: 'Шуйсянь «Водяной Бессмертный»',
        price: '1150',
        image: shuixian,
        category: 'oolong',
        categoryName: 'Утёсный улун',
        origin: 'Уишань, Фуцзянь',
        year: '2023',
        temp: '90–95°C',
        notes: 'Древесный дымок, мокрый камень, нарцисс',
        inStock: true
      },
      {
        id: 12,
        name: 'Дун Дин «Морозный Пик»',
        price: '1250',
        image: dongding,
        category: 'oolong',
        categoryName: 'Тайваньский улун',
        origin: 'Округ Наньтоу, Тайвань',
        year: '2024',
        temp: '88–92°C',
        notes: 'Жареный фундук, сливочная помадка, горные цветы',
        inStock: true
      },

      /* === ЗЕЛЕНЫЙ ЧАЙ (green) === */
      {
        id: 13,
        name: 'Зеленый Лунцзин «Колодец Дракона»',
        price: '1500',
        image: lunczin,
        category: 'green',
        categoryName: 'Зеленый чай',
        origin: 'Деревня Лунцзин, Сиху, Ханчжоу',
        year: '2024',
        temp: '80–85°C',
        notes: 'Свежая трава, тыквенные семечки, жареный каштан',
        inStock: true
      },
      {
        id: 14,
        name: 'Билочунь «Изумрудные Спирали»',
        price: '1450',
        image: biluochun,
        category: 'green',
        categoryName: 'Зеленый чай',
        origin: 'Горы Дунтин, Цзянсу',
        year: '2024',
        temp: '75–80°C',
        notes: 'Белый персик, цветущая слива, молодой горошек',
        inStock: true
      },
      {
        id: 15,
        name: 'Тайпин Хоукуй «Главарь Обезьян»',
        price: '1750',
        image: taipingHoukui,
        category: 'green',
        categoryName: 'Зеленый чай',
        origin: 'Район Хуаншань, Аньхой',
        year: '2024',
        temp: '80–85°C',
        notes: 'Гигантский плоский лист, бамбуковый сок, орхидея',
        inStock: true
      },
      {
        id: 16,
        name: 'Люань Гуапянь «Тыквенные Семечки»',
        price: '1350',
        image: anjiBaicha,
        category: 'green',
        categoryName: 'Зеленый чай',
        origin: 'Горы Дабе, Аньхой',
        year: '2024',
        temp: '80–85°C',
        notes: 'Сладкие злаки, свежескошенное сено, густой настой',
        inStock: true
      },
      {
        id: 17,
        name: 'Моли Хуа Ча «Жасминовые Жемчужины»',
        price: '1100',
        image: lushanYunwu,
        category: 'green',
        categoryName: 'Жасминовый чай',
        origin: 'Фудин, Фуцзянь',
        year: '2024',
        temp: '80–85°C',
        notes: 'Ночной жасмин, сладкий нектар, освежающий шлейф',
        inStock: true
      },

      /* === КРАСНЫЙ ЧАЙ (red) === */
      {
        id: 18,
        name: 'Дянь Хун «Золотые Иглы Цзинь Хао»',
        price: '1050',
        image: dianhong,
        category: 'red',
        categoryName: 'Красный чай',
        origin: 'Уезд Фэнцин, Юньнань',
        year: '2024',
        temp: '90–95°C',
        notes: 'Курага, ржаной хлеб, гречишный мед',
        inStock: true
      },
      {
        id: 19,
        name: 'Чжэн Шань Сяо Чжун (Лапсанг Сушонг)',
        price: '1200',
        image: xiaozhong,
        category: 'red',
        categoryName: 'Красный чай',
        origin: 'Деревня Синцунь, Уишань',
        year: '2024',
        temp: '90–95°C',
        notes: 'Копченая груша, смола сосны, карамельный бисквит',
        inStock: true
      },
      {
        id: 20,
        name: 'Цзинь Цзюнь Мэй «Золотые Брови»',
        price: '2100',
        image: jinjunmei,
        category: 'red',
        categoryName: 'Красный чай',
        origin: 'Заповедник Тунмугуань, Фуцзянь',
        year: '2024',
        temp: '88–92°C',
        notes: 'Шоколадные трюфели, сухофрукты, цветочный мед',
        inStock: true
      },
      {
        id: 21,
        name: 'Цихун Маофэн «Красный Чай Кимун»',
        price: '1150',
        image: qimen,
        category: 'red',
        categoryName: 'Красный чай',
        origin: 'Уезд Цимень, Аньхой',
        year: '2024',
        temp: '90–95°C',
        notes: 'Яблочная пастила, красные ягоды, мускатный оттенок',
        inStock: true
      },

      /* === БЕЛЫЙ ЧАЙ (white) === */
      {
        id: 22,
        name: 'Байхао Иньчжэнь «Серебряные Иглы»',
        price: '1950',
        image: yinzhen,
        category: 'white',
        categoryName: 'Белый чай',
        origin: 'Гора Таймушань, Фудин, Фуцзянь',
        year: '2024',
        temp: '75–80°C',
        notes: 'Березовый сок, белый персик, пушистый нектар',
        inStock: true
      },
      {
        id: 23,
        name: 'Бай Мудань «Белый Пион»',
        price: '1100',
        image: baimudan,
        category: 'white',
        categoryName: 'Белый чай',
        origin: 'Уезд Чжэнхэ, Фуцзянь',
        year: '2024',
        temp: '80–85°C',
        notes: 'Полевые травы, спелая дыня, осенние листья',
        inStock: true
      },
      {
        id: 24,
        name: 'Шоу Мэй «Брови Долголетия» (выдержанный)',
        price: '950',
        image: shoumei,
        category: 'white',
        categoryName: 'Белый чай',
        origin: 'Фудин, Фуцзянь',
        year: '2018',
        temp: '85–90°C',
        notes: 'Финики, лекарственные травы, теплый мед',
        inStock: true
      },
      {
        id: 25,
        name: 'Юэ Гуан Бай «Белый Лунный Свет»',
        price: '1250',
        image: baimudan,
        category: 'white',
        categoryName: 'Белый чай',
        origin: 'Цзингу, Юньнань',
        year: '2023',
        temp: '80–85°C',
        notes: 'Черно-белый лист, ночные цветы, сладкая патока',
        inStock: true
      }
    ],
    cart: [],
    reviews: [
      {
        id: 1,
        author: 'Алексей Мельников',
        rating: 5,
        date: '12 октября 2026',
        text: 'Потрясающий выдержанный Шу Пуэр! Плотный, бархатистый настой цвета коньяка, держит до 9 проливов. Рекомендую заваривать в исинском чайнике.'
      },
      {
        id: 2,
        author: 'Елена Васильева',
        rating: 5,
        date: '04 октября 2026',
        text: 'Очень уютная чайная гостиная. Заказывали церемонию Гунфу Ча с Да Хун Пао — мастер помог раскрыть чай с совершенно новой стороны. Заказали чай и домой.'
      },
      {
        id: 3,
        author: 'Иван Кузнецов',
        rating: 5,
        date: '28 сентября 2026',
        text: 'Тегуаньинь свежего сбора великолепен: нежный цветочный аромат наполняет всю комнату с первого же пролива. Доставка по Москве приехала день в день.'
      }
    ],
    newReviewText: '',
    newReviewAuthor: '',
    news: [
      {
        id: 1,
        title: 'Осенняя экспедиция в горы Уишань: свежий сбор утёсных улунов Да Хун Пао и Жоу Гуй',
        slug: 'wuyishan-autumn-expedition-2026',
        category: 'arrivals',
        categoryName: 'Новые поступления',
        date: '18 октября 2026',
        readTime: '4 мин',
        author: 'Павел Аверьянов, старший чайный мастер',
        featured: true,
        image: newsWuyi,
        summary: 'Наш чайный мастер вернулся из заповедника Уишань в провинции Фуцзянь с эксклюзивной партией высокогорного улуна осенней прожарки на древесных углях.',
        content: [
          'Каждую осень в заповеднике Уишань наступает особенное время: сбор листьев для утёсных улунов завершён, и начинается долгий, медитативный процесс хунпэй — медленной прожарки чайного листа на древесных углях фруктовых деревьев.',
          'Мы лично продегустировали свыше тридцати вариантов у фермеров из ущелья Люсянцзянь и отобрали два эталонных образца: классический Да Хун Пао («Большой Красный Халат») глубокого прогрева с нотами чернослива и карамели, а также Жоу Гуй («Корица с Утёсов») с ярким, пряным ароматом и долгим сладким послевкусием.',
          'Партия чая уже доставлена в нашу московскую гостиную на ул. Чайной. Чай герметично расфасован в фольгированные пакеты по 50 и 100 граммов, а также доступен для традиционной церемонии Гунфу Ча за нашей массивной кедровой чабанью.'
        ],
        highlights: [
          'Сбор: Октябрь 2026, провинция Фуцзянь',
          'Прожарка: Традиционный угольный прогрев (Чжунхо)',
          'Доступно в каталоге и в чайной гостиной'
        ],
        likes: 24,
        isLiked: false,
        tags: ['Уишань', 'Да Хун Пао', 'Жоу Гуй', 'Улуны', 'Новинки']
      },
      {
        id: 2,
        title: 'Мастер-класс: традиционная варка чая на живом огне по древнему канону Лу Юя',
        slug: 'lu-yu-tea-boiling-masterclass',
        category: 'masterclasses',
        categoryName: 'Школа и мастер-классы',
        date: '14 октября 2026',
        readTime: '3 мин',
        author: 'Павел Аверьянов, чайный мастер',
        featured: false,
        image: newsLuyu,
        summary: 'В это воскресенье в нашей чайной гостиной пройдет практический семинар по наблюдению за стадиями закипания воды («глаза рака», «рыбьи глаза», «бурлящий родник») и варке выдержанного шэн пуэра.',
        content: [
          'В трактате «Чайный Канон» (Ча Цзин), написанном в VIII веке мастером Лу Юем, детально описана наука приготовления чая в открытом стеклянном или керамическом котле. Этот метод кардинально отличается от быстрого пролива в гайвани.',
          'На встрече мы разберем физику нагрева родниковой воды, научимся определять три стадии закипания по звуку и форме пузырьков, создадим знаменитый «водяной смерч» бамбуковыми щипцами и заварим 15-летний шэн пуэр с диких деревьев горы Буланшань.',
          'Каждый участник освоит тонкости калибровки пламени и сможет самостоятельно повторить этот медитативный ритуал дома. Количество мест за церемониальным столом ограничено 8 гостями.'
        ],
        highlights: [
          'Дата: Воскресенье, 25 октября в 18:00',
          'Продолжительность: 2 часа практики',
          'Чай вечера: Коллекционный Шэн Пуэр 2011 года'
        ],
        likes: 38,
        isLiked: false,
        tags: ['Лу Юй', 'Шэн Пуэр', 'Варка чая', 'Мастер-класс']
      },
      {
        id: 3,
        title: 'Тайны исинской глины: как форма и пористость чайника раскрывают пуэры и улуны',
        slug: 'yixing-clay-secrets-guide',
        category: 'culture',
        categoryName: 'Чайная культура',
        date: '08 октября 2026',
        readTime: '6 мин',
        author: 'Редакция чайного дома',
        featured: false,
        image: newsYixing,
        summary: 'Глубокий разбор сортов пурпурной глины Цзы Ша (Цзы Ни, Чжу Ни, Дуань Ни). Почему один и тот же лист дает совершенно разный настой в стекле, фарфоре и пористой глине.',
        content: [
          'Исинская глина — уникальный минеральный материал из окрестностей озера Тайху. Благодаря микроскопической пористости («двойным порам») чайник из Цзы Ша медленно накапливает тепло, позволяет чаю «дышать» и с годами «нарабатывается», впитывая чайные эфирные масла.',
          'Для плотных, темных Шу Пуэров и выдержанных сортов идеальна темная глина Цзы Ни с толстыми стенками: она сглаживает излишнюю терпкость и подчеркивает густую шоколадную плотность. Для тонких светлых улунов и зеленых чаев лучше подходит фарфор или плотная звонкая глина Чжу Ни с высокой теплоотдачей.',
          'В нашей гостиной появилась новая коллекция чайников ручной работы от мастеров из города Диншучжэнь с именными клеймами и сертификатами происхождения.'
        ],
        highlights: [
          'Сравнение пород: Цзы Ни vs Чжу Ни vs Дуань Ни',
          'Правила первого «воспитания» нового чайника',
          'Выставка авторской керамики в гостиной'
        ],
        likes: 42,
        isLiked: false,
        tags: ['Исинская глина', 'Цзы Ша', 'Чайная посуда', 'Традиции']
      },
      {
        id: 4,
        title: 'Поступление редкой смолы пуэра «Ча Гао» и белого чая «Серебряные иглы» с горы Таймушань',
        slug: 'rare-cha-gao-and-silver-needles-arrival',
        category: 'arrivals',
        categoryName: 'Новые поступления',
        date: '02 октября 2026',
        readTime: '3 мин',
        author: 'Павел Аверьянов, чайный мастер',
        featured: false,
        image: chagaoPuer,
        summary: 'Мы пополнили коллекцию премиальным Ча Гао ручного отжима из весеннего сырья Мэнхая, а также свежими почками Байхао Иньчжэнь раннего весеннего сбора.',
        content: [
          'Смола пуэра Ча Гао — древнейший концентрат чайной энергии, рецепт которого восходит к эпохе династии Тан. Для создания одного грамма смолы требуется бережно вываривать до ста граммов отборного чайного листа на слабом огне в течение нескольких суток.',
          'Также прибыл эталонный Байхао Иньчжэнь («Серебряные Иглы») из уезда Фудин. Цельные, бархатистые серебристые почки дают чистый, прозрачный настой с нотами полевых цветов, весеннего меда и березового сока.',
          'Оба сорта уже доступны для заказа онлайн с доставкой по Москве и России, а также в дегустационной зоне чайной гостиной.'
        ],
        highlights: [
          'Ча Гао: чистый бодрящий эффект и удобство заваривания',
          'Байхао Иньчжэнь: максимум полифенолов и L-теанина',
          'Ограниченная селекционная партия'
        ],
        likes: 19,
        isLiked: false,
        tags: ['Ча Гао', 'Белый чай', 'Мэнхай', 'Фудин', 'Поступления']
      },
      {
        id: 5,
        title: 'Вечер закрытой слепой дегустации: угадываем возраст и терруар коллекционных Шэн Пуэров',
        slug: 'blind-tasting-event-puer',
        category: 'events',
        categoryName: 'События и дегустации',
        date: '27 сентября 2026',
        readTime: '5 мин',
        author: 'Чайный клуб «Дракон и Феникс»',
        featured: false,
        image: puerBulang,
        summary: 'Клубный формат для любителей и знатоков чая: сравниваем четыре блина Шэн Пуэра разных десятилетий из знаменитых чайных регионов Иу, Булань и Биндао без визуальных подсказок.',
        content: [
          'Слепая дегустация — лучший способ откалибровать рецепторы и избавиться от влияния громких брендов и ценников на восприятие вкуса.',
          'Гостям будут поданы одинаковые пиалы с зашифрованными номерами настоев. Задача участников — по цвету, плотности настоя, аромату дна пиалы и вкусовому профилю определить примерный возраст выдержки (молодой, 7-летний, 15-летний) и гору происхождения.',
          'В финале вечера мы вскроем обложки блинов, обсудим различия и наградим победителя памятным чайным ножом из дамасской стали.'
        ],
        highlights: [
          'Формат: Слепая сравнительная дегустация',
          'В программе: 4 редких образца Шэн Пуэра',
          'Клубная скидка для участников на весь ассортимент'
        ],
        likes: 31,
        isLiked: false,
        tags: ['Дегустация', 'Клуб', 'Шэн Пуэр', 'События']
      },
      {
        id: 6,
        title: 'Руководство: как правильно хранить чай дома, чтобы он не терял аромат и пользу',
        slug: 'how-to-store-tea-at-home-guide',
        category: 'culture',
        categoryName: 'Чайная культура',
        date: '20 сентября 2026',
        readTime: '4 мин',
        author: 'Павел Аверьянов, чайный мастер',
        featured: false,
        image: shoumei,
        summary: 'Четыре главных врага чайного листа: свет, кислород, влажность и посторонние запахи. Практические советы по хранению зеленого чая в морозилке и пуэров на открытых полках.',
        content: [
          'Каждая категория китайского чая требует своего микроклимата. Главное правило: не храните чай на кухне рядом со специями, кофе или плитой, поскольку чайный лист мгновенно впитывает любые посторонние запахи.',
          'Зеленые и светлые улуны требуют герметичной темной тары и низкой температуры: их лучше держать в плотно закрытом пакете в холодильной или морозильной камере, чтобы остановить окисление.',
          'Пуэры и выдержанные белые чаи, напротив, нуждаются в медленной естественной ферментации. Для них идеальна глиняная или картонная емкость с доступом воздуха, влажность 55–65% и комнатная температура без прямых солнечных лучей.'
        ],
        highlights: [
          'Зеленый чай и Тегуаньинь: герметичность и холод',
          'Пуэры и Хэй Ча: стабильная влажность и «дышащая» тара',
          'Табу: прозрачные стеклянные банки на солнечном свету'
        ],
        likes: 56,
        isLiked: false,
        tags: ['Хранение чая', 'Советы', 'Пуэр', 'Чайная культура']
      }
    ],
    newsletterSubscribers: []
  },

  _callSubscriber() {
    console.log('State updated');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-REVIEW') {
      let newReview = {
        id: Date.now(),
        author: action.author || 'Ценитель чая',
        rating: action.rating || 5,
        date: 'Сегодня',
        text: action.reviewText
      };
      this._state.reviews.unshift(newReview);
      this._state.newReviewText = '';
      this._state.newReviewAuthor = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-REVIEW-TEXT') {
      this._state.newReviewText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-REVIEW-AUTHOR') {
      this._state.newReviewAuthor = action.newAuthor;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-TO-CART') {
      this._state.cart.push(action.product);
      this._callSubscriber(this._state);
    } else if (action.type === 'TOGGLE-LIKE-NEWS') {
      const item = this._state.news.find(n => n.id === action.newsId);
      if (item) {
        if (item.isLiked) {
          item.likes = Math.max(0, item.likes - 1);
          item.isLiked = false;
        } else {
          item.likes += 1;
          item.isLiked = true;
        }
        this._callSubscriber(this._state);
      }
    } else if (action.type === 'SUBSCRIBE-NEWSLETTER') {
      if (action.email) {
        if (!this._state.newsletterSubscribers) {
          this._state.newsletterSubscribers = [];
        }
        if (!this._state.newsletterSubscribers.includes(action.email)) {
          this._state.newsletterSubscribers.push(action.email);
        }
        this._callSubscriber(this._state);
      }
    }
  }
};

export default store;
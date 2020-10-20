const quizData = {
  title: 'Рассчитайте стоимость теплицы',
  expert: {
    photo: './public/assets/images/quiz/expert.png',
    name: 'Иван Николаевич',
    position: 'Специалист по теплицам',
  },
  discount: {
    unit: '%',
    value: 35,
    text: 'Ваша скидка:',
  },
  resultText: 'Пожалуйста, заполните форму для получения скидки',
  finishTextSuccess: 'Наш специалист уже готовит расчет лучшей теплицы для вас.',
  finishTextError: 'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!',
  request: {
    URL: atob('aHR0cHM6Ly9za2lka2EtdHV0LmJ5L2FjdGlvbi9pbmRleC5waHA='),
    title: 'Теплица',
    source: 'Agrolux'
  },
  questions: [
    {
      title: 'Выберите ширину теплицы',
      name: 'Ширина теплицы',
      type: 'image-radio',
      required: true,
      comment:
        'Добрый день! Давайте вместе выбирать теплицу! На данном этапе нам надо определиться с шириной теплицы: ширина бывает от 2 метров до 4 метров. Самые ходовые являются теплицы шириной 3 метра и 4 метра. Определяйтесь с выбором и смотрим дальше.',
      options: [
        {
          title: '2 метра',
          image: './public/assets/images/quiz/width_2m.png',
        },
        {
          title: '2.4 метра',
          image: './public/assets/images/quiz/width_2.4m.png',
        },
           {
          title: '3 метра',
          image: './public/assets/images/quiz/width_3m.png',
        },
           {
          title: '3.5 метра',
          image: './public/assets/images/quiz/width_3.5m.png',
        },
           {
          title: '4 метра',
          image: './public/assets/images/quiz/width_4m.png',
        },
      ],
    },
    {
      title: 'Выберите длину теплицы',
      name: 'Длина теплицы',
      type: 'radio',
      required: true,
      comment: 'Выбираем длину: тут уже все зависит от вашего участка. Из опыта продаж могу сказать, что самые ходовые - 4 метра и 6 метров.',
      options: [
        {
          title: '4 метра',
        },
        {
          title: '6 метров',
        },
        {
          title: '8 метров',
        },
        {
          title: '10 метров',
        },
      ],
    },
    {
      title: 'Расстояние между дугами',
      name: 'Расстояние между дугами',
      type: 'image-radio',
      required: true,
      comment: 'Золотым стандартом является шаг между дугами, равный 0.67 метра, также можно рассмотреть и 1 метр. Шаг в 0.5 метра - уже для особо ветреных мест и холмистых участков.',
      options: [
        {
          title: '50 сантиметров',
          image: './public/assets/images/quiz/interval_50cm.png',
        },
          {
          title: '67 сантиметров',
          image: './public/assets/images/quiz/interval_67cm.png',
        },
        {
          title: '1 метр',
          image: './public/assets/images/quiz/interval_100cm.png',
        },
      ],
    },
    {
      title: 'Выберите сечение трубы арочного каркаса',
      name: 'Сечение трубы арочного каркаса',
      type: 'image-radio',
      required: true,
      comment: '',
      options: [
        {
          title: '20x20 мм',
          image: './public/assets/images/quiz/size_20x20.jpg',
        },
        {
          title: '40x20 мм',
          image: './public/assets/images/quiz/size_40x20.jpg',
        },
        {
          title: 'Сдвоенная труба 20x20 мм',
          image: './public/assets/images/quiz/size_double_20x20.jpg',
        },
      ],
    },
    {
      title: 'Выберите дополнительные комплектующие',
      name: 'Дополнительные комплектующие[]',
      label: 'Выберите один или несколько вариантов, либо пропустите вопрос',
      type: 'image-checkbox',
      required: false,
      comment: 'Можно выбрать одно или несколько дополнительных комплектующих. Если не знаете что выбрать - пройдите тест до конца и консультант вам расскажет про каждую позицию персонально.',
      options: [
        {
          title: 'Автоматическая форточка',
          image: './public/assets/images/quiz/window-leaf.jpg',
        },
        {
          title: 'Система капельного полива',
          image: './public/assets/images/quiz/drip-irrigation-system.jpg',
        },
        {
          title: 'Дополнительные поперечные планки',
          image: './public/assets/images/quiz/size_20x20.jpg',
        },
        {
          title: 'Грунтазацепы 50 см',
          image: './public/assets/images/quiz/piles.jpg',
        },
        {
          title: 'Грядки оцинкованные для теплицы',
          image: './public/assets/images/quiz/garters.jpg',
        },
        {
          title: 'Лента для крепления поликарбоната',
          image: './public/assets/images/quiz/tape.jpg',
        },
        {
          title: 'Уплотнитель на торцы поликарбоната',
          image: './public/assets/images/quiz/end-profile.jpg',
        },
        {
          title: 'Перфорированная лента',
          image: './public/assets/images/quiz/perforated-tape.jpg',
        },
      ],
    },
    {
      title: 'Бесплатно привезем теплицу – напишите куда',
      name: 'Адрес доставки',
      type: 'text',
      required: true,
      comment: 'Адрес доставки нам нужен для детального просчета времени доставки и сроков сборки при необходимости.',
      options: [
        {
          placeholder: 'Введите адрес',
        },
      ],
    },
    {
      title: 'Форма оплаты',
      name: 'Форма оплаты',
      type: 'radio',
      required: true,
      comment: 'Наличными – расчет при получении товара. Рассрочка – по картам рассрочки (халва, черепаха, магнит, карта покупок, картафан, смарт карта) и рассрочка от Беларусбанка до 36 месяцев.',
      options: [
        {
          title: 'Наличные',
        },
        {
          title: 'Рассрочка',
        },
      ],
    },
  ],
}

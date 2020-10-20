const quizData = {
  title: 'Рассчитайте стоимость теплицы',
  expert: {
    photo: './public/assets/images/quiz/expert.png',
    name: 'Федя',
    position: 'Сын маминой подруги',
  },
  discount: {
    unit: '%',
    value: 35,
    text: 'Ваша скидка:',
  },
  resultText: 'Пожалуйста, заполните форму для получения скидки',
  finishTextSuccess: 'Наш специалист уже готовит расчет лучшей теплицы для вас.',
  finishTextError: 'Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!',
  requestURL: 'https://skidka-tut.by/action/index.php',
  questions: [
    {
      title: 'Выберите ширину теплицы',
      name: 'Ширина теплицы',
      type: 'image-radio',
      required: true,
      comment:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vel tempora explicabo voluptatem       veniam in! Sapiente accusantium dolores quaerat incidunt minima excepturi illum voluptate. Esse, labore. Error consequuntur perferendis nisi.',
      options: [
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
      comment: '',
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
      comment: '',
      options: [
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
          image: './public/assets/images/quiz/size_20x20.jpeg',
        },
        {
          title: '40x20 мм',
          image: './public/assets/images/quiz/size_40x20.jpeg',
        },
        {
          title: 'Сдвоенная труба 20x20 мм',
          image: './public/assets/images/quiz/size_double_20x20.jpeg',
        },
      ],
    },
    {
      title: 'Выберите дополнительные комплектующие',
      name: 'Дополнительные комплектующие[]',
      label: 'Выберите один или несколько вариантов, либо пропустите вопрос',
      type: 'image-checkbox',
      required: false,
      comment: 'бяк бяк бяк',
      options: [
        {
          title: 'Автоматическая форточка',
          image: './public/assets/images/quiz/window-leaf.jpeg',
        },
        {
          title: 'Система капельного полива',
          image: './public/assets/images/quiz/drip-irrigation-system.jpeg',
        },
        {
          title: 'Дополнительные планки',
          image: './public/assets/images/quiz/planks.jpeg',
        },
        {
          title: 'Сваи 50 см',
          image: './public/assets/images/quiz/piles.jpeg',
        },
        {
          title: 'Набор подвязок для растений',
          image: './public/assets/images/quiz/garters.jpeg',
        },
        {
          title: 'Стяжная лента',
          image: './public/assets/images/quiz/tape.jpeg',
        },
        {
          title: 'Торцевой профиль',
          image: './public/assets/images/quiz/end-profile.jpeg',
        },
        {
          title: 'Перфорированная лента',
          image: './public/assets/images/quiz/perforated-tape.jpeg',
        },
      ],
    },
    {
      title: 'Бесплатно привезем теплицу – напишите куда',
      name: 'Адрес доставки',
      type: 'text',
      required: true,
      comment: 'sadsadsad',
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
      comment: '',
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

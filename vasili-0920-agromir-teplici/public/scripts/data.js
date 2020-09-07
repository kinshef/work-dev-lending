var calculator = {
    'products': {

        'besedka_astra': {
            s0: {
                l2: {
                    p0: 231, //Астра 2м, Полик 0
                    p4: 264, //Астра 2м, Полик 4
                    p6: 277, //Астра 2м, Полик 6
                },
                l3: {
                    p0: 289, //Астра 3м, Полик 0
                    p4: 339, //Астра 3м, Полик 4
                    p6: 358, //Астра 3м, Полик 6
                },
                l4: {
                    p0: 407, //Астра 4м, Полик 0
                    p4: 474, //Астра 4м, Полик 4
                    p6: 499, //Астра 4м, Полик 6
                }
            },
            s1: {
                l2: {
                    p0: 231, //Астра 2м, Полик 0
                    p4: 298, //Астра 2м, Полик 4, бока
                    p6: 323, //Астра 2м, Полик 6, бока
                },
                l3: {
                    p0: 289, //Астра 3м, Полик 0
                    p4: 390, //Астра 3м, Полик 4, бока
                    p6: 427, //Астра 3м, Полик 6, бока
                },
                l4: {
                    p0: 407, //Астра 4м, Полик 0
                    p4: 541, //Астра 4м, Полик 4, бока
                    p6: 591, //Астра 4м, Полик 6, бока
                }
            }
        },

        'besedka_pion': {
            s0: {
                l2: {
                    p0: 239, //Пион 2м, Полик 0
                    p4: 306, //Пион 2м, Полик 4
                    p6: 331, //Пион 2м, Полик 6
                },
                l3: {
                    p0: 303, //Пион 3м, Полик 0
                    p4: 403, //Пион 3м, Полик 4
                    p6: 441, //Пион 3м, Полик 6
                },
                l4: {
                    p0: 426, //Пион 4м, Полик 0
                    p4: 560, //Пион 4м, Полик 4
                    p6: 610, //Пион 4м, Полик 6
                }
            },
        },

        'besedka_tyulpan': {
            s0: {
                l2: {
                    p0: 241, //Тюльпан 2м, Полик 0
                    p4: 274, //Тюльпан 2м, Полик 4
                    p6: 287, //Тюльпан 2м, Полик 6
                },
                l3: {
                    p0: 304, //Тюльпан 3м, Полик 0
                    p4: 354, //Тюльпан 3м, Полик 4
                    p6: 373, //Тюльпан 3м, Полик 6
                },
                l4: {
                    p0: 427, //Тюльпан 4м, Полик 0
                    p4: 494, //Тюльпан 4м, Полик 4
                    p6: 519, //Тюльпан 4м, Полик 6
                }
            },
            s1: {
                l2: {
                    p0: 241, //Тюльпан 2м, Полик 0
                    p4: 308, //Тюльпан 2м, Полик 4, бока
                    p6: 333, //Тюльпан 2м, Полик 6, бока
                },
                l3: {
                    p0: 304, //Тюльпан 3м, Полик 0
                    p4: 405, //Тюльпан 3м, Полик 4, бока
                    p6: 442, //Тюльпан 3м, Полик 6, бока
                },
                l4: {
                    p0: 427, //Тюльпан 4м, Полик 0
                    p4: 561, //Тюльпан 4м, Полик 4, бока
                    p6: 611, //Тюльпан 4м, Полик 6, бока
                }
            }
        },

    },

    additional: {
        setka: 10
    }

};

//------------------------------------------------------------------ ИЗОБРАЖЕНИЯ

var IMAGE_SRC = {

////////////////////// Астра //////////////////////

    // Астра 2м
    'besedka_astra_s0_l2_white': './public/assets/img/catalog/besedka_astra_s0_l2_white.jpg',    // Белый
    'besedka_astra_s0_l2_red': './public/assets/img/catalog/besedka_astra_s0_l2_red.jpg',      // Красный
    'besedka_astra_s0_l2_yellow': './public/assets/img/catalog/besedka_astra_s0_l2_yellow.jpg',   // Желтый
    'besedka_astra_s0_l2_green': './public/assets/img/catalog/besedka_astra_s0_l2_green.jpg',    // Зеленый
    'besedka_astra_s0_l2_blue': './public/assets/img/catalog/besedka_astra_s0_l2_blue.jpg',     // Синий
    'besedka_astra_s0_l2_00fff7': './public/assets/img/catalog/besedka_astra_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_astra_s0_l2_purple': './public/assets/img/catalog/besedka_astra_s0_l2_purple.jpg',   // Гранат
    'besedka_astra_s0_l2_orange': './public/assets/img/catalog/besedka_astra_s0_l2_orange.jpg',   // Бронза
    'besedka_astra_s0_l2_4D463E': './public/assets/img/catalog/besedka_astra_s0_l2_ton.jpg',   // Тонированный
    // Астра 3м
    'besedka_astra_s0_l3_white': './public/assets/img/catalog/besedka_astra_s0_l2_white.jpg',    // Белый
    'besedka_astra_s0_l3_red': './public/assets/img/catalog/besedka_astra_s0_l2_red.jpg',      // Красный
    'besedka_astra_s0_l3_yellow': './public/assets/img/catalog/besedka_astra_s0_l2_yellow.jpg',   // Желтый
    'besedka_astra_s0_l3_green': './public/assets/img/catalog/besedka_astra_s0_l2_green.jpg',    // Зеленый
    'besedka_astra_s0_l3_blue': './public/assets/img/catalog/besedka_astra_s0_l2_blue.jpg',     // Синий
    'besedka_astra_s0_l3_00fff7': './public/assets/img/catalog/besedka_astra_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_astra_s0_l3_purple': './public/assets/img/catalog/besedka_astra_s0_l2_purple.jpg',   // Гранат
    'besedka_astra_s0_l3_orange': './public/assets/img/catalog/besedka_astra_s0_l2_orange.jpg',   // Бронза
    'besedka_astra_s0_l3_4D463E': './public/assets/img/catalog/besedka_astra_s0_l2_ton.jpg',   // Тонированный
    // Астра 4м
    'besedka_astra_s0_l4_white': './public/assets/img/catalog/besedka_astra_s0_l2_white.jpg',    // Белый
    'besedka_astra_s0_l4_red': './public/assets/img/catalog/besedka_astra_s0_l2_red.jpg',      // Красный
    'besedka_astra_s0_l4_yellow': './public/assets/img/catalog/besedka_astra_s0_l2_yellow.jpg',   // Желтый
    'besedka_astra_s0_l4_green': './public/assets/img/catalog/besedka_astra_s0_l2_green.jpg',    // Зеленый
    'besedka_astra_s0_l4_blue': './public/assets/img/catalog/besedka_astra_s0_l2_blue.jpg',     // Синий
    'besedka_astra_s0_l4_00fff7': './public/assets/img/catalog/besedka_astra_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_astra_s0_l4_purple': './public/assets/img/catalog/besedka_astra_s0_l2_purple.jpg',   // Гранат
    'besedka_astra_s0_l4_orange': './public/assets/img/catalog/besedka_astra_s0_l2_orange.jpg',   // Бронза
    'besedka_astra_s0_l4_4D463E': './public/assets/img/catalog/besedka_astra_s0_l2_ton.jpg',   // Тонированный

////////////////////// Астра БОКА //////////////////////

    // Астра БОКА 2м
    'besedka_astra_s1_l2_white': './public/assets/img/catalog/besedka_astra_s1_l2_white.jpg',    // Белый
    'besedka_astra_s1_l2_red': './public/assets/img/catalog/besedka_astra_s1_l2_red.jpg',      // Красный
    'besedka_astra_s1_l2_yellow': './public/assets/img/catalog/besedka_astra_s1_l2_yellow.jpg',   // Желтый
    'besedka_astra_s1_l2_green': './public/assets/img/catalog/besedka_astra_s1_l2_green.jpg',    // Зеленый
    'besedka_astra_s1_l2_blue': './public/assets/img/catalog/besedka_astra_s1_l2_blue.jpg',     // Синий
    'besedka_astra_s1_l2_00fff7': './public/assets/img/catalog/besedka_astra_s1_l2_biruza.jpg', // Бирюзовый
    'besedka_astra_s1_l2_purple': './public/assets/img/catalog/besedka_astra_s1_l2_purple.jpg',   // Гранат
    'besedka_astra_s1_l2_orange': './public/assets/img/catalog/besedka_astra_s1_l2_orange.jpg',   // Бронза
    'besedka_astra_s1_l2_4D463E': './public/assets/img/catalog/besedka_astra_s1_l2_ton.jpg',   // Тонированный
    // Астра БОКА 3м
    'besedka_astra_s1_l3_white': './public/assets/img/catalog/besedka_astra_s1_l2_white.jpg',    // Белый
    'besedka_astra_s1_l3_red': './public/assets/img/catalog/besedka_astra_s1_l2_red.jpg',      // Красный
    'besedka_astra_s1_l3_yellow': './public/assets/img/catalog/besedka_astra_s1_l2_yellow.jpg',   // Желтый
    'besedka_astra_s1_l3_green': './public/assets/img/catalog/besedka_astra_s1_l2_green.jpg',    // Зеленый
    'besedka_astra_s1_l3_blue': './public/assets/img/catalog/besedka_astra_s1_l2_blue.jpg',     // Синий
    'besedka_astra_s1_l3_00fff7': './public/assets/img/catalog/besedka_astra_s1_l2_biruza.jpg', // Бирюзовый
    'besedka_astra_s1_l3_purple': './public/assets/img/catalog/besedka_astra_s1_l2_purple.jpg',   // Гранат
    'besedka_astra_s1_l3_orange': './public/assets/img/catalog/besedka_astra_s1_l2_orange.jpg',   // Бронза
    'besedka_astra_s1_l3_4D463E': './public/assets/img/catalog/besedka_astra_s1_l2_ton.jpg',   // Тонированный
    // Астра БОКА 4м
    'besedka_astra_s1_l4_white': './public/assets/img/catalog/besedka_astra_s1_l2_white.jpg',    // Белый
    'besedka_astra_s1_l4_red': './public/assets/img/catalog/besedka_astra_s1_l2_red.jpg',      // Красный
    'besedka_astra_s1_l4_yellow': './public/assets/img/catalog/besedka_astra_s1_l2_yellow.jpg',   // Желтый
    'besedka_astra_s1_l4_green': './public/assets/img/catalog/besedka_astra_s1_l2_green.jpg',    // Зеленый
    'besedka_astra_s1_l4_blue': './public/assets/img/catalog/besedka_astra_s1_l2_blue.jpg',     // Синий
    'besedka_astra_s1_l4_00fff7': './public/assets/img/catalog/besedka_astra_s1_l2_biruza.jpg', // Бирюзовый
    'besedka_astra_s1_l4_purple': './public/assets/img/catalog/besedka_astra_s1_l2_purple.jpg',   // Гранат
    'besedka_astra_s1_l4_orange': './public/assets/img/catalog/besedka_astra_s1_l2_orange.jpg',   // Бронза
    'besedka_astra_s1_l4_4D463E': './public/assets/img/catalog/besedka_astra_s1_l2_ton.jpg',   // Тонированный

////////////////////// Пион //////////////////////

    // Пион 2м
    'besedka_pion_s0_l2_white': './public/assets/img/catalog/besedka_pion_s0_l2_white.jpg',    // Белый
    'besedka_pion_s0_l2_red': './public/assets/img/catalog/besedka_pion_s0_l2_red.jpg',      // Красный
    'besedka_pion_s0_l2_yellow': './public/assets/img/catalog/besedka_pion_s0_l2_yellow.jpg',   // Желтый
    'besedka_pion_s0_l2_green': './public/assets/img/catalog/besedka_pion_s0_l2_green.jpg',    // Зеленый
    'besedka_pion_s0_l2_blue': './public/assets/img/catalog/besedka_pion_s0_l2_blue.jpg',     // Синий
    'besedka_pion_s0_l2_00fff7': './public/assets/img/catalog/besedka_pion_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_pion_s0_l2_purple': './public/assets/img/catalog/besedka_pion_s0_l2_purple.jpg',   // Гранат
    'besedka_pion_s0_l2_orange': './public/assets/img/catalog/besedka_pion_s0_l2_orange.jpg',   // Бронза
    'besedka_pion_s0_l2_4D463E': './public/assets/img/catalog/besedka_pion_s0_l2_ton.jpg',   // Тонированный
    // Пион 3м
    'besedka_pion_s0_l3_white': './public/assets/img/catalog/besedka_pion_s0_l2_white.jpg',    // Белый
    'besedka_pion_s0_l3_red': './public/assets/img/catalog/besedka_pion_s0_l2_red.jpg',      // Красный
    'besedka_pion_s0_l3_yellow': './public/assets/img/catalog/besedka_pion_s0_l2_yellow.jpg',   // Желтый
    'besedka_pion_s0_l3_green': './public/assets/img/catalog/besedka_pion_s0_l2_green.jpg',    // Зеленый
    'besedka_pion_s0_l3_blue': './public/assets/img/catalog/besedka_pion_s0_l2_blue.jpg',     // Синий
    'besedka_pion_s0_l3_00fff7': './public/assets/img/catalog/besedka_pion_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_pion_s0_l3_purple': './public/assets/img/catalog/besedka_pion_s0_l2_purple.jpg',   // Гранат
    'besedka_pion_s0_l3_orange': './public/assets/img/catalog/besedka_pion_s0_l2_orange.jpg',   // Бронза
    'besedka_pion_s0_l3_4D463E': './public/assets/img/catalog/besedka_pion_s0_l2_ton.jpg',   // Тонированный
    // Пион 4м
    'besedka_pion_s0_l4_white': './public/assets/img/catalog/besedka_pion_s0_l2_white.jpg',    // Белый
    'besedka_pion_s0_l4_red': './public/assets/img/catalog/besedka_pion_s0_l2_red.jpg',      // Красный
    'besedka_pion_s0_l4_yellow': './public/assets/img/catalog/besedka_pion_s0_l2_yellow.jpg',   // Желтый
    'besedka_pion_s0_l4_green': './public/assets/img/catalog/besedka_pion_s0_l2_green.jpg',    // Зеленый
    'besedka_pion_s0_l4_blue': './public/assets/img/catalog/besedka_pion_s0_l2_blue.jpg',     // Синий
    'besedka_pion_s0_l4_00fff7': './public/assets/img/catalog/besedka_pion_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_pion_s0_l4_purple': './public/assets/img/catalog/besedka_pion_s0_l2_purple.jpg',   // Гранат
    'besedka_pion_s0_l4_orange': './public/assets/img/catalog/besedka_pion_s0_l2_orange.jpg',   // Бронза
    'besedka_pion_s0_l4_4D463E': './public/assets/img/catalog/besedka_pion_s0_l2_ton.jpg',   // Тонированный

////////////////////// Тюльпан //////////////////////

    // Тюльпан 2м
    'besedka_tyulpan_s0_l2_white': './public/assets/img/catalog/besedka_tyulpan_s0_l2_white.jpg',    // Белый
    'besedka_tyulpan_s0_l2_red': './public/assets/img/catalog/besedka_tyulpan_s0_l2_red.jpg',      // Красный
    'besedka_tyulpan_s0_l2_yellow': './public/assets/img/catalog/besedka_tyulpan_s0_l2_yellow.jpg',   // Желтый
    'besedka_tyulpan_s0_l2_green': './public/assets/img/catalog/besedka_tyulpan_s0_l2_green.jpg',    // Зеленый
    'besedka_tyulpan_s0_l2_blue': './public/assets/img/catalog/besedka_tyulpan_s0_l2_blue.jpg',     // Синий
    'besedka_tyulpan_s0_l2_00fff7': './public/assets/img/catalog/besedka_tyulpan_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_tyulpan_s0_l2_purple': './public/assets/img/catalog/besedka_tyulpan_s0_l2_purple.jpg',   // Гранат
    'besedka_tyulpan_s0_l2_orange': './public/assets/img/catalog/besedka_tyulpan_s0_l2_orange.jpg',   // Бронза
    'besedka_tyulpan_s0_l2_4D463E': './public/assets/img/catalog/besedka_tyulpan_s0_l2_ton.jpg',   // Тонированный
    // Тюльпан 3м
    'besedka_tyulpan_s0_l3_white': './public/assets/img/catalog/besedka_tyulpan_s0_l2_white.jpg',    // Белый
    'besedka_tyulpan_s0_l3_red': './public/assets/img/catalog/besedka_tyulpan_s0_l2_red.jpg',      // Красный
    'besedka_tyulpan_s0_l3_yellow': './public/assets/img/catalog/besedka_tyulpan_s0_l2_yellow.jpg',   // Желтый
    'besedka_tyulpan_s0_l3_green': './public/assets/img/catalog/besedka_tyulpan_s0_l2_green.jpg',    // Зеленый
    'besedka_tyulpan_s0_l3_blue': './public/assets/img/catalog/besedka_tyulpan_s0_l2_blue.jpg',     // Синий
    'besedka_tyulpan_s0_l3_00fff7': './public/assets/img/catalog/besedka_tyulpan_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_tyulpan_s0_l3_purple': './public/assets/img/catalog/besedka_tyulpan_s0_l2_purple.jpg',   // Гранат
    'besedka_tyulpan_s0_l3_orange': './public/assets/img/catalog/besedka_tyulpan_s0_l2_orange.jpg',   // Бронза
    'besedka_tyulpan_s0_l3_4D463E': './public/assets/img/catalog/besedka_tyulpan_s0_l2_ton.jpg',   // Тонированный
    // Тюльпан 4м
    'besedka_tyulpan_s0_l4_white': './public/assets/img/catalog/besedka_tyulpan_s0_l2_white.jpg',    // Белый
    'besedka_tyulpan_s0_l4_red': './public/assets/img/catalog/besedka_tyulpan_s0_l2_red.jpg',      // Красный
    'besedka_tyulpan_s0_l4_yellow': './public/assets/img/catalog/besedka_tyulpan_s0_l2_yellow.jpg',   // Желтый
    'besedka_tyulpan_s0_l4_green': './public/assets/img/catalog/besedka_tyulpan_s0_l2_green.jpg',    // Зеленый
    'besedka_tyulpan_s0_l4_blue': './public/assets/img/catalog/besedka_tyulpan_s0_l2_blue.jpg',     // Синий
    'besedka_tyulpan_s0_l4_00fff7': './public/assets/img/catalog/besedka_tyulpan_s0_l2_biruza.jpg', // Бирюзовый
    'besedka_tyulpan_s0_l4_purple': './public/assets/img/catalog/besedka_tyulpan_s0_l2_purple.jpg',   // Гранат
    'besedka_tyulpan_s0_l4_orange': './public/assets/img/catalog/besedka_tyulpan_s0_l2_orange.jpg',   // Бронза
    'besedka_tyulpan_s0_l4_4D463E': './public/assets/img/catalog/besedka_tyulpan_s0_l2_ton.jpg',   // Тонированный

////////////////////// Тюльпан БОКА //////////////////////

    // Тюльпан БОКА 2м
    'besedka_tyulpan_s1_l2_white': './public/assets/img/catalog/besedka_tyulpan_s1_l2_white.jpg',    // Белый
    'besedka_tyulpan_s1_l2_red': './public/assets/img/catalog/besedka_tyulpan_s1_l2_red.jpg',      // Красный
    'besedka_tyulpan_s1_l2_yellow': './public/assets/img/catalog/besedka_tyulpan_s1_l2_yellow.jpg',   // Желтый
    'besedka_tyulpan_s1_l2_green': './public/assets/img/catalog/besedka_tyulpan_s1_l2_green.jpg',    // Зеленый
    'besedka_tyulpan_s1_l2_blue': './public/assets/img/catalog/besedka_tyulpan_s1_l2_blue.jpg',     // Синий
    'besedka_tyulpan_s1_l2_00fff7': './public/assets/img/catalog/besedka_tyulpan_s1_l2_biruza.jpg', // Бирюзовый
    'besedka_tyulpan_s1_l2_purple': './public/assets/img/catalog/besedka_tyulpan_s1_l2_purple.jpg',   // Гранат
    'besedka_tyulpan_s1_l2_orange': './public/assets/img/catalog/besedka_tyulpan_s1_l2_orange.jpg',   // Бронза
    'besedka_tyulpan_s1_l2_4D463E': './public/assets/img/catalog/besedka_tyulpan_s1_l2_ton.jpg',   // Тонированный
    // Тюльпан БОКА 3м
    'besedka_tyulpan_s1_l3_white': './public/assets/img/catalog/besedka_tyulpan_s1_l2_white.jpg',    // Белый
    'besedka_tyulpan_s1_l3_red': './public/assets/img/catalog/besedka_tyulpan_s1_l2_red.jpg',      // Красный
    'besedka_tyulpan_s1_l3_yellow': './public/assets/img/catalog/besedka_tyulpan_s1_l2_yellow.jpg',   // Желтый
    'besedka_tyulpan_s1_l3_green': './public/assets/img/catalog/besedka_tyulpan_s1_l2_green.jpg',    // Зеленый
    'besedka_tyulpan_s1_l3_blue': './public/assets/img/catalog/besedka_tyulpan_s1_l2_blue.jpg',     // Синий
    'besedka_tyulpan_s1_l3_00fff7': './public/assets/img/catalog/besedka_tyulpan_s1_l2_biruza.jpg', // Бирюзовый
    'besedka_tyulpan_s1_l3_purple': './public/assets/img/catalog/besedka_tyulpan_s1_l2_purple.jpg',   // Гранат
    'besedka_tyulpan_s1_l3_orange': './public/assets/img/catalog/besedka_tyulpan_s1_l2_orange.jpg',   // Бронза
    'besedka_tyulpan_s1_l3_4D463E': './public/assets/img/catalog/besedka_tyulpan_s1_l2_ton.jpg',   // Тонированный
    // Тюльпан БОКА 4м
    'besedka_tyulpan_s1_l4_white': './public/assets/img/catalog/besedka_tyulpan_s1_l2_white.jpg',    // Белый
    'besedka_tyulpan_s1_l4_red': './public/assets/img/catalog/besedka_tyulpan_s1_l2_red.jpg',      // Красный
    'besedka_tyulpan_s1_l4_yellow': './public/assets/img/catalog/besedka_tyulpan_s1_l2_yellow.jpg',   // Желтый
    'besedka_tyulpan_s1_l4_green': './public/assets/img/catalog/besedka_tyulpan_s1_l2_green.jpg',    // Зеленый
    'besedka_tyulpan_s1_l4_blue': './public/assets/img/catalog/besedka_tyulpan_s1_l2_blue.jpg',     // Синий
    'besedka_tyulpan_s1_l4_00fff7': './public/assets/img/catalog/besedka_tyulpan_s1_l2_biruza.jpg', // Бирюзовый
    'besedka_tyulpan_s1_l4_purple': './public/assets/img/catalog/besedka_tyulpan_s1_l2_purple.jpg',   // Гранат
    'besedka_tyulpan_s1_l4_orange': './public/assets/img/catalog/besedka_tyulpan_s1_l2_orange.jpg',   // Бронза
    'besedka_tyulpan_s1_l4_4D463E': './public/assets/img/catalog/besedka_tyulpan_s1_l2_ton.jpg',   // Тонированный

};

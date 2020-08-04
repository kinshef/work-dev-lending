var calculator = {
    'products': {

        'besedka_astra': {
            s0: {
                l2: {
                    p0: 231, //"astra" Длина 2m, Поликарбонат 0
                    p4: 264, //"astra" Длина 2m, Поликарбонат 4
                    p6: 277, //"astra" Длина 2m, Поликарбонат 6
                },
                l3: {
                    p0: 289, //"astra" Длина 3m, Поликарбонат 0
                    p4: 339, //"astra" Длина 3m, Поликарбонат 4
                    p6: 358, //"astra" Длина 3m, Поликарбонат 6
                },
                l4: {
                    p0: 407, //"astra" Длина 4m, Поликарбонат 0
                    p4: 474, //"astra" Длина 4m, Поликарбонат 4
                    p6: 499, //"astra" Длина 4m, Поликарбонат 6
                }
            },
            s1: {
                l2: {
                    p0: 231, //"astra" Длина 2m, Поликарбонат 0
                    p4: 298, //"astra" Длина 2m, Поликарбонат 4, Боковая защита
                    p6: 323, //"astra" Длина 2m, Поликарбонат 6, Боковая защита
                },
                l3: {
                    p0: 289, //"astra" Длина 3m, Поликарбонат 0
                    p4: 390, //"astra" Длина 3m, Поликарбонат 4, Боковая защита
                    p6: 427, //"astra" Длина 3m, Поликарбонат 6, Боковая защита
                },
                l4: {
                    p0: 407, //"astra" Длина 4m, Поликарбонат 0
                    p4: 541, //"astra" Длина 4m, Поликарбонат 4, Боковая защита
                    p6: 591, //"astra" Длина 4m, Поликарбонат 6, Боковая защита
                }
            }
        },

        'besedka_pion': {
            s0: {
                l2: {
                    p0: 239, //"pion" Длина 2m, Поликарбонат 0
                    p4: 306, //"pion" Длина 2m, Поликарбонат 4
                    p6: 331, //"pion" Длина 2m, Поликарбонат 6
                },
                l3: {
                    p0: 303, //"pion" Длина 3m, Поликарбонат 0
                    p4: 403, //"pion" Длина 3m, Поликарбонат 4
                    p6: 441, //"pion" Длина 3m, Поликарбонат 6
                },
                l4: {
                    p0: 426, //"pion" Длина 4m, Поликарбонат 0
                    p4: 560, //"pion" Длина 4m, Поликарбонат 4
                    p6: 610, //"pion" Длина 4m, Поликарбонат 6
                }
            },
        },

        'besedka_tyulpan': {
            s0: {
                l2: {
                    p0: 241, //"tyulpan" Длина 2m, Поликарбонат 0
                    p4: 274, //"tyulpan" Длина 2m, Поликарбонат 4
                    p6: 287, //"tyulpan" Длина 2m, Поликарбонат 6
                },
                l3: {
                    p0: 304, //"tyulpan" Длина 3m, Поликарбонат 0
                    p4: 354, //"tyulpan" Длина 3m, Поликарбонат 4
                    p6: 373, //"tyulpan" Длина 3m, Поликарбонат 6
                },
                l4: {
                    p0: 427, //"tyulpan" Длина 4m, Поликарбонат 0
                    p4: 494, //"tyulpan" Длина 4m, Поликарбонат 4
                    p6: 519, //"tyulpan" Длина 4m, Поликарбонат 6
                }
            },
            s1: {
                l2: {
                    p0: 241, //"tyulpan" Длина 2m, Поликарбонат 0
                    p4: 308, //"tyulpan" Длина 2m, Поликарбонат 4, Боковая защита
                    p6: 333, //"tyulpan" Длина 2m, Поликарбонат 6, Боковая защита
                },
                l3: {
                    p0: 304, //"tyulpan" Длина 3m, Поликарбонат 0
                    p4: 405, //"tyulpan" Длина 3m, Поликарбонат 4, Боковая защита
                    p6: 442, //"tyulpan" Длина 3m, Поликарбонат 6, Боковая защита
                },
                l4: {
                    p0: 427, //"tyulpan" Длина 4m, Поликарбонат 0
                    p4: 561, //"tyulpan" Длина 4m, Поликарбонат 4, Боковая защита
                    p6: 611, //"tyulpan" Длина 4m, Поликарбонат 6, Боковая защита
                }
            }
        },

    },

    additional: {
        setka: 10
    }

};

var IMAGE_SRC = {

////////////////////// "astra" Длина //////////////////////

    // "astra" Длина 2m
    'besedka_astra_s0_l2_white': 'img/card/besedka_astra_s0_l2_white.jpg',    // белый
    'besedka_astra_s0_l2_red': 'img/card/besedka_astra_s0_l2_red.jpg',      // красный
    'besedka_astra_s0_l2_yellow': 'img/card/besedka_astra_s0_l2_yellow.jpg',   // жолтый
    'besedka_astra_s0_l2_green': 'img/card/besedka_astra_s0_l2_green.jpg',    // зелёный
    'besedka_astra_s0_l2_blue': 'img/card/besedka_astra_s0_l2_blue.jpg',     // синий
    'besedka_astra_s0_l2_biruza': 'img/card/besedka_astra_s0_l2_biruza.jpg', // бирюзовый
    'besedka_astra_s0_l2_purple': 'img/card/besedka_astra_s0_l2_purple.jpg',   // пурпуровый
    'besedka_astra_s0_l2_orange': 'img/card/besedka_astra_s0_l2_orange.jpg',   // оранжевый
    'besedka_astra_s0_l2_4D463E': 'img/card/besedka_astra_s0_l2_ton.jpg',   // тёмный
    // "astra" Длина 3m
    'besedka_astra_s0_l3_white': 'img/card/besedka_astra_s0_l2_white.jpg',    // белый
    'besedka_astra_s0_l3_red': 'img/card/besedka_astra_s0_l2_red.jpg',      // красный
    'besedka_astra_s0_l3_yellow': 'img/card/besedka_astra_s0_l2_yellow.jpg',   // жолтый
    'besedka_astra_s0_l3_green': 'img/card/besedka_astra_s0_l2_green.jpg',    // зелёный
    'besedka_astra_s0_l3_blue': 'img/card/besedka_astra_s0_l2_blue.jpg',     // синий
    'besedka_astra_s0_l3_biruza': 'img/card/besedka_astra_s0_l2_biruza.jpg', // бирюзовый
    'besedka_astra_s0_l3_purple': 'img/card/besedka_astra_s0_l2_purple.jpg',   // пурпуровый
    'besedka_astra_s0_l3_orange': 'img/card/besedka_astra_s0_l2_orange.jpg',   // оранжевый
    'besedka_astra_s0_l3_4D463E': 'img/card/besedka_astra_s0_l2_ton.jpg',   // тёмный
    // "astra" Длина 4m
    'besedka_astra_s0_l4_white': 'img/card/besedka_astra_s0_l2_white.jpg',    // белый
    'besedka_astra_s0_l4_red': 'img/card/besedka_astra_s0_l2_red.jpg',      // красный
    'besedka_astra_s0_l4_yellow': 'img/card/besedka_astra_s0_l2_yellow.jpg',   // жолтый
    'besedka_astra_s0_l4_green': 'img/card/besedka_astra_s0_l2_green.jpg',    // зелёный
    'besedka_astra_s0_l4_biruza': 'img/card/besedka_astra_s0_l2_biruza.jpg', // бирюзовый
    'besedka_astra_s0_l4_purple': 'img/card/besedka_astra_s0_l2_purple.jpg',   // пурпуровый
    'besedka_astra_s0_l4_orange': 'img/card/besedka_astra_s0_l2_orange.jpg',   // оранжевый
    'besedka_astra_s0_l4_4D463E': 'img/card/besedka_astra_s0_l2_ton.jpg',   // тёмный

////////////////////// Длина + Боковая защита //////////////////////

    // "astra" Длина 2m
    'besedka_astra_s1_l2_white': 'img/card/besedka_astra_s1_l2_white.jpg',    // белый
    'besedka_astra_s1_l2_red': 'img/card/besedka_astra_s1_l2_red.jpg',      // красный
    'besedka_astra_s1_l2_yellow': 'img/card/besedka_astra_s1_l2_yellow.jpg',   // жолтый
    'besedka_astra_s1_l2_green': 'img/card/besedka_astra_s1_l2_green.jpg',    // зелёный
    'besedka_astra_s1_l2_blue': 'img/card/besedka_astra_s1_l2_blue.jpg',     // синий
    'besedka_astra_s1_l2_biruza': 'img/card/besedka_astra_s1_l2_biruza.jpg', // бирюзовый
    'besedka_astra_s1_l2_purple': 'img/card/besedka_astra_s1_l2_purple.jpg',   // пурпуровый
    'besedka_astra_s1_l2_orange': 'img/card/besedka_astra_s1_l2_orange.jpg',   // оранжевый
    'besedka_astra_s1_l2_4D463E': 'img/card/besedka_astra_s1_l2_ton.jpg',   // тёмный
    // "astra" Длина 3m
    'besedka_astra_s1_l3_white': 'img/card/besedka_astra_s1_l2_white.jpg',    // белый
    'besedka_astra_s1_l3_red': 'img/card/besedka_astra_s1_l2_red.jpg',      // красный
    'besedka_astra_s1_l3_yellow': 'img/card/besedka_astra_s1_l2_yellow.jpg',   // жолтый
    'besedka_astra_s1_l3_green': 'img/card/besedka_astra_s1_l2_green.jpg',    // зелёный
    'besedka_astra_s1_l3_blue': 'img/card/besedka_astra_s1_l2_blue.jpg',     // синий
    'besedka_astra_s1_l3_biruza': 'img/card/besedka_astra_s1_l2_biruza.jpg', // бирюзовый
    'besedka_astra_s1_l3_purple': 'img/card/besedka_astra_s1_l2_purple.jpg',   // пурпуровый
    'besedka_astra_s1_l3_orange': 'img/card/besedka_astra_s1_l2_orange.jpg',   // оранжевый
    'besedka_astra_s1_l3_4D463E': 'img/card/besedka_astra_s1_l2_ton.jpg',   // тёмный
    // "astra" Длина 4m
    'besedka_astra_s1_l4_white': 'img/card/besedka_astra_s1_l2_white.jpg',    // белый
    'besedka_astra_s1_l4_red': 'img/card/besedka_astra_s1_l2_red.jpg',      // красный
    'besedka_astra_s1_l4_yellow': 'img/card/besedka_astra_s1_l2_yellow.jpg',   // жолтый
    'besedka_astra_s1_l4_green': 'img/card/besedka_astra_s1_l2_green.jpg',    // зелёный
    'besedka_astra_s1_l4_blue': 'img/card/besedka_astra_s1_l2_blue.jpg',     // синий
    'besedka_astra_s1_l4_biruza': 'img/card/besedka_astra_s1_l2_biruza.jpg', // бирюзовый
    'besedka_astra_s1_l4_purple': 'img/card/besedka_astra_s1_l2_purple.jpg',   // пурпуровый
    'besedka_astra_s1_l4_orange': 'img/card/besedka_astra_s1_l2_orange.jpg',   // оранжевый
    'besedka_astra_s1_l4_4D463E': 'img/card/besedka_astra_s1_l2_ton.jpg',   // тёмный

////////////////////// Длина //////////////////////

    // "pion" Длина 2m
    'besedka_pion_s0_l2_white': 'img/card/besedka_pion_s0_l2_white.jpg',    // белый
    'besedka_pion_s0_l2_red': 'img/card/besedka_pion_s0_l2_red.jpg',      // красный
    'besedka_pion_s0_l2_yellow': 'img/card/besedka_pion_s0_l2_yellow.jpg',   // жолтый
    'besedka_pion_s0_l2_green': 'img/card/besedka_pion_s0_l2_green.jpg',    // зелёный
    'besedka_pion_s0_l2_blue': 'img/card/besedka_pion_s0_l2_blue.jpg',     // синий
    'besedka_pion_s0_l2_biruza': 'img/card/besedka_pion_s0_l2_biruza.jpg', // бирюзовый
    'besedka_pion_s0_l2_purple': 'img/card/besedka_pion_s0_l2_purple.jpg',   // пурпуровый
    'besedka_pion_s0_l2_orange': 'img/card/besedka_pion_s0_l2_orange.jpg',   // оранжевый
    'besedka_pion_s0_l2_4D463E': 'img/card/besedka_pion_s0_l2_ton.jpg',   // тёмный
    // "pion" Длина 3m
    'besedka_pion_s0_l3_white': 'img/card/besedka_pion_s0_l2_white.jpg',    // белый
    'besedka_pion_s0_l3_red': 'img/card/besedka_pion_s0_l2_red.jpg',      // красный
    'besedka_pion_s0_l3_yellow': 'img/card/besedka_pion_s0_l2_yellow.jpg',   // жолтый
    'besedka_pion_s0_l3_green': 'img/card/besedka_pion_s0_l2_green.jpg',    // зелёный
    'besedka_pion_s0_l3_blue': 'img/card/besedka_pion_s0_l2_blue.jpg',     // синий
    'besedka_pion_s0_l3_biruza': 'img/card/besedka_pion_s0_l2_biruza.jpg', // бирюзовый
    'besedka_pion_s0_l3_purple': 'img/card/besedka_pion_s0_l2_purple.jpg',   // пурпуровый
    'besedka_pion_s0_l3_orange': 'img/card/besedka_pion_s0_l2_orange.jpg',   // оранжевый
    'besedka_pion_s0_l3_4D463E': 'img/card/besedka_pion_s0_l2_ton.jpg',   // тёмный
    // "pion" Длина 4m
    'besedka_pion_s0_l4_white': 'img/card/besedka_pion_s0_l2_white.jpg',    // белый
    'besedka_pion_s0_l4_red': 'img/card/besedka_pion_s0_l2_red.jpg',      // красный
    'besedka_pion_s0_l4_yellow': 'img/card/besedka_pion_s0_l2_yellow.jpg',   // жолтый
    'besedka_pion_s0_l4_green': 'img/card/besedka_pion_s0_l2_green.jpg',    // зелёный
    'besedka_pion_s0_l4_blue': 'img/card/besedka_pion_s0_l2_blue.jpg',     // синий
    'besedka_pion_s0_l4_biruza': 'img/card/besedka_pion_s0_l2_biruza.jpg', // бирюзовый
    'besedka_pion_s0_l4_purple': 'img/card/besedka_pion_s0_l2_purple.jpg',   // пурпуровый
    'besedka_pion_s0_l4_orange': 'img/card/besedka_pion_s0_l2_orange.jpg',   // оранжевый
    'besedka_pion_s0_l4_4D463E': 'img/card/besedka_pion_s0_l2_ton.jpg',   // тёмный

////////////////////// "tyulpan" Длина //////////////////////

    // "tyulpan" Длина 2m
    'besedka_tyulpan_s0_l2_white': 'img/card/besedka_tyulpan_s0_l2_white.jpg',    // белый
    'besedka_tyulpan_s0_l2_red': 'img/card/besedka_tyulpan_s0_l2_red.jpg',      // красный
    'besedka_tyulpan_s0_l2_yellow': 'img/card/besedka_tyulpan_s0_l2_yellow.jpg',   // жолтый
    'besedka_tyulpan_s0_l2_green': 'img/card/besedka_tyulpan_s0_l2_green.jpg',    // зелёный
    'besedka_tyulpan_s0_l2_blue': 'img/card/besedka_tyulpan_s0_l2_blue.jpg',     // синий
    'besedka_tyulpan_s0_l2_biruza': 'img/card/besedka_tyulpan_s0_l2_biruza.jpg', // бирюзовый
    'besedka_tyulpan_s0_l2_purple': 'img/card/besedka_tyulpan_s0_l2_purple.jpg',   // пурпуровый
    'besedka_tyulpan_s0_l2_orange': 'img/card/besedka_tyulpan_s0_l2_orange.jpg',   // оранжевый
    'besedka_tyulpan_s0_l2_4D463E': 'img/card/besedka_tyulpan_s0_l2_ton.jpg',   // тёмный
    // "tyulpan" Длина 3m
    'besedka_tyulpan_s0_l3_white': 'img/card/besedka_tyulpan_s0_l2_white.jpg',    // белый
    'besedka_tyulpan_s0_l3_red': 'img/card/besedka_tyulpan_s0_l2_red.jpg',      // красный
    'besedka_tyulpan_s0_l3_yellow': 'img/card/besedka_tyulpan_s0_l2_yellow.jpg',   // жолтый
    'besedka_tyulpan_s0_l3_green': 'img/card/besedka_tyulpan_s0_l2_green.jpg',    // зелёный
    'besedka_tyulpan_s0_l3_blue': 'img/card/besedka_tyulpan_s0_l2_blue.jpg',     // синий
    'besedka_tyulpan_s0_l3_biruza': 'img/card/besedka_tyulpan_s0_l2_biruza.jpg', // бирюзовый
    'besedka_tyulpan_s0_l3_purple': 'img/card/besedka_tyulpan_s0_l2_purple.jpg',   // пурпуровый
    'besedka_tyulpan_s0_l3_orange': 'img/card/besedka_tyulpan_s0_l2_orange.jpg',   // оранжевый
    'besedka_tyulpan_s0_l3_4D463E': 'img/card/besedka_tyulpan_s0_l2_ton.jpg',   // тёмный
    // "tyulpan" Длина 4m
    'besedka_tyulpan_s0_l4_white': 'img/card/besedka_tyulpan_s0_l2_white.jpg',    // белый
    'besedka_tyulpan_s0_l4_red': 'img/card/besedka_tyulpan_s0_l2_red.jpg',      // красный
    'besedka_tyulpan_s0_l4_yellow': 'img/card/besedka_tyulpan_s0_l2_yellow.jpg',   // жолтый
    'besedka_tyulpan_s0_l4_green': 'img/card/besedka_tyulpan_s0_l2_green.jpg',    // зелёный
    'besedka_tyulpan_s0_l4_blue': 'img/card/besedka_tyulpan_s0_l2_blue.jpg',     // синий
    'besedka_tyulpan_s0_l4_biruza': 'img/card/besedka_tyulpan_s0_l2_biruza.jpg', // бирюзовый
    'besedka_tyulpan_s0_l4_purple': 'img/card/besedka_tyulpan_s0_l2_purple.jpg',   // пурпуровый
    'besedka_tyulpan_s0_l4_orange': 'img/card/besedka_tyulpan_s0_l2_orange.jpg',   // оранжевый
    'besedka_tyulpan_s0_l4_4D463E': 'img/card/besedka_tyulpan_s0_l2_ton.jpg',   // тёмный

////////////////////// "tyulpan" Длина + Боковая защита //////////////////////

    // "tyulpan" Длина 2m
    'besedka_tyulpan_s1_l2_white': 'img/card/besedka_tyulpan_s0_l2_white.jpg',    // белый
    'besedka_tyulpan_s1_l2_red': 'img/card/besedka_tyulpan_s0_l2_red.jpg',      // красный
    'besedka_tyulpan_s1_l2_yellow': 'img/card/besedka_tyulpan_s0_l2_yellow.jpg',   // жолтый
    'besedka_tyulpan_s1_l2_green': 'img/card/besedka_tyulpan_s0_l2_green.jpg',    // зелёный
    'besedka_tyulpan_s1_l2_blue': 'img/card/besedka_tyulpan_s0_l2_blue.jpg',     // синий
    'besedka_tyulpan_s1_l2_biruza': 'img/card/besedka_tyulpan_s0_l2_biruza.jpg', // бирюзовый
    'besedka_tyulpan_s1_l2_purple': 'img/card/besedka_tyulpan_s0_l2_purple.jpg',   // пурпуровый
    'besedka_tyulpan_s1_l2_orange': 'img/card/besedka_tyulpan_s0_l2_orange.jpg',   // оранжевый
    'besedka_tyulpan_s1_l2_4D463E': 'img/card/besedka_tyulpan_s0_l2_ton.jpg',   // тёмный
    // "tyulpan" Длина 3m
    'besedka_tyulpan_s1_l3_white': 'img/card/besedka_tyulpan_s0_l2_white.jpg',    // белый
    'besedka_tyulpan_s1_l3_red': 'img/card/besedka_tyulpan_s0_l2_red.jpg',      // красный
    'besedka_tyulpan_s1_l3_yellow': 'img/card/besedka_tyulpan_s0_l2_yellow.jpg',   // жолтый
    'besedka_tyulpan_s1_l3_green': 'img/card/besedka_tyulpan_s0_l2_green.jpg',    // зелёный
    'besedka_tyulpan_s1_l3_blue': 'img/card/besedka_tyulpan_s0_l2_blue.jpg',     // синий
    'besedka_tyulpan_s1_l3_biruza': 'img/card/besedka_tyulpan_s0_l2_biruza.jpg', // бирюзовый
    'besedka_tyulpan_s1_l3_purple': 'img/card/besedka_tyulpan_s0_l2_purple.jpg',   // пурпуровый
    'besedka_tyulpan_s1_l3_orange': 'img/card/besedka_tyulpan_s0_l2_orange.jpg',   // оранжевый
    'besedka_tyulpan_s1_l3_4D463E': 'img/card/besedka_tyulpan_s0_l2_ton.jpg',   // тёмный
    // "tyulpan" Длина 4m
    'besedka_tyulpan_s1_l4_white': 'img/card/besedka_tyulpan_s0_l2_white.jpg',    // белый
    'besedka_tyulpan_s1_l4_red': 'img/card/besedka_tyulpan_s0_l2_red.jpg',      // красный
    'besedka_tyulpan_s1_l4_yellow': 'img/card/besedka_tyulpan_s0_l2_yellow.jpg',   // жолтый
    'besedka_tyulpan_s1_l4_green': 'img/card/besedka_tyulpan_s0_l2_green.jpg',    // зелёный
    'besedka_tyulpan_s1_l4_blue': 'img/card/besedka_tyulpan_s0_l2_blue.jpg',     // синий
    'besedka_tyulpan_s1_l4_biruza': 'img/card/besedka_tyulpan_s0_l2_biruza.jpg', // бирюзовый
    'besedka_tyulpan_s1_l4_purple': 'img/card/besedka_tyulpan_s0_l2_purple.jpg',   // пурпуровый
    'besedka_tyulpan_s1_l4_orange': 'img/card/besedka_tyulpan_s0_l2_orange.jpg',   // оранжевый
    'besedka_tyulpan_s1_l4_4D463E': 'img/card/besedka_tyulpan_s0_l2_ton.jpg',   // тёмный

};
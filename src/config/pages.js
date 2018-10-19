export default {
    loadingPage: {
        namePage: 'Страница загрузки',
        background: {
            style: {
                background: '#ffbdd2'
            }
        },
        title: {
            text: 'Загрузка...',
            style: {
                color: '#000000',
                fontSize: '30px',
                left: '350px',
                top: '250px',
            }
        },
        loader: {
            style: {
                left: '370px',
                top: '315px'
            },
            circle: {
                style: {
                    background: '#000fff',
                    width: '26px',
                    height: '26px'
                }
            }
        }
    },
    addressPage: {
        namePage: 'Страница ввода адреса',
        title: {
            text: 'Введите адрес доставки',
            style: {
                color: '#000000',
                fontSize: '25px',
                left: '270px',
                top: '250px',
            }
        },
        background: {
            style: {
                background: '#ffbdd3'
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#ffbd00',
                color: '#ff0d00',
                height: '50px',
                width: '100px',
                borderRadius: '10px',
                left: '570px',
                top: '310px',
                fontSize: '15px',
                borderWidth: '1px'
            }
        },
        inputAddress: {
            placeholder: 'Адрес доставки...',
            style: {
                background: '#ffffff',
                color: '#000000',
                height: '50px',
                width: '390px',
                borderRadius: '10px',
                left: '170px',
                top: '310px',
                fontSize: '15px',
                borderWidth: '1px'
            }
        }
    },
    menuPage: {
        namePage: 'Меню',
        background: {
            style: {
                background: '#ffbdd3'
            }
        },
    },
    productPage: {
        namePage: 'Страница блюда',
        background: {
            style: {
                background: 'rgba(46,46,51,.2)'
            }
        },
        buttonClose: {
            style: {
                top: '20px',
                left: '585px'
            }
        },
        inputCount: {
            style: {
                top: '515px',
                left: '335px'
            }
        },
        productContainer: {
            style: {
                background: '#fff00190',
                height: '600px',
                width: '350px',
                top: '20px',
                left: '230px'
            }
        },
        imageContainer: {
            style: {
                background: '#f6f6f6',
                height: '220px',
                width: '350px',
                top: '20px',
                left: '230px'
            },
            image: {
                src: 'https://www.delivery-club.ru//media/cms/relation_product/15275/301976305_f.jpg'
            }
        },
        title: {
            text: 'Кинг Наггетс (станд.)',
            style: {
                color: '#000000',
                fontSize: '25px',
                left: '270px',
                top: '250px',
                width: '270px'
            }
        },
        description: {
            text: 'Наши наггетсы сделаны из нежного белого куриного мяса в легкой хрустящей панировке. Рекомендуем к ним восемь разных, но одинаково вкусных соусов на выбор: сырный, кетчуп, барбекю, кисло-сладкий, карри, чесночный, горчичный, сацебели.',
            style: {
                color: '#000000',
                fontSize: '17px',
                left: '260px',
                top: '290px',
                width: '270px'
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#97c62b',
                color: '#000533',
                height: '40px',
                width: '300px',
                borderRadius: '5px',
                left: '255px',
                top: '570px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        },
    },
    basketPage: {
        namePage: 'Корзина покупок',
        background: {
            style: {
                background: 'rgba(46,46,51,.2)'
            }
        },
        productContainer: {
            style: {
                background: '#fff00190',
                left: '220px'
            }
        },
        foodContainer: {
            style: {
                background: '#f6f6f6'
            }
        },
        textContainer: {
            order: {
                style: {
                    color: '#000fff',
                    fontSize: '18px'
                }
            },
            delivery: {
                style: {
                    color: '#000fff',
                    fontSize: '18px'
                }
            },
            result: {
                style: {
                    color: '#000fff',
                    fontSize: '21px'
                }
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#97c62b',
                color: '#000533',
                height: '40px',
                width: '300px',
                borderRadius: '5px',
                left: '270px',
                top: '590px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        }
    },
    payPage: {
        namePage: 'Страница оплаты',
        background: {
            style: {
                background: '#ffbdd3'
            }
        },
        leftPanel: {
            title: {
                text: 'Доставка',
                style: {
                    color: '#000000',
                    fontSize: '25px',
                    left: '70px',
                    top: '40px',
                }
            },
            telephone: {
                style: {
                    left: '70px',
                    top: '90px'
                },
                title: {
                    text: 'Телефон',
                    style: {
                        color: '#000000',
                        fontSize: '20px'
                    }
                },
                input: {
                    placeholder: 'телефон',
                    style: {
                        background: '#ffffff',
                        color: '#000000',
                        height: '40px',
                        width: '420px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            address: {
                text: 'Москва, 4-й Добрынинский переулок, 8',
                style: {
                    color: '#000000',
                    fontSize: '22px',
                    left: '70px',
                    top: '210px',
                }
            },
            entrance: {
                style: {
                    left: '70px',
                    top: '275px'
                },
                title: {
                    text: 'Подъезд',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'подъезд',
                    style: {
                        background: '#ffffff',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            intercom: {
                style: {
                    left: '300px',
                    top: '275px'
                },
                title: {
                    text: 'Домофон',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'код домофона',
                    style: {
                        background: '#ffffff',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            apartment: {
                style: {
                    left: '70px',
                    top: '390px'
                },
                title: {
                    text: 'Кв/Офис',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'квартра или офис',
                    style: {
                        background: '#ffffff',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            floor: {
                style: {
                    left: '300px',
                    top: '390px'
                },
                title: {
                    text: 'Этаж',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'этаж',
                    style: {
                        background: '#ffffff',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            pay: {
                text: 'Оплата',
                style: {
                    color: '#000000',
                    fontSize: '22px',
                    left: '70px',
                    top: '490px',
                }
            },
            comment: {
                style: {
                    left: '70px',
                    top: '590px'
                },
                title: {
                    text: 'Комментарии к заказу',
                    style: {
                        color: '#000000',
                        fontSize: '20px'
                    }
                },
                input: {
                    placeholder: 'комментрарии к заказу',
                    style: {
                        background: '#ffffff',
                        color: '#000000',
                        height: '80px',
                        width: '420px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            }
        },
        rightPanel: {
            style: {
                background: '#ffb112'
            },
            textContainer: {
                order: {
                    style: {
                        color: '#000fff',
                        fontSize: '18px'
                    }
                },
                delivery: {
                    style: {
                        color: '#000fff',
                        fontSize: '18px'
                    }
                },
                result: {
                    style: {
                        color: '#000fff',
                        fontSize: '21px'
                    }
                }
            },
            buttonOK: {
                text: 'Принять',
                style: {
                    background: '#97c62b',
                    color: '#000533',
                    height: '40px',
                    width: '200px',
                    borderRadius: '5px',
                    left: '45px',
                    top: '190px',
                    fontSize: '15px',
                    borderWidth: '0px'
                }
            }
        }
    },
}

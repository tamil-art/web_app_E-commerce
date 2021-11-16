const products = [
    {
        "id": 1,
        "title": "Nike backpack",
        "cate": "Backpack",
        "price": 6000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_PDP_1280_v1%2Ff_auto%2Cq_auto%3Aeco%2F2a58a311-26c8-40fd-ac02-a71245555e2e%2Felite-pro-basketball-backpack-dJKzSg.png",
        "amount": 1
    },
    {   
        "id": 2,
        "title": "DE'LANCI pressed Glitter Eyeshadow color palette",
        "cate": "Color palette",
        "price": 3000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia6.ppl-media.com%2Ftr%3Ah-750%2Cw-750%2Cc-at_max%2Fstatic%2Fimg%2Fproduct%2F232365%2Fde-lanci-pressed-glitter-eyeshadow-palette-19-2g_1_display_1616073599_61f429d9.jpg",
        "amount": 1
    },
    {
        "id": 3,
        "title": "Lazy Knit Slip On IDP Loafers For Men  (Navy) ",
        "cate": "Shoes",
        "price": 4000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F880%2F1056%2Fkk1h5e80%2Fshoe%2Ff%2Fb%2Fj%2F11335288-44-5-puma-navy-original-imafzgzz4zjaqpva.jpeg%3Fq%3D50",
        "amount": 1
    },
    {
        "id": 4,
        "title": "Men Red Fabric Wallet - Regular Size",
        "cate": "Wallet",
        "price": 2000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F880%2F1056%2Fk1xwcy80%2Fwallet-card-wallet%2Fy%2Fy%2Fs%2Fwalley-11796-wallet-wildcraft-original-imafh3ftdzknzcyt.jpeg%3Fq%3D50",
        "amount": 1
    },
    {
        "id": 5,
        "title": "UV Protection Aviator Sunglasses",
        "cate": "glasses",
        "price": 2500,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F880%2F1056%2Fjhjg13k0%2Fsunglass%2F7%2Fb%2Fc%2F55-0rb3025i088-3f55-ray-ban-original-imaf5jazzjktdnx2.jpeg%3Fq%3D50",
        "amount": 1
    },
    {
        "id": 6,
        "title": "Ice cap",
        "cate": "CAP",
        "price": 2000,
        "image": "img/product-6.jpeg",
        "amount": 1
    },
    {
        "id": 7,
        "title": "Women Black Heels Sandal",
        "cate": "Shoes",
        "price": 5000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F880%2F1056%2Fjylvde80%2Fsandal%2Fg%2F9%2Fz%2Ftriac-1-4-call-it-spring-black-original-imafgt5dnzwhrfjh.jpeg%3Fq%3D50",
        "amount": 1
    },
    {
        "id": 8,
        "title": "deoxy RC Stunt Car",
        "cate": "RC car",
        "price": 7000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F416%2F416%2Fkqqykcw0%2Fremote-control-toy%2Fv%2Fz%2Fu%2Fcar-sensing-mb-brothers-original-imag4zyx2zfr44ce.jpeg%3Fq%3D70",
        "amount": 1 
    },
    {
        "id": 9,
        "title": "COLEMAN Camping Tent Tent",
        "cate": "Tent",
        "price": 2000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F416%2F416%2Fjs3j5ow0%2Ftent%2Fr%2Fz%2Fw%2Fblackout-3-person-festival-dome-tent-outdoor-camping-tent-original-imafdpu3vcvxzfhp.jpeg%3Fq%3D70",
        "amount": 1
    },
    {
        "id": 10,
        "title": "HP v236w Pen drive",
        "cate": "Pen Drive",
        "price": 2000,
        "image": "https://m.media-amazon.com/images/I/61xNG4wjOuL._SL1400_.jpg",
        "amount": 1
    },
    {
        "id": 11,
        "title": "Cubelelo Yuxin Little Magic 3x3 ",
        "cate": "Rubric cube",
        "price": 300,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F416%2F416%2Fjgsanww0%2Fpuzzle%2Fy%2Fd%2Fd%2F1-yuxin-little-magic-3x3-stickerless-cubelelo-original-imaf4xzvftcgzxzd.jpeg%3Fq%3D70",
        "amount": 1
    },
    {
        "id": 12,
        "title": "HRX Neoprene ",
        "cate": "Dumbbell",
        "price": 2000,
        "image": "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F416%2F416%2Fksgehzk0%2Fdumbbell%2Ft%2Fu%2Fk%2Fneoprene-coated-5-kg-x-12-hrx-original-imag6ymgwncehccf.jpeg%3Fq%3D70",
        "amount": 1
    }


]


export default products;
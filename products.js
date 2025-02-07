const products = [
    {
        id: 1,
        name: "手工编织包",
        price: 299,
        description: "精美手工编织包，采用优质棉线制作，典雅大方",
        image: "https://images.pexels.com/photos/4553192/pexels-photo-4553192.jpeg",
        category: "配饰"
    },
    {
        id: 2,
        name: "手工陶瓷杯",
        price: 159,
        description: "手工制作陶瓷杯，每件都是独特的艺术品",
        image: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg",
        category: "家居"
    },
    {
        id: 3,
        name: "手工毛线帽",
        price: 128,
        description: "温暖舒适的手工编织毛线帽，多色可选",
        image: "https://images.pexels.com/photos/5913089/pexels-photo-5913089.jpeg",
        category: "配饰"
    },
    {
        id: 4,
        name: "手工皮具钱包",
        price: 399,
        description: "真皮手工制作，精致车缝，耐用典雅",
        image: "https://images.pexels.com/photos/6438660/pexels-photo-6438660.jpeg",
        category: "配饰"
    },
    {
        id: 5,
        name: "手工串珠项链",
        price: 189,
        description: "精选天然水晶串珠，独特设计，优雅迷人",
        image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
        category: "配饰"
    },
    {
        id: 6,
        name: "手工羊毛毡小动物",
        price: 99,
        description: "可爱的羊毛毡手工制品，每个都独一无二",
        image: "https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg",
        category: "家居"
    },
    {
        id: 7,
        name: "手工编织地毯",
        price: 599,
        description: "传统工艺编织，柔软舒适，美化家居",
        image: "https://images.pexels.com/photos/6444266/pexels-photo-6444266.jpeg",
        category: "家居"
    },
    {
        id: 8,
        name: "手工蜡烛",
        price: 88,
        description: "天然大豆蜡制作，多种香型可选",
        image: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg",
        category: "家居"
    },
    {
        id: 9,
        name: "手工布艺抱枕",
        price: 149,
        description: "精选棉麻面料，舒适耐用，图案独特",
        image: "https://images.pexels.com/photos/6444332/pexels-photo-6444332.jpeg",
        category: "家居"
    },
    {
        id: 10,
        name: "手工木质首饰盒",
        price: 259,
        description: "实木手工雕刻，精美做工，收纳便利",
        image: "https://images.pexels.com/photos/5713760/pexels-photo-5713760.jpeg",
        category: "配饰"
    },
    {
        id: 11,
        name: "手工编织手链",
        price: 79,
        description: "细腻编织工艺，可调节长度，时尚百搭",
        image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
        category: "配饰"
    },
    {
        id: 12,
        name: "手工陶瓷花瓶",
        price: 299,
        description: "手工拉坯制作，造型优美，适合家居装饰",
        image: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg",
        category: "家居"
    },
    {
        id: 13,
        name: "手工皮具钥匙扣",
        price: 89,
        description: "真皮手工缝制，实用美观，送礼佳选",
        image: "https://images.pexels.com/photos/6438653/pexels-photo-6438653.jpeg",
        category: "配饰"
    },
    {
        id: 14,
        name: "手工刺绣手帕",
        price: 69,
        description: "精致刺绣图案，纯棉材质，柔软亲肤",
        image: "https://images.pexels.com/photos/6157214/pexels-photo-6157214.jpeg",
        category: "家居"
    },
    {
        id: 15,
        name: "手工玻璃装饰品",
        price: 199,
        description: "手工吹制玻璃，晶莹剔透，独特艺术感",
        image: "https://images.pexels.com/photos/6157219/pexels-photo-6157219.jpeg",
        category: "家居"
    },
    {
        id: 16,
        name: "手工编织围巾",
        price: 169,
        description: "柔软保暖，多色可选，送礼自用两相宜",
        image: "https://images.pexels.com/photos/6157224/pexels-photo-6157224.jpeg",
        category: "家居"
    },
    {
        id: 17,
        name: "手工布艺笔袋",
        price: 59,
        description: "实用美观，容量适中，做工精细",
        image: "https://images.pexels.com/photos/6157234/pexels-photo-6157234.jpeg",
        category: "家居"
    },
    {
        id: 18,
        name: "手工香薰摆件",
        price: 129,
        description: "天然材料制作，香味持久，装饰美化",
        image: "https://images.pexels.com/photos/6157239/pexels-photo-6157239.jpeg",
        category: "家居"
    },
    {
        id: 19,
        name: "手工布艺发饰",
        price: 49,
        description: "精选布料制作，款式多样，清新可爱",
        image: "https://images.pexels.com/photos/6157244/pexels-photo-6157244.jpeg",
        category: "家居"
    },
    {
        id: 20,
        name: "手工木质相框",
        price: 179,
        description: "实木手工打造，复古文艺，美化家居",
        image: "https://images.pexels.com/photos/6157249/pexels-photo-6157249.jpeg",
        category: "家居"
    },
    {
        id: 21,
        name: "手工编织毛衣",
        price: 399,
        description: "纯手工编织，保暖舒适，个性化定制",
        image: "https://images.pexels.com/photos/6444089/pexels-photo-6444089.jpeg",
        category: "服饰"
    },
    {
        id: 22,
        name: "手工棉麻连衣裙",
        price: 299,
        description: "天然面料，清新文艺，舒适透气",
        image: "https://images.pexels.com/photos/6444091/pexels-photo-6444091.jpeg",
        category: "服饰"
    },
    {
        id: 23,
        name: "手工真丝围巾",
        price: 259,
        description: "真丝材质，手工印染，独特图案",
        image: "https://images.pexels.com/photos/6444093/pexels-photo-6444093.jpeg",
        category: "服饰"
    },
    {
        id: 24,
        name: "手工牛仔外套",
        price: 459,
        description: "复古手工刺绣，个性化定制",
        image: "https://images.pexels.com/photos/6444095/pexels-photo-6444095.jpeg",
        category: "服饰"
    },
    {
        id: 25,
        name: "手工礼品盒",
        price: 159,
        description: "精美包装，适合各种节日送礼",
        image: "https://images.pexels.com/photos/6444097/pexels-photo-6444097.jpeg",
        category: "礼品"
    },
    {
        id: 26,
        name: "手工香皂礼盒",
        price: 129,
        description: "天然植物配方，精美包装",
        image: "https://images.pexels.com/photos/6444099/pexels-photo-6444099.jpeg",
        category: "礼品"
    },
    {
        id: 27,
        name: "手工茶具套装",
        price: 499,
        description: "传统工艺制作，送礼佳选",
        image: "https://images.pexels.com/photos/6444101/pexels-photo-6444101.jpeg",
        category: "礼品"
    },
    {
        id: 28,
        name: "手工刺绣手帕礼盒",
        price: 199,
        description: "精致刺绣，礼盒包装",
        image: "https://images.pexels.com/photos/6444103/pexels-photo-6444103.jpeg",
        category: "礼品"
    },
    {
        id: 29,
        name: "手工皮具钱包套装",
        price: 599,
        description: "真皮制作，商务礼品首选",
        image: "https://images.pexels.com/photos/6444105/pexels-photo-6444105.jpeg",
        category: "礼品"
    },
    {
        id: 30,
        name: "手工编织帽子围巾套装",
        price: 299,
        description: "保暖套装，送礼自用皆宜",
        image: "https://images.pexels.com/photos/6444107/pexels-photo-6444107.jpeg",
        category: "服饰"
    }
];

// 定义产品分类
const categories = [
    { id: "all", name: "全部作品", icon: "🎨" },
    { id: "accessories", name: "配饰系列", icon: "👜" },
    { id: "home", name: "家居系列", icon: "🏠" },
    { id: "clothing", name: "服饰系列", icon: "👔" },
    { id: "gift", name: "礼品系列", icon: "🎁" }
]; 
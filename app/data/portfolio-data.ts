export type PortfolioCategory = 'all' | 'repair' | 'knitting';

export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  category: PortfolioCategory;
  image1: string;
  image2?: string;
};

export const portfolioItems: PortfolioItem[] = [
  // --- Примеры "До/После" (Ремонт) ---
  // {
  //   id: 1,
  //   title: 'Перетяжка автокресла',
  //   description: 'Полное восстановление боковой поддержки.',
  //   category: 'repair',
  //   image1: 'https://via.placeholder.com/400x400/DAA520/000000?text=ПОСЛЕ', // TODO: Замените на /images/portfolio/car-seat-after.jpg
  //   image2: 'https://via.placeholder.com/400x400/A83C31/FFFFFF?text=ДО' // TODO: Замените на /images/portfolio/car-seat-before.jpg
  // },
  // {
  //   id: 3,
  //   title: 'Ремонт старого стула',
  //   description: 'Замена наполнителя и полная перетяжка.',
  //   category: 'repair',
  //   image1: 'https://via.placeholder.com/400x400/C75C45/FFFFFF?text=ПОСЛЕ', // TODO: Замените
  //   image2: 'https://via.placeholder.com/400x400/5A2B2A/FFFFFF?text=ДО' // TODO: Замените
  // },
  // {
  //   id: 5,
  //   title: 'Художественная штопка джинс',
  //   description: 'Ремонт разрыва с восстановлением плетения.',
  //   category: 'repair',
  //   image1: 'https://via.placeholder.com/400x400/DAA520/000000?text=ПОСЛЕ+2', // TODO: Замените
  //   image2: 'https://via.placeholder.com/400x400/A83C31/FFFFFF?text=ДО+2' // TODO: Замените
  // },
  { id: 10, title: 'Туника оранжевая', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/tunika-oranzhevaya.jpg' },
  { id: 11, title: 'Майка розовая', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-rozovaya.jpg' },
  { id: 12, title: 'Платье белое', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/platye-beloe.jpg' },
  { id: 13, title: 'Купальник бирюзовый', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kupalnik-biryuzoviy.jpg' },
  { id: 14, title: 'Костюм пляжный белый', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kostyum-plyazhniy-beliy.jpg' },
  { id: 15, title: 'Купальник синий', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kupalnik-siniy.jpg' },
  { id: 16, title: 'Купальник чёрный с красным', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kupalnik-cherniy-s-krasnim.jpg' },
  { id: 17, title: 'Купальник полосатый бело-голубой', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kupalnik-polosatiy-belo-goluboy.jpg' },
  { id: 18, title: 'Купальник белый с голубым', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kupalnik-beliy-s-golubim.jpg' },
  { id: 19, title: 'Купальник разноцветный', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kupalnik-raznotsvetniy.jpg' },
  { id: 20, title: 'Платье-сетка', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/platye-setka.jpg' },
  { id: 21, title: 'Майка с рюшами разноцветная', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-s-ryushami-raznotsvetnaya.jpg' },
  { id: 22, title: 'Майка-ромб', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-romb.jpg' },
  { id: 23, title: 'Платье чёрное с разноцветными квадратами', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/platye-chernoe-s-raznotsvetnimi-kvadratami.jpg' },
  { id: 24, title: 'Туника жёлтая', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/tunika-zheltaya.jpg' },
  { id: 25, title: 'Майка бежевая', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-bezhevaya.jpg' },
  { id: 26, title: 'Майка белая', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-belaya.jpg' },
  { id: 27, title: 'Туника белая', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/tunika-belaya.jpg' },
  { id: 28, title: 'Платье разноцветное', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/platye-raznotsvetnoe.jpg' },
  { id: 29, title: 'Майка розовая без бретелей', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-rozovaya-bez-breteley.jpg' },
  { id: 30, title: 'Купальник салатовый', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/kupalnik-salatoviy.jpg' },
  { id: 31, title: 'Топ чёрный с длинными рукавами', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/top-cherniy-s-dlinnimi-rukavami.jpg' },
  { id: 32, title: 'Пеньюар коричневый', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/penyuar-korichneviy.jpg' },
  { id: 33, title: 'Майка коричневая из ромбов', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-korichnevaya-iz-rombov.jpg' },
  { id: 34, title: 'Сарафан белый', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/sarafan-beliy.jpg' },
  { id: 35, title: 'Платье-мини чёрное', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/platye-mini-chernoe.jpg' },
  { id: 36, title: 'Платье разноцветное полосатое', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/platye-raznotsvetnoe-polosatoe.jpg' },
  { id: 37, title: 'Платье сиреневое', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/platye-sirenevoe.jpg' },
  { id: 38, title: 'Футболка-квадрат', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/futbolka-kvadrat.jpg' },
  { id: 39, title: 'Майка из квадратов', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/mayka-iz-kvadratov.jpg' },
  { id: 40, title: 'Туника чёрная с рукавом три четверти', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/tunika-chernaya-s-rukavom-tri-chetverti.jpg' },
  { id: 41, title: 'Туника оранжевая с рукавом три четверти', description: 'Вязание крючком', category: 'knitting', image1: '/images/portfolio/tunika-oranzhevaya-s-rukavom-tri-chetverti.jpg' },
];
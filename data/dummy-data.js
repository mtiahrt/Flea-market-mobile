import Category from './models/category';
import Subcategory from './models/subcategory';
import Item from './models/item';
import ItemDetail from './models/itemDetail';
import Cart from './models/cart';

export const CATEGORIES = [
  new Category(
    'c1',
    'Clothing',
    'https://as1.ftcdn.net/v2/jpg/02/85/94/70/1000_F_285947084_ePYjQpzCaQq6Vb2GEoYGZs8MNYkUhNqB.jpg',
    'hanger',
    'Women, Mens, Children, Toddlers, Babies. We have all walks of life'
  ),
  new Category(
    'e1',
    'Electronics',
    'https://t3.ftcdn.net/jpg/01/16/51/12/360_F_116511270_7oPaQ6tWGzKJWIN91Y648SHhGEJKbNpY.jpg',
    'laptop',
    'Computers, Radios, Phones, Appliances, TVs. We have all electrical walks of life'
  ),
  new Category(
    'hg1',
    'Home Goods',
    'https://thumbs.dreamstime.com/z/houseplants-room-vector-illustration-cartoon-flat-living-kitchen-cozy-apartment-flower-plants-pot-home-decor-shelf-178489626.jpg',
    'bookshelf',
    'Furniture, Nic-Nacks, Picture Frames, Drapes, Decorative items.  What you would need to scale up your home.'
  ),
  new Category(
    'h1',
    'Hardware',
    'https://thumbs.dreamstime.com/z/tools-store-hardware-construction-shop-interior-salesman-stand-counter-desk-showing-thumb-up-showcases-diy-160746851.jpg',
    'tools',
    'Table saws, Paint, Wrench, Ratchet and Sockets, Stud finder'
  ),
];
export const SUBCATEGORIES = [
  new Subcategory(
    's1',
    'c1',
    'Mens Clothing',
    'human-male',
    'Mens Clothing from t-shirts to pants'
  ),
  new Subcategory(
    's2',
    'c1',
    'Women\'s Clothing',
    'human-female',
    'Women\'s Clothing from t-shirts to pants'
  ),
  new Subcategory(
    's3',
    'c1',
    'Kids Clothing',
    'human-child',
    'Kids Clothing from t-shirts to pants'
  ),
  new Subcategory(
    's4',
    'e1',
    'Computers',
    'laptop',
    'Computers and accessories'
  ),
];

export const ITEMS = [
  new Item(
    'i1',
    'c1',
    's1',
    'Goldsmiths Jeans',
    'https://images2.imgbox.com/91/4c/R9klzW8u_o.jpg',
    'Mens Faded 31R Jeans'
  ),

  new Item(
    'i2',
    'c1',
    's1',
    'Lucky Jeans',
    'https://images2.imgbox.com/0f/3d/bQP6I0dS_o.jpg',
    'Mens Faded blue jeans'
  ),

  new Item(
    'i3',
    'e1',
    'Ipod Touch',
    '',
    "Super old 'retro' ipod touch. Brings back memories"
  ),
  new Item('i4', 'e1', 'Samsung TV', '', '42 inch Smart TV'),
  new Item('i5', 'e1', 'Droid phone ', '', 'LVC Cheap phone.'),
  new Item(
    'i6',
    'e1',
    'Iphone X',
    '',
    'Nice Iphone.  Modern technology is cool'
  ),
  new Item(
    'i7',
    'hg1',
    'Nice Couch',
    '',
    'Green couch but need looking.  Needs a home. '
  ),
  new Item('i8', 'hg1', 'Fire place mantle', '', 'Looks good, fire resistant'),
  new Item('i9', 'h1', 'Table saw', '', 'Mens buttom up shirt'),
  new Item('i10', 'h1', 'Circular saw', '', 'Sharp so be careful'),
  new Item('i11', 'h1', 'Router', '', '44 mm bit included'),
  new Item('i12', 'h1', 'Drill Press', '', '5 lbs of pressure is all you need'),
  new Item(
    'i13',
    'c1',
    's2',
    'women\'s Pants',
    'https://cdn.shopify.com/s/files/1/0371/4095/5275/products/Pocket-Booty-Lifting-Anti-Cellulite-Leggings-Slide-Leggings-1614963243_150x150_crop_center.progressive.jpg?v=1623199484',
    'women flannel shirt'
  ),
  new Item(
    'i14',
    'c1',
    's2',
    'Women\'s Thigh High',
    'https://cdn.shopify.com/s/files/1/0580/1077/products/Thigh_High_1_copy_721f9be0-0de2-45f1-a883-1d4a2b3f0826.jpg?v=1606855202',
    'women\'s dress skirt'
  ),
  new Item(
    'i15',
    'c1',
    's2',
    'Women\'s dress',
    'https://www.lulus.com/images/product/xlarge/3200150_607722.jpg?w=70',
    'women\'s dress up pants'
  ),
  new Item(
    'i16',
    'c1',
    's2',
    'Women\'s button up',
    'https://images.bellelily.com/2021/09/16/516174_564910210_122.images.139x197.jpg',
    'women\'s dress'
  ),
  new Item(
    'i17',
    'c1',
    's3',
    'Kids les tic Pants',
    'https://canary.contestimg.wish.com/api/webimage/5c872c591a866b1f66dd8d93-3-small.jpg',
    'carters pant'
  ),
  new Item(
    'i18',
    'c1',
    's3',
    'Kids 3T shirt button up',
    'https://techcrunch.com/wp-content/uploads/2016/07/14_lifestyle_dbl_roa_038.jpg?w=1390&crop=1',
    'Carters shirt'
  ),
  new Item(
    'i19',
    'c1',
    's3',
    'Kids 5T Pants',
    'https://m.media-amazon.com/images/I/519zb4kQuyL._AC_UX385_.jpg',
    'Kids church pant'
  ),
  new Item(
    'i20',
    'c1',
    's3',
    'Kids 3T button up',
    'https://media.kohlsimg.com/is/image/kohls/ki-dp-20211007-vn-a-1',
    'kids easy pant'
  ),
  new Item(
    'i21',
    'c1',
    's3',
    'New Born onese ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrh0q-q-Byr6YVQdsZNV286v-o1EQRl8cveQEeF_xXUU6pIHYzvNKuWfSvDBQJzsyims&usqp=CAU',
    'baby onese'
  ),
  new Item(
    'i22',
    'c1',
    's3',
    'Kids 6T Shirt',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWu7CqXaWRI9IqM9cRaC_xn-dzHedgfXMOX47Wa15pZJJ63OwIgE_tuixZ9KTC1zyvY0Q&usqp=CAU',
    'toddler t-shirt'
  ),
];
export const ITEMSDETAILS = [
  new ItemDetail(
    'detail1',
    'i1',
    'Faded jean button fly',
    'AG Adriano Goldsmiths',
    [
      'https://images2.imgbox.com/91/4c/R9klzW8u_o.jpg',
      'https://target.scene7.com/is/image/Target/GUEST_7666110d-95d8-487a-931e-dd1689a043e4?wid=315&hei=315&qlt=60&fmt=pjpeg',
    ],
    'https://thumbs2.imgbox.com/91/4c/R9klzW8u_t.jpg',
    'Mens jeans',
    ['31R'],
    88.45,
    '3-5 business days',
    '60 days money back',
    [
      { color: '#7cd4e6', name: 'blue' },
      { color: 'coral', name: 'coral' },
    ],
    '70% rayon, 25% nylon',
    'USPS priority mail'
  ),
  new ItemDetail(
    'detail2',
    'i2',
    'Mens Lucky Jeans',
    'Lucky Jeans',
    ['https://thumbs2.imgbox.com/0f/3d/bQP6I0dS_t.jpg'],
    'https://thumbs2.imgbox.com/0f/3d/bQP6I0dS_t.jpg',
    'Mens faded blue jeans',
    ['14/32'],
    99.25,
    '3-5 business days',
    '30 days money back',
    [{ color: '#ddd', name: 'gray' }],
    '100% Cotton',
    'USPS priority mail'
  ),
  new ItemDetail(
    'detail3',
    'i14',
    'Women\'s Thigh High',
    'Koles',
    [
      'https://cdn.shopify.com/s/files/1/0580/1077/products/Thigh_High_1_copy_721f9be0-0de2-45f1-a883-1d4a2b3f0826.jpg?v=1606855202',
    ],
    'https://thumbs2.imgbox.com/73/e3/En2T3XLy_t.jpg',
    'women thigh workout spandex pants',
    ['L', 'M', 'S'],
    45.99,
    '3-7 business days',
    '14 days good as cash',
    [
      { color: '#09040b', name: 'black' },
      { color: '#e91694', name: 'pink' },
      { color: '#874bb4', name: 'purple' },
    ],
    'Cotton',
    'FexEx'
  ),
  new ItemDetail(
    'detail4',
    'i15',
    'Women\'s Summer Dress',
    'Koles\'',
    ['https://thumbs2.imgbox.com/53/e1/WCdRhMGy_t.jpg'],
    'https://thumbs2.imgbox.com/53/e1/WCdRhMGy_t.jpg',
    'women\'s thigh workout spandex pants',
    ['L', 'XS', 'S'],
    49.99,
    '3-7 business days',
    '14 days good as cash',
    [
      { color: '#e1751e', name: 'orange' },
      { color: '#e91694', name: 'blue' },
      { color: '#874bb4', name: 'pink' },
    ],
    'Cotton',
    'FexEx'
  ),
  new ItemDetail(
    'detail5',
    'i16',
    'Women\'s buttom up shirt',
    'Kens',
    [
      'https://images.bellelily.com/2021/09/16/516174_564910210_122.images.139x197.jpg',
    ],
    'https://images.bellelily.com/2021/09/16/516174_564910210_122.images.139x197.jpg',
    'women thigh workout spandex pants',
    ['L', 'XL', 'S'],
    34.99,
    '3-7 business days',
    '14 days good as cash',
    [
      { color: '#e1751e', name: 'orange' },
      { color: '#e91694', name: 'pink' },
      { color: '#874bb4', name: 'purple' },
    ],
    'Cotton',
    'FexEx'
  ),
  new ItemDetail(
    'detail6',
    'i13',
    'Women\'s Pant',
    'Bebe',
    [
      'https://cdn.shopify.com/s/files/1/0371/4095/5275/products/Pocket-Booty-Lifting-Anti-Cellulite-Leggings-Slide-Leggings-1614963243_150x150_crop_center.progressive.jpg?v=1623199484'
    ],
    'https://cdn.shopify.com/s/files/1/0371/4095/5275/products/Pocket-Booty-Lifting-Anti-Cellulite-Leggings-Slide-Leggings-1614963243_150x150_crop_center.progressive.jpg?v=1623199484',
    'women thigh workout spandex pants',
    ['L', 'XL', 'S'],
    34.99,
    '3-7 business days',
    '14 days good as cash',
    [
      { color: '#e1751e', name: 'orange' },
      { color: '#e91694', name: 'pink' },
      { color: '#874bb4', name: 'purple' },
    ],
    'Cotton',
    'FexEx'
  ),
];

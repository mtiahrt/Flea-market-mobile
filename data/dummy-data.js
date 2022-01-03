import Category from './models/category';
import Subcategory from './models/subcategory';
import Item from './models/item';
import ItemDetail from './models/itemDetail';

export const CATEGORIES = [
  new Category(
    'c1',
    'Clothing',
    'https://as1.ftcdn.net/v2/jpg/02/85/94/70/1000_F_285947084_ePYjQpzCaQq6Vb2GEoYGZs8MNYkUhNqB.jpg',
    'Womans, Mens, Children, Toddlers, Babies. We have all walks of life'
  ),
  new Category(
    'e1',
    'Electronics',
    'https://t3.ftcdn.net/jpg/01/16/51/12/360_F_116511270_7oPaQ6tWGzKJWIN91Y648SHhGEJKbNpY.jpg',
    'Computers, Radios, Phones, Appliances, TVs. We have all electrical walks of life'
  ),
  new Category(
    'hg1',
    'Home Goods',
    'https://thumbs.dreamstime.com/z/houseplants-room-vector-illustration-cartoon-flat-living-kitchen-cozy-apartment-flower-plants-pot-home-decor-shelf-178489626.jpg',
    'Furniture, NicNacks, Picture Frames, Drapes, Decorative items.  What you would need to scale up your home.'
  ),
  new Category(
    'h1',
    'Hardware',
    'https://thumbs.dreamstime.com/z/tools-store-hardware-construction-shop-interior-salesman-stand-counter-desk-showing-thumb-up-showcases-diy-160746851.jpg',
    'Table saws, Paint, Wrench, Ratchet and Sockets, Stud finder'
  ),
];
export const SUBCATEGORIES = [
  new Subcategory(
    's1',
    'c1',
    'Mens Clothing',
    'Mens Clothing from tshirts to pants'
  ),
  new Subcategory(
    's2',
    'c1',
    'Womens Clothing',
    'Womens Clothing from tshirts to pants'
  ),
  new Subcategory(
    's3',
    'c1',
    'Kids Clothing',
    'Kids Clothing from tshirts to pants'
  ),
];
export const ITEMS = [
  new Item(
    'i1',
    'c1',
    's1',
    'Mens TShirt',
    'https://target.scene7.com/is/image/Target/GUEST_22d315b6-3f34-4bcb-b94c-c89055614af4?wid=315&hei=315&qlt=60&fmt=pjpeg',
    'Mens Buttom up shirt'
  ),
  new Item(
    'i2',
    'c1',
    's1',
    'Mens Shirt',
    'https://target.scene7.com/is/image/Target/GUEST_7666110d-95d8-487a-931e-dd1689a043e4?wid=315&hei=315&qlt=60&fmt=pjpeg',
    'Mens rugbe shirt'
  ),

  new Item(
    'i3',
    'e1',
    'Ipod Touch',
    '',
    "Super old 'retro' ipod touch. Brings back memories"
  ),
  new Item('i4', 'e1', 'Samsang TV', '', '42 inch Smart TV'),
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
  new Item('i9', 'h1', 'Table saw', '', 'Mens Buttom up shirt'),
  new Item('i10', 'h1', 'Circular saw', '', 'Sharp so be carfull'),
  new Item('i11', 'h1', 'Router', '', '44 mm bit included'),
  new Item('i12', 'h1', 'Drill Press', '', '5 lbs of pressare is all you need'),
  new Item(
    'i13',
    'c1',
    's2',
    'womens Pants',
    'https://cdn.shopify.com/s/files/1/0371/4095/5275/products/Pocket-Booty-Lifting-Anti-Cellulite-Leggings-Slide-Leggings-1614963243_150x150_crop_center.progressive.jpg?v=1623199484',
    'womens flannel shirt'
  ),
  new Item(
    'i14',
    'c1',
    's2',
    'Womens Thigh High',
    'https://cdn.shopify.com/s/files/1/0580/1077/products/Thigh_High_1_copy_721f9be0-0de2-45f1-a883-1d4a2b3f0826.jpg?v=1606855202',
    'womens dress skirt'
  ),
  new Item(
    'i15',
    'c1',
    's2',
    'Womens dress',
    'https://www.lulus.com/images/product/xlarge/3200150_607722.jpg?w=70',
    'womens dress up pants'
  ),
  new Item(
    'i16',
    'c1',
    's2',
    'Womens button up',
    'https://images.bellelily.com/2021/09/16/516174_564910210_122.images.139x197.jpg',
    'womens dress'
  ),
  new Item(
    'i17',
    'c1',
    's3',
    'Kids lestic Pants',
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
    'baby onse'
  ),
  new Item(
    'i22',
    'c1',
    's3',
    'Kids 6T Shirt',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWu7CqXaWRI9IqM9cRaC_xn-dzHedgfXMOX47Wa15pZJJ63OwIgE_tuixZ9KTC1zyvY0Q&usqp=CAU',
    'toddler tshirt'
  ),
];

export const ITEMSDETAILS = [
  new ItemDetail(
    'detail1',
    'i1',
    'Floral Moisture-Wicking Performance T-Shirt',
    [
      'https://target.scene7.com/is/image/Target/GUEST_22d315b6-3f34-4bcb-b94c-c89055614af4?wid=315&hei=315&qlt=60&fmt=pjpeg',
      'https://target.scene7.com/is/image/Target/GUEST_7666110d-95d8-487a-931e-dd1689a043e4?wid=315&hei=315&qlt=60&fmt=pjpeg',
    ],
    'Mens blue Tshirt',
    'Large',
    '3-5 business days',
    '60 days money back',
    '#7cd4e6',
    '70% rayon, 25% nylon',
    'USPS priotity mail'
  ),
  new ItemDetail(
    'detail2',
    'i2',
    'Lucky Mens Large Polo',
    [
      'https://target.scene7.com/is/image/Target/GUEST_7666110d-95d8-487a-931e-dd1689a043e4?wid=315&hei=315&qlt=60&fmt=pjpeg',
    ],
    'Mens blue gray polo',
    'Large',
    '3-5 business days',
    '30 days money back',
    '#a4a8a2',
    '100% Cotten',
    'USPS priotity mail'
  ),
];

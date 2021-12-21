import Category from './models/category';
import Subcategory from './models/subcategory';
import Item from './models/item';

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
  new Item('i1', 'c1', 's1', 'Mens TShirt', '', 'Mens Buttom up shirt'),
  new Item('i2', 'c1', 's1', 'Mens Shirt', '', 'Mens rugbe shirt'),

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
  new Item('i13', 'c1', 's2', 'womens Pants', '', 'womens flannel shirt'),
  new Item('i14', 'c1', 's2', 'Womens button up', '', 'womens dress skirt'),
  new Item('i15', 'c1', 's2', 'Womens Pants', '', 'womens dress up pants'),
  new Item('i16', 'c1', 's2', 'Womens button up', '', 'womens dress'),
  new Item('i17', 'c1', 's3', 'Kids lestic Pants', '', 'carters pant'),
  new Item('i18', 'c1', 's3', 'Kids 3T shirt button up', '', 'Carters shirt'),
  new Item('i19', 'c1', 's3', 'Kids 5T Pants', '', 'Kids church pant'),
  new Item('i20', 'c1', 's3', 'Kids 3T button up', '', 'kids easy pant'),
  new Item('i21', 'c1', 's3', 'New Born onese ', '', 'baby onse'),
  new Item('i22', 'c1', 's3', 'Kids 6T Shirt', '', 'toddler tshirt'),
];

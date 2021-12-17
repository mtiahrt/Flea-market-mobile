import Category from "./models/category";
import Item from "./models/item";

export const CATEGORIES = [
  new Category(
    "c1",
    "Clothing",
    "https://as1.ftcdn.net/v2/jpg/02/85/94/70/1000_F_285947084_ePYjQpzCaQq6Vb2GEoYGZs8MNYkUhNqB.jpg",
    "Womans, Mens, Children, Toddlers, Babies. We have all walks of life"
  ),
  new Category(
    "e1",
    "Electronics",
    "https://t3.ftcdn.net/jpg/01/16/51/12/360_F_116511270_7oPaQ6tWGzKJWIN91Y648SHhGEJKbNpY.jpg",
    "Computers, Radios, Phones, Appliances, TVs. We have all electrical walks of life"
  ),
  new Category(
    "hg1",
    "Home Goods",
    "https://thumbs.dreamstime.com/z/houseplants-room-vector-illustration-cartoon-flat-living-kitchen-cozy-apartment-flower-plants-pot-home-decor-shelf-178489626.jpg",
    "Furniture, NicNacks, Picture Frames, Drapes, Decorative items.  What you would need to scale up your home."
  ),
  new Category(
    "h1",
    "Hardware",
    "https://thumbs.dreamstime.com/z/tools-store-hardware-construction-shop-interior-salesman-stand-counter-desk-showing-thumb-up-showcases-diy-160746851.jpg",
    "Table saws, Paint, Wrench, Ratchet and Sockets, Stud finder"
  ),
];

export const ITEMS = [
  new Item("i1", "c1", "Mens TShirt", "", "Mens Buttom up shirt"),
  new Item("i2", "c1", "Mens Shirt", "", "Mens rugbe shirt"),
  new Item(
    "i3",
    "e1",
    "Ipod Touch",
    "",
    "Super old 'retro' ipod touch. Brings back memories"
  ),
  new Item("i4", "e1", "Samsang TV", "", "42 inch Smart TV"),
  new Item("i5", "e1", "Droid phone ", "", "LVC Cheap phone."),
  new Item(
    "i6",
    "e1",
    "Iphone X",
    "",
    "Nice Iphone.  Modern technology is cool"
  ),
  new Item(
    "i7",
    "hg1",
    "Nice Couch",
    "",
    "Green couch but need looking.  Needs a home. "
  ),
  new Item("i8", "hg1", "Fire place mantle", "", "Looks good, fire resistant"),
  new Item("i1", "h1", "Table saw", "", "Mens Buttom up shirt"),
  new Item("i1", "h1", "Circular saw", "", "Sharp so be carfull"),
  new Item("i1", "h1", "Router", "", "44 mm bit included"),
  new Item("i1", "h1", "Drill Press", "", "5 lbs of pressare is all you need"),
];

class ItemDetail {
  constructor(
    id,
    itemId,
    title,
    manufacturer,
    photos,
    thumbPhoto,
    description,
    sizes,
    price,
    estimatedDelivery,
    returnPolicy,
    colors,
    meterial,
    deliveryTerms
  ) {
    this.id = id;
    this.itemId = itemId;
    this.title = title;
    this.manufacturer = manufacturer;
    this.photos = photos;
    this.thumbPhoto = thumbPhoto;
    this.description = description;
    this.sizes = sizes;
    this.price = price;
    this.estimatedDelivery = estimatedDelivery;
    this.returnPolicy = returnPolicy;
    this.colors = colors;
    this.material = meterial;
    this.deliveryTerms = deliveryTerms;
  }
}

export default ItemDetail;

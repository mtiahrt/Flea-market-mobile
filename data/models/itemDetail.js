class ItemDetail {
  constructor(
    id,
    itemId,
    title,
    photos,
    description,
    sizes,
    estimatedDelivery,
    returnPolicy,
    colors,
    meterial,
    deliveryTerms
  ) {
    this.id = id;
    this.itemId = itemId;
    this.title = title;
    this.photos = photos;
    this.description = description;
    this.sizes = sizes;
    this.estimatedDelivery = estimatedDelivery;
    this.returnPolicy = returnPolicy;
    this.colors = colors;
    this.material = meterial;
    this.deliveryTerms = deliveryTerms;
  }
}

export default ItemDetail;

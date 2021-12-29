class ItemDetail {
  constructor(
    id,
    itemId,
    title,
    photos,
    description,
    size,
    estimatedDelivery,
    returnPolicy,
    color,
    meterial,
    deliveryTerms
  ) {
    this.id = id;
    this.itemId = itemId;
    this.title = title;
    this.photos = photos;
    this.description = description;
    this.size = size;
    this.estimatedDelivery = estimatedDelivery;
    this.returnPolicy = returnPolicy;
    this.color = color;
    this.material = meterial;
    this.deliveryTerms = deliveryTerms;
  }
}

export default ItemDetail;

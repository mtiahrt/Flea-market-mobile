class Item {
  constructor(id, categoryId, subcategoryId, title, imageURL, description) {
    this.id = id;
    this.categoryId = categoryId;
    this.subcategoryId = subcategoryId;
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
  }
}

export default Item;

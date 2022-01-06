class Cart {
  constructor(id, itemId, userId, quantity, quantityAvailable) {
    this.id = id;
    this.itemId = itemId;
    this.userId = userId;
    this.quantity = quantity;
    this.quantityAvailable = quantityAvailable;
  }
}

export default Cart;

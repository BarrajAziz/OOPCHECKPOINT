class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}


class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add an item to the cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // Method to remove an item from the cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Method to calculate the total cost of items in the cart
  getTotalCost() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to display the cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
      return;
    }

    console.log("Shopping Cart:");
    this.items.forEach(item => {
      console.log(`- ${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
    });
    console.log(`Total: $${this.getTotalCost().toFixed(2)}`);
  }
}


// Create some products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Headphones", 200);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Removes the Phone

// Display the cart after removing an item
cart.displayCart();



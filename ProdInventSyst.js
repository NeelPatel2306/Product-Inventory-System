class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    
  }
}

class Inventory {
  constructor() {
    this.products = {};
    this.frozen = false;
  }

  addProduct(name, price) {
    if (this.frozen) {
      console.log("FROZEN: Can't add Product !!");
      return;
    }
    const newProduct = new Product(name, price);
    this.products[name] = newProduct;
    console.log(`${name} added to inventory.`);
  }

  updateProduct(name, price) {
    if (this.frozen) {
      console.log("FROZEN: Can't update Product !!");
      return;
    }
    const product = this.products[name];
    if (product) {
      product.price = price;
      console.log(`${name} updated in inventory.`);
    } 
    else {
      console.log(`${name} not found in inventory.`);
    }
  }

  deleteProduct(name) {
    if (this.frozen) {
      console.log("FROZEN: Can't delete Product !!");
      return;
    }
    const product = this.products[name];
    if (product) {
      delete this.products[name];
      console.log(`${name} deleted from inventory.`);
    } else {
      console.log(`${name} not found in inventory.`);
    }
  }

  getProducts() {
    return Object.values(this.products); //JS ONLY
    // console.log(Object.values(this.products));  //HTML
  }

  freezeInventory() {
    this.frozen = true;
    console.log("FROZEN !!");
  }

  cloneInventory() {
    const clonedInventory = new Inventory();
    clonedInventory.products = {...this.products};
    return clonedInventory;
  }

}

const inventory = new Inventory();
inventory.addProduct("SSD", 5000);
inventory.addProduct("HDD", 2000);
inventory.addProduct("RAM", 3000);
console.log(inventory.getProducts()); 

inventory.updateProduct("SSD", 5500);
console.log(inventory.getProducts()); 

inventory.deleteProduct("RAM");
console.log(inventory.getProducts()); 

// inventory.freezeInventory();
// inventory.addProduct("GraphicsCard", 8000); 

const clonedInventory = inventory.cloneInventory();
console.log(clonedInventory.getProducts());







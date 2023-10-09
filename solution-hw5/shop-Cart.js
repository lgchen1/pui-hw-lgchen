// Define glazingNames and glazingValues
let glazingNames = ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"];
let glazingValues = [0.00, 0.00, 0.50, 1.50];

// Define packSize and packsizeValues
let packSize = ["1", "3", "6", "12"];
let packsizeValues = [1, 3, 5, 10];


class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = rollPrice;
  }

  // Calculate the item price based on the base price, glazing, and pack size
  calculatePrice() {
    const glazingIndex = glazingNames.indexOf(this.glazing);
    const glazingPrice = glazingIndex !== -1 ? glazingValues[glazingIndex] : 0.00;
    const packSizeIndex = packSize.indexOf(this.size);
    const packSizeValue = packSizeIndex !== -1 ? packsizeValues[packSizeIndex] : 1;
    return (this.basePrice + glazingPrice) * packSizeValue;
      // return this.basePrice * this.size;
  }
}

// Cart array
const cart = [];

// Create Roll instances and add them to the cart
const originalRoll = new Roll("Original", "Keep Original", 1, 2.49);
const walnutRoll = new Roll("Walnut", "Vanilla Milk", 12, 39.90);
const raisinRoll = new Roll("Raisin", "Sugar Milk", 3, 8.97);
const appleRoll = new Roll("Apple", "Original", 3, 10.47);

cart.push(originalRoll, walnutRoll, raisinRoll, appleRoll);

// Display cart items on the page
function displayCartItem(roll) {
  const template = document.querySelector(".cart-template");
  const cartContainer = document.querySelector(".checkout");

  const clone = document.importNode(template.content, true);

  // Populate the template with roll information
  clone.querySelector(".shoppingroll").src = `../assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg`;
  clone.querySelector(".removebutton").addEventListener("click", () => removeItemFromCart(roll));
  clone.querySelector(".roll-text p:nth-child(1)").textContent = roll.type + " Cinnamon Roll";
  clone.querySelector(".roll-text p:nth-child(2)").textContent = "Glazing: " + roll.glazing;
  clone.querySelector(".roll-text p:nth-child(3)").textContent = "Pack Size: " + roll.size;
  clone.querySelector(".num-price p").textContent = "$" + roll.calculatePrice().toFixed(2);

  template.appendChild(clone);
}

function displayCartItems() {
  for (const roll of cart) {
      displayCartItem(roll);
  }
  updateTotalPrice();
}

displayCartItems();

// Remove items from the cart and update the total price
function removeItemFromCart(roll) {
 
  const rollIndex = cart.indexOf(roll);
  if (rollIndex !== -1) {
      cart.splice(rollIndex, 1);
  }

  // Remove the corresponding DOM element
  const cartItems = document.querySelectorAll(".template, .original-roll-parent");
  for (const item of cartItems) {
      if (item.querySelector(".roll-text p:nth-child(1)").textContent.startsWith(roll.type)) {
          item.remove();
      }
  }

  updateTotalPrice();
}

function updateTotalPrice() {
  const totalPriceElement = document.querySelector(".checkout-price p");
  const totalPrice = cart.reduce((sum, roll) => sum + roll.calculatePrice(), 0);
  totalPriceElement.textContent = "$" + totalPrice.toFixed(2);   
}



















  
   
  
  
  
  
  
  
  
  
  
  
  
  



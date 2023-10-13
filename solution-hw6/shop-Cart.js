class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
};

function calculatePrice(roll){
    console.log(packsizeDict[roll.size])
    return (roll.basePrice + glazingDict[roll.glazing]) * packsizeDict[roll.size];
    
}


// Display cart items on the page
function createRoll(roll){

    const template = document.querySelector('.cart-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.original-roll-parent');
    const removeButton = roll.element.querySelector('.removebutton');
    removeButton.addEventListener('click', () => {
        removeItem(roll);
    });


    const cartProduct = document.querySelector('.cart-wrapper');
    cartProduct.appendChild(roll.element);

    updateRoll(roll);
}


function updateRoll(roll){
    const rollTitle = roll.element.querySelector('.cart-product-title');
    rollTitle.innerText = roll.type + " Cinnamon Roll";

    const rollGlazing = roll.element.querySelector('.cart-product-glazing');
    rollGlazing.innerText = "Glazing: " + roll.glazing;

    const rollSize = roll.element.querySelector('.cart-product-size');
    rollSize.innerText = "Pack Size: " + roll.size;

    const rollImage = roll.element.querySelector('.shoppingroll');
    rollImage.src = "../assets/products/" + rolls[roll.type].imageFile;

    const rollPrice = roll.element.querySelector('.num-price');
    rollPrice.innerText = '$' + calculatePrice(roll).toFixed(2);

    updateTotalPrice(roll);
}

  
function displayCartItems() {
    for (const roll of cart) {
        createRoll(roll);
    }
    updateTotalPrice();    
}




  function removeItem(roll){
      roll.element.remove();
      cart.splice(cart.indexOf(roll), 1);
    //   cartPrice = document.querySelector('.num-price');
    //   cartPrice.innerText = '$' + updateTotalPrice();
    updateTotalPrice();
    saveToLocalStorage();

      saveToLocalStorage();
  }

  
  function updateTotalPrice() {
    const totalPriceElement = document.querySelector(".checkout-price p");
    const totalPrice = cart.reduce((sum, roll) => sum + calculatePrice(roll), 0);
    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);   
  }

let glazingDict = {
    "Keep original":0.0,
    "Sugar milk":0.0,
    "Vanilla milk":0.5,
    "Double chocolate":1.5
}

let packsizeDict = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
}


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Cart array
let cart = [];
retrieveFromLocalStorage();



const addToCartButton = document.getElementById('add-to-cart-button');



displayCartItems();


    function saveToLocalStorage() {
        const cartJSON = JSON.stringify(cart);
      
        localStorage.setItem('cart', cartJSON);
        console.log(cartJSON);  
      }
    
    


      function retrieveFromLocalStorage() {
        const cartJSON = localStorage.getItem('cart');
        const cartJSONArray = JSON.parse(cartJSON);
        for (const cartData of cartJSONArray) {
          cart.push(cartData);
        }
      }
      



  
   
  
  
  
  
  
  
  
  
  
  
  
  



const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


let glazingNames = ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"];
let glazingValues = [0.00, 0.00, 0.50, 1.50];


let selectGlazing = document.querySelector('#glazing-select');

let selectPackSize = document.querySelector('#pack-size-select');

const packSize = [
    {value: "1", price: 1},
    {value: "3", price: 3},
    {value: "6", price: 5},
    {value: "12", price: 10},
];



for (let i = 0; i < glazingNames.length; i++){ //i=1
    const option = document.createElement("option");
    option.value = glazingValues[i];//glazingValues[0]
    option.innerText = glazingNames[i];//glazingNames[0]
    selectGlazing.add(option);

}



for (let i = 0; i < packSize.length; i++){ //i=1
    const option = document.createElement("option");
    option.value = packSize[i].price;//glazingValues[0]
    option.innerText = packSize[i].value;//glazingNames[0]
    selectPackSize.add(option);

}

selectGlazing.addEventListener("change", changeGlazePrice);

selectPackSize.addEventListener("change",changePackPrice);



function changePackPrice(){
    const selectedPackSize = parseFloat(selectPackSize.value);
    const selectedGlazePrice = parseFloat(selectGlazing.value);
    const totalPrice = selectedPackSize * (rolls[rollType]["basePrice"] + selectedGlazePrice);
    

    displayPrice(totalPrice);
}


function changeGlazePrice(){
    const selectedPackSize = parseFloat(selectPackSize.value);
    const selectedGlazePrice = parseFloat(selectGlazing.value);
    const totalPrice = selectedPackSize * (rolls[rollType]["basePrice"] + selectedGlazePrice);
    
    displayPrice(totalPrice);
}


function displayPrice(price) {
    const cartPrice = document.getElementById("cart-price");
    cartPrice.textContent = `$${price.toFixed(2)}`;
}


// Parse the URL parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Changing the name of the roll
const headerElement = document.querySelector('#handroll-name');
headerElement.innerText = rollType + " Cinnamon Roll";


// Changing the roll image 
const rollImage = document.querySelector('#roll-detail-page');
rollImage.src = '../assets/products/' + rolls[rollType].imageFile;


// Update cart prices
const rollInfo = rolls[rollType];
document.querySelector('#cart-price').textContent = `$${rollInfo.basePrice.toFixed(2)}`;


const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}






const addToCartButton = document.getElementById('add-to-cart-button');

addToCartButton.addEventListener('click', () => {

    const packSize = parseInt(selectPackSize.options[selectPackSize.selectedIndex].text, 10); // Get the selected pack size
    const glazing = selectGlazing.options[selectGlazing.selectedIndex].text; // Get the selected glazing text
    const basePrice = parseFloat(rollInfo.basePrice.toFixed(2)); // Get the base price

  
    const newRoll = new Roll(rollType, glazing, packSize, basePrice);

  
    cart.push(newRoll);

 
    console.log('Cart:', cart);
});










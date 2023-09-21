

    let glazingNames = ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"];
    let glazingValues = [0.00, 0.00, 0.50, 1.50];
    let packSize = ["1","3","6","12"];
    let packsizeValues = [1,3,5,10];

    let selectGlazing = document.querySelector('#glazing-select');

    let selectPackSize = document.querySelector('#pack-size-select');


    for (let i = 0; i < glazingNames.length; i++){ //i=1
        const option = document.createElement("option");
        option.value = glazingValues[i];//glazingValues[0]
        option.innerText = glazingNames[i];//glazingNames[0]
        selectGlazing.add(option);

    }



    for (let i = 0; i < packSize.length; i++){ //i=1
        const option = document.createElement("option");
        option.value = packsizeValues[i];//glazingValues[0]
        option.innerText = packSize[i];//glazingNames[0]
        selectPackSize.add(option);

    }

    selectGlazing.addEventListener("change", changeGlazePrice);

    selectPackSize.addEventListener("change",changePackPrice);



    function changePackPrice(){
        const selectedPackSize = parseFloat(selectPackSize.value);
        const selectedGlazePrice = parseFloat(selectGlazing.value);
        const totalPrice = selectedPackSize * (2.49 + selectedGlazePrice);
        
    
        displayPrice(totalPrice);
    }


    function changeGlazePrice(){
        const selectedPackSize = parseFloat(selectPackSize.value);
        const selectedGlazePrice = parseFloat(selectGlazing.value);
        const totalPrice = selectedPackSize * (2.49 + selectedGlazePrice);
        
  
        displayPrice(totalPrice);
    }


    function displayPrice(price) {
        const cartPrice = document.getElementById("cart-price");
        cartPrice.textContent = `$${price.toFixed(2)}`;
    }







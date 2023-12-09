var contentArray = localStorage.getItem('ucres') ? JSON.parse(localStorage.getItem('ucres')) : [];
var checkboxes = document.querySelectorAll("input[type=checkbox]");
var i;

function save(){
  for(i = 0; i < checkboxes.length; i++){
    localStorage.setItem(checkboxes[i]).value, checkboxes[i].checked;
  }
  console.log(checkboxes[i].checked);
  console.log("hello");
}

function load(){    
  for(i = 0; i < checkboxes.length; i++){
    checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === "true" ? true:false;
  }
  console.log(checkboxes[i].checked);
}


document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
  document.getElementById("shadow").style.display = "none";
  document.getElementById("create_card").style.display = "none";
});

// document.getElementById("delete_cards").addEventListener("click", () => {
//   localStorage.clear();
//   flashcards.innerHTML = '';
//   contentArray = [];
// });

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("shadow").style.display = "block";
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("shadow").style.display = "none";
  document.getElementById("create_card").style.display = "none";
});



flashcardMaker = (text, delThisIndex) => {
  const flashcardTile = document.createElement("div");
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const answer = document.createElement('h2');
  const del = document.createElement('p');
  const learnedBox = document.createElement('input')
  const learnedBoxLabel = document.createElement('label');
  
  flashcardTile.classList.add('flashcardTile');
  flashcard.classList.add('flashcard');

  question.setAttribute("style", "padding: 15px; margin-top:20px; font-size:1.5em;");
  question.textContent = text.my_question;

  answer.setAttribute("style", "padding: 15px; font-size:1.2em; font-weight: 300;");
  answer.classList.add("answer_css");
  answer.textContent = text.my_answer;

  // var arrayFromStorage = JSON.parse(localStorage.getItem("ucres"));
  // var arrayLength = arrayFromStorage.length;
  // flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  // learnedBox.setAttribute("id", arrayLength);

  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem('ucres', JSON.stringify(contentArray));
    window.location.reload();
  })

  learnedBox.setAttribute("type", "checkbox");
  learnedBox.setAttribute("onclick", "save()");
  learnedBoxLabel.textContent = "Learned";

  flashcard.appendChild(question);
  flashcard.appendChild(answer);
  flashcard.appendChild(del);

  flashcardTile.appendChild(flashcard);
  flashcard.appendChild(learnedBoxLabel);
  flashcard.appendChild(learnedBox);


  // flashcard.addEventListener("click", () => {
  //   if(answer.style.display == "none") {
  //     question.style.display = "none";
  //     answer.style.display = "block";
  //   }

  //   else {
  //     question.style.display = "block";
  //     answer.style.display = "none";
  //   }

  // })

  document.querySelector("#flashcards").appendChild(flashcardTile);
  var count = $("#flashcards").children().length;
  document.querySelector("#quantity_count").textContent = count + " items";

}

// var arrayFromStroage = JSON.parse(localStorage.getItem("name"));
// var arrayLength = arrayFromStorage.length;
// console.log(arrayLength);



contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");

  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('ucres', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  answer.value = "";

  var count = $("#flashcards").children().length;
  document.querySelector("#quantity_count").textContent = count + " items";
  window.location.reload();
}

// $(".flashcard").on("click", function(){
//   $(this).toggleClass("animate__flipInX");
// });

// removeAnimate = () => {
//   const current = document.querySelector(this);
//   current.classList.remove("animate__flipInX");
// }

// addAnimate = () => {
//   $(this).addClass("animate__flipOutX");
// }
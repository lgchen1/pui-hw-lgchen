var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


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
  const hintContain = document.createElement('div');
  const hintImage = document.createElement('img');
  const hint = document.createElement('p');
  
  flashcardTile.classList.add('flashcardTile');
  flashcard.classList.add('flashcard', 'animate__animated');

  question.setAttribute("style", "padding: 15px; margin-top:60px; font-size:1.5em;");
  question.textContent = text.my_question;

  answer.setAttribute("style", "text-align:center; padding: 15px; margin-top:60px; font-weight: 300; display:none; font-size:1.2em;");
  answer.classList.add("answer_css");
  answer.textContent = text.my_answer;

  hintContain.classList.add("hint_contain");

  hintImage.classList.add("hint_image");
  hintImage.setAttribute("src", "../images/social-media/hint-button.png");

  hint.classList.add("hint");
  hint.textContent = "Hint: " + text.my_answer.substring(text.my_answer.length/2);

  console.log(text.my_answer.substring(text.my_answer.length/2));

//   function ellipsify (str) {
//     if (str.length > 10) {
//         return (str.substring(0, 10) + "...");
//     }
//     else {
//         return str;
//     }
// }

  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem('items', JSON.stringify(contentArray));
    window.location.reload();
  })

  flashcard.appendChild(question);
  flashcard.appendChild(answer);
  flashcard.appendChild(del);
  hintContain.appendChild(hintImage);
  hintContain.appendChild(hint);

  flashcardTile.appendChild(hintContain);
  flashcardTile.appendChild(flashcard);

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none") {
      question.style.display = "none";
      answer.style.display = "block";
    }

    else {
      question.style.display = "block";
      answer.style.display = "none";
    }

  })

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
  localStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  answer.value = "";

  var count = $("#flashcards").children().length;
  document.querySelector("#quantity_count").textContent = count + " items";
  window.location.reload();
}

$(".flashcard").on("click", function(){
  $(this).toggleClass("animate__flipInX");
});

$(".hint_contain").on("click", function(){
  $(this.children).toggleClass("hint");
});

removeAnimate = () => {
  const current = document.querySelector(this);
  current.classList.remove("animate__flipInX");
}

addAnimate = () => {
  $(this).addClass("animate__flipOutX");
}
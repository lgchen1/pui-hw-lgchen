var contentArray = localStorage.getItem('sets') ? JSON.parse(localStorage.getItem('sets')) : [];

var bearAlt = "light brown teddy bear with bow tie in a pink background";
var catAlt = "yellow cat winking with blue background";
var chickAlt = "yellow chicken with glasses eating leaves on a green background";
var frogAlt = "green frog with a yellow flower on its nose wearing a flower necklace on a yellow background";
var huskyAlt = "husky with glasses and red collar on baby blue background";
var otterAlt = "brown otter blowing bubbles surrounded by seaweed in a turquoise background";

document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
  document.getElementById("shadow").style.display = "none";
  document.getElementById("create_card").style.display = "none";
});

document.getElementById("show_share").addEventListener("click", () => {
  document.getElementById("shadow_share").style.display = "block";
  document.getElementById("share_card").style.display = "block";
});

document.getElementById("close_share_box").addEventListener("click", () => {
  document.getElementById("shadow_share").style.display = "none";
  document.getElementById("share_card").style.display = "none";
});

// document.getElementById("delete_cards").addEventListener("click", () => {
//   localStorage.clear();
//   flashcards.innerHTML = '';
//   contentArray = [];
// });

getSource = (source) => {
  selectedIcon = source;
  // alert(selectedIcon);
  altAnimal = this.id;
}

var selectedIcon = "";
var altAnimal;

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("shadow").style.display = "block";
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("shadow").style.display = "none";
  document.getElementById("create_card").style.display = "none";
});

// document.getElementById("show_share").addEventListener("click", () => {
//   document.getElementById("shadow").style.display = "block";
//   document.getElementById("share_card").style.display = "block";
// });

flashcardMaker = (text, delThisIndex) => {
  const flashcardTile = document.createElement("div");
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const iconSelected = document.createElement('img');
  const del = document.createElement('p');
  const aLink = document.createElement('a');
  
  flashcardTile.classList.add('flashcardTile');
  flashcard.classList.add('flashcard');
  iconSelected.classList.add("selectedIcon");

  question.setAttribute("style", "padding: 15px; margin-top:20px; font-size:1.5em;");
  question.textContent = text.my_question;

  var getIcon = selectedIcon

  iconSelected.setAttribute("src", text.my_icon);
  iconSelected.setAttribute("alt", altAnimal);
  console.log(altAnimal);
  aLink.setAttribute("href", "newset_default.html");

  // answer.setAttribute("style", "padding: 15px; font-size:1.2em; font-weight: 300;");
  // answer.classList.add("answer_css");
  // answer.textContent = text.my_answer;

  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem('sets', JSON.stringify(contentArray));
    window.location.reload();
  })

  flashcard.appendChild(question);
  flashcard.appendChild(iconSelected);
  flashcard.appendChild(del);

  flashcardTile.appendChild(aLink);
  aLink.appendChild(flashcard);

  document.querySelector("#flashcards").appendChild(flashcardTile);
  var count = $("#flashcards").children().length;
  document.querySelector("#quantity_count").textContent = count + " sets";

}



contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  const question = document.querySelector("#question");
  const iconLocation = document.querySelector(".selectedIcon");
  // const icon = document.querySelector()
  // const answer = document.querySelector("#answer");

  let flashcard_info = {
    'my_question' : question.value,
    'my_icon' : selectedIcon
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('sets', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  // answer.value = "";

  // alert(selectedIcon);

  var count = $("#flashcards").children().length;
  document.querySelector("#quantity_count").textContent = count + " sets";
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

$("#bear").on("click", function(){
  $("#bear").addClass("keep_cover");
  $("#cat").removeClass("keep_cover");
  $("#chick").removeClass("keep_cover");
  $("#frog").removeClass("keep_cover");
  $("#husky").removeClass("keep_cover");
  $("#otter").removeClass("keep_cover");
});

$("#cat").on("click", function(){
  $("#cat").addClass("keep_cover");
  $("#bear").removeClass("keep_cover");
  $("#chick").removeClass("keep_cover");
  $("#frog").removeClass("keep_cover");
  $("#husky").removeClass("keep_cover");
  $("#otter").removeClass("keep_cover");
});

$("#chick").on("click", function(){
  $("#chick").addClass("keep_cover");
  $("#bear").removeClass("keep_cover");
  $("#cat").removeClass("keep_cover");
  $("#frog").removeClass("keep_cover");
  $("#husky").removeClass("keep_cover");
  $("#otter").removeClass("keep_cover");
});

$("#frog").on("click", function(){
  $("#frog").addClass("keep_cover");
  $("#bear").removeClass("keep_cover");
  $("#cat").removeClass("keep_cover");
  $("#chick").removeClass("keep_cover");
  $("#husky").removeClass("keep_cover");
  $("#otter").removeClass("keep_cover");
});

$("#husky").on("click", function(){
  $("#husky").addClass("keep_cover");
  $("#bear").removeClass("keep_cover");
  $("#cat").removeClass("keep_cover");
  $("#chick").removeClass("keep_cover");
  $("#frog").removeClass("keep_cover");
  $("#otter").removeClass("keep_cover");
});

$("#otter").on("click", function(){
  $("#otter").addClass("keep_cover");
  $("#bear").removeClass("keep_cover");
  $("#cat").removeClass("keep_cover");
  $("#chick").removeClass("keep_cover");
  $("#frog").removeClass("keep_cover");
  $("#husky").removeClass("keep_cover");
});

jQuery('.fa-minus').bind('click',function(e){
  e.preventDefault();
});
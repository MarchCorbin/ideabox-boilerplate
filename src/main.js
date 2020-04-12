var hamButton = document.querySelector(".ham-button");
var mainPage = document.querySelector(".ideas");
var menu = document.querySelector('.menu');
var leftSideText = document.querySelector('.left-side-text');
var leftSideBorder = document.querySelector('.left-side-border');
var hamHide = document.querySelector('.ham-hide');
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var saveButton = document.querySelector('.save-button')
var ideaCards = document.querySelector('.idea-cards')
var deleteButton = document.querySelector('.delete-button')
var idea = new Idea()

hamButton.addEventListener("click", toggleButton)
saveButton.addEventListener('click', function(){
  saveToIdeasArr()
  displayCards()
})
titleInput.addEventListener('input', checkInputs)
bodyInput.addEventListener('input', checkInputs)
ideaCards.addEventListener('click', function(event){

  // use this for edit functionality
  var card = event.target.parentNode.parentNode.parentNode
  var cardClass = event.target.classList
  deleteIdea(card, cardClass.value)
})

var savedIdeas = []
document.onload = checkInputs()

function deleteIdea(card, cardClass){
  for (var i = 0; i < savedIdeas.length; i++) {
    if(savedIdeas[i].id == card.id) {
      if(cardClass == 'delete-idea-img'){
        savedIdeas[i].deleteFromStorage()
        card.remove()
        savedIdeas.splice(i, 1)
      }
    }
  }
}
function toggleButton(){
  hamButton.classList.toggle('active')
  if (hamButton.classList.contains('active')){
    expandLeftSide()
  } else {
    retractLeftSide()
  }
}

function expandLeftSide() {
  mainPage.classList.add("purple-3");
  leftSideBorder.classList.add("left-side-border-expand");
  leftSideText.classList.add("left-side-text-expand");
  menu.classList.add("menu-expand");
  menu.classList.remove("menu");
  hamHide.src = "Assets/menu-close.svg";
}

function retractLeftSide(){
  mainPage.classList.remove("purple-3");
  leftSideBorder.classList.remove("left-side-border-expand");
  leftSideText.classList.remove("left-side-text-expand");
  menu.classList.remove("menu-expand");
  menu.classList.add("menu");
  hamHide.src = "Assets/menu.svg";
}



function checkInputs() {
  if(titleInput.value === '' || bodyInput.value === ''){
  saveButton.classList.add('disabled-button')
  saveButton.classList.remove('save-button')
  saveButton.disabled = true
} else if (titleInput.value !== '' || bodyInput.value !== ''){
  saveButton.classList.remove('disabled-button')
  saveButton.classList.add('save-button')
  saveButton.disabled = false
}
}

function saveToIdeasArr() {
  if(titleInput.value !== '' || bodyInput.value !== ''){
  var title = titleInput.value
  var body = bodyInput.value
  var fullCard = new Idea(title, body)
  savedIdeas.push(fullCard)
  fullCard.saveToStorage()
  titleInput.value = bodyInput.value = ''
  } else {
  checkInputs()
  }
}

function displayCards() {
var miniCards = document.querySelectorAll('.mini-card')
for (var i = 0; i < miniCards.length; i++) {
  miniCards[i].remove()
}
  for (var i = 0; i < savedIdeas.length; i++) {
    var newCard = savedIdeas[i]
    var theStuff = `
    <section class="mini-card" id=${newCard.id}>
      <section class="idea-card-top">
        <button type="button" name="star-active" class="star-active-button">
          <img src="Assets/star-active.svg" class="star-active-img"/>
        </button>
        <button type="button" name="delete" class="delete-button">
          <img src="Assets/delete.svg" class="delete-idea-img"/>
        </button>
      </section>

        <h4 class="idea-card-title">${newCard.title}</h4>
        <text class="idea-card-body">${newCard.body}</text>

      <section class="idea-card-bottom">
         <button type="button" name="comment" class="comment-button"><img src="Assets/comment.svg" class="comment-idea-img"/></button>
         <p class="comment-text">Comment</p>
      </section>
    </section>
  `
ideaCards.insertAdjacentHTML('afterbegin', theStuff)
  }
}

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
var ideasButton = document.querySelector('.ideas-btn')
var searchInput = document.querySelector('.search-input')
var idea = new Idea()

searchInput.addEventListener('keyup', search)
hamButton.addEventListener('click', toggleButton)
saveButton.addEventListener('click', function() {
  saveToIdeasArr()
  displayCards()
})
titleInput.addEventListener('input', checkInputs)
bodyInput.addEventListener('input', checkInputs)
ideasButton.addEventListener('click',function() {
  showStarredIdeas()
  toggleShowDisplayed()
})
ideaCards.addEventListener('click', function(event) {
  var card = event.target.parentNode.parentNode.parentNode
  var cardClass = event.target.classList
  deleteIdea(card, cardClass.value)
  starToggle(card, cardClass.value)
})

var savedIdeas = []
document.onload = retrieveFromStorage()
document.onload = checkInputs()

function search() {
  savedIdeas = []
  retrieveFromStorage()
  var casedSearch = searchInput.value.toLowerCase()
  var filteredSearch = savedIdeas.filter(function(idea) {
    return (idea.title.toLowerCase().includes(casedSearch)) || (idea.body.toLowerCase().includes(casedSearch))
  })
  savedIdeas = filteredSearch
  displayCards()
}

function deleteIdea(card, cardClass) {
  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].id == card.id) {
      if (cardClass == 'delete-idea-img') {
        savedIdeas[i].deleteFromStorage()
        card.remove()
        savedIdeas.splice(i, 1)
      }
    }
  }
}

function toggleButton() {
  hamButton.classList.toggle('active')
  if (hamButton.classList.contains('active')) {
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

function retractLeftSide() {
  mainPage.classList.remove("purple-3")
  leftSideBorder.classList.remove("left-side-border-expand")
  leftSideText.classList.remove("left-side-text-expand")
  menu.classList.remove("menu-expand")
  menu.classList.add("menu")
  hamHide.src = "Assets/menu.svg"
}

function checkInputs() {
  if (titleInput.value === '' || bodyInput.value === '') {
  saveButton.classList.add('disabled-button')
  saveButton.classList.remove('save-button')
  saveButton.disabled = true
  } else if (titleInput.value !== '' || bodyInput.value !== '') {
    saveButton.classList.remove('disabled-button')
    saveButton.classList.add('save-button')
    saveButton.disabled = false
  }
}

function saveToIdeasArr() {
  if (titleInput.value !== '' || bodyInput.value !== '') {
    var title = titleInput.value
    var body = bodyInput.value
    var star = false
    var fullCard = new Idea(title, body, star)
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
    var starImage
    if (newCard.star == true) {
      starImage = 'Assets/star-active.svg'
    } else {
      starImage = 'Assets/star.svg'
    }
    var cardHtml = `
      <section class="mini-card" id=${newCard.id}>
        <section class="idea-card-top">
          <button type="button" name="star" class="star-button">
            <img src=${starImage} class="star-img "/>
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
    ideaCards.insertAdjacentHTML('afterbegin', cardHtml)
  }
}

function starToggle() {
  if (event.target.classList.contains('star-img')) {
    event.target.classList.toggle('active')
    makeFavorite()
  }
}


function makeFavorite() {
  for(var i = 0; i < savedIdeas.length; i++) {
  var starId = event.target.parentNode.parentNode.parentNode.id
    if (starId == savedIdeas[i].id) {
      savedIdeas[i].updateStar()
    }
  }
}

function retrieveFromStorage() {
  for (var i = 0; i < localStorage.length; i++) {
    var retrievedIdea = localStorage.getItem(localStorage.key(i))
    var parsedIdea = JSON.parse(retrievedIdea)
    reinst(parsedIdea)
  }
}

function reinst(parsedIdea) {
  var reinstIdea = new Idea(parsedIdea.title, parsedIdea.body, parsedIdea.star, parsedIdea.id)
  savedIdeas.push(reinstIdea)
  displayCards()
}

function toggleShowDisplayed() {
  ideasButton.classList.toggle('active')
  if (ideasButton.classList.contains('active')) {
    ideasButton.innerText = 'Show All Ideas'
  } else {
    ideasButton.innerText = 'Show Starred Ideas'
    savedIdeas = []
    retrieveFromStorage()
  }
}

function showStarredIdeas() {
  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].star == false) {
      savedIdeas.splice(i,1)
      displayCards()
    }
  }
}

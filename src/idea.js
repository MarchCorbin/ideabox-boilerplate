class Idea {
  constructor(title, body){
    this.title = title
    this.body = body
    this.star = false
    this.id = Date.now()
  }

}

function saveToStorage() {
  if(titleInput.value !== '' || bodyInput.value !== ''){
  var title = titleInput.value
  var body = bodyInput.value
  var fullCard = new Idea(title, body)
  savedIdeas.push(fullCard)
  titleInput.value = bodyInput.value = ''
  } else {
  checkInputs()
  }
}
function displayCards(){
  for (var i = 0; i < savedIdeas.length; i++) {
var newCard = savedIdeas[i]
console.log(newCard.id)
var theStuff = `<section class="mini-card">
    <section class="idea-card-top">
      <button type="button" name="star-active" class="star-active-button"><img src="Assets/star-active.svg" class="star-active-img"/></button>
      <button type="button" name="delete" class="delete-button"><img src="Assets/delete.svg" class="delete-idea-img"/></button>
    </section>
    <section class="idea-card-text">
      <h4 class="idea-card-title">${newCard.title}</h4>
      <text class="idea-card-body">${newCard.body}</text>
    </section>
    <section class="idea-card-bottom">
       <button type="button" name="comment" class="comment-button"><img src="Assets/comment.svg" class="comment-idea-img"/></button>
       <p class="comment-text">Comment</p>
    </section>
  </section>`
ideaCards.insertAdjacentHTML('afterbegin', theStuff)

}
}

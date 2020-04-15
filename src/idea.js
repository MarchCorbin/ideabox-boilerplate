class Idea {
  constructor(title, body, star, id) {
    this.title = title
    this.body = body
    this.star = star
    this.id = id || Date.now()
  }


  saveToStorage() {
    var ideaToStore = {title: this.title, body: this.body, star: this.star, id: this.id}
    var stringifiedIdea = JSON.stringify(ideaToStore)
    localStorage.setItem(`storedIdea${this.id}`, stringifiedIdea)
  }

  deleteFromStorage(){
    localStorage.removeItem(`storedIdea${this.id}`)

  }

  updateStar() {
    if(event.target.classList.contains('active')){
      event.target.src = 'Assets/star-active.svg'
      this.star = true
      this.saveToStorage()
    } else if(!event.target.classList.contains('active')) {
    this.star = false
    event.target.src = 'Assets/star.svg'
    this.saveToStorage()
  }
  }

}

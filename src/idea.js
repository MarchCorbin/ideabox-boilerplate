class Idea {
  constructor(title, body) {
    this.title = title
    this.body = body
    this.star = false
    this.id = Date.now()
  }


  saveToStorage() {
    var ideaToStore = {title: this.title, body: this.body, id: this.id}
    var stringifiedIdea = JSON.stringify(ideaToStore)
    localStorage.setItem(`storedIdea${this.id}`, stringifiedIdea)
  }

  deleteFromStorage(){
    localStorage.removeItem(`storedIdea${this.id}`)  
  }


}

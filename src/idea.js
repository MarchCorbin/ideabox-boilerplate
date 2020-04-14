class Idea {
  constructor(title, body, id) {
    this.title = title
    this.body = body
    this.star = false
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
    this.star = true
    console.log(this)
    this.saveToStorage()
    
  }

}

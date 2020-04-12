class Idea {
  constructor(title, body) {
    this.title = title
    this.body = body
    //this.star = false
    this.id = Date.now()
    console.log(this, "Hello")
  }


  saveToStorage() {
    console.log(this, "Help")
    var ideaToStore = {title: this.title, body: this.body, id: this.id}
    var stringifiedIdea = JSON.stringify(ideaToStore)
    localStorage.setItem("storedIdea", stringifiedIdea)
  }


}



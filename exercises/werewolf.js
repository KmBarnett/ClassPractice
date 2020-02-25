class Werewolf {
  constructor(name, location) {
    this.name = name
    this.location = location
    this.human = true
    this.wolf = false
    this.hungry = false
  }
  change(){
    if (this.human == true) {
      this.human = false
      this.wolf = true
      this.hungry = true
    } else {
      this.human = true
      this.wolf = false
    }
  }
  eat(victim) {
    if (this.human == false){
      this.hungry = false
      victim.alive = false
      this.change()
    } else {
      return 'I don\'t eat humans in this form'
    }
  }
}


module.exports = Werewolf

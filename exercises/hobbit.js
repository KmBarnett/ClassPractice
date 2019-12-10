class Hobbit {
  constructor(name){
    this.name = name
    this.disposition = 'homebody'
    this.age = 0
    this.adult = false
    this.isShort = true
    this.old = false
    this.hasRing = this.checkForRing()
  }
  checkForRing(){
    if (this.name === 'Frodo') {
      return  true
    } else {
      return false
    }
  }
  celebrateBirthday(){
    this.age += 1
    if (this.age === 33){
      this.adult = true
    }
    if (this.age === 101){
      this.old = true
    }
  }
}
module.exports = Hobbit;

class Dragon {
  constructor(name, rider, color){
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.hunger = 1
  }

  eat(){
    if (this.hunger === 3) {
      this.hungry = false
      this.hunger = 1
    } else {
      this.hunger += 1
    }
  }
}
module.exports = Dragon;

class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.tired = 0;
  }

  gettingCranky() {
    this.tired += 1
    if (this.tired = 3) {
      this.cranky = true;
      this.tired = 0
    }
  }

  drinkPotion() {
    if (this.standing === true
        && this.cranky === true) {
      this.cranky = false
    } else if (this.cranky === false) {
      this.cranky = true
    } else {
      return 'Not while I\'m laying down!'
    }
  }

  shoot() {
    if (this.cranky == true || this.layingDown == true) {
      return 'NO!'
    } else {
      this.gettingCranky();
      return 'Twang!!!';
    }
  }

  run() {
    this.gettingCranky();
    if (this.layingDown == true) {
      this.gettingCranky();
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!';
    }

  }

  layDown() {
    this.standing = false;
    this.layingDown = true
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  sleep() {
    if (this.standing == true) {
      return 'NO!'
    } else {
      this.cranky = false
      return 'ZZZZ'
    }
  }
}

module.exports = Centaur

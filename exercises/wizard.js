class Wizard {
  constructor({name: name, bearded: beard =true, }){
    this.name = name
    this.bearded = beard
    this.isRested = true
    this.spellsCast = 0
  }

  incantation(string){
    return string.toUpperCase()
  }

  cast(){
    this.spellsCast += 1

    if (this.spellsCast < 3){
      return 'MAGIC BULLET'
    } else {
      this.isRested = false
      return 'I SHALL NOT CAST'
    }

  }


}

module.exports = Wizard

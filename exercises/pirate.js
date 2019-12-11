class Pirate {
   constructor(name,job){
     this.name = name
     this.job = job || 'Scallywag'
     this.cursed = false
     this.heinousActs = 0
     this.booty = 0
   }
   robShip() {
     this.booty +=100
     return 'YAARRR!'
   }
   commitHeinousAct() {
     this.heinousActs +=1
     if (this.heinousActs === 3){
       this.cursed = true
     }
   }
}
module.exports = Pirate

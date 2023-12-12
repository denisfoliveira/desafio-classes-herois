class heroInfo {
  constructor(nameHero, ageHero, classHero) {
    this.nameHero = nameHero
    this.ageHero = ageHero
    this.classHero = classHero
  }
  atacar(attack){
    if (this.classHero === "mage") {
      return attack = "magic"
    } else if (this.classHero === "warrior") {
       return attack = "sword"
    } else if (this.classHero === "monk") {
      return attack = "martial arts"
    } else if (this.classHero === "ninja") {
      return attack = "shuriken"
    }
  }
}

let nameHero = "Deninjazul"
let ageHero = "35"
let classHero = "warrior"

let hero = new heroInfo (nameHero, ageHero, classHero)

console.log(`the ${hero.classHero} attacked using ${hero.atacar()}`)
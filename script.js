class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre
        this.salud = salud
        this.velocidad = 3
        this.fuerza = 3
    }

    sayName = () => {
        console.log(this.nombre)
    }
    showStats = () => {
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud)
    }
    drinkSake = () => {
        this.salud += 10
    }
}

let brian = new Ninja("Brian", 100)
brian.sayName()
brian.showStats()
brian.drinkSake()
brian.showStats()
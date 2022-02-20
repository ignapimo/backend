class Mascota {
    constructor (nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.numero=numero;
    }
    resultado (planilla) {
        this.numero += planilla;
    }
}

let mascota1 = new Mascota ("Pepe ", "puddle", 12, 2)

mascota1.resultado(1)



console.log (mascota1.numero)

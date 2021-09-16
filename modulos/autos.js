function Auto (marca,modelo,precio,km,color,cuotas,anio,patente ,vendido) {
    this.marca = marca,
    this.modelo = modelo
    this.precio = precio,
    this.km = km,
    this.color= color,
    this.cuotas = cuotas,
    this.anio = anio,
    this.patente = patente,
    this.vendido = vendido
}

let auto1 = new Auto("Ford","Fiesta",150000,200,"Azul",12,2009,"APL123",false)
let autos=[]
autos.push(auto1)
let auto2= new Auto("Toyota","Corolla",100000,0,"Blanco",14,2019,"JJK116",false)
autos.push(auto2)
module.exports=autos
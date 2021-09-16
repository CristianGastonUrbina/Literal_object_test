const autos = require("./modulos/autos.js")

const concesionaria = {
    autos : autos,
    buscarAuto : function buscar (patenteABuscar) {
        autosBuscados = autos.find(elemento => elemento.patente == patenteABuscar);
        return (autosBuscados==undefined ?  null : autosBuscados)
    },
    venderAuto : function vender (patenteABuscar) {
        autosBuscados = [this.buscarAuto(patenteABuscar)];
        autosBuscados.forEach(elemento => elemento.vendido = true);
        return autosBuscados
    },
    autosParaLaVenta: function filtrarParaVender () {
        autosParaVender = this.autos.filter(elemento => elemento.vendido == false)
        return autosParaVender
    },
    autosNuevos: function filtrarAutosO () {
        autosParaVender0km = this.autosParaLaVenta()
        return autosParaVender0km.filter(elemento => elemento.km < 100)
    },
    autosVendidos: function filtrarVendidos () {
        autosParaVender = this.autos.filter(elemento => elemento.vendido == true)
        return autosParaVender
    },
    listaDeVentas :  function listaVenta() {
        autosParaVender = this.autosVendidos()
        precio = []
        ganancias = autosParaVender.forEach(elemento => precio.push(elemento.precio))
        return precio
    },
    totalDeVentas : function ganancias () {
        ventaPorAuto = this.listaDeVentas()
        return (ventaPorAuto == false ? 0 : ventaPorAuto.reduce((elemento,valor) => elemento + valor))  
    },
    puedeComprar : function compra(auto,persona) {
        autoAComprar = this.buscarAuto(auto.patente)

         return ((persona.capacidadDePagoEnCuotas > (autoAComprar.precio /autoAComprar.cuotas)) && (persona.capacidadDePagoTotal>autoAComprar.precio))
    },
    autosQuePuedeComprar : function compra_si(persona) {
        autosAComprar=this.autos.filter(elemento => this.puedeComprar(elemento,persona))
        return autosAComprar
    }
}
    


person = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 10000 ,
    capacidadDePagoTotal: 100000000}

console.log(concesionaria.autosQuePuedeComprar(person))
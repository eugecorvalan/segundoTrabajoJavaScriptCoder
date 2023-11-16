const carrito = []

const productos = [{imagen: '💅', codigo: 1, nombre: 'monomero', precio: 2000},
                 {imagen: '💅', codigo: 2, nombre: 'Gel', precio: 2500},
                 {imagen: '💅', codigo: 3, nombre: 'Moldes mariposas', precio: 500},
                 {imagen: '💅', codigo: 4, nombre: 'Esmaltes semi', precio: 5000},
                 {imagen: '💅', codigo: 5, nombre: 'Strass', precio: 1500},
                 {imagen: '💅', codigo: 6, nombre: 'Papel metalizado', precio: 2300},
                 {imagen: '💅', codigo: 7, nombre: 'Glitters', precio: 4000},
                 {imagen: '💅', codigo: 8, nombre: 'Florcitas secas', precio: 5000},
                 {imagen: '💅', codigo: 9, nombre: 'Dijes', precio: 200},
                 {imagen: '💅', codigo: 10, nombre: 'Peluchitos', precio: 100}]

const carritoAlt = [{imagen: '💅', codigo: 4, nombre: 'Esmaltes semi', precio: 5000},
                    {imagen: '💅', codigo: 5, nombre: 'Strass', precio: 1500},
                    {imagen: '💅', codigo: 6, nombre: 'Papel metalizado', precio: 2300},


]



function buscarProducto(codigo) {
    let productoSeleccionado = productos.find((producto)=> producto.codigo === codigo )
    return productoSeleccionado
}

function comprar() {
    let codigo = prompt("Ingresa el código del producto.\n(el cód. numérico del HTML)")
    let productoElegido = buscarProducto(parseInt(codigo))

    if (productoElegido !== undefined) {
        
        carrito.push(productoElegido)     
        alert(productoElegido.nombre + " fue añadido al carrito.")
        let respuesta = confirm("¿Deseas sumar otro producto?")
        if (respuesta === true) {
            comprar()                   // proceso de recursividad: llamar nuevamente a la misma función
        } else {                        // si caemos acá, vamos a finalizar la compra
            console.clear()             // limpia la consola JS de DevTools
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            console.log("🛍️ El total de tu compra es: $", subtotal, "\nMuchas gracias por confiar en SIEMPRE BELLAS.")
        }

    } else {
        alert("⛔️ Error en el código de prenda ingresado.\nRefresca para comenzar de nuevo.")
    }
}



function eliminarProdDelCarrito() {
    // carritoAlt

    console.clear()
    console.table(carritoAlt)

    let cod = prompt("Ingresa el cód de producto a quitar:")
    let indice = carritoAlt.findIndex((producto)=> producto.codigo === parseInt(cod))

    if (indice !== -1) {
        carritoAlt.splice(indice, 1)
        console.table(carritoAlt)
    }
}
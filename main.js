// ENTREGA 5: INSTANCIANDO OBJETOS
// Proyecto: Tienda de ropa y accesorios masculinos


// 1. DEFINO LA CLASE

class Producto {

    // El constructor recibe los datos necesarios para crear un producto
    constructor(nombre, precio, categoria, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;

    }

    // 2. MÉTODO PARA APLICAR UN DESCUENTO

    aplicarDescuento(porcentaje) {

        if (porcentaje > 0 && porcentaje <= 100) {

            this.precio = this.precio * (1 - porcentaje / 100);

            console.log(
                `Se aplicó un descuento del ${porcentaje}% a ${this.nombre}`
            );

        } else {

            console.log("El porcentaje de descuento no es válido.");

        }

    }

    // 3. MÉTODO PARA VENDER PRODUCTOS

    vender(cantidad) {

        if (cantidad > 0 && cantidad <= this.stock) {

            this.stock -= cantidad;

            console.log(
                `Venta realizada: ${cantidad} unidad(es) de ${this.nombre}`
            );

        } else {

            console.log(
                `No se pudo realizar la venta de ${this.nombre}. Stock disponible: ${this.stock}`
            );

        }

    }

    // 4. MÉTODO PARA MOSTRAR LA INFORMACIÓN DEL PRODUCTO

    mostrarInformacion() {

        console.log(
            `Producto: ${this.nombre} | ` +
            `Categoría: ${this.categoria} | ` +
            `Precio: $${this.precio.toFixed(2)} | ` +
            `Stock: ${this.stock} unidades`
        );

    }

}


// 5. INSTANCIACIÓN DE OBJETOS

// Creamos tres productos diferentes utilizando new

const reloj = new Producto("Reloj Tressa", 85000, "Relojes", 10);

const gafas = new Producto("Gafas de sol", 35000, "Accesorios", 15);

const remera = new Producto("Remera básica", 22000, "Indumentaria", 20);


// 6. CREÓ UN ARRAY CON LOS PRODUCTOS DE LA TIENDA

const productos = [reloj, gafas, remera];


// 7. MUESTRO EL CATÁLOGO INICIAL

console.log("===== CATÁLOGO INICIAL =====");

for (const producto of productos) {

    producto.mostrarInformacion();

}


// 8. LLAMo ALGUNOS OBJETOS

console.log("===== OPERACIONES DE LA TIENDA =====");

// Aplico descuento del 10% al reloj
reloj.aplicarDescuento(10);

// Vendo unidades de gafas
gafas.vender(2);

// Vendo remeras
remera.vender(3);


// 9. MUESTRO EL ESTADO FINAL DE LOS PRODUCTOS

console.log("===== CATÁLOGO ACTUALIZADO =====");

for (const producto of productos) {

    producto.mostrarInformacion();

}
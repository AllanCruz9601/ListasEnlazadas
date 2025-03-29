class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.enlace = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.primero = null;
    }

    insertar(dato) {
        let nuevoNodo = new Nodo(dato);
        nuevoNodo.enlace = this.primero;
        this.primero = nuevoNodo;
    }

    mostrar() {
        let actual = this.primero;
        let resultado = [];
        while (actual) {
            resultado.push(actual.dato);
            actual = actual.enlace;
        }
        console.log(resultado.join(" "));
    }

    invertir() {
        let anterior = null;
        let actual = this.primero;
        let siguiente = null;

        while (actual) {
            siguiente = actual.enlace;
            actual.enlace = anterior;
            anterior = actual;
            actual = siguiente;
        }

        this.primero = anterior;
    }

    eliminarDuplicados() {
        if (!this.primero) return;

        let valores = new Set();
        let actual = this.primero;
        let anterior = null;

        while (actual) {
            if (valores.has(actual.dato)) {
                anterior.enlace = actual.enlace; // Elimina duplicado
            } else {
                valores.add(actual.dato);
                anterior = actual;
            }
            actual = actual.enlace;
        }
    }

    obtenerDesdeElFinal(n) {
        if (!this.primero || n <= 0) return null;

        let principal = this.primero;
        let secundario = this.primero;

        for (let i = 0; i < n; i++) {
            if (!principal) return null; // Si n es mayor que la longitud de la lista
            principal = principal.enlace;
        }

        while (principal) {
            principal = principal.enlace;
            secundario = secundario.enlace;
        }

        return secundario ? secundario.dato : null;
    }
}

// Pruebas
let lista = new ListaEnlazada();
lista.insertar(3);
lista.insertar(2);
lista.insertar(1);
lista.insertar(3);
lista.insertar(1);

console.log("Lista original:");
lista.mostrar();

console.log("\nDespués de invertir:");
lista.invertir();
lista.mostrar();

console.log("\nDespués de eliminar duplicados:");
lista.eliminarDuplicados();
lista.mostrar();

console.log("\nObteniendo elementos desde el final:");
console.log("Elemento desde el final (posición 1):", lista.obtenerDesdeElFinal(1));
console.log("Elemento desde el final (posición 2):", lista.obtenerDesdeElFinal(2));
console.log("Elemento desde el final (posición 3):", lista.obtenerDesdeElFinal(3));
console.log("Elemento desde el final (posición 4):", lista.obtenerDesdeElFinal(4));

console.assert(lista.obtenerDesdeElFinal(1) === 1, "Error en obtenerDesdeElFinal(1)");
console.assert(lista.obtenerDesdeElFinal(2) === 2, "Error en obtenerDesdeElFinal(2)");
console.assert(lista.obtenerDesdeElFinal(3) === 3, "Error en obtenerDesdeElFinal(3)");
console.assert(lista.obtenerDesdeElFinal(4) === null, "Error en obtenerDesdeElFinal(4) (fuera de rango)");

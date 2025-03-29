# 📘 Tarea: Instalación y Pruebas con Listas Enlazadas en Node.js

## 🎯 Objetivo

Familiarizarse con el entorno de ejecución de Node.js y comprender la implementación y manipulación de listas enlazadas en JavaScript.

---

## 🛠️ Requisitos Previos

- Tener instalado Node.js
- Conocimientos básicos de JavaScript
- Editor de código (como VS Code)

---

## 📥 Instalación

1. Descargue e instale Node.js desde:  
https://nodejs.org

2. Verifique la instalación ejecutando los siguientes comandos en la terminal:

   ```bash
   node -v
   npm -v


Descripción del Proyecto
Este proyecto implementa una lista enlazada simple en JavaScript con operaciones básicas y avanzadas:

Funcionalidades principales:
Inserción de elementos

Eliminación de elementos

Búsqueda de elementos

Visualización de la lista

Funcionalidades adicionales:
invertir(): Invierte el orden de la lista.

eliminarDuplicados(): Elimina los elementos duplicados.

obtenerDesdeElFinal(n): Devuelve el n-ésimo elemento desde el final.

Incluye pruebas automatizadas con console.assert() para validar el correcto funcionamiento de los métodos.



const lista = new Lista();

lista.insertar(10);
lista.insertar(20);
lista.insertar(30);
lista.insertar(20); // Duplicado

console.log("Lista original:");
lista.imprimir();

lista.eliminarDuplicados();
console.log("Lista sin duplicados:");
lista.imprimir();

lista.invertir();
console.log("Lista invertida:");
lista.imprimir();

console.log("Elemento 2 desde el final:");
console.log(lista.obtenerDesdeElFinal(2));

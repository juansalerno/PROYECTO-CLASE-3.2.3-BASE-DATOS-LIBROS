"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var readlineSync = require("./node_modules/readline-sync");
var GestorLibrosPorTeclado = /** @class */ (function () {
    function GestorLibrosPorTeclado() {
        this.arregloLibros = this.generarArregloLibros();
    }
    GestorLibrosPorTeclado.prototype.pedidoDatos = function () {
        var nombre = readlineSync.question('Ingrese el nombre del libro: ');
        var año = readlineSync.questionInt('Ingrese el año del libro: ');
        var autor = readlineSync.question('Ingrese el autor del Libro: ');
        return new libro_1["default"](nombre, año, autor);
    };
    GestorLibrosPorTeclado.prototype.generarArregloLibros = function () {
        var arregloDeLibros = [];
        for (var i = 0; i < 3; i++) {
            arregloDeLibros.push(this.pedidoDatos());
        }
        return arregloDeLibros;
    };
    GestorLibrosPorTeclado.prototype.agregarLibroAlListado = function () {
        this.arregloLibros.push(this.pedidoDatos());
    };
    GestorLibrosPorTeclado.prototype.buscarLibroPorAutor = function (autor) {
        var contador = -1;
        for (var i = 0; i < this.arregloLibros.length; i++) {
            if (autor.toLowerCase() == this.arregloLibros[i].getAutorLibro().toLowerCase()) {
                contador++;
                return this.arregloLibros[i];
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada');
    };
    GestorLibrosPorTeclado.prototype.buscarLibroPorNombre = function (nombre) {
        var contador = -1;
        for (var i = 0; i < this.arregloLibros.length; i++) {
            if (nombre.toLowerCase() == this.arregloLibros[i].getNombreLibro().toLowerCase()) {
                contador++;
                return this.arregloLibros[i];
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada');
    };
    GestorLibrosPorTeclado.prototype.buscarLibrosPorAño = function (año) {
        var contador = -1;
        if (año > 1700 && año <= 2019) {
            for (var i = 0; i < this.arregloLibros.length; i++) {
                if (año == this.arregloLibros[i].getAñoEdicion()) {
                    contador++;
                    console.log(this.arregloLibros[i]);
                }
            }
            if (contador == -1)
                console.log('No se encontraron resultados a la busqueda solicitada');
        }
    };
    GestorLibrosPorTeclado.prototype.eliminarLibroPorNumeroDeLista = function (i) {
        if (i > 0 && i <= this.arregloLibros.length)
            this.arregloLibros.splice((i - 1), 1);
    };
    GestorLibrosPorTeclado.prototype.eliminarLibroPorNombre = function (nombre) {
        for (var i = 0; i < this.arregloLibros.length; i++) {
            if (nombre.toLowerCase() == this.arregloLibros[i].getNombreLibro().toLowerCase()) {
                this.arregloLibros.splice(i, 1);
            }
        }
    };
    GestorLibrosPorTeclado.prototype.reemplazarLibroEnFilaDelListado = function (fila, nombre, año, autor) {
        if (fila > 0 && fila <= this.arregloLibros.length) {
            var nuevoLibro = new libro_1["default"](nombre, año, autor);
            this.arregloLibros.splice((fila - 1), 1, nuevoLibro);
        }
    };
    GestorLibrosPorTeclado.prototype.imprimirLibros = function () {
        console.log(this);
    };
    return GestorLibrosPorTeclado;
}());
exports["default"] = GestorLibrosPorTeclado;
var listadoLibros = new GestorLibrosPorTeclado();
console.log(listadoLibros);
/*Probado con estos inputs:
Nombre libro 1: Recetas De Cocina
Año libro 1:    2010
Autor libro 1:  Gato Dumas
Nombre libro 2: Tutoriales de Guitarra
Año libro 2:    1998
Autor libro 2:  Tom Robinson
Nombre libro 3: Learning English
Año libro 3:    2010
Autor libro 3:  John Snow
---------------------------------------------------
inputs del agregado:
Nombre:         Actualidad Impositiva
Año:            2019
Autor:          Juan Perez

*/
listadoLibros.agregarLibroAlListado();
console.log(listadoLibros.buscarLibroPorAutor('Tom Robinson'));
console.log(listadoLibros.buscarLibroPorAutor('Mona Gimenez'));
console.log(listadoLibros.buscarLibroPorNombre('Recetas de cocina'));
console.log(listadoLibros.buscarLibroPorNombre('Vuelta al mundo'));
listadoLibros.buscarLibrosPorAño(2010);
listadoLibros.reemplazarLibroEnFilaDelListado(2, 'Introduccion al PNL', 1992, 'John Grinder');
listadoLibros.eliminarLibroPorNombre('recetas de cocina');
listadoLibros.eliminarLibroPorNumeroDeLista(3);
listadoLibros.buscarLibroPorNombre('Introduccion al PNL').actualizarStock();
listadoLibros.imprimirLibros();

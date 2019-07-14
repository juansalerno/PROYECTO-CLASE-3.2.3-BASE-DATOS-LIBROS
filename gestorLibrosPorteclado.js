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

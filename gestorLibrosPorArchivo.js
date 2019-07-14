"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var fs = require("fs");
var GestorLibrosPorArchivo = /** @class */ (function () {
    function GestorLibrosPorArchivo() {
        this.listadoLibros = this.generarArregloDeLibrosDesdeArchivo('./listado-libros.txt', '\r\n', ',');
    }
    GestorLibrosPorArchivo.prototype.generarArregloDeLibrosDesdeArchivo = function (rutaArchivo, separador1, separador2) {
        var arregloTexto = fs.readFileSync(rutaArchivo, 'utf8').split(separador1);
        var matriz = new Array(arregloTexto.length);
        var arrLibros = new Array(arregloTexto.length);
        for (var i = 0; i < arregloTexto.length; i++) {
            var x = arregloTexto[i].split(separador2);
            matriz[i] = new Array(x.length);
            for (var j = 0; j < x.length; j++) {
                matriz[i][j] = x[j];
            }
        }
        for (var k = 0; k < arregloTexto.length; k++) {
            arrLibros[k] = new libro_1["default"](matriz[k][0], parseInt(matriz[k][1]), matriz[k][2]);
        }
        return arrLibros;
    };
    GestorLibrosPorArchivo.prototype.agregarLibroAlListado = function (nombre, año, autor) {
        this.listadoLibros.push(new libro_1["default"](nombre, año, autor));
    };
    GestorLibrosPorArchivo.prototype.buscarLibroPorAutor = function (autor) {
        var contador = -1;
        for (var i = 0; i < this.listadoLibros.length; i++) {
            if (autor.toLowerCase() == this.listadoLibros[i].getAutorLibro().toLowerCase()) {
                contador++;
                return this.listadoLibros[i];
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada');
    };
    GestorLibrosPorArchivo.prototype.buscarLibroPorNombre = function (nombre) {
        var contador = -1;
        for (var i = 0; i < this.listadoLibros.length; i++) {
            if (nombre.toLowerCase() == this.listadoLibros[i].getNombreLibro().toLowerCase()) {
                contador++;
                return this.listadoLibros[i];
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada');
    };
    GestorLibrosPorArchivo.prototype.buscarLibrosPorAño = function (año) {
        var contador = -1;
        if (año > 1700 && año <= 2019) {
            for (var i = 0; i < this.listadoLibros.length; i++) {
                if (año == this.listadoLibros[i].getAñoEdicion()) {
                    contador++;
                    console.log(this.listadoLibros[i]);
                }
            }
            if (contador == -1)
                console.log('No se encontraron resultados a la busqueda solicitada');
        }
    };
    GestorLibrosPorArchivo.prototype.eliminarLibroPorNumeroDeLista = function (i) {
        if (i > 0 && i <= this.listadoLibros.length)
            this.listadoLibros.splice((i - 1), 1);
    };
    GestorLibrosPorArchivo.prototype.eliminarLibroPorNombre = function (nombre) {
        for (var i = 0; i < this.listadoLibros.length; i++) {
            if (nombre.toLowerCase() == this.listadoLibros[i].getNombreLibro().toLowerCase()) {
                this.listadoLibros.splice(i, 1);
            }
        }
    };
    GestorLibrosPorArchivo.prototype.reemplazarLibroEnFilaDelListado = function (fila, nombre, año, autor) {
        if (fila > 0 && fila <= this.listadoLibros.length) {
            var nuevoLibro = new libro_1["default"](nombre, año, autor);
            this.listadoLibros.splice((fila - 1), 1, nuevoLibro);
        }
    };
    GestorLibrosPorArchivo.prototype.imprimirLibros = function () {
        console.log(this);
    };
    return GestorLibrosPorArchivo;
}());
exports["default"] = GestorLibrosPorArchivo;

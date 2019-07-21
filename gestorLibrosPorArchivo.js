"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var fs = require("fs");
var GestorLibrosPorArchivo = /** @class */ (function () {
    function GestorLibrosPorArchivo() {
        this.listadoLibros = this.generarArregloDeLibrosDesdeArchivo('./listado-libros.txt', '\r\n', ',');
    }
    GestorLibrosPorArchivo.prototype.generarArregloDeLibrosDesdeArchivo = function (rutaArchivo, separador1, separador2) {
        var texto = fs.readFileSync(rutaArchivo, 'utf8');
        var arregloTexto = texto.split(separador1);
        var arregloLibros = [];
        for (var i = 0; i < arregloTexto.length; i++) {
            var linea = arregloTexto[i];
            var datosLinea = linea.split(separador2);
            arregloLibros.push(new libro_1["default"](datosLinea[0], parseInt(datosLinea[1]), datosLinea[2]));
        }
        return arregloLibros;
    };
    GestorLibrosPorArchivo.prototype.agregarLibroAlListado = function (nombre, año, autor) {
        this.listadoLibros.push(new libro_1["default"](nombre, año, autor));
    };
    GestorLibrosPorArchivo.prototype.buscarLibroPorAutor = function (autor) {
        for (var i = 0; i < this.listadoLibros.length; i++) {
            if (autor.toLowerCase() == this.listadoLibros[i].getAutorLibro().toLowerCase()) {
                return this.listadoLibros[i];
            }
        }
        console.log('No se encontraron resultados a la busqueda solicitada');
        return null;
    };
    GestorLibrosPorArchivo.prototype.buscarLibroPorNombre = function (nombre) {
        for (var i = 0; i < this.listadoLibros.length; i++) {
            if (nombre.toLowerCase() == this.listadoLibros[i].getNombreLibro().toLowerCase()) {
                return this.listadoLibros[i];
            }
        }
        console.log('No se encontraron resultados a la busqueda solicitada');
        return null;
    };
    GestorLibrosPorArchivo.prototype.imprimirLibrosPorAño = function (año) {
        var encontrado = false;
        if (año > 1700 && año <= 2019) {
            for (var i = 0; i < this.listadoLibros.length; i++) {
                if (año == this.listadoLibros[i].getAñoEdicion()) {
                    encontrado = true;
                    console.log(this.listadoLibros[i]);
                }
            }
            if (encontrado == false) {
                console.log('No se encontraron resultados a la busqueda solicitada');
            }
        }
        else
            console.log('El año ingresado debe ser mayor al 1700 e igual o menor al 2019');
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

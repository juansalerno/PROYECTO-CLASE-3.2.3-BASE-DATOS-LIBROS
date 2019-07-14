"use strict";
exports.__esModule = true;
var Libro = /** @class */ (function () {
    function Libro(nombre, añoEdicion, autor) {
        this.nombreLibro = nombre;
        this.añoEdicion = añoEdicion;
        this.autor = autor;
        this.enStock = true;
    }
    Libro.prototype.actualizarStock = function () {
        if (this.enStock)
            return this.enStock = false;
        else
            return this.enStock = true;
    };
    Libro.prototype.getNombreLibro = function () {
        return this.nombreLibro;
    };
    Libro.prototype.getAñoEdicion = function () {
        return this.añoEdicion;
    };
    Libro.prototype.getAutorLibro = function () {
        return this.autor;
    };
    Libro.prototype.getStockLibro = function () {
        return this.enStock;
    };
    return Libro;
}());
exports["default"] = Libro;

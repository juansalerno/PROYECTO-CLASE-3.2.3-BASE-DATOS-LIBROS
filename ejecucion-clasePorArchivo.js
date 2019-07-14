"use strict";
exports.__esModule = true;
var gestorLibrosPorArchivo_1 = require("./gestorLibrosPorArchivo");
var libros = new gestorLibrosPorArchivo_1["default"]();
//PRUEBAS:
console.log(libros);
console.log(libros.buscarLibroPorAutor('Juan perez').getAñoEdicion());
console.log(libros.buscarLibroPorAutor('patricia jaismid').actualizarStock());
console.log(libros.buscarLibroPorAutor('juan ferreyra'));
console.log(libros.buscarLibroPorNombre('la casa negra'));
console.log(libros.buscarLibroPorNombre('la casa de papel'));
libros.eliminarLibroPorNombre('el psicoanalista');
libros.eliminarLibroPorNumeroDeLista(2);
libros.reemplazarLibroEnFilaDelListado(1, 'Historia Argentina', 2018, 'Alperin Dongui');
libros.buscarLibrosPorAño(2018);
libros.imprimirLibros();

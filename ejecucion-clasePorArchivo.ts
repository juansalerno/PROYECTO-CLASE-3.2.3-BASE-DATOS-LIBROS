import Libro from './libro';
import GestorLibrosPorArchivo from './gestorLibrosPorArchivo';
import * as fs from 'fs';

let libros = new GestorLibrosPorArchivo();

//PRUEBAS:

console.log(libros);
console.log(libros.buscarLibroPorAutor('Juan perez').getAñoEdicion());
console.log(libros.buscarLibroPorAutor('patricia jaismid').actualizarStock());
console.log(libros.buscarLibroPorAutor('juan ferreyra'))
console.log(libros.buscarLibroPorNombre('la casa negra'));
console.log(libros.buscarLibroPorNombre('la casa de papel'));
libros.eliminarLibroPorNombre('el psicoanalista');
libros.eliminarLibroPorNumeroDeLista(2);
libros.reemplazarLibroEnFilaDelListado(1, 'Historia Argentina', 2018, 'Alperin Dongui');
libros.imprimirLibrosPorAño(2018);
libros.imprimirLibros();

import Libro from './libro';
import GestorLibrosPorTeclado from './gestorLibrosPorTeclado'; 
import * as readlineSync from './node_modules/readline-sync';

let listadoLibros: GestorLibrosPorTeclado = new GestorLibrosPorTeclado();

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
listadoLibros.imprimirLibrosPorAño(2010);
listadoLibros.reemplazarLibroEnFilaDelListado(2, 'Introduccion al PNL', 1992, 'John Grinder');
listadoLibros.eliminarLibroPorNombre('recetas de cocina');
listadoLibros.eliminarLibroPorNumeroDeLista(3);
listadoLibros.buscarLibroPorNombre('Introduccion al PNL').actualizarStock();

listadoLibros.imprimirLibros();
import Libro from './libro' 
import * as readlineSync from './node_modules/readline-sync';

export default class GestorLibrosPorTeclado {
    private arregloLibros: Libro[]

    public constructor() {
        this.arregloLibros = this.generarArregloLibros();
    }

    private pedidoDatos(): Libro {
        let nombre: string = readlineSync.question('Ingrese el nombre del libro: ');
        let año: number = readlineSync.questionInt('Ingrese el año del libro: ');
        let autor: string = readlineSync.question('Ingrese el autor del Libro: ');
        return new Libro(nombre, año, autor)
    }

    private generarArregloLibros(): Libro[] {
        let arregloDeLibros = [];
        for (let i = 0; i < 3; i++) {
            arregloDeLibros.push(this.pedidoDatos())
        }
        return arregloDeLibros
    }

    public agregarLibroAlListado(): void {
        this.arregloLibros.push(this.pedidoDatos())
    }


    public buscarLibroPorAutor(autor: string): Libro {
        let contador: number = -1;
        for (let i = 0; i < this.arregloLibros.length; i++) {
            if (autor.toLowerCase() == this.arregloLibros[i].getAutorLibro().toLowerCase()) {
                contador++
                return this.arregloLibros[i];
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada')
    }

    public buscarLibroPorNombre(nombre: string): Libro {
        let contador: number = -1
        for (let i = 0; i < this.arregloLibros.length; i++) {
            if (nombre.toLowerCase() == this.arregloLibros[i].getNombreLibro().toLowerCase()) {
                contador++
                return this.arregloLibros[i];
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada')
    }


    public buscarLibrosPorAño(año: number): void {
        let contador: number = -1
        if (año > 1700 && año <= 2019) {
            for (let i = 0; i < this.arregloLibros.length; i++) {
                if (año == this.arregloLibros[i].getAñoEdicion()) {
                    contador++
                    console.log(this.arregloLibros[i]);
                }
            }
            if (contador == -1)
                console.log('No se encontraron resultados a la busqueda solicitada')
        }
    }


    public eliminarLibroPorNumeroDeLista(i: number): void {
        if (i > 0 && i <= this.arregloLibros.length)
            this.arregloLibros.splice((i - 1), 1);
    }

    public eliminarLibroPorNombre(nombre: string){
        for(let i= 0; i<this.arregloLibros.length; i++) {
            if (nombre.toLowerCase() == this.arregloLibros[i].getNombreLibro().toLowerCase()){
                this.arregloLibros.splice(i, 1)
            }
        }
    }

    public reemplazarLibroEnFilaDelListado(fila: number, nombre: string, año: number, autor: string): void {
        if (fila > 0 && fila <= this.arregloLibros.length) {
            let nuevoLibro = new Libro(nombre, año, autor);
            this.arregloLibros.splice((fila - 1), 1, nuevoLibro);
        }
    }

    public imprimirLibros(): void {
        console.log(this);
    }

}

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
listadoLibros.buscarLibrosPorAño(2010);
listadoLibros.reemplazarLibroEnFilaDelListado(2, 'Introduccion al PNL', 1992, 'John Grinder');
listadoLibros.eliminarLibroPorNombre('recetas de cocina');
listadoLibros.eliminarLibroPorNumeroDeLista(3);
listadoLibros.buscarLibroPorNombre('Introduccion al PNL').actualizarStock();

listadoLibros.imprimirLibros();
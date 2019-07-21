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
        let encontrado: boolean = false;
        for (let i = 0; i < this.arregloLibros.length; i++) {
            if (autor.toLowerCase() == this.arregloLibros[i].getAutorLibro().toLowerCase()) {
                encontrado = true;
                return this.arregloLibros[i];
            }
        }
        if (encontrado == false) {
            console.log('No se encontraron resultados a la busqueda solicitada');
            return null;
        }
    }

    public buscarLibroPorNombre(nombre: string): Libro {
        let encontrado: boolean = false;
        for (let i = 0; i < this.arregloLibros.length; i++) {
            if (nombre.toLowerCase() == this.arregloLibros[i].getNombreLibro().toLowerCase()) {
                encontrado = true;
                return this.arregloLibros[i];
            }
        }
        if (encontrado == false) {
            console.log('No se encontraron resultados a la busqueda solicitada');
            return null;
        }
    }


    public imprimirLibrosPorAño(año: number): void {
        let encontrado: boolean = false;
        if (año > 1700 && año <= 2019) {
            for (let i = 0; i < this.arregloLibros.length; i++) {
                if (año == this.arregloLibros[i].getAñoEdicion()) {
                    encontrado = true;
                    console.log(this.arregloLibros[i]);
                }
            }
            if (encontrado == false) {
                console.log('No se encontraron resultados a la busqueda solicitada');
                return null;
            }
        }
        else console.log('El año ingresado debe ser mayor a al 1700 y menor o igual al 2019');
    }


    public eliminarLibroPorNumeroDeLista(i: number): void {
        if (i > 0 && i <= this.arregloLibros.length)
            this.arregloLibros.splice((i - 1), 1);
    }

    public eliminarLibroPorNombre(nombre: string) {
        for (let i = 0; i < this.arregloLibros.length; i++) {
            if (nombre.toLowerCase() == this.arregloLibros[i].getNombreLibro().toLowerCase()) {
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
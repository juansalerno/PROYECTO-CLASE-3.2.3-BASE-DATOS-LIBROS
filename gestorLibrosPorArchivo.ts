import Libro from './libro';
import * as fs from 'fs';

export default class GestorLibrosPorArchivo {
    private listadoLibros: Libro[]

    public constructor() {
        this.listadoLibros = this.generarArregloDeLibrosDesdeArchivo('./listado-libros.txt', '\r\n', ',');
    }

    private generarArregloDeLibrosDesdeArchivo(rutaArchivo, separador1, separador2): Libro[] {
        let arregloTexto: string[] = fs.readFileSync(rutaArchivo, 'utf8').split(separador1);
        let matriz: string[][] = new Array(arregloTexto.length);
        let arrLibros: Libro[] = new Array(arregloTexto.length);
        for (let i = 0; i < arregloTexto.length; i++) {
            let x = arregloTexto[i].split(separador2);
            matriz[i] = new Array(x.length);
            for (let j = 0; j < x.length; j++) {
                matriz[i][j] = x[j]
            }
        }

        for (let k = 0; k < arregloTexto.length; k++) {
            arrLibros[k] = new Libro(matriz[k][0], parseInt(matriz[k][1]), matriz[k][2]);
        }
        return arrLibros
    }

    public agregarLibroAlListado(nombre: string, año: number, autor: string): void {
        this.listadoLibros.push(new Libro(nombre, año, autor));
    }


    public buscarLibroPorAutor(autor: string): Libro {
        let contador: number = -1;
        for (let i = 0; i < this.listadoLibros.length; i++) {
            if (autor.toLowerCase() == this.listadoLibros[i].getAutorLibro().toLowerCase()) {
                contador++
                return this.listadoLibros[i]
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada')
    }

    public buscarLibroPorNombre(nombre: string): Libro {
        let contador: number = -1
        for (let i = 0; i < this.listadoLibros.length; i++) {
            if (nombre.toLowerCase() == this.listadoLibros[i].getNombreLibro().toLowerCase()) {
                contador++
                return this.listadoLibros[i]
            }
        }
        if (contador == -1)
            console.log('No se encontraron resultados a la busqueda solicitada')
    }


    public buscarLibrosPorAño(año: number): void {
        let contador: number = -1
        if (año > 1700 && año <= 2019) {
            for (let i = 0; i < this.listadoLibros.length; i++) {
                if (año == this.listadoLibros[i].getAñoEdicion()) {
                    contador++
                    console.log(this.listadoLibros[i])
                }
            }
            if (contador == -1)
                console.log('No se encontraron resultados a la busqueda solicitada')
        }
    }

    public eliminarLibroPorNumeroDeLista(i: number): void {
        if (i > 0 && i <= this.listadoLibros.length)
            this.listadoLibros.splice((i - 1), 1);
    }

    public eliminarLibroPorNombre(nombre: string) {
        for (let i = 0; i < this.listadoLibros.length; i++) {
            if (nombre.toLowerCase() == this.listadoLibros[i].getNombreLibro().toLowerCase()) {
                this.listadoLibros.splice(i, 1)
            }
        }
    }

    public reemplazarLibroEnFilaDelListado(fila: number, nombre: string, año: number, autor: string): void {
        if (fila > 0 && fila <= this.listadoLibros.length) {
            let nuevoLibro = new Libro(nombre, año, autor);
            this.listadoLibros.splice((fila - 1), 1, nuevoLibro);
        }
    }

    public imprimirLibros(): void {
        console.log(this);
    }

}



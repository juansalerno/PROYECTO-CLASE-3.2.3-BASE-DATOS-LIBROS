import Libro from './libro';
import * as fs from 'fs';

export default class GestorLibrosPorArchivo {
    private listadoLibros: Libro[]

    public constructor() {
        this.listadoLibros = this.generarArregloDeLibrosDesdeArchivo('./listado-libros.txt', '\r\n', ',');
    }

    private generarArregloDeLibrosDesdeArchivo(rutaArchivo, separador1, separador2): Libro[] {
        let texto: string = fs.readFileSync(rutaArchivo, 'utf8');
        let arregloTexto: string[] = texto.split(separador1);
        let arregloLibros: Libro[] = [];
        for (let i = 0; i < arregloTexto.length; i++) {
            let linea = arregloTexto[i];
            let datosLinea = linea.split(separador2);
            arregloLibros.push(new Libro(datosLinea[0], parseInt(datosLinea[1]), datosLinea[2]))

        }
        return arregloLibros
    }

    public agregarLibroAlListado(nombre: string, año: number, autor: string): void {
        this.listadoLibros.push(new Libro(nombre, año, autor));
    }


    public buscarLibroPorAutor(autor: string): Libro {
        for (let i = 0; i < this.listadoLibros.length; i++) {
            if (autor.toLowerCase() == this.listadoLibros[i].getAutorLibro().toLowerCase()) {
                return this.listadoLibros[i]
            }
        }
        console.log('No se encontraron resultados a la busqueda solicitada');
        return null;
    }

    public buscarLibroPorNombre(nombre: string): Libro {
        for (let i = 0; i < this.listadoLibros.length; i++) {
            if (nombre.toLowerCase() == this.listadoLibros[i].getNombreLibro().toLowerCase()) {
                return this.listadoLibros[i]
            }
        }
        console.log('No se encontraron resultados a la busqueda solicitada');
        return null;
    }

    public imprimirLibrosPorAño(año: number): void {
        let encontrado: boolean = false;
        if (año > 1700 && año <= 2019) {
            for (let i = 0; i < this.listadoLibros.length; i++) {
                if (año == this.listadoLibros[i].getAñoEdicion()) {
                    encontrado = true;
                    console.log(this.listadoLibros[i]);
                }
            }
            if (encontrado == false) {
                console.log('No se encontraron resultados a la busqueda solicitada');
            }
        }
        else console.log('El año ingresado debe ser mayor al 1700 e igual o menor al 2019');
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
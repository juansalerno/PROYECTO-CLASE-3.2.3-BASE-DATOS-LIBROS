
export default class Libro {
    private nombreLibro: string;
    private añoEdicion: number;
    private autor: string;
    private enStock: boolean;

    public constructor(nombre: string, añoEdicion: number, autor: string) {
        this.nombreLibro = nombre;
        this.añoEdicion = añoEdicion;
        this.autor = autor;
        this.enStock = true;
    }

    public actualizarStock(): boolean {
        if (this.enStock)
            return this.enStock = false;
        else 
            return this.enStock = true;
    }

    public getNombreLibro(): string {
        return this.nombreLibro;
    }

    public getAñoEdicion(): number {
        return this.añoEdicion;
    }

    public getAutorLibro(): string {
        return this.autor;
    }

    public getStockLibro(): boolean {
        return this.enStock;
    }

    

}

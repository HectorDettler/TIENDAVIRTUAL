export interface productos{
    id : number,
    name : string,
    categoria: string,
    descripcion: string,
    precio: number
    moneda: productoPrecios
}

export interface productoPrecios{
    cost:number,
    tax:number,
    precio:number

}
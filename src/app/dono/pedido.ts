export class Estoque{

    _id:string
    cliente:string
    pedido:string
    status:string


    constructor(_id:string,cliente:string,pedido:string,status:string){
        this._id = _id,
        this.cliente = cliente,
        this.pedido= pedido,
        this.status= status
    }

}
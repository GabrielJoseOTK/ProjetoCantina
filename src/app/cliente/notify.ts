export class notify{

    _id?:string
    pedido?:string
    idcliente?:string
    status?:string


    constructor(_id:string,pedido:string,status:string){
        this._id = _id,
        this.pedido = pedido,
        this.status= status
    }

}
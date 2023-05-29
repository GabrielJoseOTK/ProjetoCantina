export class pedido{

    _id?:string
    cliente?:string
    descricao?:string
    status?:string


    constructor(_id:string,cliente:string,descricao:string,status:string){
        this._id = _id,
        this.cliente = cliente,
        this.descricao= descricao,
        this.status= status
    }

}
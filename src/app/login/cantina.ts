export class cantina{

    _id?:string
    nome:string
    preco:string
    descricao:string
    quantidade?:number


    constructor(_id:string,nome:string,preco:string,descricao:string,quantidade:number){
        this._id = _id,
        this.nome = nome,
        this.preco= preco,
        this.quantidade= quantidade,
        this.descricao= descricao
    }

}
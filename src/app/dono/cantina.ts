export class cantina{

    _id?:string
    nome:string
    preco:string
    descricao:string


    constructor(_id:string,nome:string,preco:string,descricao:string){
        this._id = _id,
        this.nome = nome,
        this.preco= preco,
        this.descricao= descricao
    }

}
export class usuario{

    _id:string
    nome:string
    senha:string
    nivel:string
    login:string


    constructor(_id:string,nome:string,senha:string,nivel:string,login:string){
        this._id = _id,
        this.nome = nome,
        this.senha= senha,
        this.nivel= nivel,
        this.login = login

    }

}
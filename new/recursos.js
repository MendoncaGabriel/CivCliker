class Recurso {
    constructor({quantidade = 0, valor=1, raridade=0, descricao="objeto não identificado"}){
        quantidade=this.quantidade;
        valor=this.valor;
        raridade=this.raridade;
        descricao=this.descricao;
    }

    adicionar(quantidade){
        this.quantidade += quantidade
    }

    remover(quantidade){
        if(this.quantidade >= quantidade){
            this.quantidade -= quantidade
        }else{
            console.log('Quantidade de recurso insuficiente!')
        }
    }
}

module.exports = Recurso;

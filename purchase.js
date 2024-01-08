
import global from "./global.js";
import atualizar from "./update.js";

function addAldeao() {
    if (global.ouro.qtd >= global.aldeoes.custo) {
        global.aldeoes.qtd++;
        global.ouro.qtd -= global.aldeoes.custo;
        global.aldeoes.custo += ((global.aldeoes.custo /100)*10)
    }else{
        alert('Ouro insuficiente')
    }
    atualizar()
}
function addMinerador() {
    if (global.aldeoes.qtd >= 1) {
        global.aldeoes.qtd--;
        global.mineradores.qtd++;
    }else{
        alert('Sem aldeões')
    }
    atualizar()
}
function addLenhador() {
    if (global.aldeoes.qtd >= 1) {
        global.aldeoes.qtd--;
        global.lenhadores.qtd++;
    }else{
        alert('Sem aldeões')
    }
    atualizar()
}
function addFazendeiro() {
    if (global.aldeoes.qtd >= 1) {
        global.aldeoes.qtd--;
        global.fazendeiros.qtd++;
    }else{
        alert('Sem aldeões')
    }
    atualizar()
}

export  {addAldeao, addMinerador, addLenhador, addFazendeiro}
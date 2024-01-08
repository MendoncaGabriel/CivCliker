import global from "./global.js"
import atualizar from "./update.js"
import {indicadorPedra,indicadorMadeira,indicadorComida} from './variables.js'

function venderMadeira(){
    const qtd = 10
    if(global.recurso.madeira.qtd >= qtd){
        global.recurso.madeira.qtd -= qtd
        global.ouro.qtd += global.recurso.madeira.valor * qtd

        indicadorMadeira.style.backgroundColor = 'yellow'
        atualizar()
        setTimeout(() => {
            indicadorMadeira.style.backgroundColor = 'lightgrey'
        }, 400);
    }else{
        alert('Você não tem mais madeira pra vender!')
    }
}
function venderPedra(){
    const qtd = 10
    if(global.recurso.pedra.qtd >= qtd){
        global.recurso.pedra.qtd -= qtd
        global.ouro.qtd += global.recurso.pedra.valor * qtd


        indicadorPedra.style.backgroundColor = 'yellow'
        atualizar()
        setTimeout(() => {
            indicadorPedra.style.backgroundColor = 'lightgrey'
        }, 400);
        
    }else{
        alert('Você não tem mais pedra para vender!')
    }
}
function venderComida(){
    const qtd = 10
    if(global.recurso.comida.qtd >= qtd){
        global.recurso.comida.qtd -= qtd
        global.ouro.qtd += global.recurso.comida.valor * qtd


        indicadorComida.style.backgroundColor = 'yellow'
        atualizar()
        setTimeout(() => {
            indicadorComida.style.backgroundColor = 'lightgrey'
        }, 400);
        
    }else{
        alert('Você não tem mais comida para vender!')
    }
}

export {venderMadeira, venderPedra, venderComida}
import global from "./global.js"
import {pegarComida, pegarMadeira, pegarPedra, loopPegarComida, loopPegarMadeira, loopPegarPedra} from './worker.js'
import atualizar from "./update.js"

function upgrade(trabalhador){
    if(trabalhador == 'minerador'){
        if(global.ouro.qtd > global.mineradores.upgradeVel){
            global.ouro.qtd -= global.mineradores.upgradeVel
            global.mineradores.vel -= (global.mineradores.vel / 100) * 2 //2% mais rapido
            global.mineradores.upgradeVel += ((global.mineradores.upgradeVel/100)*10)  //10% mais caro
            clearInterval(loopPegarPedra)
            loopPegarPedra = setInterval(pegarPedra, global.mineradores.vel)
            
        }else{
            alert('Ouro insuficiente!')
        }
    }
    if(trabalhador == 'lenhador'){
        if(global.ouro.qtd > global.lenhadores.upgradeVel){
            global.ouro.qtd -= global.lenhadores.upgradeVel
            global.lenhadores.vel -= (global.lenhadores.vel / 100) * 2 //2% mais rapido
            global.lenhadores.upgradeVel += ((global.lenhadores.upgradeVel/100)*10) //10% mais caro
            clearInterval(loopPegarMadeira)
            loopPegarMadeira = setInterval(pegarMadeira, global.lenhadores.vel)
        }else{
            alert('Ouro insuficiente!')
        }
    }
    if(trabalhador == 'fazendeiro'){
        if(global.ouro.qtd > global.fazendeiros.upgradeVel){
            global.ouro.qtd -= global.fazendeiros.upgradeVel
            global.fazendeiros.vel -= (global.fazendeiros.vel / 100) * 2 //2% mais rapido
            console.log('Fazendeiros: ' + global.fazendeiros.vel)
            global.fazendeiros.upgradeVel += ((global.fazendeiros.upgradeVel/100)*10) //10% mais caro

            clearInterval(loopPegarComida)
            loopPegarComida = setInterval(pegarComida, global.fazendeiros.vel)
        }else{
            alert('Ouro insuficiente!')
        }
    }
    atualizar()
}

export default upgrade

import global from "./global.js"
import { atualizarLoop } from "./worker.js"
import atualizar from "./update.js"

function upgradeMinerador(){
    if(global.ouro.qtd > global.mineradores.upgradeVel){
        global.ouro.qtd -= global.mineradores.upgradeVel
        global.mineradores.vel -= (global.mineradores.vel / 100) * 2 //2% mais rapido
        global.mineradores.upgradeVel += ((global.mineradores.upgradeVel/100)*10)  //10% mais caro
        atualizarLoop()
    }else{
        alert('Ouro insuficiente!')
    }
}
function upgradeLenhador(){
    if(global.ouro.qtd > global.lenhadores.upgradeVel){
        global.ouro.qtd -= global.lenhadores.upgradeVel
        global.lenhadores.vel -= (global.lenhadores.vel / 100) * 2 //2% mais rapido
        global.lenhadores.upgradeVel += ((global.lenhadores.upgradeVel/100)*10) //10% mais caro
        atualizarLoop()
    }else{
        alert('Ouro insuficiente!')
    }
}
function upgradeFazendeiros(){
    if(global.ouro.qtd > global.fazendeiros.upgradeVel){
        global.ouro.qtd -= global.fazendeiros.upgradeVel
        global.fazendeiros.vel -= (global.fazendeiros.vel / 100) * 2 //2% mais rapido
        console.log('Fazendeiros: ' + global.fazendeiros.vel)
        global.fazendeiros.upgradeVel += ((global.fazendeiros.upgradeVel/100)*10) //10% mais caro

       
        atualizarLoop()
    }else{
        alert('Ouro insuficiente!')
    }
    
    atualizar()
}

export {upgradeMinerador, upgradeLenhador, upgradeFazendeiros}

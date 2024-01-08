import {ouro,aldeao,minerador,lenhador,fazendeiro,btnAldeao,vender100Madeiras,vender100Pedras,vender100Comidas,upgradeLenhadorVel,upgradeMineradorVel,upgradeFazendeiroVel} from './variables.js'
import global from './global.js'
export default function atualizar(){
    ouro.innerText = 'Ouro: ' + global.ouro.qtd.toFixed(0)
    aldeao.innerText = 'Aldeão: ' + global.aldeoes.qtd.toFixed(0)
    upgradeLenhadorVel.innerText = `Lenhador 2% mais rápido / Ouro: ${global.lenhadores.upgradeVel.toFixed(0)}`
    upgradeMineradorVel.innerText = `Minerador 2% mais rápido / Ouro: ${global.mineradores.upgradeVel.toFixed(0)}`
    upgradeFazendeiroVel.innerText = `Fazendeiro 2% mais rápido / Ouro: ${global.fazendeiros.upgradeVel.toFixed(0)}`
    

    if(global.mineradores.vel < 3000){
        minerador.innerText = 'Minerador: ' + global.mineradores.qtd + ' / V: ' + (global.mineradores.vel/1000).toFixed(2) + 's'
    }else{
        minerador.innerText = 'Minerador: ' + global.mineradores.qtd
    }

    if(global.lenhadores.vel < 2000){
        lenhador.innerText = 'Lenhador: ' + global.lenhadores.qtd + ' / V: ' + (global.lenhadores.vel/1000).toFixed(2) + 's'
    }else{
        lenhador.innerText = 'Lenhador: ' + global.lenhadores.qtd
    }

    if(global.fazendeiros.vel < 1000){
        fazendeiro.innerText = 'Fazendeiro: ' + global.fazendeiros.qtd + ' / V: ' + (global.fazendeiros.vel/1000).toFixed(2) + 's'
    }else{
        fazendeiro.innerText = 'Fazendeiro: ' + global.fazendeiros.qtd
    }


    btnAldeao.innerText = '+ Aldeão / Custo: ' + global.aldeoes.custo.toFixed(0)





    if(global.recurso.madeira.qtd >= 100){
        vender100Madeiras.style.display = 'block'
    }else{
        vender100Madeiras.style.display = 'none'
    }


    if(global.recurso.pedra.qtd >= 100){
        vender100Pedras.style.display = 'block'
    }else{
        vender100Pedras.style.display = 'none'
    }

    if(global.recurso.comida.qtd >= 100){
        vender100Comidas.style.display = 'block'
    }else{
        vender100Comidas.style.display = 'none'
    }



    if(global.ouro.qtd > global.lenhadores.upgradeVel){
        upgradeLenhadorVel.style.display = 'block'
    }else{
        upgradeLenhadorVel.style.display = 'none'
    }

    if(global.ouro.qtd > global.mineradores.upgradeVel){
        upgradeMineradorVel.style.display = 'block'
    }else{
        upgradeMineradorVel.style.display = 'none'
    }
    if(global.ouro.qtd > global.fazendeiros.upgradeVel){
        upgradeFazendeiroVel.style.display = 'block'
    }else{
        upgradeFazendeiroVel.style.display = 'none'
    }


}
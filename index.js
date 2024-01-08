const global = {
    aldeoes: {
        qtd: 0,
        custo: 10
    },

    //trabalhadores
    lenhadores: {
        qtd: 0,
        vel: 2000,
        upgradeVel: 300
    },
    fazendeiros: {
        qtd: 0,
        vel: 1000,
        upgradeVel: 200
    },
    mineradores: {
        qtd: 0,
        vel: 3000,
        upgradeVel: 400,
    },

    //recursos
    recurso:{
        pedra:{
            qtd: 0,
            valor: 1
        },
        madeira:{
            qtd: 0,
            valor: 1
        },
        comida:{
            qtd: 0,
            valor: 1
        }
    },
    ouro:{
        qtd: 70
    },


    
}

let indicadorPedra = document.getElementById('indicadorPedra')
let indicadorMadeira = document.getElementById('indicadorMadeira')
let indicadorComida = document.getElementById('indicadorComida')
let ouro = document.getElementById('ouro')
let aldeao = document.getElementById('aldeao')
let minerador = document.getElementById('minerador')
let lenhador = document.getElementById('lenhador')
let fazendeiro = document.getElementById('fazendeiro')
let btnAldeao = document.getElementById('btnAldeao')
let btnMinerador = document.getElementById('btnMinerador')
let btnLenhador = document.getElementById('btnLenhador')

let vender10Madeiras = document.getElementById('vender10Madeiras')
let vender100Madeiras = document.getElementById('vender100Madeiras')

let vender10Pedras = document.getElementById('vender10Pedras')
let vender100Pedras = document.getElementById('vender100Pedras')

let vender100Comidas = document.getElementById('vender100Comidas')
let vender10Comidas = document.getElementById('vender10Comidas')


let upgradeLenhadorVel = document.getElementById('upgradeLenhadorVel')
let upgradeMineradorVel = document.getElementById('upgradeMineradorVel')
let upgradeFazendeiroVel = document.getElementById('upgradeFazendeiroVel')




let loopPegarComida = setInterval(pegarComida, global.fazendeiros.vel)
let loopPegarMadeira = setInterval(pegarMadeira, global.lenhadores.vel)
let loopPegarPedra = setInterval(pegarPedra, global.mineradores.vel)

function atualizar(){
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




    if(global.recurso.madeira.qtd >= 10){
        vender10Madeiras.style.display = 'block'
    }else{
        vender10Madeiras.style.display = 'none'
    }
    if(global.recurso.madeira.qtd >= 100){
        vender100Madeiras.style.display = 'block'
    }else{
        vender100Madeiras.style.display = 'none'
    }

    if(global.recurso.pedra.qtd >= 10){
        vender10Pedras.style.display = 'block'
    }else{
        vender10Pedras.style.display = 'none'
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
    if(global.recurso.comida.qtd >= 10){
        vender10Comidas.style.display = 'block'
    }else{
        vender10Comidas.style.display = 'none'
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

//comprar----------------------------------------------------------------------------------------
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


//upgrades---------------------------
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



//vender------------------------------
function venderMadeira(qtd){
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
function venderPedra(qtd){
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
function venderComida(qtd){
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



//loop de trabalho-------------------------------------------------------------
let getPedra = false
function pegarPedra(){
    if(global.mineradores.qtd > 0){
        indicadorPedra.innerText = `Pedra: ${ global.recurso.pedra.qtd}`
        global.recurso.pedra.qtd += 1 * global.mineradores.qtd
        
        
        if(getPedra){
            getPedra = false
            indicadorPedra.style.backgroundColor = 'green'
            atualizar()
            
        }else{
            getPedra = true
            indicadorPedra.style.backgroundColor = 'lightgrey'
        }
  
    }
}

let getMadeira = false
function pegarMadeira(){
    if(global.lenhadores.qtd > 0){
        indicadorMadeira.innerText = `Madeira: ${ global.recurso.madeira.qtd}`
        global.recurso.madeira.qtd += 1 * global.lenhadores.qtd
        
        if(getMadeira){
            getMadeira = false
            indicadorMadeira.style.backgroundColor = 'green'
            atualizar()
        }else{
            getMadeira = true
            indicadorMadeira.style.backgroundColor = 'lightgrey'
        }

    }
}


let getComida = false
function pegarComida(){
    if(global.fazendeiros.qtd > 0){
        indicadorComida.innerText = `Comida: ${ global.recurso.comida.qtd}`
        global.recurso.comida.qtd += 1 * global.fazendeiros.qtd
        
        if(getComida){
            getComida = false
            indicadorComida.style.backgroundColor = 'green'
            atualizar()
        }else{
            getComida = true
            indicadorComida.style.backgroundColor = 'lightgrey'
        }

    }
}


atualizar()










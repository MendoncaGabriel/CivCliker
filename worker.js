let getPedra = false;
let getMadeira = false;
let getComida = false;
import global from './global.js';
import atualizar from './update.js';
import {indicadorPedra, indicadorComida, indicadorMadeira} from './variables.js'


export function pegarPedra() {
  if (global.mineradores.qtd > 0) {
    indicadorPedra.innerText = `Pedra: ${global.recurso.pedra.qtd}`;
    global.recurso.pedra.qtd += 1 * global.mineradores.qtd;

    if (getPedra) {
      getPedra = false;
      indicadorPedra.style.backgroundColor = "green";
      atualizar();
    } else {
      getPedra = true;
      indicadorPedra.style.backgroundColor = "lightgrey";
    }
  }
}

export function pegarMadeira() {
  if (global.lenhadores.qtd > 0) {
    indicadorMadeira.innerText = `Madeira: ${global.recurso.madeira.qtd}`;
    global.recurso.madeira.qtd += 1 * global.lenhadores.qtd;

    if (getMadeira) {
      getMadeira = false;
      indicadorMadeira.style.backgroundColor = "green";
      atualizar();
    } else {
      getMadeira = true;
      indicadorMadeira.style.backgroundColor = "lightgrey";
    }
  }
}


export function pegarComida() {
  if (global.fazendeiros.qtd > 0) {
    indicadorComida.innerText = `Comida: ${global.recurso.comida.qtd}`;
    global.recurso.comida.qtd += 1 * global.fazendeiros.qtd;

    if (getComida) {
      indicadorComida.style.backgroundColor = "green";
      atualizar();
      getComida = false;
    } else {
      indicadorComida.style.backgroundColor = "lightgrey";
      getComida = true;
    }
  }
}


let loopPegarComida = setInterval(pegarComida, global.fazendeiros.vel);
let loopPegarMadeira = setInterval(pegarMadeira, global.lenhadores.vel);
let loopPegarPedra = setInterval(pegarPedra, global.mineradores.vel);

export {loopPegarComida, loopPegarPedra, loopPegarMadeira}
 
import global from "./global.js";
import {pegarComida, pegarMadeira, pegarPedra} from './worker.js'

const indicadorPedra = document.getElementById("indicadorPedra");
const indicadorMadeira = document.getElementById("indicadorMadeira");
const indicadorComida = document.getElementById("indicadorComida");
const ouro = document.getElementById("ouro");
const aldeao = document.getElementById("aldeao");
const minerador = document.getElementById("minerador");
const lenhador = document.getElementById("lenhador");
const fazendeiro = document.getElementById("fazendeiro");
const btnAldeao = document.getElementById("btnAldeao");
const btnMinerador = document.getElementById("btnMinerador");
const btnLenhador = document.getElementById("btnLenhador");
const vender10Madeiras = document.getElementById("vender10Madeiras");
const vender100Madeiras = document.getElementById("vender100Madeiras");
const vender10Pedras = document.getElementById("vender10Pedras");
const vender100Pedras = document.getElementById("vender100Pedras");
const vender100Comidas = document.getElementById("vender100Comidas");
const vender10Comidas = document.getElementById("vender10Comidas");
const upgradeLenhadorVel = document.getElementById("upgradeLenhadorVel");
const upgradeMineradorVel = document.getElementById("upgradeMineradorVel");
const upgradeFazendeiroVel = document.getElementById("upgradeFazendeiroVel");



export {
  indicadorPedra,
  indicadorMadeira,
  indicadorComida,
  ouro,
  aldeao,
  minerador,
  lenhador,
  fazendeiro,
  btnAldeao,
  btnMinerador,
  btnLenhador,
  vender10Madeiras,
  vender100Madeiras,
  vender10Pedras,
  vender100Pedras,
  vender100Comidas,
  vender10Comidas,
  upgradeLenhadorVel,
  upgradeMineradorVel,
  upgradeFazendeiroVel,

};

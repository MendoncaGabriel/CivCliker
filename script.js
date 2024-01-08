import atualizar from "./update.js";
atualizar()


import {addAldeao,addLenhador,addFazendeiro,addMinerador} from './purchase.js'
import {venderComida, venderMadeira, venderPedra} from './sell.js'
import upgrade from "./upgrade.js";

function onClickUpgrade(){upgrade()}
window.upgrade = onClickUpgrade;

function onClickAddAldeao() {addAldeao()}
function onClickAddLenhador() {addLenhador()}
function onClickAddFazendeiro() {addFazendeiro()}
function onClickAddMinerador() {addMinerador()}
window.addAldeao = onClickAddAldeao;
window.addLenhador = onClickAddLenhador;
window.addFazendeiro = onClickAddFazendeiro;
window.addMinerador = onClickAddMinerador;


function onClickVenderComida(){venderComida(100)}
function onClickVenderMadeira(){venderMadeira()}
function onClickVenderPedra(){venderPedra()}
window.venderComida = onClickVenderComida;
window.venderMadeira = onClickVenderMadeira;
window.venderPedra = onClickVenderPedra;

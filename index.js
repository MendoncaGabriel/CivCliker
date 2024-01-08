import atualizar from "./update.js";
atualizar()


import {addAldeao,addLenhador,addFazendeiro,addMinerador} from './purchase.js'
import {venderComida, venderMadeira, venderPedra} from './sell.js'
import {upgradeFazendeiros, upgradeLenhador, upgradeMinerador} from "./upgrade.js";

function onClickUpgradeFazendeiros(){upgradeFazendeiros()}
function onClickUpgradeLenhador(){upgradeLenhador()}
function onClickUpgradeMinerador(){upgradeMinerador()}
window.upgradeFazendeiros = onClickUpgradeFazendeiros;
window.upgradeLenhador = onClickUpgradeLenhador;
window.upgradeMinerador = onClickUpgradeMinerador;

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

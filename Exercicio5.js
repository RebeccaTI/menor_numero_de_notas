var dinheiro = prompt("Digite um valor R$");
var dinheiro_calcula = parseInt(dinheiro);
var cem = 0;
var cinquenta = 0;
var dez = 0;
var cinco = 0;
var um = 0;

cem = dinheiro_calcula / 100; //ele so divide numero inteiro pois é parseint
dinheiro_calcula = dinheiro_calcula % 100; //caso a pessoa coloque um numero que de quebrado, ele cai na %. que ira pegar o resto e jogar no dinheiro_calcula

cinquenta = dinheiro_calcula / 50;
dinheiro_calcula = dinheiro_calcula % 50;

dez = dinheiro_calcula / 10;
dinheiro_calcula = dinheiro_calcula % 10;

cinco = dinheiro_calcula / 5;
dinheiro_calcula = dinheiro_calcula % 5;

um = dinheiro_calcula / 1;
dinheiro_calcula = dinheiro_calcula % 1;

var cem_inteiro = parseInt(cem);
var cinquenta_inteiro = parseInt(cinquenta);
var dez_inteiro = parseInt(dez);
var cinco_inteiro = parseInt(cinco);
var um_inteiro = parseInt(um);

console.log(cem_inteiro);
console.log(cinquenta_inteiro);
console.log(dez_inteiro);
console.log(um_inteiro);
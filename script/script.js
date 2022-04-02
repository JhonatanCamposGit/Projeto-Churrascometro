// Carne - 400 gr por pessoa + de 6 horas - 650 gr
// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml 

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let refrigerante = refrigerantePP(duracao);

    let qtdTotalCarne = carne * adultos + (carne/2 * criancas)
    let qtdTotalCerveja = cerveja * adultos
    let qtdTotalRefrigerante = refrigerante * adultos + (refrigerante/2 * criancas)

    resultado.innerHTML = `<p>${Math.ceil(qtdTotalCarne / 1000)} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de cerveja (350 ml)</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefrigerante / 2000)} Garrafas de Refrigerante (2L)</p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >=6 ){
        return 2000
    }else{
        return 1200
    }
}

function refrigerantePP(duracao){
    if (duracao >=6){
        return 1500
    }else{
        return 1000
    }
}
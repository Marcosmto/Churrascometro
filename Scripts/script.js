// Regras de cálculo:
// Carne ........ 400g por adulto (650g se >= 6h) | crianças = metade
// Cerveja ...... 1200ml por adulto (2000ml se >= 6h) | só adultos
// Bebidas ...... 1000ml por adulto (1500ml se >= 6h) | crianças = metade

const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");
const resultado = document.getElementById("resultado");

function carnePP(duracao) {
    return duracao >= 6 ? 650 : 400;
}

function cervejaPP(duracao) {
    return duracao >= 6 ? 2000 : 1200;
}

function bebidasPP(duracao) {
    return duracao >= 6 ? 1500 : 1000;
}

function calcular() {
    const adultos = Number(inputAdultos.value);
    const criancas = Number(inputCriancas.value) || 0;
    const duracao = Number(inputDuracao.value);

    if (!adultos || adultos < 0 || !duracao || duracao < 1) {
        resultado.innerHTML = `<p class="erro">Preencha Adultos e Duração corretamente.</p>`;
        return;
    }

    const totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    const totalCerveja = cervejaPP(duracao) * adultos;
    const totalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

    const kgCarne = (totalCarne / 1000).toFixed(1);
    const latasCerveja = Math.ceil(totalCerveja / 355);
    const petsBebida = Math.ceil(totalBebidas / 2000);

    resultado.innerHTML = `
        <p><strong>${kgCarne} kg</strong> de carne</p>
        <p><strong>${latasCerveja}</strong> latas de cerveja (355ml)</p>
        <p><strong>${petsBebida}</strong> garrafas de 2L de bebidas</p>
    `;
}

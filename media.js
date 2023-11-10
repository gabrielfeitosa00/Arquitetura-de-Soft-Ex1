
import { createMean } from "./firebase/meanCrud.js";


const n = document.querySelector("#nome");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const botao = document.getElementById("b1");
const med = document.getElementById("me");
const r = document.getElementById("resp");
const bot2 = document.getElementById("b2")
const bot3 = document.getElementById("b3")
let mediaFinal

bot2.addEventListener('click', limpar);
function limpar() {
    nome.value = "";
    n1.value = "";
    n2.value = "";
    n3.value = "";
    med.value = "";
    r.innerHTML = (`Campos limpos com sucesso!`);

    bot3.disabled = true
}


botao.addEventListener('click', () => {
    let n = nome.value;
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let num3 = Number(n3.value);
    let m = Number(med.value);
    let mf = (num1 + num2 * 2 + num3 * 3 + m) / 7;

    r.innerHTML = `${n} suas notas são: <br>
        Nota 1: ${num1} <br>
        Nota 2: ${num2} <br>
        Nota 3: ${num3}<br>
        Média de Exercícios: ${m}<br>
        
        Média final: ${mf.toFixed(2)}`
    bot3.disabled = false
    mediaFinal = mf
})

bot3.addEventListener('click', () => {
    try {
        createMean({ aluno: nome.value, media: mediaFinal })
        bot3.disabled = true
        limpar()
    } catch (error) {
        throw error
    }

})
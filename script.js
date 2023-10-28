const btnCriarJogo = document.getElementById("btnCriarJogo")
const btnEnviarPalpite = document.getElementById("btnEnviarPalpite")
const entrada = document.getElementById("entrada")
const numAleatorio = Math.floor(Math.random() * 100) + 1
let maxTentativa = 0

btnCriarJogo.addEventListener("click", function verificaPalpite() {
    let dificuldadeD = document.getElementsByName("dificuldade")

    if (dificuldadeD[0].checked) {
        alert("Modo fácil")
        alert("Chute um número!")
        maxTentativa = 10

    } else if (dificuldadeD[1].checked) {
        maxTentativa = 7
        alert("Modo médio")
        alert("Chute um número!")

    } else {
        maxTentativa = 5
        alert("Modo díficil")
        alert("Chute um número!")
    }
})

btnEnviarPalpite.addEventListener("click", function () {
    if (entrada.value == numAleatorio) {
        alert("Parabéns você ganhou!")
        novoJogo()
    } else if (entrada.value < numAleatorio) {
        alert("Chute um valor maior!")
        maxTentativa = maxTentativa- 1
        if (maxTentativa == 0) {
            alert("Perdeu!")
            novoJogo()
        }
    } else {
        alert("Chute um valor menor")
        maxTentativa = maxTentativa- 1
        if (maxTentativa == 0) {
            alert("Perdeu!")
            novoJogo()
        }
    }
})

function novoJogo() {
    maxTentativa = 0
    const numAleatorio = Math.floor(Math.random() * 100) + 1
}
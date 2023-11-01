const btnCriarJogo = document.getElementById("btnCriarJogo")
const btnEnviarPalpite = document.getElementById("btnEnviarPalpite")
const entrada = document.getElementById("entrada")
const palpites = document.getElementById("palpites")
const numAleatorio = Math.floor(Math.random() * 100) + 1 // Gera um número aleátorio de 0 a 100

btnCriarJogo.addEventListener("click", function verificaPalpite() { // Escolha da dificuldade    
let dificuldadeD = document.getElementsByName("dificuldade")

    if (dificuldadeD[0].checked) {
        alert("Modo fácil")
        alert("Chute um número!")
        maxTentativa = 9

    } else if (dificuldadeD[1].checked) {
        maxTentativa = 6
        alert("Modo médio")
        alert("Chute um número!")

    } else if (dificuldadeD[2].checked){
        maxTentativa = 4
        alert("Modo díficil")
        alert("Chute um número!")
    } else {
        alert("Escolha um modo de jogo")
        window.location.reload() // reinicia a página
    }
})


btnEnviarPalpite.addEventListener("click", function () {
    if (maxTentativa == 0) {
        alert("Perdeu")
        novoJogo()
        window.location.reload() // reinicia a página
    } else if (maxTentativa == 1){
        alert("ÚLTIMA TENTATIVA!")
        maxTentativa--
    } else {
        if (entrada.value == numAleatorio) {
            alert("Parabéns você ganhou!")
            novoJogo()
            window.location.reload() // reinicia a página
        } else if (entrada.value < numAleatorio) {
            alert("Chute um valor maior!")
            maxTentativa--
        } else {
            alert("Chute um valor menor")
            maxTentativa--
        }
    }

    palpitesLista = []
    palpitesLista.push(entrada.value)
    palpites.innerHTML += palpitesLista + " "


})

function novoJogo() {
    maxTentativa = 0
    const numAleatorio = Math.floor(Math.random() * 100) + 1
}
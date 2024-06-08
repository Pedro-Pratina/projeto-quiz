import { trocaTema, verificarTema } from "./helpers/tema-helpers.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocaTema(body, botaoTema)
})

verificarTema(body, botaoTema)

const botoesAssunto = document.querySelectorAll(".assuntos button")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const classeBotao = evento.target.className
    const assunto = document.querySelector(`.${classeBotao} span`).innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}

function resetQuizSave() {
    localStorage.removeItem("assunto")
    localStorage.removeItem("pontos")
    console.log("removido")
}

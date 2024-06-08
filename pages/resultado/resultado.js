import { trocaTema, verificarTema } from "../../helpers/tema-helpers.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector(".pontuacao button")

botaoTema.addEventListener("click", () => {
    trocaTema(body, botaoTema)
})

verificarTema(body, botaoTema)

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLocaleLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `ícone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()

function inserirResultado() {
    const sectionPontuação = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuação.innerHTML = `
        ${divAssunto.outerHTML}

        <strong>${pontos}</strong>

        <p>de 10</p>
    `
}

function voltar() {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")
    window.location.href = "../../index.html"
}

inserirResultado()
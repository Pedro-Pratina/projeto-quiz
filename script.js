import { trocaTema, verificarTema } from "./helpers/tema-helpers.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocaTema(body, botaoTema)
})

<<<<<<< HEAD
verificarTema(body, botaoTema)
=======
    if (tema === "claro") {
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
    } else {
        body.classList.remove("escuro")
        localStorage.setItem("tema", "claro")
    }
}

function verificarTema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") {
        body.classList.add("escuro")
    }
}

verificarTema(body)
>>>>>>> d619cf0d1ba1f65e57fbe0fa9a7814dcb47dd0c5

const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu .nav-link");
const secoes = document.querySelectorAll("main section[id]");
const botaoTema = document.getElementById("botaoTema");
const html = document.documentElement;
let abaAnterior = null;

function atualizarAbaAtiva() {
    let secaoAtual = "Inicio";
    const posicao = window.scrollY + 150;

    secoes.forEach((secao) => {
        if (posicao >= secao.offsetTop) {
            secaoAtual = secao.id;
        }
    });

    linksMenu.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${secaoAtual}`);
    });

    // Em telas pequenas o menu rola na horizontal: mantém a aba ativa visível
    const abaAtiva = menu.querySelector(".nav-link.active");

    if (abaAtiva && abaAtiva !== abaAnterior) {
        abaAnterior = abaAtiva;
        const deslocamento = abaAtiva.getBoundingClientRect().left - menu.getBoundingClientRect().left + menu.scrollLeft;
        menu.scrollTo({
            left: deslocamento - (menu.clientWidth - abaAtiva.offsetWidth) / 2,
            behavior: "smooth"
        });
    }
}

function alternarTema() {
    const temaAtual = html.getAttribute("data-tema");
    const novoTema = temaAtual === "escuro" ? "claro" : "escuro";

    html.classList.add("trocando-tema");
    html.setAttribute("data-tema", novoTema);
    localStorage.setItem("tema", novoTema);
    atualizarIconeTema(novoTema);

    setTimeout(() => {
        html.classList.remove("trocando-tema");
    }, 500);
}

function atualizarIconeTema(tema) {
    const icone = botaoTema.querySelector("i");

    if (tema === "claro") {
        icone.className = "bi bi-moon-fill";
        botaoTema.setAttribute("aria-label", "Ativar tema escuro");
    } else {
        icone.className = "bi bi-sun-fill";
        botaoTema.setAttribute("aria-label", "Ativar tema claro");
    }
}

function carregarTema() {
    const temaSalvo = localStorage.getItem("tema") || "escuro";

    html.setAttribute("data-tema", temaSalvo);
    atualizarIconeTema(temaSalvo);
}

window.addEventListener("scroll", atualizarAbaAtiva);
window.addEventListener("load", atualizarAbaAtiva);
botaoTema.addEventListener("click", alternarTema);

carregarTema();
 
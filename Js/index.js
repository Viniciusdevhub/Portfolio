const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu .nav-link");
const secoes = document.querySelectorAll("main section[id]");
const botaoTema = document.getElementById("botaoTema");
const html = document.documentElement;

// ===== Aba ativa do menu =====
// As posições das seções são medidas só ao carregar e ao redimensionar,
// e não a cada movimento da rolagem (isso era o que deixava a página pesada).
let posicoesSecoes = [];
let secaoAnterior = null;
let atualizacaoAgendada = false;

function medirSecoes() {
    posicoesSecoes = Array.from(secoes, (secao) => ({
        id: secao.id,
        topo: secao.offsetTop
    }));
}

function atualizarAbaAtiva() {
    const posicao = window.scrollY + 150;
    let secaoAtual = "Inicio";

    posicoesSecoes.forEach((secao) => {
        if (posicao >= secao.topo) {
            secaoAtual = secao.id;
        }
    });

    // Se a seção não mudou, não há nada para atualizar
    if (secaoAtual === secaoAnterior) return;
    secaoAnterior = secaoAtual;

    linksMenu.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${secaoAtual}`);
    });

    // Em telas pequenas o menu rola na horizontal: mantém a aba ativa visível
    const abaAtiva = menu.querySelector(".nav-link.active");

    if (abaAtiva && menu.scrollWidth > menu.clientWidth) {
        const deslocamento = abaAtiva.offsetLeft - (menu.clientWidth - abaAtiva.offsetWidth) / 2;
        menu.scrollTo({ left: deslocamento, behavior: "smooth" });
    }
}

// Junta vários eventos de rolagem em uma única atualização por quadro de tela
function aoRolar() {
    if (atualizacaoAgendada) return;
    atualizacaoAgendada = true;

    requestAnimationFrame(() => {
        atualizarAbaAtiva();
        atualizacaoAgendada = false;
    });
}

function aoRedimensionar() {
    medirSecoes();
    secaoAnterior = null;
    atualizarAbaAtiva();
}

// ===== Tema claro / escuro =====
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

// ===== Certificados =====
const janelaCertificado = document.getElementById("janelaCertificado");
const imagemCertificado = document.getElementById("imagemCertificado");
const tituloCertificado = document.getElementById("tituloCertificado");
const abrirCertificadoLink = document.getElementById("abrirCertificado");
const baixarCertificado = document.getElementById("baixarCertificado");
const fecharCertificado = document.getElementById("fecharCertificado");
const botoesCertificado = document.querySelectorAll(".botao-certificado[data-imagem]");

function abrirCertificado(botao) {
    const arquivo = botao.dataset.certificado;
    const titulo = botao.dataset.titulo;

    // Mostra só o certificado (versão vetorial, nítida em qualquer zoom);
    // os botões abrem e baixam o PDF original
    imagemCertificado.src = botao.dataset.imagem;
    imagemCertificado.alt = `Certificado do curso ${titulo}`;
    tituloCertificado.textContent = titulo;
    // Os botões de PDF só aparecem quando o certificado tem PDF
    abrirCertificadoLink.hidden = !arquivo;
    baixarCertificado.hidden = !arquivo;
    if (arquivo) {
        abrirCertificadoLink.href = arquivo;
        baixarCertificado.href = arquivo;
    }

    html.classList.add("janela-aberta");
    janelaCertificado.showModal();
}

botoesCertificado.forEach((botao) => {
    botao.addEventListener("click", () => abrirCertificado(botao));
});

fecharCertificado.addEventListener("click", () => janelaCertificado.close());

// Clicar no fundo escuro, fora da janela, também fecha
janelaCertificado.addEventListener("click", (evento) => {
    const area = janelaCertificado.getBoundingClientRect();
    const clicouFora = evento.clientX < area.left || evento.clientX > area.right ||
                       evento.clientY < area.top || evento.clientY > area.bottom;

    if (clicouFora) {
        janelaCertificado.close();
    }
});

// Ao fechar, a página volta a rolar normalmente
janelaCertificado.addEventListener("close", () => {
    html.classList.remove("janela-aberta");
});

// ===== Eventos =====
window.addEventListener("scroll", aoRolar, { passive: true });
window.addEventListener("resize", aoRedimensionar);
window.addEventListener("load", aoRedimensionar);
botaoTema.addEventListener("click", alternarTema);

carregarTema();
medirSecoes();
atualizarAbaAtiva();

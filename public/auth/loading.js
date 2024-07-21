// CARREGAMENTO DA PAGINA

function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");

    const nav = document.createElement("nav");
    nav.classList.add("c-loader");

    div.appendChild(nav);
    document.body.appendChild(div);
}

// ESCONDE O CARREGAMENTO DA PAGINA

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}


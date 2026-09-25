document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const isProductPage = /\/prodotti\/[^/]+\.html$/i.test(window.location.pathname);
    const pagePrefix = isProductPage ? '../' : '';

    header.innerHTML = `
        <div class="container header-flex">
            <a href="${pagePrefix}index.html" class="site-brand" aria-label="Righi Germano, home">
                <img src="${pagePrefix}loghi/Righi-02_cropped-_cropped_-_pdfresizer.com_.svg" alt="" class="brand-mark">
                <span class="brand-copy">
                    <span class="brand-name">Righi Germano s.n.c.</span>
                    <span class="subtitle">di Righi Massimo e Giorgio</span>
                </span>
            </a>
            <a href="${pagePrefix}contatti.html" class="header-cta">Parliamo del tuo progetto</a>
        </div>
    `;

    const navHTML = `
    <nav class="site-nav">
        <div class="container">
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
                <span>Menu</span>
                <span class="menu-toggle-icon" aria-hidden="true">&#9776;</span>
            </button>
            <ul id="site-menu">
                <li><a href="${pagePrefix}index.html">Home</a></li>
                <li><a href="${pagePrefix}storia.html">La Nostra Storia</a></li>
                <li><a href="${pagePrefix}ciclo-produttivo.html">Il Ciclo Produttivo</a></li>
                <li><a href="${pagePrefix}prodotti/catalogo.html">Prodotti</a></li>
                <li><a href="${pagePrefix}contatti.html">Contattaci</a></li>
            </ul>
        </div>
    </nav>
    `;

    if (!header.nextElementSibling || !header.nextElementSibling.classList.contains('site-nav')) {
        header.insertAdjacentHTML('afterend', navHTML);

        const menuToggle = document.querySelector('.menu-toggle');
        const siteMenu = document.querySelector('#site-menu');

        if (menuToggle && siteMenu) {
            menuToggle.addEventListener('click', function() {
                const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', String(!isOpen));
                siteMenu.classList.toggle('is-open', !isOpen);
            });
        }
    }
});
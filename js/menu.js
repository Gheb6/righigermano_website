document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const path = window.location.pathname.toLowerCase();
    const isProductPage = /\/prodotti\/[^/]+\.html$/i.test(path);
    const pagePrefix = isProductPage ? '../' : '';

    // Se l'header non ha ancora il brand moderno (fallback statico), inseriscilo
    if (!header.querySelector('.site-brand')) {
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
    }

    // Rilevamento della pagina attiva per evidenziazione nel menu
    let activeKey = 'home';
    if (path.includes('storia.html')) {
        activeKey = 'storia';
    } else if (path.includes('ciclo-produttivo.html')) {
        activeKey = 'ciclo';
    } else if (path.includes('/prodotti/') || path.includes('catalogo.html') || path.includes('scale.html') || path.includes('davanzali.html') || path.includes('colonne') || path.includes('contatori') || path.includes('speciali')) {
        activeKey = 'prodotti';
    } else if (path.includes('contatti.html')) {
        activeKey = 'contatti';
    } else if (path.endsWith('/') || path.endsWith('index.html')) {
        activeKey = 'home';
    }

    const navHTML = `
    <nav class="site-nav">
        <div class="container">
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
                <span>Menu</span>
                <span class="menu-toggle-icon" aria-hidden="true">&#9776;</span>
            </button>
            <ul id="site-menu">
                <li><a href="${pagePrefix}index.html"${activeKey === 'home' ? ' class="active"' : ''}>Home</a></li>
                <li><a href="${pagePrefix}storia.html"${activeKey === 'storia' ? ' class="active"' : ''}>La Nostra Storia</a></li>
                <li><a href="${pagePrefix}ciclo-produttivo.html"${activeKey === 'ciclo' ? ' class="active"' : ''}>Il Ciclo Produttivo</a></li>
                <li><a href="${pagePrefix}prodotti/catalogo.html"${activeKey === 'prodotti' ? ' class="active"' : ''}>Prodotti</a></li>
                <li><a href="${pagePrefix}contatti.html"${activeKey === 'contatti' ? ' class="active"' : ''}>Contattaci</a></li>
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
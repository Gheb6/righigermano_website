/* ==========================================================================
   RIGHI GERMANO S.N.C. - UNIVERSAL NAVIGATION CONTROLLER
   Gestione Unificata di Header & Menù Laterale a Scomparsa su Tutte le Pagine
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    // 1. Calcolo del percorso e del prefisso per cartelle (es. /prodotti/)
    const path = window.location.pathname.toLowerCase();
    const isSubdir = /\/prodotti\/[^/]+\.html$/i.test(path);
    const prefix = isSubdir ? '../' : '';

    // Determinazione pagina attiva
    let activeKey = 'home';
    let activeSubkey = '';
    if (path.includes('storia.html')) {
        activeKey = 'storia';
    } else if (path.includes('ciclo-produttivo.html')) {
        activeKey = 'ciclo';
    } else if (path.includes('speciali.html')) {
        activeKey = 'speciali';
    } else if (path.includes('scale.html')) {
        activeKey = 'prodotti';
        activeSubkey = 'scale';
    } else if (path.includes('davanzali.html')) {
        activeKey = 'prodotti';
        activeSubkey = 'davanzali';
    } else if (path.includes('colonne')) {
        activeKey = 'prodotti';
        activeSubkey = 'colonne';
    } else if (path.includes('contatori')) {
        activeKey = 'prodotti';
        activeSubkey = 'contatori';
    } else if (path.includes('/prodotti/') || path.includes('catalogo.html')) {
        activeKey = 'prodotti';
    } else if (path.includes('contatti.html')) {
        activeKey = 'contatti';
    } else if (path.endsWith('/') || path.endsWith('index.html')) {
        activeKey = 'home';
    }

    // 2. Normalizzazione automatica dell'Header su tutte le pagine
    // Se l'header non contiene già il pulsante trigger del drawer, inserisci la struttura unificata
    if (!header.querySelector('#drawer-trigger')) {
        header.innerHTML = `
            <div class="container header-flex">
                <a href="${prefix}index.html" class="site-brand" aria-label="Righi Germano S.n.c., Home">
                    <img src="${prefix}loghi/Righi-02_cropped-_cropped_-_pdfresizer.com_.svg" alt="Righi Germano S.n.c." class="brand-mark">
                    <div class="brand-copy">
                        <span class="brand-name">Righi Germano<span class="brand-dot">.</span></span>
                        <span class="brand-subtitle">Calcestruzzo Architettonico dal 1900</span>
                    </div>
                </a>
                <div class="header-right-actions">
                    <a href="${prefix}contatti.html" class="header-pill-contact">
                        Ufficio Tecnico
                    </a>
                    <button type="button" class="drawer-trigger" id="drawer-trigger" aria-label="Apri Menu di Navigazione" aria-expanded="false" aria-controls="offcanvas-drawer">
                        <span class="drawer-trigger-text">MENU</span>
                        <span class="drawer-trigger-icon" aria-hidden="true">
                            <span class="line line-1"></span>
                            <span class="line line-2"></span>
                        </span>
                    </button>
                </div>
            </div>
        `;
    }

    // 3. Scroll listener per comparsa soft su Home Page
    const handleScroll = function() {
        if (window.scrollY > 40) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 4. Iniezione del Drawer Laterale Off-Canvas (se non già presente nell'HTML)
    if (!document.getElementById('offcanvas-drawer')) {
        const drawerMarkup = `
        <div class="drawer-backdrop" id="drawer-backdrop"></div>
        <aside class="offcanvas-drawer" id="offcanvas-drawer" aria-label="Menù di Navigazione Principale">
            
            <div class="drawer-header">
                <span class="drawer-brand-name">Righi Germano<span>.</span></span>
                <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="Chiudi Menù">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>Chiudi</span>
                </button>
            </div>

            <div class="drawer-body">
                <ul class="drawer-nav-list">
                    <li class="drawer-nav-item">
                        <a href="${prefix}index.html" class="drawer-nav-link${activeKey === 'home' ? ' active' : ''}">
                            <span class="drawer-nav-num">01</span>
                            <span class="drawer-nav-label">Home</span>
                        </a>
                    </li>
                    <li class="drawer-nav-item">
                        <a href="${prefix}prodotti/catalogo.html" class="drawer-nav-link${activeKey === 'prodotti' && !activeSubkey ? ' active' : ''}">
                            <span class="drawer-nav-num">02</span>
                            <span class="drawer-nav-label">Catalogo Manufatti</span>
                        </a>
                        <ul class="drawer-sublinks">
                            <li><a href="${prefix}prodotti/scale.html"${activeSubkey === 'scale' ? ' class="active"' : ''}>&mdash; Scale e Gradini Autoportanti</a></li>
                            <li><a href="${prefix}prodotti/davanzali.html"${activeSubkey === 'davanzali' ? ' class="active"' : ''}>&mdash; Davanzali e Soglie a Taglio Termico</a></li>
                            <li><a href="${prefix}prodotti/colonne-balaustre.html"${activeSubkey === 'colonne' ? ' class="active"' : ''}>&mdash; Colonne, Balaustre e Modanature</a></li>
                            <li><a href="${prefix}prodotti/contatori.html"${activeSubkey === 'contatori' ? ' class="active"' : ''}>&mdash; Vani Contatore Monoblocco</a></li>
                        </ul>
                    </li>
                    <li class="drawer-nav-item">
                        <a href="${prefix}prodotti/speciali.html" class="drawer-nav-link${activeKey === 'speciali' ? ' active' : ''}">
                            <span class="drawer-nav-num">03</span>
                            <span class="drawer-nav-label">Lavori Speciali & Restauro</span>
                        </a>
                    </li>
                    <li class="drawer-nav-item">
                        <a href="${prefix}ciclo-produttivo.html" class="drawer-nav-link${activeKey === 'ciclo' ? ' active' : ''}">
                            <span class="drawer-nav-num">04</span>
                            <span class="drawer-nav-label">Ciclo Produttivo & Graniglie</span>
                        </a>
                    </li>
                    <li class="drawer-nav-item">
                        <a href="${prefix}storia.html" class="drawer-nav-link${activeKey === 'storia' ? ' active' : ''}">
                            <span class="drawer-nav-num">05</span>
                            <span class="drawer-nav-label">La Nostra Storia (dal 1900)</span>
                        </a>
                    </li>
                    <li class="drawer-nav-item">
                        <a href="${prefix}contatti.html" class="drawer-nav-link${activeKey === 'contatti' ? ' active' : ''}">
                            <span class="drawer-nav-num">06</span>
                            <span class="drawer-nav-label">Contatti & Stabilimento</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="drawer-footer">
                <span class="drawer-footer-title">STABILIMENTO BORETTO (RE) · 10.000 M²</span>
                <div class="drawer-contact-block">
                    <span>Via Pasubio 14/16/18 · 42022 Boretto (RE)</span>
                    <span>Ufficio Tecnico: <a href="tel:+390522965015">+39 0522 965015</a></span>
                    <span>Email: <a href="mailto:info@righigermano.com">info@righigermano.com</a></span>
                    <span>Orari: Lun - Ven 08:00-12:00 | 13:30-18:00</span>
                </div>
                <a href="${prefix}contatti.html" class="drawer-btn-cta">Richiedi Preventivo su Disegno &rarr;</a>
            </div>

        </aside>
        `;
        document.body.insertAdjacentHTML('beforeend', drawerMarkup);
    }

    // 5. Collegamento Eventi di Apertura / Chiusura Drawer
    const drawerTrigger = document.getElementById('drawer-trigger');
    const offcanvasDrawer = document.getElementById('offcanvas-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    const openDrawer = function() {
        if (offcanvasDrawer && drawerBackdrop) {
            offcanvasDrawer.classList.add('is-active');
            drawerBackdrop.classList.add('is-active');
            if (drawerTrigger) drawerTrigger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeDrawer = function() {
        if (offcanvasDrawer && drawerBackdrop) {
            offcanvasDrawer.classList.remove('is-active');
            drawerBackdrop.classList.remove('is-active');
            if (drawerTrigger) drawerTrigger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    };

    if (drawerTrigger) {
        drawerTrigger.addEventListener('click', openDrawer);
    }

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && offcanvasDrawer && offcanvasDrawer.classList.contains('is-active')) {
            closeDrawer();
        }
    });
});
/* ==========================================================================
   RIGHI GERMANO S.N.C. - FOOTER & CONSENT CONTROLLER
   Gestione Footer Corporate e Banner Consenso Cookie Tecnico
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    if (!body) return;

    const path = window.location.pathname.toLowerCase();
    const isProductSubdir = /\/prodotti\/[^/]+\.html$/i.test(path);
    const pagePrefix = isProductSubdir ? '../' : '';

    const existingFooter = document.querySelector('footer.site-footer');

    // Se la pagina non ha ancora il footer corporate nel markup, iniettalo
    if (!existingFooter) {
        const corporateFooterHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col footer-col-brand">
                        <a href="${pagePrefix}index.html" class="footer-brand">
                            <img src="${pagePrefix}loghi/Righi-02_cropped-_cropped_-_pdfresizer.com_.svg" alt="Righi Germano S.n.c." class="footer-logo">
                            <span class="footer-brand-title">Righi Germano S.n.c.</span>
                        </a>
                        <p class="footer-desc">Manufatti prefabbricati e lavorazioni artistiche in cemento e graniglia di marmo dal 1900. Partner per l'architettura, il restauro e l'edilizia su misura.</p>
                        <div class="footer-legal-pills">
                            <span class="footer-pill">P.IVA 01560280354</span>
                            <span class="footer-pill">Boretto (RE)</span>
                            <span class="footer-pill">Dal 1900</span>
                        </div>
                    </div>
                    
                    <div class="footer-col">
                        <h4>Manufatti & Soluzioni</h4>
                        <ul class="footer-links">
                            <li><a href="${pagePrefix}prodotti/scale.html">Scale e Gradini</a></li>
                            <li><a href="${pagePrefix}prodotti/davanzali.html">Davanzali e Soglie</a></li>
                            <li><a href="${pagePrefix}prodotti/colonne-balaustre.html">Colonne e Balaustre</a></li>
                            <li><a href="${pagePrefix}prodotti/speciali.html">Lavori Speciali e Restauro</a></li>
                            <li><a href="${pagePrefix}prodotti/contatori.html">Vani Contatore Monoblocco</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Azienda & Metodo</h4>
                        <ul class="footer-links">
                            <li><a href="${pagePrefix}storia.html">La Nostra Storia (dal 1900)</a></li>
                            <li><a href="${pagePrefix}ciclo-produttivo.html">Ciclo Produttivo & Materiali</a></li>
                            <li><a href="${pagePrefix}storia.html#onoreficenze">Premi storici (Firenze 1929)</a></li>
                            <li><a href="${pagePrefix}prodotti/catalogo.html">Catalogo Completo</a></li>
                            <li><a href="${pagePrefix}privacy.html">Informativa Privacy & Cookie</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Stabilimento & Recapiti</h4>
                        <ul class="footer-contact-list">
                            <li class="footer-contact-item">
                                <span>📍 Via Pasubio 14/16/18<br>42022 Boretto (RE) - Italia</span>
                            </li>
                            <li class="footer-contact-item">
                                <span>📞 Tel: <a href="tel:+390522965015">+39 0522 965015</a></span>
                            </li>
                            <li class="footer-contact-item">
                                <span>✉️ Email: <a href="mailto:info@righigermano.com">info@righigermano.com</a></span>
                            </li>
                            <li class="footer-contact-item">
                                <span>⏱️ Lun - Ven: 08:00-12:00 | 13:30-18:00</span>
                            </li>
                        </ul>
                        <a href="https://www.instagram.com/righigermanosnc_cementisti/" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                            Instagram Ufficiale &rarr;
                        </a>
                    </div>
                </div>

                <div class="footer-bottom-bar">
                    <p>&copy; 2026 Righi Germano S.n.c. di Righi Massimo e Giorgio - Tutti i diritti riservati.</p>
                    <p><a href="${pagePrefix}privacy.html">Privacy & Cookie Policy</a> | Stabilimento di Boretto (RE)</p>
                </div>
            </div>
        </footer>
        `;
        body.insertAdjacentHTML('beforeend', corporateFooterHTML);
    }

    // Gestione Banner Consenso Cookie Tecnico
    const cookieAccepted = sessionStorage.getItem('righi_cookie_accepted');
    if (!cookieAccepted) {
        const bannerHTML = `
        <div id="cookie-banner" class="cookie-banner" role="region" aria-label="Informativa Cookie">
            <div class="cookie-content">
                <p>Questo sito utilizza esclusivamente cookie tecnici essenziali per consentire una navigazione ottimale. <a href="${pagePrefix}privacy.html" target="_blank" rel="noopener">Informativa Privacy</a>.</p>
                <button id="accept-cookies" class="btn-accept" type="button">Accetta</button>
            </div>
        </div>
        `;
        body.insertAdjacentHTML('beforeend', bannerHTML);

        const acceptBtn = document.getElementById('accept-cookies');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                sessionStorage.setItem('righi_cookie_accepted', 'true');
                const banner = document.getElementById('cookie-banner');
                if (banner) {
                    banner.style.opacity = '0';
                    banner.style.transition = 'opacity 0.25s ease';
                    setTimeout(() => banner.remove(), 250);
                }
            });
        }
    }
});
/* ==========================================================================
   RIGHI GERMANO S.N.C. - FOOTER & CONSENT CONTROLLER
   Gestione Footer Corporate e Banner Consenso Cookie Tecnico (GDPR / Garante)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    if (!body) return;

    const path = window.location.pathname.toLowerCase();
    const isProductSubdir = /\/prodotti\/[^/]+\.html$/i.test(path);
    const pagePrefix = isProductSubdir ? '../' : '';

    const existingFooter = document.querySelector('footer.site-footer');

    // 1. Se la pagina non ha ancora il footer corporate nel markup, iniettalo
    if (!existingFooter) {
        const corporateFooterHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col footer-col-brand">
                        <a href="${pagePrefix}index.html" class="footer-brand" aria-label="Righi Germano S.n.c., Home">
                            <img src="${pagePrefix}loghi/Righi-02_cropped-_cropped_-_pdfresizer.com_.svg" alt="Righi Germano S.n.c." class="footer-logo">
                            <span class="footer-brand-title">Righi Germano S.n.c.</span>
                        </a>
                        <p class="footer-desc">Manufatti prefabbricati e lavorazioni artistiche in cemento e graniglia di marmo dal 1900. Partner per l'architettura contemporanea, il restauro e l'edilizia su misura.</p>
                        <div class="footer-legal-pills">
                            <span class="footer-pill">P.IVA 01560280354</span>
                            <span class="footer-pill">Boretto (RE)</span>
                            <span class="footer-pill">Dal 1900</span>
                        </div>
                    </div>
                    
                    <div class="footer-col">
                        <h4>Manufatti & Soluzioni</h4>
                        <ul class="footer-links">
                            <li><a href="${pagePrefix}prodotti/scale.html">Scale e Gradini Autoportanti</a></li>
                            <li><a href="${pagePrefix}prodotti/davanzali.html">Davanzali e Soglie a Taglio Termico</a></li>
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
                                <span>📍 <strong>Stabilimento & Uffici:</strong><br>Via Pasubio 14/16/18<br>42022 Boretto (RE) - Italia</span>
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

    // 2. Gestione Banner Consenso Cookie Tecnico con Persistenza localStorage (12 Mesi)
    const STORAGE_KEY = 'righi_cookie_consent_v1';
    const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;

    let hasValidConsent = false;
    try {
        const storedTimestamp = localStorage.getItem(STORAGE_KEY);
        if (storedTimestamp) {
            const consentTime = parseInt(storedTimestamp, 10);
            if (!isNaN(consentTime) && (Date.now() - consentTime < ONE_YEAR_MS)) {
                hasValidConsent = true;
            }
        }
    } catch (e) {
        // Fallback in caso di navigazione anonima con storage bloccato
        hasValidConsent = false;
    }

    // Mostra il banner solo se non è presente un consenso valido
    if (!hasValidConsent) {
        const bannerHTML = `
        <div id="cookie-banner" class="cookie-banner" role="region" aria-label="Informativa Cookie e Riservatezza">
            <div class="cookie-content">
                <div class="cookie-text-block">
                    <span class="cookie-shield-icon" aria-hidden="true">🛡️</span>
                    <p>
                        <strong>Tutela della Privacy & Riservatezza</strong>: questo sito utilizza esclusivamente <strong>cookie tecnici essenziali</strong> per garantire la corretta navigazione e <strong>nessun cookie di profilazione pubblicitaria</strong>. <a href="${pagePrefix}privacy.html">Leggi la Privacy & Cookie Policy</a>.
                    </p>
                </div>
                <div class="cookie-actions">
                    <button id="accept-cookies" class="btn-accept" type="button">Ho Capito</button>
                </div>
            </div>
        </div>
        `;
        body.insertAdjacentHTML('beforeend', bannerHTML);

        const acceptBtn = document.getElementById('accept-cookies');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                try {
                    localStorage.setItem(STORAGE_KEY, Date.now().toString());
                } catch (e) {
                    // Ignora se localStorage non è accessibile
                }

                const banner = document.getElementById('cookie-banner');
                if (banner) {
                    banner.style.opacity = '0';
                    banner.style.transform = 'translateY(20px)';
                    banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    setTimeout(() => banner.remove(), 300);
                }
            });
        }
    }
});
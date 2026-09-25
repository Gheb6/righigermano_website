document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <div id="cookie-banner" class="cookie-banner">
        <div class="container cookie-content">
            <p>Questo sito utilizza solo cookie tecnici per garantire il corretto funzionamento della navigazione. <a href="privacy.html" target="_blank">Leggi l'informativa</a></p>
            <button id="accept-cookies" class="btn-accept">Ho capito</button>
        </div>
    </div>

    <footer class="site-footer">
        <div class="container">
            <p>&copy; 2026 Righi Germano S.n.c. - Tutti i diritti riservati | <a href="privacy.html" style="color: #aaa; text-decoration: underline;">Privacy & Cookie Policy</a></p>
        </div>
    </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Script per chiudere il banner cookie
    const acceptBtn = document.getElementById('accept-cookies');
    if(acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            document.getElementById('cookie-banner').style.display = 'none';
        });
    }
});
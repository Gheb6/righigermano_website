document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
    <aside class="sidebar">
        <div class="card info-card">
            <h3>Righi Germano S.n.c.</h3>
            <p><strong>di Righi Massimo e Giorgio</strong></p>
            <p>V. Pasubio 14/16/18<br>BORETTO (RE)</p>
            
            <a href="https://maps.app.goo.gl/W6F3cEfQGFLqUn2TA" target="_blank" class="btn btn-map">
                📍 Apri in Google Maps
            </a>

            <hr>
            <p><strong>Cod. Fisc. e P.I.</strong><br>01560280354</p>
            <p><strong>Fax</strong> 0522 964845</p>
            
            <div class="quick-actions">
                <a href="tel:0522965015" class="btn btn-call">📞 Chiama 0522 965015</a>
                <a href="mailto:info@righigermano.com" class="btn btn-email">✉️ Invia Email</a>
            </div>

            <p style="margin-top: 15px; font-size: 0.85rem;"><strong>PEC:</strong> <a href="mailto:righigermano@pec.it">righigermano@pec.it</a></p>
        </div>
    </aside>
    `;
    
    // Inserisce la sidebar alla fine del blocco principale .main-content
    const mainContent = document.querySelector('.main-content');
    if(mainContent) {
        mainContent.insertAdjacentHTML('beforeend', sidebarHTML);
    }
});
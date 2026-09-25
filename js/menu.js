document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const navHTML = `
    <nav class="site-nav">
        <div class="container">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="storia.html">La Nostra Storia</a></li>
                <li><a href="ciclo-produttivo.html">Il Ciclo Produttivo</a></li>
                <li><a href="prodotti.html">Prodotti</a></li>
                <li><a href="contatti.html">Contattaci</a></li>
            </ul>
        </div>
    </nav>
    `;

    if (!header.nextElementSibling || !header.nextElementSibling.classList.contains('site-nav')) {
        header.insertAdjacentHTML('afterend', navHTML);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const pagePrefix = window.location.pathname.includes('/prodotti/') ? '../' : '';

    const navHTML = `
    <nav class="site-nav">
        <div class="container">
            <ul>
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
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav class="site-nav">
        <div class="container">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="storia.html">La Nostra Storia</a></li>
                <li><a href="ciclo-produttivo.html">Il Ciclo Produttivo</a></li>
                <li><a href="#">Prodotti</a></li>
                <li><a href="#">Contattaci</a></li>
            </ul>
        </div>
    </nav>
    `;
    
    // Inserisce il menu subito dopo l'header in qualsiasi pagina
    document.querySelector('.site-header').insertAdjacentHTML('afterend', navHTML);
});
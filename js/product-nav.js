document.addEventListener("DOMContentLoaded", function() {
    // 1. Catalogo ordinato dei prodotti: aggiungi qui i nuovi quando ne crei altri
    const products = [
        { file: 'scale.html', title: 'Scale e Gradini' },
        { file: 'davanzali.html', title: 'Davanzali' },
        { file: 'colonne-balaustre.html', title: 'Colonne e Balaustre' },
        { file: 'contatori.html', title: 'Alloggi Contatori' },
        { file: 'speciali.html', title: 'Lavori Speciali' }
    ];

    // Individua la pagina corrente dal nome file
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const currentIndex = products.findIndex(p => p.file.toLowerCase() === currentFile.toLowerCase());

    if (currentIndex === -1) return; // Se non è una pagina dell'elenco, non fa nulla

    const currentProduct = products[currentIndex];
    const prevProduct = products[currentIndex - 1] || null;
    const nextProduct = products[currentIndex + 1] || null;

    // 2. Inserimento del Breadcrumb in alto (subito dentro .content-body)
    const contentBody = document.querySelector('.content-body');
    if (contentBody) {
        const breadcrumbHTML = `
        <nav class="product-breadcrumb" aria-label="Percorso">
            <a href="catalogo.html">&larr; Catalogo</a>
            <span class="sep">/</span>
            <strong>${currentProduct.title}</strong>
        </nav>
        `;
        contentBody.insertAdjacentHTML('afterbegin', breadcrumbHTML);
    }

    // 3. Inserimento dei tasti Precedente / Successivo in fondo all'articolo
    const productDetail = document.querySelector('.product-detail');
    if (productDetail) {
        const bottomNavHTML = `
        <nav class="product-bottom-nav" aria-label="Navigazione tra prodotti">
            <div class="nav-slot">
                ${prevProduct ? `<a href="${prevProduct.file}" class="p-nav-link p-prev"><span class="nav-dir">&larr; Precedente</span><strong>${prevProduct.title}</strong></a>` : ''}
            </div>
            <a href="catalogo.html" class="p-nav-catalog">Tutti i prodotti</a>
            <div class="nav-slot">
                ${nextProduct ? `<a href="${nextProduct.file}" class="p-nav-link p-next"><span class="nav-dir">Successivo &rarr;</span><strong>${nextProduct.title}</strong></a>` : ''}
            </div>
        </nav>
        `;
        productDetail.insertAdjacentHTML('beforeend', bottomNavHTML);
    }
});
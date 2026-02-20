document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutte le voci del menu che hanno una tendina
    const menuItems = document.querySelectorAll('.nav-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Chiude tutte le altre tendine aperte (opzionale, ma consigliato)
            menuItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                }
            });

            // Apre o chiude la tendina cliccata
            this.classList.toggle('active');
            
            // Ferma la propagazione del click per evitare chiusure immediate
            e.stopPropagation();
        });
    });

    // Chiude la tendina se clicchi fuori (in qualsiasi punto della pagina)
    document.addEventListener('click', function() {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    });
});
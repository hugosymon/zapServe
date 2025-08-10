function pesquisarServicos() {
    const searchBox = document.getElementById('search-box');
    const categorySelect = document.getElementById('category-select');
    const cards = document.querySelectorAll('.card');
    
    if (!searchBox || !categorySelect) {
        return;
    }
    
    const searchTerm = searchBox.value.toLowerCase();
    const selectedCategory = categorySelect.value.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const matchesSearch = searchTerm === '' || title.includes(searchTerm);
        const matchesCategory = selectedCategory === '' || title.includes(selectedCategory);
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Adicionar event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');
    const categorySelect = document.getElementById('category-select');
    
    if (searchBox) {
        searchBox.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                pesquisarServicos();
            }
        });
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', pesquisarServicos);
    }
});
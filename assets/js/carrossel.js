document.addEventListener('DOMContentLoaded', function() {
    const carrosselItens = document.querySelector(".carrossel-itens");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    const indicadores = document.querySelector(".indicadores");
    const itens = document.querySelectorAll(".item-carrossel");
    
    if (!carrosselItens || !btnPrev || !btnNext || !indicadores || itens.length === 0) {
        return;
    }
    
    let index = 0;

    // Criar indicadores
    itens.forEach((_, i) => {
        const span = document.createElement("span");
        span.dataset.index = i;
        if (i === 0) span.classList.add("active");
        indicadores.appendChild(span);
    });

    const updateIndicadores = () => {
        document.querySelectorAll(".indicadores span").forEach((el, i) => {
            el.classList.toggle("active", i === index);
        });
    };

    const moveToIndex = (newIndex) => {
        if (newIndex < 0) index = itens.length - 1;
        else if (newIndex >= itens.length) index = 0;
        else index = newIndex;
        carrosselItens.style.transform = `translateX(-${index * 100}%)`;
        updateIndicadores();
    };

    btnPrev.addEventListener("click", () => moveToIndex(index - 1));
    btnNext.addEventListener("click", () => moveToIndex(index + 1));

    document.querySelectorAll(".indicadores span").forEach((span) => {
        span.addEventListener("click", () => moveToIndex(Number(span.dataset.index)));
    });

    // Navegação automática
    setInterval(() => moveToIndex(index + 1), 5000);
});

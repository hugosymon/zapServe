// Botao Beneficios

document.querySelector('.botao-beneficios').addEventListener('click', function (event) {
    event.preventDefault(); 
    const beneficiosSection = document.querySelector('#beneficios');
    
    beneficiosSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'center' 
    });
  });

// Botao Contatos 

document.querySelector('.botao-contatos').addEventListener('click', function (event) {
    event.preventDefault(); 
    const beneficiosSection = document.querySelector('#contato');
    
    beneficiosSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'center' 
    });
  });
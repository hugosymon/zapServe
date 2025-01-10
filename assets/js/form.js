// Lista de informações dos serviços
const services = [
    {
        title: "Reparo Hidráulico",
        clientName: "João Silva",
        problemDescription: "Vazamento em torneira do banheiro.",
        clientAddress: "Rua das Flores, 123 - São Paulo, SP",
        availability: "Segunda a Sexta, 08h - 18h",
    },
    {
        title: "Instalação Elétrica",
        clientName: "Maria Oliveira",
        problemDescription: "Troca de fiação da cozinha.",
        clientAddress: "Avenida Central, 456 - Rio de Janeiro, RJ",
        availability: "Segunda a Sábado, 10h - 16h",
    },
    {
        title: "Manutenção de Ar Condicionado",
        clientName: "Carlos Souza",
        problemDescription: "Limpeza e recarga de gás.",
        clientAddress: "Rua dos Pinheiros, 789 - Belo Horizonte, MG",
        availability: "Terça a Domingo, 09h - 18h",
    },
    {
        title: "Reparo em Pisos",
        clientName: "Ana Paula",
        problemDescription: "Substituição de azulejos quebrados.",
        clientAddress: "Rua das Palmeiras, 321 - Salvador, BA",
        availability: "Segunda a Sexta, 08h - 17h",
    },
    {
        title: "Manutenção de Portões Automáticos",
        clientName: "Roberto Lima",
        problemDescription: "Motor não está funcionando.",
        clientAddress: "Rua do Comércio, 654 - Curitiba, PR",
        availability: "Todos os dias, 07h - 19h",
    }
];

// Função para selecionar um serviço aleatório
function getRandomService() {
    const randomIndex = Math.floor(Math.random() * services.length);
    return services[randomIndex];
}

// Função para carregar informações dinâmicas na página
function loadServiceDetails() {
    const serviceData = getRandomService(); // Seleciona um serviço aleatório
    document.getElementById("service-title").textContent = serviceData.title;
    document.getElementById("client-name").textContent = serviceData.clientName;
    document.getElementById("problem-description").textContent = serviceData.problemDescription;
    document.getElementById("client-address").textContent = serviceData.clientAddress;
    document.getElementById("availability").textContent = serviceData.availability;
}

// Função para agendar o horário
function scheduleService() {
    const appointmentInput = document.getElementById("appointment");
    const confirmationMessage = document.getElementById("confirmation-message");

    if (appointmentInput.value) {
        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = `Horário agendado para: ${new Date(appointmentInput.value).toLocaleString("pt-BR")}`;

        // Redirecionar para index.html após 3 segundos
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    } else {
        alert("Por favor, escolha um horário antes de agendar.");
    }
}

// Função para redirecionar à página inicial
function goBack() {
    window.location.href = "index.html";
}

// Carregar os detalhes do serviço quando a página é carregada
document.addEventListener("DOMContentLoaded", loadServiceDetails);

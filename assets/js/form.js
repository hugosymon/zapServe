// Lista de informações dos serviços
const services = [
    {
        title: "Reparo Hidráulico",
        clientName: "João Silva",
        problemDescription: "Vazamento em torneira do banheiro.",
        clientAddress: "Rua das Flores, 123 - São Paulo, SP",
        availability: "08:00 - 18:00",
        availableStart: "08:00", // Início do horário disponível
        availableEnd: "18:00", // Fim do horário disponível
    },
    {
        title: "Instalação Elétrica",
        clientName: "Maria Oliveira",
        problemDescription: "Troca de fiação da cozinha.",
        clientAddress: "Avenida Central, 456 - Rio de Janeiro, RJ",
        availability: "10:00 - 16:00",
        availableStart: "10:00",
        availableEnd: "16:00",
    }
];

// Função para selecionar um serviço aleatório
function getRandomService() {
    const randomIndex = Math.floor(Math.random() * services.length);
    return services[randomIndex];
}

// Variável global para armazenar o serviço selecionado
let selectedService;

// Função para carregar informações dinâmicas na página
function loadServiceDetails() {
    selectedService = getRandomService(); // Seleciona um serviço aleatório
    document.getElementById("service-title").textContent = selectedService.title;
    document.getElementById("client-name").textContent = selectedService.clientName;
    document.getElementById("problem-description").textContent = selectedService.problemDescription;
    document.getElementById("client-address").textContent = selectedService.clientAddress;
    document.getElementById("availability").textContent = `Horário disponível: ${selectedService.availability}`;
}

// Função para verificar se o horário escolhido está dentro do intervalo permitido
function isTimeWithinRange(selectedTime, startTime, endTime) {
    const [selectedHours, selectedMinutes] = selectedTime.split(":").map(Number);
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const selectedTotalMinutes = selectedHours * 60 + selectedMinutes;
    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;

    return selectedTotalMinutes >= startTotalMinutes && selectedTotalMinutes <= endTotalMinutes;
}

// Função para agendar o horário
function scheduleService() {
    const appointmentInput = document.getElementById("appointment");
    const confirmationMessage = document.getElementById("confirmation-message");

    if (appointmentInput.value) {
        const selectedDateTime = new Date(appointmentInput.value);
        const selectedTime = selectedDateTime.toTimeString().slice(0, 5); // Pega o horário no formato HH:MM

        if (
            isTimeWithinRange(
                selectedTime,
                selectedService.availableStart,
                selectedService.availableEnd
            )
        ) {
            confirmationMessage.style.display = "block";
            confirmationMessage.textContent = `Horário agendado para: ${selectedDateTime.toLocaleString(
                "pt-BR"
            )}`;

            // Redirecionar para index.html após 3 segundos
            setTimeout(() => {
                window.location.href = "index.html";
            }, 3000);
        } else {
            alert(`O horário selecionado (${selectedTime}) está fora do intervalo disponível (${selectedService.availability}).`);
        }
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

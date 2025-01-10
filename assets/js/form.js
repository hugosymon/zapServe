// Informações do serviço
const serviceData = {
    title: "Reparo Hidráulico",
    clientName: "João Silva",
    problemDescription: "Vazamento em torneira do banheiro.",
    clientAddress: "Rua das Flores, 123 - São Paulo, SP",
    availability: "Segunda a Sexta, 08h - 18h",
};

// Função para carregar informações dinâmicas na página
function loadServiceDetails() {
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


// Carregar os detalhes do serviço quando a página é carregada
document.addEventListener("DOMContentLoaded", loadServiceDetails);
// Função para redirecionar à página inicial
function goBack() {
    window.location.href = "index.html";
}

const chatBox = document.getElementById('chat');
const input = document.getElementById('input');

function sendMessage() {
    const message = input.value.trim();
    if (message) {
        displayMessage('you', message);
        simulateReply(message);
        input.value = '';
        input.focus();
    }
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (sender === 'you') {
        messageElement.classList.add('user-message');
        messageElement.textContent = `Você: ${message}`;
    } else {
        messageElement.classList.add('bot-message');
        messageElement.textContent = `Bot: ${message}`;
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para o final
}

function simulateReply(message) {
    setTimeout(() => {
        const reply = getResponse(message);
        displayMessage('bot', reply);
    }, 1000);
}

function getResponse(message) {
    const normalizedMessage = message.toLowerCase();

    if (normalizedMessage.includes('oi') || normalizedMessage.includes('olá')) {
        return 'Bom dia! Como posso ajudar?';
    } else if (normalizedMessage.includes('preço')) {
        return 'Os preços variam dependendo do serviço. Poderia especificar qual serviço você precisa?';
    } else if (normalizedMessage.includes('agendar')) {
        return 'Claro! Para qual data e horário você gostaria de agendar?';
    } else if (normalizedMessage.includes('obrigado') || normalizedMessage.includes('valeu')) {
        return 'Por nada! Se precisar de mais alguma coisa, estou à disposição.';
    } else {
        return 'Desculpe, não entendi sua mensagem. Poderia reformular, por favor?';
    }
}

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

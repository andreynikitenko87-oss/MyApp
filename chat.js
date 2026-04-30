const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const chatWindow = document.querySelector('#chat-window');

const replies = [
    {
        keywords: ['honey', 'cinnamon', 'featured', 'latte', 'drink'],
        text: 'Our featured drink is the Honey Cinnamon Latte. It has espresso, steamed milk, cinnamon, and a light honey finish. It is $4.75 and can be made hot or iced.'
    },
    {
        keywords: ['price', 'cost', 'how much'],
        text: 'The Honey Cinnamon Latte is $4.75.'
    },
    {
        keywords: ['menu', 'espresso', 'cappuccino', 'americano'],
        text: 'Our menu includes Espresso, Cappuccino, Latte, Americano, and the featured Honey Cinnamon Latte.'
    },
    {
        keywords: ['hour', 'open', 'close'],
        text: 'We are happy to help with hours. Please call us at (123) 456-7890 for today\'s schedule.'
    }
];

function addMessage(text, type) {
    const message = document.createElement('div');
    message.className = `chat-message ${type}`;

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    message.appendChild(paragraph);
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getReply(message) {
    const normalizedMessage = message.toLowerCase();
    const match = replies.find(reply =>
        reply.keywords.some(keyword => normalizedMessage.includes(keyword))
    );

    return match ? match.text : 'Thanks for asking. For details about that, please call us at (123) 456-7890 or visit us at 123 Coffee Street.';
}

chatForm.addEventListener('submit', event => {
    event.preventDefault();

    const message = chatInput.value.trim();
    if (!message) {
        return;
    }

    addMessage(message, 'user');
    chatInput.value = '';

    window.setTimeout(() => {
        addMessage(getReply(message), 'bot');
    }, 350);
});

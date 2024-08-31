window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const startBtn = document.getElementById('start-btn');
const todoList = document.getElementById('todo-list');

startBtn.addEventListener('click', () => {
    recognition.start();
});

recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    if (event.results[0].isFinal) {
        const li = document.createElement('li');
        li.textContent = transcript;
        todoList.appendChild(li);
    }
});

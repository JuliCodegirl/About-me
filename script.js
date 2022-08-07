const visitorName = document.getElementById('visitor-name');
const name = prompt('Ты заходишь на маленькую страничку о моей скромной жизни :) Как тебя зовут?');
if (name) {
    visitorName.textContent = name;
}
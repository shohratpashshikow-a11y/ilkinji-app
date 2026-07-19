let count = 0;
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickBtn');

clickButton.addEventListener('click', () => {
    count++;
    scoreDisplay.textContent = count;
});

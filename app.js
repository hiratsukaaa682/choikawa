let growthLevel = 0;
let energyLevel = 100;

const growthDisplay = document.getElementById('growth-level');
const energyDisplay = document.getElementById('energy-level');
const feedButton = document.getElementById('feed-button');
const playButton = document.getElementById('play-button');

feedButton.addEventListener('click', () => {
    if (energyLevel < 100) {
        energyLevel += 10;
        if (energyLevel > 100) energyLevel = 100;
        energyDisplay.textContent = energyLevel;
        growthLevel += 1;
        growthDisplay.textContent = growthLevel;
        updateChikawaImage();
    }
});

playButton.addEventListener('click', () => {
    if (energyLevel > 0) {
        energyLevel -= 10;
        if (energyLevel < 0) energyLevel = 0;
        energyDisplay.textContent = energyLevel;
        growthLevel += 1;
        growthDisplay.textContent = growthLevel;
        updateChikawaImage();
    }
});

function updateChikawaImage() {
    const chikawaImage = document.getElementById('chikawa-image');
    if (growthLevel < 5) {
        chikawaImage.src = 'chikawa-baby.png'; // 赤ちゃんの画像
    } else if (growthLevel < 10) {
        chikawaImage.src = 'chikawa-child.png'; // 子供の画像
    } else {
        chikawaImage.src = 'chikawa-adult.png'; // 大人の画像
    }
}

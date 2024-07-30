const singers = [
    { name: "Taylor Swift", file: "singer1.mp3" },
    { name: "XXXTENTACION", file: "singer2.mp3" },
    { name: "Eagles", file: "singer3.mp3" },
    { name: "Guns N' Roses", file: "singer4.mp3" },
    { name: "Drake", file: "singer5.mp3" },
    { name: "Ghost", file: "singer6.mp3" },
    { name: "The Weeknd", file: "singer7.mp3" },
    { name: "Post Malone", file: "singer8.mp3" },
    { name: "The Beatles", file: "singer9.mp3" },
    { name: "Eminem", file: "singer10.mp3" }
];

let currentSinger = null;

document.getElementById('startButton').addEventListener('click', () => {
    currentSinger = singers[Math.floor(Math.random() * singers.length)];
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = `audio/${currentSinger.file}`;
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    setTimeout(() => audioPlayer.pause(), 5000); 
    document.getElementById('inputSection').style.display = 'block';
});

document.getElementById('guessButton').addEventListener('click', () => {
    const guess = document.getElementById('guessInput').value.trim();
    const resultElement = document.getElementById('result');
    if (guess.toLowerCase() === currentSinger.name.toLowerCase()) {
        resultElement.textContent = 'Correct! Well done!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect. Try again!';
        resultElement.style.color = 'red';
    }
});

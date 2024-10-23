const videos = [
    'India.mp4',
    'India1.mp4',
    'Bangalore.mp4',
    'Mumbai.mp4',
    'Ladakh.mp4',
    'New Delhi.mp4'
];

let currentVideoIndex = 0;
const videoPlayer = document.getElementById('videoPlayer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playButton = document.getElementById('playButton');
const playButtonContainer = document.getElementById('playButtonContainer');

// Function to load video
function loadVideo(index) {
    videoPlayer.src = videos[index];
    videoPlayer.play();  // Ensure the video plays after setting the source
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    loadVideo(currentVideoIndex);
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
});

// Play the video when the play button is clicked
playButton.addEventListener('click', () => {
    playButtonContainer.style.display = 'none';  // Hide the play button
    videoPlayer.muted = false;  // Unmute the video
    loadVideo(currentVideoIndex);  // Start playing the current video with sound
});

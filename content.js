let offensiveWords = [];
const positivePhrases = [
    "Great job!",
    "Keep up the good work!",
    "You're awesome!",
    "What a positive perspective!"
];

function loadOffensiveWords() {
    chrome.storage.sync.get('offensiveWords', (data) => {
        offensiveWords = data.offensiveWords || [];
        replaceOffensiveComments(); // Initial run to replace comments
    });
}

function isExtensionEnabled(callback) {
    chrome.storage.sync.get('extensionEnabled', (data) => {
        callback(data.extensionEnabled !== false); // Default to true if not set
    });
}

function replaceOffensiveComments() {
    isExtensionEnabled((enabled) => {
        if (!enabled) return; // Exit if the extension is disabled

        const comments = document.querySelectorAll('.comment'); // Modify selector based on the social media site
        comments.forEach(comment => {
            const text = comment.innerText;
            offensiveWords.forEach(word => {
                if (text.includes(word)) {
                    comment.innerText = positivePhrases[Math.floor(Math.random() * positivePhrases.length)];
                    const likeButton = comment.querySelector('.like-button'); // Modify selector as needed
                    if (likeButton) likeButton.style.display = 'none';
                    addPositiveOverlay(comment);
                }
            });
        });
    });
}

function addPositiveOverlay(comment) {
    const profilePic = comment.querySelector('.profile-pic'); // Modify selector for the profile picture
    if (profilePic) {
        const overlay = document.createElement('div');
        overlay.className = 'positive-overlay';
        overlay.style.backgroundImage = "url('path_to_positive_image.png')"; // Path to your overlay image
        overlay.style.position = 'absolute';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        profilePic.appendChild(overlay);
    }
}

setInterval(replaceOffensiveComments, 3000); // Check every 3 seconds
loadOffensiveWords(); // Load offensive words on script load

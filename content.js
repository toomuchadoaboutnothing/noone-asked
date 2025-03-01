const positiveWords = [
  "kindness",
  "love",
  "inspiration",
  "unity",
  "support",
  "compassion",
  "togetherness",
  "positivity",
  "friendship"
];

function replaceHateComments(blockedKeywords) {
  const hateSpeechPatterns = blockedKeywords.map(keyword => new RegExp(keyword, 'gi'));

  const comments = document.querySelectorAll(".comment-selector"); // Adjust selector for actual comments
  comments.forEach(comment => {
    hateSpeechPatterns.forEach(pattern => {
      if (pattern.test(comment.innerText)) {
        // Replace the comment text with a random positive word
        const randomPositiveWord = positiveWords[Math.floor(Math.random() * positiveWords.length)];
        comment.innerText = randomPositiveWord;
      }
    });
  });
}

// Load custom keywords and run the replacement function
chrome.storage.sync.get('blockedKeywords', (data) => {
  const keywords = data.blockedKeywords || [];
  setInterval(() => replaceHateComments(keywords), 3000);
});

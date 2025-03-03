document.addEventListener('DOMContentLoaded', () => {
    const keywordsTextarea = document.getElementById('keywords');
    const saveButton = document.getElementById('save');
    const statusText = document.getElementById('status');

    // Load saved keywords
    chrome.storage.sync.get('offensiveWords', (data) => {
        keywordsTextarea.value = data.offensiveWords ? data.offensiveWords.join(', ') : '';
    });

    // Save keywords
    saveButton.addEventListener('click', () => {
        const keywords = keywordsTextarea.value.split(',').map(keyword => keyword.trim()).filter(keyword => keyword);
        chrome.storage.sync.set({ offensiveWords: keywords }, () => {
            statusText.textContent = 'Keywords saved!';
            setTimeout(() => {
                statusText.textContent = '';
            }, 2000);
        });
    });
});

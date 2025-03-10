document.addEventListener('DOMContentLoaded', () => {
    const optionsButton = document.getElementById('optionsButton');

    // Open options page when the button is clicked
    optionsButton.addEventListener('click', () => {
        chrome.runtime.openOptionsPage();
    });
});

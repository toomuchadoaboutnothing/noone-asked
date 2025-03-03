document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleExtension');
    const optionsButton = document.getElementById('optionsButton');

    // Load the current state of the extension
    chrome.storage.sync.get('extensionEnabled', (data) => {
        toggle.checked = data.extensionEnabled !== undefined ? data.extensionEnabled : true; // Default to enabled
    });

    // Update the extension state when the toggle is changed
    toggle.addEventListener('change', () => {
        chrome.storage.sync.set({ extensionEnabled: toggle.checked });
    });

    // Open options page when the button is clicked
    optionsButton.addEventListener('click', () => {
        chrome.runtime.openOptionsPage();
    });
});

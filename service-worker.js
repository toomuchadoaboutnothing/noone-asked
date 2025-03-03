// This event runs when the service worker is installed
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

// This event runs when the service worker is activated
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});

// Listen for messages from the extension
self.addEventListener('message', (event) => {
    console.log('Service Worker: Message received', event.data);
    // Handle messages if needed
});

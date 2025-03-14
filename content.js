// content.js

// List of offensive keywords note: don't look through this, it's got some offensive words in it, but it is required for the program to work (NOTE: UPDATE LATER!!!!)
const offensiveKeywords = ['go back to the kitchen','whys there no hate','victim mentality','delusional','hysteria','noone cares','hysterical','deserved','fat','cringe','what were you wearing','put some clothes on','spinster','opinion rejected','OF','Onlyfans detected, opinion rejected''tranny','nigga','your body my choice','still murder','faggot'];;

// Function to hide comments and profile pictures
function hideOffensiveComments() {
    const comments = document.querySelectorAll('_a9ym'); // Update this selector to match the comment elements
    comments.forEach(comment => {
        const text = comment.innerText.toLowerCase();
        // Check if the comment contains any offensive keywords
        if (offensiveKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            comment.style.display = 'none'; // Hide the comment
        }
    });
}

// Run the function to hide offensive comments
hideOffensiveComments();

// MutationObserver to handle dynamic content
const observer = new MutationObserver(hideOffensiveComments);
observer.observe(document.body, { childList: true, subtree: true });

// Array of placeholder messages
const placeholderMessages = [
  "Search the web...",
  "y u so slow???",
  "Find what you need...",
  "what does 'search' mean",
  "rickroll link",
  "how to delete search history",
  "breaking bad s5ep16",
  "Just click 'Search'.",
  "god's favorite band",
  "bohemian rhapsody",
  "how to get good at ...",
  "we live, we love, we lie",
  "help i became machine oil",
  "cute cat pictures",
  "the end of evangelion",
  "gif or gif",
  "a cruel angel's thesis",
  "God's in his heaven...",
  "...all's right with this world!",
  "THANATOS -IF I CAN'T BE YOURS-",
  "catgpt",
  "google.com"
];


let currentPlaceholderIndex = 0;

function setRandomPlaceholderMessage() {
  const searchInput = document.getElementById('searchInput');
  currentPlaceholderIndex = Math.floor(Math.random() * placeholderMessages.length);
  searchInput.placeholder = placeholderMessages[currentPlaceholderIndex];
}
// TABBER
function autocompleteOnTab(event) {
  if (event.key === 'Tab') {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput');
    const currentPlaceholder = placeholderMessages[currentPlaceholderIndex];

    if (!searchInput.value || searchInput.value === currentPlaceholder) {
      searchInput.value = currentPlaceholder;
    }

    const nextElement = searchInput.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }
  }
}

setRandomPlaceholderMessage();

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keydown', autocompleteOnTab);


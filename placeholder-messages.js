// Array of placeholder messages
const placeholderMessages = [
  "Search the web...",
  "What are you looking for?",
  "Why u so slow???",
  "Find what you need...",
  "What does 'search' mean?",
  "rickroll link",
  "how to delete search history",
  "breaking bad s5ep16",
  "Just click 'Search'.",
  "God's favorite band",
  "bohemian rhapsody",
  "how to get good at ...",
  "We live, we love, we lie",
  "corgi my beloved",
  "help i became machine oil",
  "cute cat pictures"
];

// Function to set a random placeholder message
function setRandomPlaceholderMessage() {
  const searchInput = document.getElementById('searchInput');
  const randomIndex = Math.floor(Math.random() * placeholderMessages.length);
  searchInput.placeholder = placeholderMessages[randomIndex];
}

// Call the function to set a random placeholder message
setRandomPlaceholderMessage();

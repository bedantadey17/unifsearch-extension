// Array of placeholder messages
const placeholderMessages = [
  "Search the web...",
  "Type your search query...",
  "What are you looking for?",
  "Why did the chicken cross the road?",
  "Type something...!",
  "Why u so slow???",
  "Search stuff, I guess.",
  "sussy baka",
  "Find what you need...",
  "What does 'search' mean?",
  "rickroll link",
  "delete search history",
  "breaking bad s5ep16",
  "Just click 'Search'.",
  "God's favorite band",
  "bohemian rhapsody",
  "how to get good at ...",
  "Enter your search term..."
];

// Function to set a random placeholder message
function setRandomPlaceholderMessage() {
  const searchInput = document.getElementById('searchInput');
  const randomIndex = Math.floor(Math.random() * placeholderMessages.length);
  searchInput.placeholder = placeholderMessages[randomIndex];
}

// Call the function to set a random placeholder message
setRandomPlaceholderMessage();

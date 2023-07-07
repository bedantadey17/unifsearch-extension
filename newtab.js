document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const darkModeToggle = document.getElementById('darkModeToggle');

  searchButton.addEventListener('click', function () {
    performSearch();
  });

  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  darkModeToggle.addEventListener('click', function () {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    chrome.storage.sync.set({ darkMode: isDarkMode });
  });

  // Retrieve dark mode preference on extension load
  chrome.storage.sync.get('darkMode', function (result) {
    const isDarkMode = result.darkMode;
    if (isDarkMode !== undefined) {
      document.body.classList.toggle('dark-mode', isDarkMode);
    }
  });

  function performSearch() {
    const searchValue = searchInput.value.trim();
    const searchEngine = document.getElementById('searchEngine').value;
  
    if (searchValue === '') {
      window.location.href = 'https://bedantadey17.github.io';
      return;
    }
  
    let url;
    if (searchEngine === 'google') {
      url = `https://www.google.com/search?q=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'wikipedia') {
      url = `https://en.wikipedia.org/wiki/${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'youtube') {
      url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'bing') {
      url = `https://www.bing.com/search?q=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'ddg') {
      url = `https://duckduckgo.com/?q=${encodeURIComponent(searchValue)}`;
    }
  
  }  
});



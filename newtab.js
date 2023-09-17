document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const searchEngineSelect = document.getElementById('searchEngine');
  const darkModeToggle = document.getElementById('darkModeToggle');
  
  // Load the last selected search engine from localStorage or set the default value
  searchEngineSelect.value = localStorage.getItem('selectedSearchEngine') || 'google';

  searchButton.addEventListener('click', function () {
    var paragraph = document.getElementById("p");
    var text = document.createTextNode("Searching...");
    paragraph.appendChild(text);

    performSearch();
  });

  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      var paragraph = document.getElementById("p");
      var text = document.createTextNode("Searching...");
      paragraph.appendChild(text);

      performSearch();
    }
  });

  // DARK MODE SAVER

  darkModeToggle.addEventListener('click', function () {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    chrome.storage.sync.set({ darkMode: isDarkMode });
  });

  chrome.storage.sync.get('darkMode', function (result) {
    const isDarkMode = result.darkMode;
    if (isDarkMode !== undefined) {
      document.body.classList.toggle('dark-mode', isDarkMode);
    }
  });

  function performSearch() {
    const searchValue = searchInput.value.trim();
    const searchEngine = searchEngineSelect.value;

    if (searchValue === '') {
      window.location.href = 'https://bedantadey.me/';
      return;
    }

    let url;
    if (searchEngine === 'google') {
      url = `https://www.google.com/search?q=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'bing') {
      url = `https://www.bing.com/search?q=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'ddg') {
      url = `https://duckduckgo.com/?q=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'startpage') {
      url = `https://www.startpage.com/do/dsearch?query=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'ecosia') {
      url = `https://www.ecosia.org/search?q=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'wikipedia') {
      url = `https://en.wikipedia.org/wiki/${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'youtube') {
      url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'britannica') {
      url = `https://www.britannica.com/search?query=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'pubchem') {
      url = `https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(searchValue)}`;
    } else if (searchEngine === 'brave') {
      url = `https://search.brave.com/search?q=${encodeURIComponent(searchValue)}`;
    }

    if (url) {
      window.location.href = url;
    }

    // SEARCH SAVER
    localStorage.setItem('selectedSearchEngine', searchEngine);
  }
});

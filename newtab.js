document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const searchEngineSelect = document.getElementById('searchEngine');
  const backgroundColorPicker = document.getElementById('backgroundColorPicker');
  const bookIcon = document.getElementById('bookIcon');
  const globeIcon = document.getElementById('globeIcon');
  const githubIcon = document.getElementById('githubIcon');
  const footer = document.querySelector('footer');
  
  // LOAD SEARCH
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

  // STORE COLOR
  backgroundColorPicker.addEventListener('input', function () {
    const selectedColor = backgroundColorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    const textColor = isDarkColor(selectedColor) ? '#fff' : '#000';
    document.body.style.color = textColor;
    localStorage.setItem('backgroundColor', selectedColor);
    globeIcon.style.color = textColor;
    bookIcon.style.color = textColor;
    githubIcon.style.color = textColor;
    footer.style.color = textColor;
  });

  // LOAD STORED COLOR
  const savedBackgroundColor = localStorage.getItem('backgroundColor');
  if (savedBackgroundColor) {
    document.body.style.backgroundColor = savedBackgroundColor;
    backgroundColorPicker.value = savedBackgroundColor;
    const textColor = isDarkColor(savedBackgroundColor) ? '#fff' : '#000';
    document.body.style.color = textColor;
    globeIcon.style.color = textColor;
    bookIcon.style.color = textColor;
    githubIcon.style.color = textColor;
    footer.style.color = textColor;
  }

  // SEARCH FUNCTION

  function performSearch() {
    const searchValue = searchInput.value.trim();
    const searchEngine = searchEngineSelect.value;

    if (searchValue === '') {
      window.location.href = 'https://bedantadey.me/';
      return;
    }

    let url;
    switch (searchEngine) {
      case 'google':
        url = `https://www.google.com/search?q=${encodeURIComponent(searchValue)}`;
        break;
      case 'bing':
        url = `https://www.bing.com/search?q=${encodeURIComponent(searchValue)}`;
        break;
      case 'ddg':
        url = `https://duckduckgo.com/?q=${encodeURIComponent(searchValue)}`;
        break;
      case 'startpage':
        url = `https://www.startpage.com/do/dsearch?query=${encodeURIComponent(searchValue)}`;
        break;
      case 'ecosia':
        url = `https://www.ecosia.org/search?q=${encodeURIComponent(searchValue)}`;
        break;
      case 'brave':
        url = `https://search.brave.com/search?q=${encodeURIComponent(searchValue)}`;
        break;
      case 'wikipedia':
        url = `https://en.wikipedia.org/wiki/${encodeURIComponent(searchValue)}`;
        break;
      case 'youtube':
        url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchValue)}`;
        break;
      case 'britannica':
        url = `https://www.britannica.com/search?query=${encodeURIComponent(searchValue)}`;
        break;
      case 'pubchem':
        url = `https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(searchValue)}`;
        break;
      case 'github':
        url = `https://github.com/search?q=${encodeURIComponent(searchValue)}`;
        break;
    }
    
    if (url) {
      window.location.href = url;
    }    

    // SEARCH SAVER
    localStorage.setItem('selectedSearchEngine', searchEngine);
  }

   // CHECK IF COLOR IS DARK
   function isDarkColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }


  // EASTER EGG!!
  function setRandomTitle() {
    const randomNumber = Math.random(); 
    const titleElement = document.querySelector('h2');
    
    if (randomNumber <= 0.05) {
      titleElement.textContent = "☆*: o(≧▽≦)o :*☆";
    } else {
      titleElement.textContent = "Unifsearch";
    }
  }
  setRandomTitle();


});

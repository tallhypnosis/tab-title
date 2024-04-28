document.addEventListener('DOMContentLoaded', function () {
    const getTabTitleButton = document.getElementById('getTabTitle');
    const tabTitleDiv = document.getElementById('tabTitle');
  
    getTabTitleButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabTitle = tabs[0].title;
        tabTitleDiv.textContent = `Current tab title is: ${tabTitle}`;
      });
    });
  });
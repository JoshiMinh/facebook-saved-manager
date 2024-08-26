// popup.js

document.getElementById('removeSelected').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => chrome.runtime.sendMessage({ action: 'removeSelected' })
      });
    });
  });
  
  document.getElementById('removeAll').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => chrome.runtime.sendMessage({ action: 'removeAll' })
      });
    });
  });
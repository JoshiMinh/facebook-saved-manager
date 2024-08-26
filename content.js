// content.js

function removePost(post) {
    const removeButton = post.querySelector('button'); // Adjust this selector to target the remove button
    if (removeButton) {
      removeButton.click(); // Click the button to remove the post
    }
  }
  
  function removeSelectedPosts() {
    const selectedPosts = document.querySelectorAll('.post-selector:checked'); // Adjust selector for checked posts
    selectedPosts.forEach(post => {
      const postElement = post.closest('.post'); // Adjust this selector to identify the post element
      if (postElement) {
        removePost(postElement);
      }
    });
  }
  
  function removeAllPosts() {
    const allPosts = document.querySelectorAll('.post'); // Adjust selector to target all posts
    allPosts.forEach(post => {
      removePost(post);
    });
  }
  
  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'removeSelected') {
      removeSelectedPosts();
    } else if (request.action === 'removeAll') {
      removeAllPosts();
    }
  });
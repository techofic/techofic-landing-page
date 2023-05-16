// Get all the tab elements
const tabs = document.querySelectorAll('.tab');

// Get all the tab content elements
const tabContents = document.querySelectorAll('.tab-content');

// Loop through each tab element
tabs.forEach(tab => {
  // Add a click event listener to the tab
  tab.addEventListener('click', () => {
    // Remove the active class from all tabs
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    // Add the active class to the clicked tab
    tab.classList.add('active');
    // Hide all tab content elements
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    // Show the tab content element corresponding to the clicked tab
    const target = tab.getAttribute('data-target');
    const content = document.getElementById(target);
    content.classList.add('active');
  });
});
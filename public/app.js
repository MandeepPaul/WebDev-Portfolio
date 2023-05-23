// Button
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    //console.log(toggleButton); Test
  
      

// Check the initial theme preference
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const siteTheme = localStorage.getItem('theme');

// Apply the initial theme preference
if (siteTheme === 'dark' || (siteTheme === null && systemTheme)) {
  document.documentElement.classList.add('dark');
}

// Toggle theme function
function themeSwitch() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", "dark");
  }
  //console.log("Click!!"); Test
}

// Add click event listener to the toggle button
toggleButton.addEventListener('click', themeSwitch);

// Check if you are on the home page
if (window.location.pathname === '/') {
  const heading = document.getElementById('heading');
  heading.classList.add('animate-slide-in');
}

});



// Find the elements we want to interact with.
const helloBtn = document.getElementById('helloBtn');
const message = document.getElementById('message');
const themeBtn = document.getElementById('themeBtn');

// Change the text when someone clicks the button.
helloBtn.addEventListener('click', function () {
  message.textContent = 'Hello! 🎉 You just used JavaScript!';
});

// Switch between light and dark colors.
themeBtn.addEventListener('click', function () {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
});

// Always display the current year in the footer.
document.getElementById('year').textContent = new Date().getFullYear();

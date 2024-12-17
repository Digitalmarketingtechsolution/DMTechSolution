const navbar = document.getElementById("navbar");
const containers = document.querySelectorAll('.containers');
const movingContent = document.getElementById('movingContent');

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

containers.forEach(container => {
  observer.observe(container);
});


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  movingContent.style.transform = `translateX(-50%) translateY(${scrollY * 0.5}px)`;
});

// Arrays to hold the titles and descriptions
// Arrays to hold the titles and descriptions
const titles = [
  "Welcome to Our Website",
  "Explore Our Innovative Solutions",
  "Transforming Ideas into Reality",
  "Your Trusted Tech Partner"
];

const descriptions = [
  "We provide excellent services to our clients.",
  "Creating impact with technology.",
  "Dedicated to delivering quality solutions.",
  "Empowering businesses through innovation."
];

// Variable to track the current index
let currentIndex = 0;

// Function to change content
function changeContent() {
  // Select the title and description elements
  const titleElement = document.getElementById('hero-title');
  const descriptionElement = document.getElementById('hero-description');
  
  // Set new title and description
  titleElement.textContent = titles[currentIndex];
  descriptionElement.textContent = descriptions[currentIndex];

  // Move to the next index
  currentIndex = (currentIndex + 1) % titles.length;  // Loop back to the first index after reaching the last
}

// Start by calling the function once immediately to show the first content
changeContent();

// Change the content every 3 seconds (3000 ms)
setInterval(changeContent, 3000);


// Pricing Data
const prices = {
  redesign: { basic: 199, standard: 499, premium: 999 },
  custom: { basic: 299, standard: 799, premium: 1499 },
};

// Update Total Amount Function
function updateAmount(card, option) {
  const amount = prices[card][option];
  const totalElement = document.getElementById(`${card}-total`);
  totalElement.innerText = amount;
}

// Define a custom HTML element for the navigation bar
class NavBar extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
		<div id="navbar">
			<nav class="navbar">
				<a class="sitetitle" href="index.html">Harshit Jain</a>
				
				<!-- Mobile menu toggle button -->
				<div class="menu-toggle">
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
				</div>
				
				<div class="links">
					<!-- Navigation links -->
					<a class="navlink hoverlink" href="resume.html">Resume</a>
					
					<!-- Dropdown menu for Projects -->
					<div class="dropdown navlink">
						<button class="dropbtn">Projects</button>
						<div class="dropdown-content">
							<a class="resource" href="school.html">School</a>
							<a class="resource" href="personal.html">Personal</a>
						</div>
					</div>

					<!-- Dropdown menu for I-STEM -->
					<div class="dropdown navlink">
						<button class="dropbtn">I-STEM</button>
						<div class="dropdown-content">
							<a class="resource" href="grade9.html">Grade 9</a>
							<a class="resource" href="grade10.html">Grade 10</a>
							<a class="resource" href="grade11.html">Grade 11</a>
						</div>
					</div>

					<!-- Additional navigation links -->
					<a class="navlink hoverlink" href="research.html">Research</a>
					<a class="navlink hoverlink" href="contact.html">Contact</a>
				</div>
			</nav>
		</div>
		`;
		
		// Add event listener for mobile menu toggle
		this.querySelector('.menu-toggle').addEventListener('click', () => {
			this.querySelector('.links').classList.toggle('active');
			this.querySelector('.menu-toggle').classList.toggle('active');
		});
		
		// Close mobile menu when clicking outside
		document.addEventListener('click', (event) => {
			const isInside = event.target.closest('.navbar');
			const isMenuToggle = event.target.closest('.menu-toggle');
			const isDropdownBtn = event.target.closest('.dropbtn');
			const isLinks = this.querySelector('.links');
			
			if (!isInside && isLinks.classList.contains('active') && !isMenuToggle) {
				isLinks.classList.remove('active');
				this.querySelector('.menu-toggle').classList.remove('active');
			}
		});
		
		// Add event listeners for dropdown menus in mobile view
		const dropdowns = this.querySelectorAll('.dropdown');
		dropdowns.forEach(dropdown => {
			dropdown.addEventListener('click', (e) => {
				if (window.innerWidth <= 768) {
					const dropdownContent = dropdown.querySelector('.dropdown-content');
					dropdowns.forEach(otherDropdown => {
						if (otherDropdown !== dropdown) {
							otherDropdown.querySelector('.dropdown-content').classList.remove('show');
						}
					});
					dropdownContent.classList.toggle('show');
					e.stopPropagation();
				}
			});
		});
		
		// Handle window resize
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				this.querySelector('.links').classList.remove('active');
				this.querySelector('.menu-toggle').classList.remove('active');
				this.querySelectorAll('.dropdown-content').forEach(content => {
					content.classList.remove('show');
				});
			}
		});
	}
}

// Register the custom element <nav-bar>
customElements.define('nav-bar', NavBar);

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "30px";
    toggleButton.style.right = "30px";
    toggleButton.style.padding = "12px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontSize = "20px";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "50%";
    toggleButton.style.width = "40px";
    toggleButton.style.height = "40px";
    toggleButton.style.zIndex = "1000";
    toggleButton.style.display = "flex";
    toggleButton.style.alignItems = "center";
    toggleButton.style.justifyContent = "center";
    document.body.appendChild(toggleButton);

    const root = document.documentElement;

    // Function to apply the theme
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            root.style.setProperty("--navy", "#141414");
            root.style.setProperty("--midnight", "#222126");
            root.style.setProperty("--snow", "#edeef0");
            root.style.setProperty("--denim", "#373740");
            toggleButton.innerHTML = "\u2600"; // Sun symbol for light mode
            toggleButton.style.background = "#f0f0f0";
            toggleButton.style.color = "#000";
        } else {
            root.style.setProperty("--navy", "#f2ede4");
            root.style.setProperty("--midnight", "#c9bba5");
            root.style.setProperty("--snow", "#251a14");
            root.style.setProperty("--denim", "#5a5148");
            toggleButton.innerHTML = "\u263D"; // Moon symbol for dark mode
            toggleButton.style.background = "#d6c4b5";
            toggleButton.style.color = "#4a3f37";
        }
    }

    // Load the saved mode from localStorage (default to light mode if not set)
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    applyTheme(isDarkMode);

    // Toggle button click event
    toggleButton.addEventListener("click", function () {
        const newDarkMode = !(localStorage.getItem("darkMode") === "true");
        localStorage.setItem("darkMode", newDarkMode);
        applyTheme(newDarkMode);
    });
});
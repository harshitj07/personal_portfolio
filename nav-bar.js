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
					<span></span>
					<span></span>
					<span></span>
					<span></span>
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
		
		<!-- Mobile Full Screen Menu -->
		<div class="mobile-menu">
			<div class="mobile-menu-links">
				<a class="mobile-menu-link" href="resume.html">Resume</a>
				<a class="mobile-menu-link" href="#" data-submenu="projects">Projects</a>
				<a class="mobile-menu-link" href="#" data-submenu="i-stem">I-STEM</a>
				<a class="mobile-menu-link" href="research.html">Research</a>
				<a class="mobile-menu-link" href="contact.html">Contact</a>
			</div>
		</div>
		
		<!-- Mobile Submenus -->
		<div class="mobile-submenu" id="projects-submenu">
			<div class="mobile-submenu-header">
				<button class="mobile-back-button">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
						<path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
					</svg>
					Back
				</button>
				<div class="mobile-submenu-title">Projects</div>
			</div>
			<div class="mobile-submenu-links">
				<a class="mobile-submenu-link" href="school.html">School</a>
				<a class="mobile-submenu-link" href="personal.html">Personal</a>
			</div>
		</div>
		
		<div class="mobile-submenu" id="i-stem-submenu">
			<div class="mobile-submenu-header">
				<button class="mobile-back-button">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
						<path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
					</svg>
					Back
				</button>
				<div class="mobile-submenu-title">I-STEM</div>
			</div>
			<div class="mobile-submenu-links">
				<a class="mobile-submenu-link" href="grade9.html">Grade 9</a>
				<a class="mobile-submenu-link" href="grade10.html">Grade 10</a>
				<a class="mobile-submenu-link" href="grade11.html">Grade 11</a>
			</div>
		</div>
		`;
		
		// Mobile menu functionality
		const menuToggle = this.querySelector('.menu-toggle');
		const mobileMenu = this.querySelector('.mobile-menu');
		const mobileMenuLinks = this.querySelectorAll('.mobile-menu-link[data-submenu]');
		const mobileBackButtons = this.querySelectorAll('.mobile-back-button');
		
		// Toggle mobile menu
		menuToggle.addEventListener('click', () => {
			menuToggle.classList.toggle('open');
			mobileMenu.classList.toggle('open');
			document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
		});
		
		// Open submenu when clicking on menu item with dropdown
		mobileMenuLinks.forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const submenuId = link.getAttribute('data-submenu');
				const submenu = this.querySelector(`#${submenuId}-submenu`);
				submenu.classList.add('open');
			});
		});
		
		// Go back from submenu
		mobileBackButtons.forEach(button => {
			button.addEventListener('click', () => {
				const submenu = button.closest('.mobile-submenu');
				submenu.classList.remove('open');
			});
		});
		
		// Close mobile menu when clicking outside
		document.addEventListener('click', (event) => {
			const isInsideNav = event.target.closest('#navbar');
			const isInsideMobileMenu = event.target.closest('.mobile-menu');
			const isInsideSubmenu = event.target.closest('.mobile-submenu');
			const isMenuOpen = mobileMenu.classList.contains('open');
			
			if (!isInsideNav && !isInsideMobileMenu && !isInsideSubmenu && isMenuOpen && !event.target.closest('.menu-toggle')) {
				menuToggle.classList.remove('open');
				mobileMenu.classList.remove('open');
				document.body.style.overflow = '';
			}
		});
		
		// Handle window resize
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				menuToggle.classList.remove('open');
				mobileMenu.classList.remove('open');
				document.body.style.overflow = '';
				
				// Close any open submenus
				const openSubmenus = this.querySelectorAll('.mobile-submenu.open');
				openSubmenus.forEach(submenu => {
					submenu.classList.remove('open');
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
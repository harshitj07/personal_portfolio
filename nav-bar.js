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
		<div class="fullscreen-menu">
            <div class="close-btn"><i class="fas fa-times"></i></div>
            <a href="index.html">Home</a>
            <a href="resume.html">Resume</a>
            <a class="submenu-toggle">Projects</a>
            <div class="submenu">
                <a href="school.html">School</a>
                <a href="personal.html">Personal</a>
            </div>
            <a class="submenu-toggle">I-STEM</a>
            <div class="submenu">
                <a href="grade9.html">Grade 9</a>
                <a href="grade10.html">Grade 10</a>
                <a href="grade11.html">Grade 11</a>
            </div>
            <a href="research.html">Research</a>
            <a href="contact.html">Contact</a>
        </div>
		`;
		
		const menuToggle = this.querySelector('.menu-toggle');
		const fullscreenMenu = this.querySelector('.fullscreen-menu');
		const closeBtn = this.querySelector('.close-btn');
		const submenuToggles = this.querySelectorAll('.submenu-toggle');

		// Open full-screen menu with animation
		menuToggle.addEventListener('click', () => {
			fullscreenMenu.classList.add('active');
		});

		// Close full-screen menu
		closeBtn.addEventListener('click', () => {
			fullscreenMenu.classList.remove('active');
		});

		// Toggle submenus
		submenuToggles.forEach(toggle => {
			toggle.addEventListener('click', (e) => {
				const submenu = toggle.nextElementSibling;
				submenu.classList.toggle('active');
				e.stopPropagation();
			});
		});

		// Close menu when clicking outside
		document.addEventListener('click', (event) => {
			if (!event.target.closest('.fullscreen-menu') && !event.target.closest('.menu-toggle')) {
				fullscreenMenu.classList.remove('active');
				this.querySelectorAll('.submenu').forEach(submenu => submenu.classList.remove('active'));
			}
		});

		// Ensure the 3-line menu toggle is only visible on smaller screens
		const handleResize = () => {
			if (window.innerWidth > 768) {
				fullscreenMenu.classList.remove('active');
				this.querySelectorAll('.submenu').forEach(submenu => submenu.classList.remove('active'));
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();
	}
}

// Register the custom element <nav-bar>
customElements.define('nav-bar', NavBar);

document.addEventListener("DOMContentLoaded", function () {
    // Force check mobile functionality on page load
    const isMobile = window.innerWidth <= 768;
  
    // Debug mobile detection
    console.log("Mobile detected:", isMobile);
  
    // Force mobile menu toggle to be visible on mobile devices
    if (isMobile) {
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.style.display = 'flex';
        }
        
        const links = document.querySelector('.links');
        if (links) {
            links.style.display = 'none';
        }
    }

    const toggleButton = document.createElement("button");
    // Adjust position to be more out of the way on mobile
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = isMobile ? "50px" : "30px";
    toggleButton.style.right = isMobile ? "50px" : "30px";
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
    toggleButton.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(toggleButton);

    const root = document.documentElement;

    // Function to apply the theme with the same icons, but ensure they work on mobile
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            root.style.setProperty("--navy", "#141414");
            root.style.setProperty("--midnight", "#222126");
            root.style.setProperty("--snow", "#edeef0");
            root.style.setProperty("--denim", "#373740");
            toggleButton.innerHTML = "\u2600"; // Keep original sun symbol
            toggleButton.style.background = "#f0f0f0";
            toggleButton.style.color = "#000";
            // Ensure visibility on mobile dark mode
            toggleButton.style.boxShadow = "0 3px 10px rgba(255, 255, 255, 0.15)";
            toggleButton.style.opacity = "0.9";
        } else {
            root.style.setProperty("--navy", "#f2ede4");
            root.style.setProperty("--midnight", "#c9bba5");
            root.style.setProperty("--snow", "#251a14");
            root.style.setProperty("--denim", "#5a5148");
            toggleButton.innerHTML = "\u263D"; // Keep original moon symbol
            toggleButton.style.background = "#3a2518"; // Darker background for better contrast
            toggleButton.style.color = "#f2ede4";
            // Ensure visibility on mobile light mode
            toggleButton.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.3)";
            toggleButton.style.opacity = "0.9";
        }
        
        // Make touch targets larger on mobile
        if (isMobile) {
            toggleButton.style.width = "50px";
            toggleButton.style.height = "50px";
            toggleButton.style.fontSize = "24px";
        }
    }

    // Window resize handler to ensure proper button positioning and sizing when orientation changes
    window.addEventListener('resize', function() {
        const isMobileNow = window.innerWidth <= 768;
        toggleButton.style.bottom = isMobileNow ? "50px" : "30px";
        toggleButton.style.right = isMobileNow ? "50px" : "30px";
        
        if (isMobileNow) {
            toggleButton.style.width = "50px";
            toggleButton.style.height = "50px";
            toggleButton.style.fontSize = "24px";
        } else {
            toggleButton.style.width = "40px";
            toggleButton.style.height = "40px";
            toggleButton.style.fontSize = "20px";
        }
    });

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


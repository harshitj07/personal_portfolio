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
    const toggleButton = document.createElement("button");
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
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

    // Enhanced mobile detection for better positioning
    function updateUIForDevice() {
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 480;
        
        // Theme toggle positioning
        if (isMobile) {
            toggleButton.style.bottom = "20px";
            toggleButton.style.right = "20px";
        } else {
            toggleButton.style.bottom = "30px";
            toggleButton.style.right = "30px";
        }
        
        // Menu toggle positioning
        const menuToggle = document.querySelector('.menu-toggle');
        if (!menuToggle) return;
        
        menuToggle.style.display = isMobile ? 'flex' : 'none';
        
        if (isMobile) {
            menuToggle.style.position = 'absolute';
            menuToggle.style.top = '50%';
            menuToggle.style.right = '10px';
            menuToggle.style.transform = 'translateY(-50%)';
            menuToggle.style.background = 'transparent';
            menuToggle.style.zIndex = '1001';
        }
    }
    
    // Run on initial load and when window is resized
    updateUIForDevice();
    window.addEventListener('resize', updateUIForDevice);
    window.addEventListener('orientationchange', updateUIForDevice);
    
    // Set positions again after a short delay to ensure they override any other styles
    setTimeout(updateUIForDevice, 500);
});

/**
 * This script specifically ensures the 3-line toggle stays positioned correctly
 */
(function() {
    // Function to adjust the toggle position
    function fixTogglePosition() {
        const isMobile = window.innerWidth <= 768;
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (!menuToggle) return;
        
        if (isMobile) {
            // Force the position to be absolute with !important-like specificity
            menuToggle.setAttribute('style', 
                'position: absolute !important; ' +
                'top: 50% !important; ' +
                'right: 10px !important; ' + 
                'transform: translateY(-50%) !important; ' +
                'display: flex !important; ' +
                'background: transparent !important; ' +
                'padding: 0 !important; ' +
                'z-index: 1001 !important;'
            );
        }
    }
    
    // Run when DOM is loaded
    document.addEventListener("DOMContentLoaded", fixTogglePosition);
    
    // Also run on resize in case anything tries to change it
    window.addEventListener('resize', fixTogglePosition);
    
    // Run again after a small delay to override any other scripts
    setTimeout(fixTogglePosition, 500);
    
    // Also run on orientation change which is important for mobile
    window.addEventListener('orientationchange', fixTogglePosition);
    
    // Run several times to catch any CSS that might be overriding our styles
    setTimeout(fixTogglePosition, 100);
    setTimeout(fixTogglePosition, 500);
    setTimeout(fixTogglePosition, 1000);
})();

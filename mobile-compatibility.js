/**
 * Mobile Compatibility Enhancement Script
 * This script ensures all pages have consistent mobile functionality
 */

document.addEventListener("DOMContentLoaded", function() {
    // Check if viewport meta tag exists, add it if not
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewportMeta = document.createElement('meta');
        viewportMeta.name = 'viewport';
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(viewportMeta);
        console.log("Added missing viewport meta tag");
    }

    // Force proper sizing for mobile
    const isMobile = window.innerWidth <= 768;
    console.log("Mobile device detected:", isMobile);
    
    // Force mobile menu to be visible only on small screens
    if (isMobile) {
        // Ensure hamburger menu is visible in mobile mode only
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            // Force absolute positioning with stronger specificity
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
        
        // Fix theme toggle position and appearance for mobile
        const themeToggle = document.querySelector('button[style*="position: fixed"][style*="bottom:"][style*="right:"]');
        if (themeToggle) {
            themeToggle.style.bottom = '15px';
            themeToggle.style.right = '15px';
            themeToggle.style.width = '40px';
            themeToggle.style.height = '40px';
            themeToggle.style.fontSize = '18px';
            
            // Check if icon is present, if not replace with FontAwesome icon
            if (themeToggle.textContent.includes('☀') || themeToggle.textContent.includes('☽') || 
                themeToggle.textContent.includes('\u2600') || themeToggle.textContent.includes('\u263D')) {
                
                const isDarkMode = localStorage.getItem("darkMode") === "true";
                if (isDarkMode) {
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                    themeToggle.style.color = '#f39c12'; // Yellow/orange sun color
                } else {
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                    themeToggle.style.color = '#34495e'; // Dark blue moon color
                }
                
                // Center the icon inside the button
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.style.display = 'flex';
                    icon.style.alignItems = 'center';
                    icon.style.justifyContent = 'center';
                    icon.style.width = '100%';
                    icon.style.height = '100%';
                }
            }
        }
        
        // Hide desktop links on mobile
        const links = document.querySelector('.links');
        if (links) {
            links.style.display = 'none';
        }
        
        // Fix elements that might overflow on mobile
        document.querySelectorAll('img').forEach(img => {
            // Keep original classes
            const originalClass = img.className;
            // Apply max-width to ensure it doesn't overflow on mobile
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            // Add original class back to maintain other styles
            if (originalClass) img.className = originalClass;
        });
        
        // Make responsive grids collapse properly
        document.querySelectorAll('.grid').forEach(grid => {
            if (window.innerWidth <= 768) {
                grid.style.display = 'block';
            }
        });
        
        // Apply column stack for grid items on mobile
        document.querySelectorAll('[class*="col-span-"]').forEach(col => {
            col.style.width = '100%';
            col.style.maxWidth = '100%';
        });
        
        // Fix fancy boxes width on mobile
        document.querySelectorAll('p.fancy1, p.fancy2, p.fancy3').forEach(box => {
            box.style.width = '90%';
            box.style.margin = '10px auto';
        });
    } else {
        // Ensure menu toggle is hidden on larger screens
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.style.display = 'none';
        }
    }
    
    // Add resize listener to handle orientation changes
    window.addEventListener('resize', function() {
        const isCurrentlyMobile = window.innerWidth <= 768;
        const menuToggle = document.querySelector('.menu-toggle');
        
        // Toggle menu visibility based on screen size
        if (menuToggle) {
            menuToggle.style.display = isCurrentlyMobile ? 'flex' : 'none';
            
            if (isCurrentlyMobile) {
                // Ensure proper positioning in mobile mode
                menuToggle.style.position = 'absolute';
                menuToggle.style.top = '50%';
                menuToggle.style.right = '30px';
                menuToggle.style.transform = 'translateY(-50%)';
            }
        }
        
        // Apply mobile styles when device is mobile-sized
        if (isCurrentlyMobile) {
            document.querySelectorAll('p.fancy1, p.fancy2, p.fancy3').forEach(box => {
                box.style.width = '90%';
                box.style.margin = '10px auto';
            });
            
            document.querySelectorAll('.grid').forEach(grid => {
                grid.style.display = 'block';
            });
            
            document.querySelectorAll('[class*="col-span-"]').forEach(col => {
                col.style.width = '100%';
                col.style.maxWidth = '100%';
            });

            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                // Force the toggle to the very right
                menuToggle.style.position = 'absolute';
                menuToggle.style.top = '50%';
                menuToggle.style.transform = 'translateY(-50%)';
                menuToggle.style.right = '10px'; // Move very right
            }
        } else {
            // Revert to desktop styles when screen is larger
            document.querySelectorAll('.grid').forEach(grid => {
                grid.style.display = 'grid';
            });
        }
    });
    
    // Add orientation change handling to fix positions after rotation
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle && window.innerWidth <= 768) {
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
            
            // Fix theme toggle position and appearance
            const themeToggle = document.querySelector('button[style*="position: fixed"][style*="bottom:"][style*="right:"]');
            if (themeToggle) {
                themeToggle.style.bottom = '15px';
                themeToggle.style.right = '15px';
                themeToggle.style.width = '40px';
                themeToggle.style.height = '40px';
                themeToggle.style.fontSize = '18px';
                
                // Ensure icon is properly centered
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.style.display = 'flex';
                    icon.style.alignItems = 'center';
                    icon.style.justifyContent = 'center';
                    icon.style.width = '100%';
                    icon.style.height = '100%';
                }
            }
        }, 300); // Short delay to allow the orientation to complete
    });
});

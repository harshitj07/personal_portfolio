/* Mobile Compatibility Enhancement Script */

document.addEventListener("DOMContentLoaded", function() {
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
        
        // Fix theme toggle position for mobile
        const themeToggle = document.querySelector('button[style*="position: fixed"][style*="bottom:"][style*="right:"]');
        if (themeToggle) {
            themeToggle.style.bottom = '20px';
            themeToggle.style.right = '20px';
        }
        
        // Hide desktop links on mobile
        const links = document.querySelector('.links');
        if (links) {
            links.style.display = 'none';
        }
        
        // Fix elements that might overflow on mobile
        document.querySelectorAll('img').forEach(img => {
            const originalClass = img.className;
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
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

        // Fix centering of specific elements on homepage
        if (document.body.id === 'home-page') {
            const skillsSection = document.querySelector('h2:nth-of-type(2) + .course');
            if (skillsSection) {
                skillsSection.style.width = '95%';
                skillsSection.style.margin = '0 auto';
                
                skillsSection.querySelectorAll('.col-span-4 p.fancy3').forEach(box => {
                    box.style.width = '100%';
                    box.style.margin = '10px auto';
                    box.style.boxSizing = 'border-box';
                });
            }
            
            // Center testimonials section
            const testimonialsSection = document.querySelector('h2:nth-of-type(3) + .me');
            if (testimonialsSection) {
                testimonialsSection.style.width = '95%';
                testimonialsSection.style.margin = '0 auto 20px auto';
                
                // Center each testimonial box
                testimonialsSection.querySelectorAll('.col-span-4 p.fancy3').forEach(box => {
                    box.style.width = '100%';
                    box.style.margin = '0 auto 15px auto';
                    box.style.boxSizing = 'border-box';
                });
            }
            
            // Fix gallery centering
            document.querySelectorAll('div.gallery').forEach(gallery => {
                gallery.style.width = '90%';
                gallery.style.margin = '0 auto 15px auto';
                gallery.style.display = 'flex';
                gallery.style.justifyContent = 'center';
                gallery.style.gap = '15px';
            });
        }
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
                menuToggle.style.right = '10px';
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
            
            // Fix theme toggle position
            const themeToggle = document.querySelector('button[style*="position: fixed"][style*="bottom:"][style*="right:"]');
            if (themeToggle) {
                themeToggle.style.bottom = '20px';
                themeToggle.style.right = '20px';
            }

            if (document.body.id === 'home-page' && window.innerWidth <= 768) {
                const skillsSection = document.querySelector('h2:nth-of-type(2) + .course');
                if (skillsSection) {
                    skillsSection.style.width = '95%';
                    skillsSection.style.margin = '0 auto';
                    
                    skillsSection.querySelectorAll('.col-span-4 p.fancy3').forEach(box => {
                        box.style.width = '100%';
                        box.style.margin = '10px auto';
                    });
                }
            }
        }, 300); // Short delay to allow the orientation to complete
    });
});

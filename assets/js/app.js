
window.addEventListener('DOMContentLoaded', event => {

    
    let navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('.navbar');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    }

    // Shrink the navbar 
    navbarShrink()

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink)

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('.navbar')
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar',
            offset: 74,
        })
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#menu .nav-link')
    )
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click()
            }
        })
    })

})

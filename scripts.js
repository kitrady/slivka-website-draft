// wait for the HTML to finish loading so querySelector below can find these elements
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");
    // every top-level nav item that has its own submenu (About, People, etc.)
    const dropdownItems = nav.querySelectorAll(".menu-item.has-dropdown");
    // real destination links: dropdown-less top items + every submenu link.
    // clicking one of these should close the whole mobile menu, like navigating away
    const leafLinks = nav.querySelectorAll(".menu-item:not(.has-dropdown) > .header-links, .dropdown a");

    // shows the mobile hamburger menu
    function openMenu() {
        nav.classList.add("show");
        toggle.setAttribute("aria-expanded", "true");
    }

    // hides the mobile hamburger menu, and any dropdown left open inside it
    function closeMenu() {
        nav.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
        closeAllDropdowns();
    }

    // closes every open dropdown, except the one passed in (if any).
    // the "except" is what makes opening one dropdown close the others without closing itself
    function closeAllDropdowns(except) {
        dropdownItems.forEach(item => {
            if (item !== except) {
                item.classList.remove("open");
                item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
            }
        });
    }

    // hamburger button: toggle the mobile menu open/closed
    toggle.addEventListener("click", (e) => {
        // stop this click from also triggering the document-level "click outside" listener below
        e.stopPropagation();
        if (nav.classList.contains("show")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // wire up each dropdown item's label text AND chevron to open/close its own submenu
    dropdownItems.forEach(item => {
        const label = item.querySelector(".header-links");
        const dropdownToggle = item.querySelector(".dropdown-toggle");

        function toggleDropdown(e) {
            // stops the placeholder "#" link from jumping the page to the top
            e.preventDefault();
            // stops this click from also triggering the document-level "click outside" listener below
            e.stopPropagation();
            const isOpen = item.classList.contains("open");
            // close any other open dropdown first, so only one is ever open at a time
            closeAllDropdowns(item);
            item.classList.toggle("open", !isOpen);
            dropdownToggle.setAttribute("aria-expanded", String(!isOpen));
        }

        label.addEventListener("click", toggleDropdown);
        dropdownToggle.addEventListener("click", toggleDropdown);
    });

    // clicking a real destination link closes the whole mobile menu, as if navigating away
    leafLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // clicking anywhere outside the nav: close the mobile menu if it's open,
    // otherwise (desktop) just close whichever dropdown is currently open
    document.addEventListener("click", (e) => {
        if (nav.classList.contains("show") && !nav.contains(e.target) && e.target !== toggle) {
            closeMenu();
        } else if (!nav.contains(e.target)) {
            closeAllDropdowns();
        }
    });

    // Escape key closes everything, for keyboard users
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
});

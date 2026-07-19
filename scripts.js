// TODO make comments less AI-y (for a human to do)
// wait for the HTML to finish loading so querySelector below can find these elements
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");
    // every top-level nav item that has its own submenu (About, People, etc.)
    const dropdownItems = nav.querySelectorAll(".menu-item.has-dropdown");
    // real destination links: dropdown-less top items (:not(.has-dropdown) excludes the 5 expandable
    // sections, leaving just Non-Res Application/Feed) + every submenu link (.nav-sub-link).
    // clicking one of these should close the whole mobile menu, like navigating away
    const leafLinks = nav.querySelectorAll(".menu-item:not(.has-dropdown) > .header-links, .nav-sub-link");

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
    // the "except" parameter is what lets opening one dropdown close the others without closing itself
    function closeAllDropdowns(except) {
        dropdownItems.forEach(function (item) {
            const isTheOneToKeepOpen = item === except;
            if (isTheOneToKeepOpen) {
                // because we are using a callback function, this does not exit the "loop" early
                return;
            }
            item.classList.remove("open");
            const chevron = item.querySelector(".dropdown-toggle");
            chevron.setAttribute("aria-expanded", "false");
        });
    }

    // hamburger button: toggle the mobile menu open or closed
    toggle.addEventListener("click", function (event) {
        // stop this click from also triggering the document-level "click outside" listener below
        event.stopPropagation();

        const menuIsCurrentlyOpen = nav.classList.contains("show");
        if (menuIsCurrentlyOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // wire up each dropdown item's label text AND chevron to open/close its own submenu
    dropdownItems.forEach(function (item) {
        const label = item.querySelector(".header-links");
        const chevron = item.querySelector(".dropdown-toggle");

        function toggleThisDropdown(event) {
            // stops the placeholder "#" link from jumping the page to the top
            event.preventDefault();
            // stops this click from also triggering the document-level "click outside" listener below
            event.stopPropagation();

            const wasOpen = item.classList.contains("open");
            // close any other open dropdown first, so only one is ever open at a time
            closeAllDropdowns(item);

            if (wasOpen) {
                item.classList.remove("open");
                chevron.setAttribute("aria-expanded", "false");
            } else {
                item.classList.add("open");
                chevron.setAttribute("aria-expanded", "true");
            }
        }

        label.addEventListener("click", toggleThisDropdown);
        chevron.addEventListener("click", toggleThisDropdown);
    });

    // clicking a real destination link closes the whole mobile menu, as if navigating away
    leafLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });

    // clicking anywhere outside the nav: close the mobile menu if it's open,
    // otherwise (desktop) just close whichever dropdown is currently open
    document.addEventListener("click", function (event) {
        const menuIsOpen = nav.classList.contains("show");
        const clickWasOutsideNav = !nav.contains(event.target) && event.target !== toggle;

        if (menuIsOpen && clickWasOutsideNav) {
            closeMenu();
        } else if (clickWasOutsideNav) {
            closeAllDropdowns();
        }
    });

    // Escape key closes everything, for keyboard users
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});

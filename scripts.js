// we need to wait for the HTML of each page to finish loading to ensure elements we are selecting are actually loaded
document.addEventListener("DOMContentLoaded", function () {
    // pages on this site are either sitting at the site's root, or one folder inside it,
    // so each page just says which one it is by setting `pageIsNested` in a <script> tag before this file loads
    let pathToRoot;
    if (pageIsNested) {
        pathToRoot = "../";
    } else {
        pathToRoot = "./";
    }

    // this fetch uses pathToRoot to find header.html and replace the marked elements of the page with the header
    fetch(pathToRoot + "header.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (headerHtml) {
            // selecting the header placeholder and settings its contents to be the header
            // while replacing the %ROOT% placeholders in the header placeholder with the actual path to the root
            document.getElementById("header-placeholder").innerHTML = headerHtml.replaceAll("%ROOT%", pathToRoot);
            setUpHeader();
        });
});

// this function contains everything that is needed to create the behavior of the header
function setUpHeader() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");
    // selecting all the top level nav items that have a dropdown
    const dropdownItems = nav.querySelectorAll(".menu-item.has-dropdown");
    // selecting all the "actual destination" links
    // meaning all the subsection links + the top level nav items that aren't dropdowns
    // we do this by selecting all the children of non-dropdown menu items that are header-links or nav-sub-links
    const leafLinks = nav.querySelectorAll(".menu-item:not(.has-dropdown) > .header-links, .nav-sub-link");

    // this function shows the mobile hamburger menu
    function openMenu() {
        nav.classList.add("show");
        toggle.setAttribute("aria-expanded", "true");
    }

    // this function hides the mobile hamburger menu, and any dropdown left open inside it
    function closeMenu() {
        nav.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
        closeAllDropdowns();
    }

    // this function closes every open dropdown, except the one passed in (if any).
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

    // adds an event listener that allows the mobile hamburger menu to be toggled open or closed
    toggle.addEventListener("click", function (event) {
        // this line stops the click from also triggering the document-level "click outside" listener below
        event.stopPropagation();

        const menuIsCurrentlyOpen = nav.classList.contains("show");
        if (menuIsCurrentlyOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // adds a callback function to each dropdown label's text and chevron that opens and closes its own submenu
    dropdownItems.forEach(function (item) {
        const label = item.querySelector(".header-links");
        const chevron = item.querySelector(".dropdown-toggle");

        // this function is defined within this "for-each" section because its only used in this specific "loop"
        function toggleThisDropdown(event) {
            // this line stops the placeholder "#" link from jumping the page to the top
            event.preventDefault();
            // this line stops this click from also triggering the document-level "click outside" listener below
            event.stopPropagation();

            const wasOpen = item.classList.contains("open");
            // calls this function to close any other open dropdown first, so only one is ever open at a time
            closeAllDropdowns(item);

            if (wasOpen) {
                item.classList.remove("open");
                chevron.setAttribute("aria-expanded", "false");
            } else {
                item.classList.add("open");
                chevron.setAttribute("aria-expanded", "true");
            }
        }

        // using the function we just defined to get the "toggling the dropdown open a closed" behavior we want
        label.addEventListener("click", toggleThisDropdown);
        chevron.addEventListener("click", toggleThisDropdown);
    });

    // adding a callback function to each real destination link that closes the whole mobile menu (user navigating away)
    leafLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });

    // add an event listen that checks if there was a click anywhere outside the nav
    // if so: on mobile, close the whole nav menu dropdown
    // on desktop, just close whichever dropdown is currently open
    document.addEventListener("click", function (event) {
        const menuIsOpen = nav.classList.contains("show");
        const clickWasOutsideNav = !nav.contains(event.target) && event.target !== toggle;

        if (menuIsOpen && clickWasOutsideNav) {
            closeMenu();
        } else if (clickWasOutsideNav) {
            closeAllDropdowns();
        }
    });

    // add an event listen that makes the escape key closes everything (for keyboard users)
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

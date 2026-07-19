document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");
    const links = nav.querySelectorAll(".header-links");

    function openMenu() {
        nav.classList.add("show");
        document.addEventListener("click", outsideClickListener);
    }

    function closeMenu() {
        nav.classList.remove("show");
        document.removeEventListener("click", outsideClickListener);
    }

    function outsideClickListener() {
        closeMenu();
    }

    toggle.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent click from immediately triggering outsideClick
        if (nav.classList.contains("show")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });
});

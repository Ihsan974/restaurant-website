document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* =========================
       ELEMENTS
    ========================= */

    const header = document.querySelector(".header");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link, .nav-reservation");

    const backToTop = document.querySelector(".back-to-top");

    const menuTabs = document.querySelectorAll(".menu-tab");
    const menuList = document.querySelector("#menuList");

    const reservationForm =
        document.querySelector("#reservationForm");

    const dateInput =
        document.querySelector("#date");

    const heroVideo =
        document.querySelector(".hero-video");


    /* =========================
       HERO VIDEO
    ========================= */

    if (heroVideo) {

        heroVideo.muted = true;

        const playVideo = () => {

            const promise = heroVideo.play();

            if (promise !== undefined) {

                promise.catch(() => {
                    // Browser may block autoplay.
                    // Video remains available with controls disabled.
                });

            }

        };

        playVideo();

        heroVideo.addEventListener("canplay", playVideo);

    }


    /* =========================
       HEADER SCROLL
    ========================= */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =========================
       MOBILE MENU
    ========================= */

    function closeMobileMenu() {

        if (!navbar || !mobileMenuBtn) {
            return;
        }

        navbar.classList.remove("active");

        document.body.classList.remove("no-scroll");

        const icon =
            mobileMenuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

        mobileMenuBtn.setAttribute(
            "aria-label",
            "Open Menu"
        );

    }


    if (mobileMenuBtn && navbar) {

        mobileMenuBtn.addEventListener("click", function () {

            const isOpen =
                navbar.classList.toggle("active");

            document.body.classList.toggle(
                "no-scroll",
                isOpen
            );

            const icon =
                mobileMenuBtn.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

            mobileMenuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Close Menu"
                    : "Open Menu"
            );

        });

    }


    /* =========================
       CLOSE MENU ON LINK CLICK
    ========================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            closeMobileMenu();

        });

    });


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (anchor) {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    if (!targetId || targetId === "#") {
                        return;
                    }

                    const target =
                        document.querySelector(targetId);

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;

                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight;

                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }
            );

        });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 220;


        sections.forEach(function (section) {

            const top =
                section.offsetTop;

            const bottom =
                top + section.offsetHeight;


            if (
                scrollPosition >= top &&
                scrollPosition < bottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =========================
       MENU DATA
    ========================= */

    const menuData = {

        starters: [

            {
                name: "Burrata & Heirloom Tomatoes",
                description:
                    "Fresh burrata, heirloom tomatoes, basil oil, aged balsamic.",
                price: "$16"
            },

            {
                name: "Wild Mushroom Crostini",
                description:
                    "Forest mushrooms, toasted sourdough, parmesan cream.",
                price: "$14"
            },

            {
                name: "Crispy Calamari",
                description:
                    "Lightly fried calamari, lemon aioli, fresh herbs.",
                price: "$15"
            },

            {
                name: "French Onion Soup",
                description:
                    "Slow-cooked onions, beef broth, toasted baguette, gruyère.",
                price: "$12"
            }

        ],


        mains: [

            {
                name: "Black Truffle Pasta",
                description:
                    "Handmade pasta, black truffle, parmesan, and creamy sauce.",
                price: "$28"
            },

            {
                name: "Herb Grilled Salmon",
                description:
                    "Fresh Atlantic salmon, garden herbs, lemon butter, seasonal vegetables.",
                price: "$32"
            },

            {
                name: "Prime Ribeye",
                description:
                    "Premium aged ribeye, roasted garlic, rosemary, and house steak jus.",
                price: "$42"
            },

            {
                name: "Wild Mushroom Risotto",
                description:
                    "Arborio rice, wild mushrooms, parmesan, herbs and white wine.",
                price: "$26"
            }

        ],


        desserts: [

            {
                name: "Classic Tiramisu",
                description:
                    "Mascarpone cream, espresso-soaked ladyfingers and cocoa.",
                price: "$11"
            },

            {
                name: "Chocolate Fondant",
                description:
                    "Warm dark chocolate cake with vanilla ice cream.",
                price: "$13"
            },

            {
                name: "Vanilla Panna Cotta",
                description:
                    "Silky vanilla panna cotta with seasonal berries.",
                price: "$10"
            },

            {
                name: "Lemon Tart",
                description:
                    "Fresh lemon curd, buttery pastry and whipped cream.",
                price: "$10"
            }

        ],


        drinks: [

            {
                name: "La Vita Signature",
                description:
                    "Fresh citrus, herbs, premium tonic and sparkling water.",
                price: "$12"
            },

            {
                name: "Italian Espresso",
                description:
                    "Richly roasted Italian espresso served traditionally.",
                price: "$5"
            },

            {
                name: "Fresh Berry Cooler",
                description:
                    "Seasonal berries, lime, mint and sparkling water.",
                price: "$8"
            },

            {
                name: "House Lemonade",
                description:
                    "Freshly squeezed lemons, mint and natural sweetness.",
                price: "$7"
            }

        ]

    };


    /* =========================
       RENDER MENU
    ========================= */

    function renderMenu(category) {

        if (!menuList) {
            return;
        }

        const items =
            menuData[category];

        if (!items) {
            return;
        }

        menuList.innerHTML = "";


        items.forEach(function (item) {

            const menuItem =
                document.createElement("div");

            menuItem.className =
                "menu-item";


            menuItem.innerHTML = `

                <div class="menu-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                </div>

                <span class="menu-price">
                    ${item.price}
                </span>

            `;


            menuList.appendChild(menuItem);

        });

    }


    /* =========================
       MENU TABS
    ========================= */

    menuTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            menuTabs.forEach(function (item) {

                item.classList.remove("active");

            });


            tab.classList.add("active");


            const category =
                tab.dataset.category;


            renderMenu(category);

        });

    });


    /* Load default menu */

    if (menuList) {

        renderMenu("starters");

    }


    /* =========================
       RESERVATION DATE
    ========================= */

    if (dateInput) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        const todayString =
            `${year}-${month}-${day}`;


        dateInput.min =
            todayString;

    }


    /* =========================
       RESERVATION FORM
    ========================= */

    if (reservationForm) {

        reservationForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .querySelector("#name")
                        ?.value
                        .trim();


                const phone =
                    document
                        .querySelector("#phone")
                        ?.value
                        .trim();


                const date =
                    document
                        .querySelector("#date")
                        ?.value;


                const guests =
                    document
                        .querySelector("#guests")
                        ?.value;


                const message =
                    document
                        .querySelector("#message")
                        ?.value
                        .trim();


                if (
                    !name ||
                    !phone ||
                    !date
                ) {

                    alert(
                        "Please complete all required fields."
                    );

                    return;

                }


                const reservationMessage =

`Hello La Vita Restaurant,

I would like to request a table reservation.

Name: ${name}
Phone: ${phone}
Date: ${date}
Guests: ${guests}
Special Request: ${message || "None"}

Thank you.`;


                const whatsappNumber =
                    "918921033257";


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        reservationMessage
                    );


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    /* =========================
       BACK TO TOP
    ========================= */

    function updateBackToTop() {

        if (!backToTop) {
            return;
        }

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    updateBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =========================
       IMAGE ERROR HANDLING
    ========================= */

    document
        .querySelectorAll("img")
        .forEach(function (image) {

            image.addEventListener(
                "error",
                function () {

                    this.style.background =
                        "#222";

                    this.style.minHeight =
                        "200px";

                    this.alt =
                        "Image unavailable";

                }
            );

        });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =========================
       RESIZE
    ========================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 900
            ) {

                closeMobileMenu();

            }

        }
    );


});

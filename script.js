document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       ELEMENTS
    ======================================== */

    const header = document.querySelector(".header");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navbar = document.querySelector(".navbar");
    const backToTop = document.querySelector(".back-to-top");



    /* ========================================
       HEADER SCROLL EFFECT
    ======================================== */

    function handleHeaderScroll() {

        if (!header) return;

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeaderScroll, {
        passive: true
    });

    handleHeaderScroll();



    /* ========================================
       MOBILE MENU
    ======================================== */

    if (mobileMenuBtn && navbar) {

        mobileMenuBtn.addEventListener("click", function () {

            const isOpen = navbar.classList.toggle("active");

            document.body.classList.toggle("no-scroll", isOpen);

            const icon = mobileMenuBtn.querySelector("i");

            if (icon) {

                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });


        /* Close menu when clicking navigation link */

        const mobileLinks = navbar.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

                document.body.classList.remove("no-scroll");

                const icon = mobileMenuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }



    /* ========================================
       ESCAPE KEY - CLOSE MOBILE MENU
    ======================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") return;

        if (!navbar) return;

        navbar.classList.remove("active");

        document.body.classList.remove("no-scroll");

        if (mobileMenuBtn) {

            const icon = mobileMenuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });



    /* ========================================
       SMOOTH SCROLL
    ======================================== */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });



    /* ========================================
       ACTIVE NAVIGATION
    ======================================== */

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navigationLinks = document.querySelectorAll(
        ".nav-link"
    );

    function updateActiveNavigation() {

        if (!sections.length || !navigationLinks.length) {
            return;
        }

        let currentSection = "";

        const scrollPosition = window.scrollY + 200;

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {
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



    /* ========================================
       MENU DATA
    ======================================== */

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



    /* ========================================
       MENU TABS
    ======================================== */

    const menuTabs =
        document.querySelectorAll(".menu-tab");

    const menuList =
        document.querySelector(".menu-list");


    function renderMenu(category) {

        if (!menuList) return;

        if (!menuData[category]) return;

        menuList.innerHTML = "";


        menuData[category].forEach(function (item) {

            const menuItem =
                document.createElement("div");

            menuItem.className = "menu-item";


            const info =
                document.createElement("div");

            info.className = "menu-item-info";


            const title =
                document.createElement("h3");

            title.textContent = item.name;


            const description =
                document.createElement("p");

            description.textContent =
                item.description;


            const price =
                document.createElement("span");

            price.className = "menu-price";

            price.textContent = item.price;


            info.appendChild(title);
            info.appendChild(description);

            menuItem.appendChild(info);
            menuItem.appendChild(price);

            menuList.appendChild(menuItem);

        });

    }


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



    /* ========================================
       INITIAL MENU
    ======================================== */

    const activeMenuTab =
        document.querySelector(".menu-tab.active");

    if (activeMenuTab) {

        renderMenu(
            activeMenuTab.dataset.category
        );

    }



    /* ========================================
       RESERVATION FORM
    ======================================== */

    const reservationForm =
        document.querySelector(".reservation-form");


    if (reservationForm) {

        reservationForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameInput =
                    document.querySelector("#name");

                const phoneInput =
                    document.querySelector("#phone");

                const dateInput =
                    document.querySelector("#date");

                const guestsInput =
                    document.querySelector("#guests");

                const messageInput =
                    document.querySelector("#message");


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";

                const phone =
                    phoneInput
                        ? phoneInput.value.trim()
                        : "";

                const date =
                    dateInput
                        ? dateInput.value
                        : "";

                const guests =
                    guestsInput
                        ? guestsInput.value
                        : "4";

                const message =
                    messageInput
                        ? messageInput.value.trim()
                        : "";


                if (!name || !phone || !date) {

                    alert(
                        "Please complete your name, phone number and date."
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



    /* ========================================
       NEWSLETTER / EMAIL BUTTON
    ======================================== */

    const newsletterForm =
        document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const input =
                    newsletterForm.querySelector("input");

                if (!input) return;

                const email =
                    input.value.trim();

                if (!email) {

                    alert(
                        "Please enter your email address."
                    );

                    return;

                }


                alert(
                    "Thank you for subscribing to La Vita!"
                );

                newsletterForm.reset();

            }
        );

    }



    /* ========================================
       BACK TO TOP
    ======================================== */

    function updateBackToTop() {

        if (!backToTop) return;

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



    /* ========================================
       RESERVATION MINIMUM DATE
    ======================================== */

    const dateInput =
        document.querySelector("#date");

    if (dateInput) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(today.getMonth() + 1)
                .padStart(2, "0");

        const day =
            String(today.getDate())
                .padStart(2, "0");


        const formattedDate =
            `${year}-${month}-${day}`;


        dateInput.min =
            formattedDate;

    }



    /* ========================================
       IMAGE ERROR HANDLING
    ======================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.classList.add(
                    "image-error"
                );

                image.alt =
                    "Image unavailable";

            }
        );

    });



    /* ========================================
       SCROLL REVEAL
    ======================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, " +
            ".section-heading, " +
            ".about-content, " +
            ".about-images, " +
            ".dish-card, " +
            ".menu-item, " +
            ".chef-content, " +
            ".chef-image, " +
            ".review-card, " +
            ".contact-card, " +
            ".reservation-box, " +
            ".gallery-item"
        );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "revealed"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal-ready"
                );

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }



    /* ========================================
       HERO VIDEO
    ======================================== */

    const heroVideo =
        document.querySelector(".hero-video");


    if (heroVideo) {

        heroVideo.muted = true;

        heroVideo.setAttribute(
            "playsinline",
            ""
        );


        const playVideo =
            function () {

                const promise =
                    heroVideo.play();

                if (
                    promise &&
                    typeof promise.catch === "function"
                ) {

                    promise.catch(function () {

                        /*
                         Autoplay may be blocked
                         by the browser.
                         The website still works.
                        */

                    });

                }

            };


        if (
            heroVideo.readyState >= 2
        ) {

            playVideo();

        } else {

            heroVideo.addEventListener(
                "loadeddata",
                playVideo,
                {
                    once: true
                }
            );

        }

    }



    /* ========================================
       PREVENT BROKEN VIDEO FROM
       AFFECTING THE WEBSITE
    ======================================== */

    if (heroVideo) {

        heroVideo.addEventListener(
            "error",
            function () {

                heroVideo.style.display =
                    "none";

            }
        );

    }



    /* ========================================
       DISABLE REVEAL ANIMATION
       WHEN USER PREFERS REDUCED MOTION
    ======================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }

});

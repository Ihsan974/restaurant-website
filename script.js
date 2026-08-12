document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HEADER SCROLL EFFECT
    ========================= */

    const header = document.querySelector(".header");

    function handleHeaderScroll() {
        if (!header) return;

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();


    /* =========================
       MOBILE MENU
    ========================= */

    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navbar = document.querySelector(".navbar");

    if (mobileMenuBtn && navbar) {

        const icon = mobileMenuBtn.querySelector("i");

        mobileMenuBtn.addEventListener("click", () => {

            const isOpen = navbar.classList.toggle("active");

            document.body.classList.toggle("no-scroll", isOpen);

            if (icon) {
                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }

            mobileMenuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );

        });


        /* Close menu when clicking navigation link */

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");
                document.body.classList.remove("no-scroll");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

                mobileMenuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            });

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    function updateActiveNavigation() {

        if (!sections.length || !navigationLinks.length) return;

        let currentSection = "";

        const scrollPosition = window.scrollY + 220;

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection = section.id;
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);
    updateActiveNavigation();


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

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
                top: Math.max(0, targetPosition),
                behavior: "smooth"
            });

        });

    });


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
       MENU TABS
    ========================= */

    const menuTabs =
        document.querySelectorAll(".menu-tab");

    const menuList =
        document.querySelector(".menu-list");

    function renderMenu(category) {

        if (!menuList || !menuData[category]) {
            return;
        }

        menuList.innerHTML = "";

        menuData[category].forEach(item => {

            const menuItem =
                document.createElement("div");

            menuItem.className = "menu-item";

            menuItem.innerHTML = `
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>

                <span class="menu-price">
                    ${item.price}
                </span>
            `;

            menuList.appendChild(menuItem);

        });

    }


    if (menuTabs.length && menuList) {

        menuTabs.forEach(tab => {

            tab.addEventListener("click", () => {

                menuTabs.forEach(item => {
                    item.classList.remove("active");
                });

                tab.classList.add("active");

                const category =
                    tab.getAttribute("data-category");

                renderMenu(category);

            });

        });

        /* Load starters initially */

        const activeTab =
            document.querySelector(".menu-tab.active");

        if (activeTab) {

            renderMenu(
                activeTab.getAttribute("data-category")
            );

        } else {

            renderMenu("starters");

        }

    }


    /* =========================
       RESERVATION FORM
    ========================= */

    const reservationForm =
        document.querySelector(".reservation-form");

    if (reservationForm) {

        const dateInput =
            reservationForm.querySelector("#date");

        if (dateInput) {

            const today =
                new Date().toISOString().split("T")[0];

            dateInput.setAttribute("min", today);

        }


        reservationForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name =
                    document.querySelector("#name")?.value.trim();

                const phone =
                    document.querySelector("#phone")?.value.trim();

                const date =
                    document.querySelector("#date")?.value;

                const guests =
                    document.querySelector("#guests")?.value;

                const message =
                    document.querySelector("#message")?.value.trim();


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
Guests: ${guests || "Not specified"}
Special Request: ${message || "None"}

Thank you.`;


                /* La Vita WhatsApp number */

                const whatsappNumber =
                    "918921033257";

                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        reservationMessage
                    )}`;

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

    const backToTop =
        document.querySelector(".back-to-top");

    function toggleBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        toggleBackToTop
    );

    toggleBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

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

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            image.alt = "La Vita Restaurant";

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (revealElements.length) {

        /* Check browser support */

        if ("IntersectionObserver" in window) {

            const revealObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(entry => {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "revealed"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        });

                    },
                    {
                        threshold: 0.12,
                        rootMargin: "0px 0px -40px 0px"
                    }
                );


            revealElements.forEach(element => {

                revealObserver.observe(element);

            });

        } else {

            /* Fallback for older browsers */

            revealElements.forEach(element => {

                element.classList.add("revealed");

            });

        }

    }


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

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

    });


    /* =========================
       RESIZE HANDLER
    ========================= */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 900 &&
            navbar
        ) {

            navbar.classList.remove("active");

            document.body.classList.remove(
                "no-scroll"
            );

            if (mobileMenuBtn) {

                const icon =
                    mobileMenuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }

    });


});

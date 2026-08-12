document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
    ========================= */

    const preloader = document.querySelector(".preloader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 500);
    });


    /* =========================
       HEADER SCROLL EFFECT
    ========================= */

    const header = document.querySelector(".header");

    function handleHeaderScroll() {
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
    const navLinks = document.querySelectorAll(".nav-link, .nav-reservation");

    mobileMenuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");
        document.body.classList.toggle("no-scroll");

        const icon = mobileMenuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    /* Close mobile menu after clicking link */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");
            document.body.classList.remove("no-scroll");

            const icon = mobileMenuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
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

            if (targetId === "#") {
                event.preventDefault();
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const headerHeight = header.offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================
       MENU TABS
    ========================= */

    const menuTabs = document.querySelectorAll(".menu-tab");
    const menuList = document.querySelector(".menu-list");

    const menuData = {

        starters: [
            {
                name: "Burrata & Heirloom Tomatoes",
                description: "Fresh burrata, heirloom tomatoes, basil oil, aged balsamic.",
                price: "$16"
            },
            {
                name: "Wild Mushroom Crostini",
                description: "Forest mushrooms, toasted sourdough, parmesan cream.",
                price: "$14"
            },
            {
                name: "Crispy Calamari",
                description: "Lightly fried calamari, lemon aioli, fresh herbs.",
                price: "$15"
            },
            {
                name: "French Onion Soup",
                description: "Slow-cooked onions, beef broth, toasted baguette, gruyère.",
                price: "$12"
            }
        ],

        mains: [
            {
                name: "Black Truffle Pasta",
                description: "Handmade pasta, black truffle, parmesan, and creamy sauce.",
                price: "$28"
            },
            {
                name: "Herb Grilled Salmon",
                description: "Fresh Atlantic salmon, garden herbs, lemon butter, seasonal vegetables.",
                price: "$32"
            },
            {
                name: "Prime Ribeye",
                description: "Premium aged ribeye, roasted garlic, rosemary, and house steak jus.",
                price: "$42"
            },
            {
                name: "Wild Mushroom Risotto",
                description: "Arborio rice, wild mushrooms, parmesan, herbs and white wine.",
                price: "$26"
            }
        ],

        desserts: [
            {
                name: "Classic Tiramisu",
                description: "Mascarpone cream, espresso-soaked ladyfingers and cocoa.",
                price: "$11"
            },
            {
                name: "Chocolate Fondant",
                description: "Warm dark chocolate cake with vanilla ice cream.",
                price: "$13"
            },
            {
                name: "Vanilla Panna Cotta",
                description: "Silky vanilla panna cotta with seasonal berries.",
                price: "$10"
            },
            {
                name: "Lemon Tart",
                description: "Fresh lemon curd, buttery pastry and whipped cream.",
                price: "$10"
            }
        ],

        drinks: [
            {
                name: "La Vita Signature",
                description: "Fresh citrus, herbs, premium tonic and sparkling water.",
                price: "$12"
            },
            {
                name: "Italian Espresso",
                description: "Richly roasted Italian espresso served traditionally.",
                price: "$5"
            },
            {
                name: "Fresh Berry Cooler",
                description: "Seasonal berries, lime, mint and sparkling water.",
                price: "$8"
            },
            {
                name: "House Lemonade",
                description: "Freshly squeezed lemons, mint and natural sweetness.",
                price: "$7"
            }
        ]

    };


    function renderMenu(category) {

        if (!menuList || !menuData[category]) {
            return;
        }

        menuList.innerHTML = "";

        menuData[category].forEach(item => {

            const menuItem = document.createElement("div");

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


    menuTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            menuTabs.forEach(item => {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            const category = tab.dataset.category;

            renderMenu(category);

        });

    });


    /* =========================
       RESERVATION FORM
    ========================= */

    const reservationForm =
        document.querySelector(".reservation-form");

    if (reservationForm) {

        reservationForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.querySelector("#name").value.trim();

            const phone =
                document.querySelector("#phone").value.trim();

            const date =
                document.querySelector("#date").value;

            const guests =
                document.querySelector("#guests").value;

            const message =
                document.querySelector("#message").value.trim();


            if (!name || !phone || !date) {

                alert("Please complete all required fields.");

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

            const whatsappNumber = "15551234567";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reservationMessage)}`;

            window.open(whatsappURL, "_blank");

        });

    }


    /* =========================
       NEWSLETTER FORM
    ========================= */

    const newsletterForm =
        document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", event => {

            event.preventDefault();

            const email =
                newsletterForm.querySelector("input").value.trim();

            if (!email) {
                return;
            }

            alert(
                "Thank you for subscribing to La Vita!"
            );

            newsletterForm.reset();

        });

    }


    /* =========================
       BACK TO TOP
    ========================= */

    const backToTop =
        document.querySelector(".back-to-top");

    function toggleBackToTop() {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", toggleBackToTop);

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       IMAGE ERROR HANDLING
    ========================= */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            image.style.backgroundColor = "#222";

            image.style.minHeight = "200px";

            image.alt = "Image unavailable";

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .about-images, .dish-card, .menu-item, .chef-content, .chef-image, .review-card, .contact-card, .reservation-box, .gallery-item"
    );

    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================
       SET MINIMUM RESERVATION DATE
    ========================= */

    const dateInput =
        document.querySelector("#date");

    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.setAttribute("min", today);

    }


    /* =========================
       ESCAPE KEY
       CLOSE MOBILE MENU
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            navbar.classList.remove("active");
            document.body.classList.remove("no-scroll");

            const icon =
                mobileMenuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});
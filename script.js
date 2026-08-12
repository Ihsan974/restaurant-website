document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
    ========================= */

    const preloader = document.querySelector(".preloader");

    const hidePreloader = () => {
        if (preloader) {
            preloader.classList.add("hide");
        }
    };

    // Don't keep the website stuck forever
    window.addEventListener("load", () => {
        setTimeout(hidePreloader, 400);
    });

    // Safety fallback
    setTimeout(hidePreloader, 3000);


    /* =========================
       HEADER
    ========================= */

    const header = document.querySelector(".header");

    function handleHeader() {
        if (!header) return;

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeader);
    handleHeader();


    /* =========================
       MOBILE MENU
    ========================= */

    const mobileMenuBtn =
        document.querySelector(".mobile-menu-btn");

    const navbar =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelectorAll(".nav-link, .nav-reservation");

    if (mobileMenuBtn && navbar) {

        mobileMenuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");
            document.body.classList.toggle("no-scroll");

            const icon =
                mobileMenuBtn.querySelector("i");

            if (icon) {

                if (navbar.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");
                document.body.classList.remove("no-scroll");

                const icon =
                    mobileMenuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        if (navbar) {
            navbar.classList.remove("active");
        }

        document.body.classList.remove("no-scroll");

        if (mobileMenuBtn) {

            const icon =
                mobileMenuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

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


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
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
                    "Handmade pasta, black truffle, parmesan and creamy sauce.",
                price: "$28"
            },
            {
                name: "Herb Grilled Salmon",
                description:
                    "Fresh Atlantic salmon, garden herbs, lemon butter and vegetables.",
                price: "$32"
            },
            {
                name: "Prime Ribeye",
                description:
                    "Premium aged ribeye, roasted garlic, rosemary and house steak jus.",
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

        if (!menuList) return;

        const items =
            menuData[category];

        if (!items) return;

        menuList.innerHTML = "";

        items.forEach(item => {

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


    menuTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            menuTabs.forEach(item => {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            const category =
                tab.dataset.category;

            renderMenu(category);

        });

    });


    // Load first category automatically

    if (menuTabs.length > 0) {

        const firstCategory =
            menuTabs[0].dataset.category;

        if (firstCategory) {
            renderMenu(firstCategory);
        }

    }


    /* =========================
       RESERVATION FORM
    ========================= */

    const reservationForm =
        document.querySelector(".reservation-form");


    if (reservationForm) {

        reservationForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const name =
                    document.querySelector("#name")?.value.trim() || "";

                const phone =
                    document.querySelector("#phone")?.value.trim() || "";

                const date =
                    document.querySelector("#date")?.value || "";

                const guests =
                    document.querySelector("#guests")?.value || "";

                const message =
                    document.querySelector("#message")?.value.trim() || "";


                if (!name || !phone || !date) {

                    alert(
                        "Please complete your name, phone number and date."
                    );

                    return;
                }


                const reservationMessage = `
Hello La Vita Restaurant,

I would like to request a table reservation.

Name: ${name}
Phone: ${phone}
Date: ${date}
Guests: ${guests || "Not specified"}
Special Request: ${message || "None"}

Thank you.
                `.trim();


                /*
                 YOUR WHATSAPP NUMBER
                 8921033257
                */

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
                    "_blank"
                );

            }
        );

    }


    /* =========================
       SET MINIMUM DATE
    ========================= */

    const dateInput =
        document.querySelector("#date");

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

        dateInput.min =
            `${year}-${month}-${day}`;

    }


    /* =========================
       NEWSLETTER
    ========================= */

    const newsletterForm =
        document.querySelector(".newsletter-form");


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const input =
                    newsletterForm.querySelector(
                        "input"
                    );

                if (!input) return;

                const email =
                    input.value.trim();

                if (!email) return;

                alert(
                    "Thank you for subscribing to La Vita!"
                );

                newsletterForm.reset();

            }
        );

    }


    /* =========================
       BACK TO TOP
    ========================= */

    const backToTop =
        document.querySelector(".back-to-top");


    if (backToTop) {

        function toggleBackToTop() {

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

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.backgroundColor =
                    "#222";

                image.style.minHeight =
                    "150px";

                image.alt =
                    "Image unavailable";

            }
        );

    });


    /* =========================
       BACKGROUND VIDEO
    ========================= */

    const heroVideo =
        document.querySelector(".hero-video");


    if (heroVideo) {

        heroVideo.muted = true;
        heroVideo.loop = true;
        heroVideo.playsInline = true;

        const playVideo = () => {

            const promise =
                heroVideo.play();

            if (promise !== undefined) {

                promise.catch(() => {
                    // Browser may block autoplay.
                    // Website continues normally.
                });

            }

        };

        playVideo();

        heroVideo.addEventListener(
            "loadeddata",
            playVideo,
            { once: true }
        );

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
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
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

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


        revealElements.forEach(element => {

            element.classList.add(
                "reveal-element"
            );

            revealObserver.observe(
                element
            );

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add(
                "reveal-visible"
            );
        });

    }


    /* =========================
       FINISH
    ========================= */

    document.body.classList.add(
        "page-ready"
    );

});

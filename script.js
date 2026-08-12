/* =========================================================
   LA VITA — PREMIUM RESTAURANT
   SCRIPT.JS
========================================================= */


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = document.querySelector(".header");

    const mobileMenuBtn =
        document.querySelector(".mobile-menu-btn");

    const navbar =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const backToTop =
        document.querySelector(".back-to-top");

    const preloader =
        document.querySelector(".preloader");

    const reservationForm =
        document.querySelector(".reservation-form");

    const newsletterForm =
        document.querySelector(".newsletter-form");

    const menuTabs =
        document.querySelectorAll(".menu-tab");

    const menuItems =
        document.querySelectorAll(".menu-item");


    /* =====================================================
       02. PRELOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (preloader) {
                preloader.classList.add("hidden");
            }

        }, 700);

    });


    /* =====================================================
       03. MOBILE MENU
    ===================================================== */

    if (mobileMenuBtn && navbar) {

        mobileMenuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            document.body.classList.toggle("no-scroll");

            const icon =
                mobileMenuBtn.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    }


    /* =====================================================
       04. CLOSE MOBILE MENU
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (!navbar) return;

            navbar.classList.remove("active");

            document.body.classList.remove("no-scroll");

            const icon =
                mobileMenuBtn?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    });


    /* =====================================================
       05. HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 80) {

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


    /* =====================================================
       06. ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

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
        updateActiveNav,
        { passive: true }
    );

    updateActiveNav();


    /* =====================================================
       07. REVEAL ANIMATIONS
    ===================================================== */

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
            ".reservation-box"
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
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


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================================
       08. STAGGER CARD ANIMATION
    ===================================================== */

    const cardGroups = [
        ".dish-card",
        ".review-card",
        ".contact-card"
    ];


    cardGroups.forEach((selector) => {

        const cards =
            document.querySelectorAll(selector);

        cards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.12}s`;

        });

    });


    /* =====================================================
       09. BACK TO TOP
    ===================================================== */

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 600) {

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

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       10. MENU TAB SYSTEM
    ===================================================== */

    const menuData = {

        starters: [

            {
                name:
                    "Burrata & Heirloom Tomatoes",

                description:
                    "Fresh burrata, heirloom tomatoes, basil oil, aged balsamic.",

                price: "$16"
            },

            {
                name:
                    "Wild Mushroom Crostini",

                description:
                    "Forest mushrooms, toasted sourdough, parmesan cream.",

                price: "$14"
            },

            {
                name:
                    "Crispy Calamari",

                description:
                    "Lightly fried calamari, lemon aioli, fresh herbs.",

                price: "$15"
            },

            {
                name:
                    "French Onion Soup",

                description:
                    "Slow-cooked onions, beef broth, toasted baguette, gruyère.",

                price: "$12"
            }

        ],


        mains: [

            {
                name:
                    "Black Truffle Pasta",

                description:
                    "Handmade pasta, black truffle, parmesan, and creamy sauce.",

                price: "$28"
            },

            {
                name:
                    "Herb Grilled Salmon",

                description:
                    "Fresh Atlantic salmon, garden herbs, lemon butter, seasonal vegetables.",

                price: "$32"
            },

            {
                name:
                    "Prime Ribeye",

                description:
                    "Premium aged ribeye, roasted garlic, rosemary, house steak jus.",

                price: "$42"
            },

            {
                name:
                    "Wild Mushroom Risotto",

                description:
                    "Arborio rice, forest mushrooms, parmesan, truffle oil.",

                price: "$26"
            }

        ],


        desserts: [

            {
                name:
                    "Classic Tiramisu",

                description:
                    "Espresso-soaked mascarpone, cocoa, and delicate sponge.",

                price: "$11"
            },

            {
                name:
                    "Chocolate Fondant",

                description:
                    "Warm dark chocolate cake with vanilla bean ice cream.",

                price: "$13"
            },

            {
                name:
                    "Vanilla Panna Cotta",

                description:
                    "Silky vanilla panna cotta, seasonal berries, mint.",

                price: "$10"
            },

            {
                name:
                    "Lemon Tart",

                description:
                    "Classic lemon curd, buttery pastry, fresh berries.",

                price: "$10"
            }

        ],


        drinks: [

            {
                name:
                    "La Vita Signature",

                description:
                    "Fresh citrus, elderflower, mint, sparkling water.",

                price: "$9"
            },

            {
                name:
                    "Classic Espresso",

                description:
                    "Premium Italian espresso, freshly brewed.",

                price: "$5"
            },

            {
                name:
                    "Berry Garden",

                description:
                    "Fresh berries, lime, basil, and sparkling water.",

                price: "$8"
            },

            {
                name:
                    "Golden Sunset",

                description:
                    "Passion fruit, orange, vanilla, and fresh citrus.",

                price: "$10"
            }

        ]

    };


    function renderMenu(category) {

        const menuList =
            document.querySelector(".menu-list");

        if (!menuList) return;

        const items =
            menuData[category] || [];

        menuList.innerHTML = "";

        items.forEach((item, index) => {

            const menuItem =
                document.createElement("div");

            menuItem.className = "menu-item";

            menuItem.style.opacity = "0";

            menuItem.style.transform =
                "translateY(15px)";

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


            setTimeout(() => {

                menuItem.style.transition =
                    "opacity 0.4s ease, transform 0.4s ease";

                menuItem.style.opacity = "1";

                menuItem.style.transform =
                    "translateY(0)";

            }, index * 100);

        });

    }


    menuTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            menuTabs.forEach((button) => {

                button.classList.remove("active");

            });

            tab.classList.add("active");

            const category =
                tab.dataset.category;

            renderMenu(category);

        });

    });


    /* =====================================================
       11. INITIAL MENU
    ===================================================== */

    renderMenu("starters");


    /* =====================================================
       12. RESERVATION FORM
    ===================================================== */

    if (reservationForm) {

        reservationForm.addEventListener(
            "submit",
            (event) => {

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


                if (
                    !name ||
                    !phone ||
                    !date
                ) {

                    showNotification(
                        "Please fill in all required fields."
                    );

                    return;

                }


                const reservationMessage =
                    `Hello La Vita Restaurant!

I would like to request a reservation.

Name: ${name}
Phone: ${phone}
Date: ${date}
Guests: ${guests}
Special Request: ${message || "None"}`;


                const whatsappNumber =
                    "15551234567";


                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        reservationMessage
                    )}`;


                window.open(
                    whatsappURL,
                    "_blank"
                );


                reservationForm.reset();


                showNotification(
                    "Opening WhatsApp to complete your reservation..."
                );

            }
        );

    }


    /* =====================================================
       13. NEWSLETTER
    ===================================================== */

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const emailInput =
                    newsletterForm.querySelector(
                        "input[type='email']"
                    );

                if (
                    !emailInput ||
                    !emailInput.value.trim()
                ) {

                    showNotification(
                        "Please enter your email address."
                    );

                    return;

                }


                showNotification(
                    "Thank you for subscribing!"
                );


                newsletterForm.reset();

            }
        );

    }


    /* =====================================================
       14. NOTIFICATION SYSTEM
    ===================================================== */

    function showNotification(message) {

        const existing =
            document.querySelector(
                ".site-notification"
            );


        if (existing) {

            existing.remove();

        }


        const notification =
            document.createElement("div");

        notification.className =
            "site-notification";


        notification.innerHTML = `

            <span>
                ${message}
            </span>

            <button
                aria-label="Close notification">

                ×

            </button>

        `;


        Object.assign(
            notification.style,
            {
                position: "fixed",
                left: "50%",
                bottom: "30px",
                transform:
                    "translateX(-50%) translateY(20px)",
                background: "#161616",
                color: "#fff",
                border:
                    "1px solid rgba(201,164,92,0.5)",
                padding:
                    "15px 20px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                maxWidth: "90%",
                zIndex: "99999",
                fontSize: "12px",
                boxShadow:
                    "0 20px 50px rgba(0,0,0,0.35)",
                opacity: "0",
                transition:
                    "all 0.35s ease"
            }
        );


        const closeButton =
            notification.querySelector("button");


        Object.assign(
            closeButton.style,
            {
                background: "none",
                border: "none",
                color: "#c9a45c",
                fontSize: "20px",
                cursor: "pointer"
            }
        );


        document.body.appendChild(
            notification
        );


        requestAnimationFrame(() => {

            notification.style.opacity = "1";

            notification.style.transform =
                "translateX(-50%) translateY(0)";

        });


        const removeNotification = () => {

            notification.style.opacity = "0";

            notification.style.transform =
                "translateX(-50%) translateY(20px)";

            setTimeout(() => {

                notification.remove();

            }, 350);

        };


        closeButton.addEventListener(
            "click",
            removeNotification
        );


        setTimeout(
            removeNotification,
            4000
        );

    }


    /* =====================================================
       15. SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((anchor) => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const headerHeight =
                        header?.offsetHeight || 0;


                    const targetPosition =
                        target.offsetTop -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* =====================================================
       16. SET MINIMUM RESERVATION DATE
    ===================================================== */

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


    /* =====================================================
       17. IMAGE FALLBACK
    ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.background =
                    "#1a1a1a";

                image.style.minHeight =
                    "200px";

                image.style.objectFit =
                    "cover";

                image.alt =
                    "La Vita Restaurant";

            }
        );

    });


    /* =====================================================
       18. ESC KEY — CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                navbar?.classList.contains("active")
            ) {

                navbar.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "no-scroll"
                );


                const icon =
                    mobileMenuBtn?.querySelector("i");


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
    );


    /* =====================================================
       19. CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c LA VITA RESTAURANT ",
        "background:#c9a45c;color:#0b0b0b;font-size:16px;font-weight:bold;padding:8px;"
    );

    console.log(
        "Premium restaurant website loaded successfully."
    );

});
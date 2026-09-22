document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LA VITA - MAIN JAVASCRIPT
    ========================================= */


    /* =========================================
       HEADER / MOBILE MENU
    ========================================= */

    const header = document.querySelector(".header");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            const icon = mobileMenuBtn.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);
            }
        });

        // Close mobile menu after clicking a link
        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = mobileMenuBtn.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });

        });

        // Close menu with Escape
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navMenu.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = mobileMenuBtn.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            }

        });
    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

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


    /* =========================================
       MENU DATA
    ========================================= */

    const menuData = {

        starters: [

            {
                name: "Burrata Garden Salad",
                description: "Creamy burrata, heirloom tomatoes, basil and aged balsamic.",
                price: 18
            },

            {
                name: "Truffle Arancini",
                description: "Crispy risotto balls with black truffle and parmesan.",
                price: 16
            },

            {
                name: "Garlic Butter Prawns",
                description: "Jumbo prawns, roasted garlic, herbs and lemon butter.",
                price: 22
            },

            {
                name: "Wild Mushroom Bruschetta",
                description: "Toasted sourdough, wild mushrooms and parmesan cream.",
                price: 15
            }

        ],

        mains: [

            {
                name: "Black Truffle Pasta",
                description: "House-made pasta, black truffle, parmesan and butter.",
                price: 28
            },

            {
                name: "Herb Grilled Salmon",
                description: "Atlantic salmon, seasonal vegetables and lemon beurre blanc.",
                price: 32
            },

            {
                name: "Prime Ribeye",
                description: "Char-grilled premium ribeye with rosemary jus.",
                price: 42
            },

            {
                name: "Wild Mushroom Risotto",
                description: "Arborio rice, forest mushrooms, parmesan and fresh herbs.",
                price: 26
            }

        ],

        desserts: [

            {
                name: "Chocolate Fondant",
                description: "Warm dark chocolate cake with vanilla ice cream.",
                price: 14
            },

            {
                name: "Classic Tiramisu",
                description: "Espresso-soaked mascarpone, cocoa and ladyfingers.",
                price: 12
            },

            {
                name: "Vanilla Panna Cotta",
                description: "Silky vanilla panna cotta with seasonal berries.",
                price: 11
            },

            {
                name: "Lemon Tart",
                description: "Classic lemon curd tart with Italian meringue.",
                price: 13
            }

        ],

        drinks: [

            {
                name: "La Vita Signature",
                description: "Passion fruit, citrus, mint and sparkling water.",
                price: 10
            },

            {
                name: "Sparkling Citrus",
                description: "Fresh orange, lemon and premium sparkling water.",
                price: 8
            },

            {
                name: "Espresso Martini",
                description: "Espresso, premium vodka and coffee liqueur.",
                price: 14
            },

            {
                name: "Mineral Water",
                description: "Premium still or sparkling mineral water.",
                price: 5
            }

        ]

    };


    /* =========================================
       MENU TABS
    ========================================= */

    const menuList = document.getElementById("menuList");
    const menuTabs = document.querySelectorAll(".menu-tab");

    function renderMenu(category) {

        if (!menuList) return;

        const items = menuData[category];

        if (!items) return;

        menuList.innerHTML = "";

        items.forEach(item => {

            const menuItem = document.createElement("div");

            menuItem.className = "menu-item";

            menuItem.innerHTML = `
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>

                <div class="menu-item-price">
                    $${item.price}
                </div>
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


    // Load starters initially
    renderMenu("starters");


    /* =========================================
       FOOD ORDERING CART
    ========================================= */

    let cart = [];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const orderNowBtn = document.getElementById("orderNowBtn");


    function formatPrice(price) {
        return `$${price.toFixed(2)}`;
    }


    function updateCart() {

        if (!cartItems || !cartCount || !cartTotal) {
            return;
        }

        cartItems.innerHTML = "";

        let total = 0;
        let count = 0;


        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-basket-shopping"></i>
                    <p>Your order is empty.</p>
                    <span>Add something delicious!</span>
                </div>
            `;

        } else {

            cart.forEach((item, index) => {

                const itemTotal = item.price * item.quantity;

                total += itemTotal;
                count += item.quantity;


                const cartItem = document.createElement("div");

                cartItem.className = "cart-item";

                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>
                            ${item.quantity} × ${formatPrice(item.price)}
                        </p>
                    </div>

                    <div class="cart-item-right">

                        <strong>
                            ${formatPrice(itemTotal)}
                        </strong>

                        <button
                            type="button"
                            class="remove-cart-item"
                            data-index="${index}"
                            aria-label="Remove ${item.name}"
                        >
                            <i class="fas fa-trash"></i>
                        </button>

                    </div>
                `;

                cartItems.appendChild(cartItem);

            });

        }


        cartCount.textContent = count;
        cartTotal.textContent = formatPrice(total);


        // Remove item buttons
        document.querySelectorAll(".remove-cart-item").forEach(button => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                cart.splice(index, 1);

                updateCart();

            });

        });

    }


    addToCartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const name = button.dataset.name;
            const price = Number(button.dataset.price);


            const existingItem = cart.find(
                item => item.name === name
            );


            if (existingItem) {

                existingItem.quantity += 1;

            } else {

                cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });

            }


            updateCart();


            // Small visual feedback
            const originalText = button.innerHTML;

            button.innerHTML = `
                <i class="fas fa-check"></i>
                Added
            `;

            button.classList.add("added");


            setTimeout(() => {

                button.innerHTML = originalText;

                button.classList.remove("added");

            }, 1200);

        });

    });


    updateCart();


    /* =========================================
       SEND FOOD ORDER TO WHATSAPP
    ========================================= */

    if (orderNowBtn) {

        orderNowBtn.addEventListener("click", () => {

            if (cart.length === 0) {

                alert("Please add at least one dish to your order.");

                return;
            }


            let message =
                "Hello La Vita! 🍽️%0A%0A" +
                "I would like to place an order:%0A%0A";


            let total = 0;


            cart.forEach(item => {

                const itemTotal = item.price * item.quantity;

                total += itemTotal;

                message +=
                    `• ${item.name} × ${item.quantity} — ${formatPrice(itemTotal)}%0A`;

            });


            message +=
                `%0A*Total: ${formatPrice(total)}*%0A%0A` +
                "Please confirm my order. Thank you!";


            const whatsappNumber = "918921033257";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${message}`;


            window.open(whatsappURL, "_blank");

        });

    }


    /* =========================================
       RESERVATION FORM
    ========================================= */

    const reservationForm =
        document.getElementById("reservationForm");

    const reservationSuccess =
        document.getElementById("reservationSuccess");


    if (reservationForm) {

        const dateInput =
            document.getElementById("date");


        // Prevent selecting past dates
        if (dateInput) {

            const today = new Date();

            const year = today.getFullYear();

            const month = String(
                today.getMonth() + 1
            ).padStart(2, "0");

            const day = String(
                today.getDate()
            ).padStart(2, "0");


            dateInput.min =
                `${year}-${month}-${day}`;
        }


        reservationForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const name =
                document.getElementById("name")?.value.trim() || "";

            const phone =
                document.getElementById("phone")?.value.trim() || "";

            const date =
                document.getElementById("date")?.value || "";

            const time =
                document.getElementById("time")?.value || "";

            const guests =
                document.getElementById("guests")?.value || "";

            const occasion =
                document.getElementById("occasion")?.value || "";

            const messageText =
                document.getElementById("message")?.value.trim() || "";


            let whatsappMessage =
                "Hello La Vita! ✨%0A%0A" +
                "I would like to request a table reservation.%0A%0A" +

                `*Name:* ${name}%0A` +
                `*Phone:* ${phone}%0A` +
                `*Date:* ${date}%0A` +
                `*Time:* ${time}%0A` +
                `*Guests:* ${guests}%0A` +
                `*Occasion:* ${occasion || "Not specified"}%0A`;


            if (messageText) {

                whatsappMessage +=
                    `*Special Request:* ${messageText}%0A`;

            }


            whatsappMessage +=
                "%0APlease confirm my reservation. Thank you!";


            const whatsappNumber =
                "918921033257";


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


            // Show success message
            if (reservationSuccess) {

                reservationSuccess.classList.add("show");

                reservationSuccess.innerHTML = `
                    <i class="fas fa-circle-check"></i>
                    <div>
                        <strong>Reservation request ready!</strong>
                        <p>Opening WhatsApp to confirm your booking.</p>
                    </div>
                `;

            }


            // Open WhatsApp
            const whatsappWindow =
                window.open(whatsappURL, "_blank");


            // Fallback if popup is blocked
            if (!whatsappWindow) {

                window.location.href = whatsappURL;

            }

        });

    }


    /* =========================================
       SCROLL REVEAL ANIMATIONS
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

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

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =========================================
       BACK TO TOP BUTTON
    ========================================= */

    const backToTop =
        document.querySelector(".back-to-top");


    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (!targetId || targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

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

            }

        });

    });


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    if ("IntersectionObserver" in window && sections.length) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            const id =
                                entry.target.getAttribute("id");


                            navLinks.forEach(link => {

                                link.classList.remove("active");


                                if (
                                    link.getAttribute("href") ===
                                    `#${id}`
                                ) {

                                    link.classList.add("active");

                                }

                            });

                        }

                    });

                },
                {
                    rootMargin: "-30% 0px -60% 0px"
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(section);

        });

    }


    /* =========================================
       IMAGE LOAD FALLBACK
    ========================================= */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            image.style.opacity = "0.35";

        });

    });


    /* =========================================
       PHONE NUMBER CLICK FEEDBACK
    ========================================= */

    document.querySelectorAll('a[href^="tel:"]').forEach(link => {

        link.addEventListener("click", () => {

            console.log("Calling La Vita...");

        });

    });


    /* =========================================
       PAGE LOADED
    ========================================= */

    document.body.classList.add("page-loaded");

    console.log("La Vita website loaded successfully.");
    console.log("Food ordering system ready.");
    console.log("Reservation system ready.");
    console.log("Mobile navigation ready.");

});
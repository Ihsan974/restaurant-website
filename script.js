document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       HEADER + MOBILE MENU
    ========================================= */

    const header = document.querySelector(".header");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navbar = document.querySelector(".navbar");

    if (mobileMenuBtn && navbar) {

        mobileMenuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const isOpen = navbar.classList.contains("active");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

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


        /* Close menu when nav link is clicked */

        document.querySelectorAll(".nav-link, .nav-reservation")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    navbar.classList.remove("active");

                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    const icon = mobileMenuBtn.querySelector("i");

                    if (icon) {
                        icon.classList.remove("fa-xmark");
                        icon.classList.add("fa-bars");
                    }

                });

            });


        /* Close menu with Escape */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navbar.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = mobileMenuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });

    }


    /* =========================================
       HEADER SCROLL
    ========================================= */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =========================================
       MENU DATA
    ========================================= */

    const menuData = {

        starters: [

            {
                name: "Burrata Garden Salad",
                description: "Creamy burrata, heirloom tomatoes, basil and balsamic glaze.",
                price: 18
            },

            {
                name: "Truffle Arancini",
                description: "Crispy risotto balls with black truffle and parmesan.",
                price: 16
            },

            {
                name: "Garlic Butter Prawns",
                description: "Succulent prawns with roasted garlic, herbs and lemon.",
                price: 30
            },

            {
                name: "Wild Mushroom Bruschetta",
                description: "Toasted sourdough with wild mushrooms and parmesan.",
                price: 15
            }

        ],


        mains: [

            {
                name: "Black Truffle Pasta",
                description: "Handmade pasta, black truffle, parmesan and creamy sauce.",
                price: 28
            },

            {
                name: "Herb Grilled Salmon",
                description: "Fresh Atlantic salmon with herbs, lemon butter and vegetables.",
                price: 32
            },

            {
                name: "Prime Ribeye",
                description: "Premium aged ribeye with roasted garlic and rosemary jus.",
                price: 42
            },

            {
                name: "Wild Mushroom Risotto",
                description: "Arborio rice, wild mushrooms, parmesan and fresh herbs.",
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
                description: "Fresh orange, lemon and sparkling water.",
                price: 8
            },

            {
                name: "Espresso Martini",
                description: "Espresso with premium vodka and coffee liqueur.",
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

        items.forEach(function (item) {

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


    menuTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            menuTabs.forEach(function (item) {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            renderMenu(tab.dataset.category);

        });

    });


    renderMenu("starters");


    /* =========================================
       FOOD ORDERING
    ========================================= */

    let cart = [];

    const addButtons =
        document.querySelectorAll(".add-to-cart");

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    const orderNowBtn =
        document.getElementById("orderNowBtn");


    function updateCart() {

        if (!cartItems) return;

        cartItems.innerHTML = "";

        let total = 0;
        let count = 0;


        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-basket-shopping"></i>
                    <p>Your order is empty.</p>
                    <span>Add a dish to get started.</span>
                </div>
            `;

        } else {

            cart.forEach(function (item, index) {

                const itemTotal =
                    item.price * item.quantity;

                total += itemTotal;
                count += item.quantity;


                const cartItem =
                    document.createElement("div");

                cartItem.className = "cart-item";

                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.quantity} × $${item.price}</p>
                    </div>

                    <div class="cart-item-right">
                        <strong>$${itemTotal.toFixed(2)}</strong>

                        <button
                            type="button"
                            class="remove-cart-item"
                            data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;

                cartItems.appendChild(cartItem);

            });

        }


        if (cartCount) {
            cartCount.textContent = count;
        }

        if (cartTotal) {
            cartTotal.textContent =
                "$" + total.toFixed(2);
        }


        document.querySelectorAll(".remove-cart-item")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    const index =
                        Number(button.dataset.index);

                    cart.splice(index, 1);

                    updateCart();

                });

            });

    }


    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const name =
                button.dataset.name;

            const price =
                Number(button.dataset.price);


            const existing =
                cart.find(function (item) {
                    return item.name === name;
                });


            if (existing) {

                existing.quantity++;

            } else {

                cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });

            }


            updateCart();


            const oldText =
                button.innerHTML;

            button.innerHTML =
                '<i class="fas fa-check"></i> Added';


            setTimeout(function () {

                button.innerHTML = oldText;

            }, 1000);

        });

    });


    updateCart();


    /* =========================================
       WHATSAPP FOOD ORDER
    ========================================= */

    if (orderNowBtn) {

        orderNowBtn.addEventListener("click", function () {

            if (cart.length === 0) {

                alert(
                    "Please add at least one dish to your order."
                );

                return;
            }


            let message =
                "Hello La Vita! 🍽️\n\n" +
                "I would like to place an order:\n\n";


            let total = 0;


            cart.forEach(function (item) {

                const itemTotal =
                    item.price * item.quantity;

                total += itemTotal;

                message +=
                    "• " +
                    item.name +
                    " × " +
                    item.quantity +
                    " — $" +
                    itemTotal.toFixed(2) +
                    "\n";

            });


            message +=
                "\nTotal: $" +
                total.toFixed(2) +
                "\n\n" +
                "Please confirm my order. Thank you!";


            const whatsappURL =
                "https://wa.me/918921033257?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

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


        /* Prevent selecting previous dates */

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


            dateInput.min =
                `${year}-${month}-${day}`;

        }


        reservationForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const phone =
                    document.getElementById("phone").value.trim();

                const date =
                    document.getElementById("date").value;

                const time =
                    document.getElementById("time").value;

                const guests =
                    document.getElementById("guests").value;

                const occasion =
                    document.getElementById("occasion").value;

                const specialRequest =
                    document.getElementById("message").value.trim();


                let message =
                    "Hello La Vita! ✨\n\n" +

                    "I would like to request a table reservation.\n\n" +

                    "Name: " + name + "\n" +
                    "Phone: " + phone + "\n" +
                    "Date: " + date + "\n" +
                    "Time: " + time + "\n" +
                    "Guests: " + guests + "\n" +
                    "Occasion: " + occasion + "\n";


                if (specialRequest) {

                    message +=
                        "Special Request: " +
                        specialRequest +
                        "\n";

                }


                message +=
                    "\nPlease confirm my reservation. Thank you!";


                const whatsappURL =
                    "https://wa.me/918921033257?text=" +
                    encodeURIComponent(message);


                if (reservationSuccess) {

                    reservationSuccess.classList.add("show");

                }


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop =
        document.querySelector(".back-to-top");


    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                link.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetID);


            if (!target) {
                return;
            }


            event.preventDefault();


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            window.scrollTo({

                top: position,

                behavior: "smooth"

            });

        });

    });


    /* =========================================
       ACTIVE NAV LINK
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        "IntersectionObserver" in window &&
        sections.length
    ) {

        const sectionObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        const id =
                            entry.target.id;


                        navLinks.forEach(function (link) {

                            link.classList.remove("active");


                            if (
                                link.getAttribute("href") ===
                                "#" + id
                            ) {

                                link.classList.add("active");

                            }

                        });

                    });

                },
                {
                    rootMargin:
                        "-30% 0px -60% 0px"
                }
            );


        sections.forEach(function (section) {

            sectionObserver.observe(section);

        });

    }


    /* =========================================
       PAGE READY
    ========================================= */

    document.body.classList.add("page-loaded");

    console.log(
        "La Vita website loaded successfully."
    );

});
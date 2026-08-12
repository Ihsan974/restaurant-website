:root {

    --primary: #c9a96e;
    --primary-light: #e0c28a;

    --dark: #111111;
    --dark-2: #181818;
    --dark-3: #222222;

    --light: #f8f5ef;
    --white: #ffffff;

    --text: #555555;

    --border: rgba(201, 169, 110, 0.25);

    --font-heading: "Cormorant Garamond", serif;
    --font-body: "Inter", sans-serif;

    --container: 1200px;

    --transition: 0.35s ease;
}


/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    font-family: var(--font-body);

    color: var(--text);

    background: var(--white);

    line-height: 1.7;

    overflow-x: hidden;
}


body.no-scroll {
    overflow: hidden;
}


img {

    width: 100%;

    display: block;

    object-fit: cover;
}


a {

    color: inherit;

    text-decoration: none;
}


button,
input,
textarea,
select {

    font: inherit;
}


button {
    cursor: pointer;
}


.container {

    width: min(90%, var(--container));

    margin: 0 auto;
}


.section-padding {
    padding: 110px 0;
}



/* =========================
   HEADER
========================= */

.header {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    padding: 22px 0;

    transition: var(--transition);
}


.header.scrolled {

    background: rgba(17, 17, 17, 0.96);

    backdrop-filter: blur(12px);

    padding: 14px 0;

    box-shadow:
        0 5px 30px rgba(0, 0, 0, 0.2);
}


.nav-container {

    display: flex;

    align-items: center;

    justify-content: space-between;
}


/* LOGO */

.logo {

    color: var(--white);

    font-family: var(--font-heading);

    font-size: 27px;

    font-weight: 600;

    letter-spacing: 3px;

    line-height: 1;

    display: inline-flex;

    flex-direction: column;
}


.logo span {
    color: var(--primary);
}


.logo small {

    color: rgba(255, 255, 255, 0.6);

    font-family: var(--font-body);

    font-size: 7px;

    letter-spacing: 4px;

    margin-top: 5px;

    font-weight: 500;
}


/* NAVIGATION */

.navbar {

    display: flex;

    align-items: center;

    gap: 28px;
}


.nav-link {

    position: relative;

    color: rgba(255, 255, 255, 0.85);

    font-size: 12px;

    font-weight: 500;

    text-transform: uppercase;

    letter-spacing: 1px;

    transition: var(--transition);
}


.nav-link::after {

    content: "";

    position: absolute;

    left: 0;

    bottom: -8px;

    width: 0;

    height: 1px;

    background: var(--primary);

    transition: var(--transition);
}


.nav-link:hover,
.nav-link.active {

    color: var(--primary);
}


.nav-link:hover::after,
.nav-link.active::after {

    width: 100%;
}


.nav-reservation {

    padding: 12px 20px;

    border: 1px solid var(--primary);

    color: var(--primary);

    font-size: 11px;

    text-transform: uppercase;

    letter-spacing: 1px;

    transition: var(--transition);
}


.nav-reservation:hover {

    background: var(--primary);

    color: var(--dark);
}


.mobile-menu-btn {

    display: none;

    border: 0;

    background: transparent;

    color: var(--white);

    font-size: 24px;
}



/* =========================
   HERO
========================= */

.hero {

    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    background:

        linear-gradient(
            rgba(0, 0, 0, 0.48),
            rgba(0, 0, 0, 0.70)
        ),

        url("images/hero.jpg")
        center / cover no-repeat;

    color: var(--white);

    overflow: hidden;
}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:

        radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 100%
        );
}


.hero-content {

    position: relative;

    z-index: 2;

    max-width: 800px;

    padding-top: 80px;
}


.hero-subtitle,
.section-label {

    display: inline-block;

    color: var(--primary);

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 3px;

    text-transform: uppercase;

    margin-bottom: 20px;
}


.hero h1 {

    font-family: var(--font-heading);

    font-size: clamp(55px, 7vw, 95px);

    font-weight: 400;

    line-height: 0.95;

    max-width: 850px;
}


.hero h1 span {

    color: var(--primary);

    font-style: italic;
}


.hero p {

    max-width: 620px;

    margin: 28px 0 38px;

    color: rgba(255, 255, 255, 0.8);

    font-size: 16px;

    font-weight: 300;
}


.hero-buttons {

    display: flex;

    gap: 15px;

    flex-wrap: wrap;
}



/* =========================
   BUTTONS
========================= */

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    padding: 15px 26px;

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 1.5px;

    text-transform: uppercase;

    transition: var(--transition);
}


.btn i {
    transition: var(--transition);
}


.btn:hover i {
    transform: translateX(5px);
}


.btn-primary {

    background: var(--primary);

    color: var(--dark);
}


.btn-primary:hover {

    background: var(--primary-light);

    transform: translateY(-2px);
}


.btn-outline {

    border: 1px solid rgba(255, 255, 255, 0.5);

    color: var(--white);
}


.btn-outline:hover {

    background: var(--white);

    color: var(--dark);
}


.btn-dark {

    background: var(--dark);

    color: var(--white);
}


.btn-dark:hover {

    background: var(--primary);

    color: var(--dark);
}


.hero-scroll {

    position: absolute;

    bottom: 35px;

    left: 50%;

    transform: translateX(-50%);

    z-index: 2;

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 8px;

    color: rgba(255, 255, 255, 0.6);

    font-size: 9px;

    letter-spacing: 3px;
}


.hero-scroll i {

    color: var(--primary);

    animation: bounce 1.5s infinite;
}


@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(7px);
    }

}



/* =========================
   STATS
========================= */

.intro-section {

    background: var(--dark);

    padding: 32px 0;
}


.intro-grid {

    display: grid;

    grid-template-columns: repeat(4, 1fr);
}


.intro-item {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 15px;

    color: var(--white);

    border-right:
        1px solid rgba(255, 255, 255, 0.12);
}


.intro-item:last-child {
    border-right: 0;
}


.intro-item i {

    color: var(--primary);

    font-size: 22px;
}


.intro-item strong {

    display: block;

    color: var(--white);

    font-family: var(--font-heading);

    font-size: 25px;

    line-height: 1;
}


.intro-item span {

    display: block;

    color: rgba(255, 255, 255, 0.55);

    font-size: 10px;

    margin-top: 4px;

    text-transform: uppercase;

    letter-spacing: 0.8px;
}



/* =========================
   HEADINGS
========================= */

.section-heading {

    text-align: center;

    max-width: 700px;

    margin: 0 auto 55px;
}


.section-heading h2,
.about-content h2,
.chef-content h2,
.reservation-content h2 {

    color: var(--dark);

    font-family: var(--font-heading);

    font-size: clamp(42px, 5vw, 65px);

    font-weight: 500;

    line-height: 1;
}


.section-heading h2 span,
.about-content h2 span,
.chef-content h2 span,
.reservation-content h2 span {

    color: var(--primary);

    font-style: italic;
}


.section-heading p {

    margin-top: 20px;

    color: #777;

    font-size: 14px;
}



/* =========================
   ABOUT
========================= */

.about {
    background: var(--light);
}


.section-grid {

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    gap: 80px;
}


.about-images {

    position: relative;

    min-height: 600px;
}


.about-image-main {

    width: 82%;

    height: 520px;

    overflow: hidden;
}


.about-image-main img,
.about-image-small img,
.chef-image img,
.gallery-item img,
.dish-image img {

    transition:
        transform 0.8s ease;
}


.about-image-main:hover img,
.about-image-small:hover img,
.dish-card:hover img,
.gallery-item:hover img {

    transform: scale(1.06);
}


.about-image-small {

    position: absolute;

    right: 0;

    bottom: 0;

    width: 45%;

    height: 270px;

    border: 10px solid var(--light);

    overflow: hidden;
}


.experience-badge {

    position: absolute;

    left: 60%;

    top: 25px;

    width: 130px;

    height: 130px;

    border-radius: 50%;

    background: var(--primary);

    color: var(--dark);

    display: flex;

    align-items: center;

    justify-content: center;

    flex-direction: column;

    text-align: center;
}


.experience-badge strong {

    font-family: var(--font-heading);

    font-size: 45px;

    line-height: 0.8;
}


.experience-badge span {

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 1px;
}


.about-content h2 {
    margin-bottom: 25px;
}


.about-content p {
    margin-bottom: 18px;
}


.about-content .lead,
.chef-content .lead {

    color: var(--dark);

    font-family: var(--font-heading);

    font-size: 23px;

    line-height: 1.4;
}


.text-link {

    display: inline-flex;

    align-items: center;

    gap: 10px;

    color: var(--dark);

    margin-top: 15px;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1px;

    text-transform: uppercase;
}


.text-link i {

    color: var(--primary);

    transition: var(--transition);
}


.text-link:hover i {
    transform: translateX(5px);
}



/* =========================
   SIGNATURE DISHES
========================= */

.signature {
    background: var(--white);
}


.dish-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}


.dish-card {

    background: var(--light);

    overflow: hidden;

    transition: var(--transition);
}


.dish-card:hover {

    transform: translateY(-8px);

    box-shadow:
        0 20px 45px rgba(0, 0, 0, 0.1);
}


.dish-image {

    height: 320px;

    position: relative;

    overflow: hidden;
}


.dish-tag {

    position: absolute;

    top: 15px;

    left: 15px;

    padding: 7px 12px;

    background: var(--primary);

    color: var(--dark);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 1px;
}


.dish-content {
    padding: 25px;
}


.dish-title {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;
}


.dish-title h3 {

    color: var(--dark);

    font-family: var(--font-heading);

    font-size: 25px;

    font-weight: 600;
}


.dish-title span {

    color: var(--primary);

    font-size: 18px;

    font-weight: 600;
}


.dish-content p {

    margin-top: 10px;

    font-size: 13px;

    color: #777;
}


.center-button {

    text-align: center;

    margin-top: 45px;
}



/* =========================
   MENU
========================= */

.menu-section {
    background: var(--light);
}


.menu-tabs {

    display: flex;

    justify-content: center;

    gap: 10px;

    margin-bottom: 45px;

    flex-wrap: wrap;
}


.menu-tab {

    padding: 12px 24px;

    border: 1px solid #ddd;

    background: transparent;

    color: #555;

    font-size: 11px;

    text-transform: uppercase;

    letter-spacing: 1px;

    transition: var(--transition);
}


.menu-tab:hover,
.menu-tab.active {

    background: var(--dark);

    border-color: var(--dark);

    color: var(--primary);
}


.menu-list {

    max-width: 900px;

    margin: auto;
}


.menu-item {

    display: flex;

    justify-content: space-between;

    gap: 30px;

    padding: 25px 0;

    border-bottom: 1px solid #ddd;

    animation: menuFade 0.35s ease;
}


@keyframes menuFade {

    from {
        opacity: 0;
        transform: translateY(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


.menu-item-info h3 {

    color: var(--dark);

    font-family: var(--font-heading);

    font-size: 25px;

    font-weight: 600;
}


.menu-item-info p {

    margin-top: 4px;

    color: #777;

    font-size: 13px;
}


.menu-price {

    color: var(--primary);

    font-size: 18px;

    font-weight: 600;

    white-space: nowrap;
}



/* =========================
   CHEF
========================= */

.chef {
    background: var(--dark);
}


.chef-content .section-label {
    color: var(--primary);
}


.chef-content h2 {

    color: var(--white);

    margin-bottom: 25px;
}


.chef-content h2 span {
    color: var(--primary);
}


.chef-content p {

    color: rgba(255, 255, 255, 0.65);

    font-size: 14px;

    margin-bottom: 18px;
}


.chef-content .lead {
    color: var(--white);
}


.chef-signature {

    margin-top: 30px;

    color: var(--primary);

    font-family: var(--font-heading);

    font-size: 34px;

    font-style: italic;
}


.chef-role {

    color: rgba(255, 255, 255, 0.5);

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 2px;
}


.chef-image {

    height: 600px;

    overflow: hidden;
}


.chef-image img {
    height: 100%;
}



/* =========================
   EXPERIENCE
========================= */

.experience-section {

    min-height: 620px;

    position: relative;

    display: flex;

    align-items: center;

    background:

        linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.65)
        ),

        url("images/experience.jpg")
        center / cover no-repeat;

    color: var(--white);
}


.experience-overlay {

    position: absolute;

    inset: 0;

    background:
        rgba(0, 0, 0, 0.15);
}


.experience-content {

    position: relative;

    z-index: 2;
}


.experience-content h2 {

    color: var(--white);

    font-family: var(--font-heading);

    font-size: clamp(50px, 7vw, 85px);

    font-weight: 400;

    line-height: 0.95;

    margin-bottom: 35px;
}


.experience-content h2 span {

    color: var(--primary);

    font-style: italic;
}



/* =========================
   GALLERY
========================= */

.gallery {
    background: var(--white);
}


.gallery-grid {

    display: grid;

    grid-template-columns:
        2fr 1fr 1fr;

    grid-auto-rows: 250px;

    gap: 15px;
}


.gallery-item {
    overflow: hidden;
}


.gallery-item img {
    height: 100%;
}


.gallery-large {
    grid-row: span 2;
}



/* =========================
   REVIEWS
========================= */

.reviews {
    background: var(--light);
}


.review-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}


.review-card {

    background: var(--white);

    padding: 35px;

    border: 1px solid #eee;

    transition: var(--transition);
}


.review-card:hover {

    transform: translateY(-5px);

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.08);
}


.stars {

    color: var(--primary);

    letter-spacing: 3px;

    margin-bottom: 20px;
}


.review-card > p {

    color: #666;

    font-family: var(--font-heading);

    font-size: 20px;

    line-height: 1.45;
}


.review-author {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-top: 30px;
}


.review-avatar {

    width: 45px;

    height: 45px;

    border-radius: 50%;

    background: var(--dark);

    color: var(--primary);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 11px;

    font-weight: 600;
}


.review-author strong {

    display: block;

    color: var(--dark);

    font-size: 12px;
}


.review-author span {

    display: block;

    color: #999;

    font-size: 10px;

    margin-top: 2px;
}



/* =========================
   RESERVATION
========================= */

.reservation {
    background: var(--dark);
}


.reservation-box {

    display: grid;

    grid-template-columns:
        0.85fr 1.15fr;

    gap: 70px;

    padding: 65px;

    background: #191919;

    border: 1px solid var(--border);
}


.reservation-content h2 {

    color: var(--white);

    margin-bottom: 25px;
}


.reservation-content > p {

    color: rgba(255, 255, 255, 0.6);

    font-size: 14px;

    margin-bottom: 30px;
}


.reservation-contact {

    display: flex;

    flex-direction: column;

    gap: 12px;
}


.reservation-contact a {

    color: rgba(255, 255, 255, 0.8);

    font-size: 13px;
}


.reservation-contact i {

    width: 22px;

    color: var(--primary);
}


.form-row {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 18px;
}


.form-group {
    margin-bottom: 18px;
}


.form-group label {

    display: block;

    color: rgba(255, 255, 255, 0.65);

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 1px;

    margin-bottom: 7px;
}


.form-group input,
.form-group select,
.form-group textarea {

    width: 100%;

    border: 1px solid
        rgba(255, 255, 255, 0.12);

    background: #111;

    color: var(--white);

    padding: 13px 15px;

    outline: none;

    resize: vertical;

    transition: var(--transition);
}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {

    border-color: var(--primary);
}


.form-group input::placeholder,
.form-group textarea::placeholder {

    color: #666;
}



/* =========================
   CONTACT
========================= */

.contact {
    background: var(--white);
}


.contact-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}


.contact-card {

    padding: 45px 30px;

    text-align: center;

    border: 1px solid #eee;

    transition: var(--transition);
}


.contact-card:hover {

    transform: translateY(-5px);

    border-color: var(--primary);
}


.contact-card > i {

    color: var(--primary);

    font-size: 25px;

    margin-bottom: 20px;
}


.contact-card h3 {

    color: var(--dark);

    font-family: var(--font-heading);

    font-size: 25px;

    margin-bottom: 12px;
}


.contact-card p {

    color: #777;

    font-size: 13px;
}


.contact-card a:hover {
    color: var(--primary);
}



/* =========================
   FOOTER
========================= */

.footer {

    background: #0d0d0d;

    color: rgba(255, 255, 255, 0.65);

    padding-top: 75px;
}


.footer-grid {

    display: grid;

    grid-template-columns:
        1.5fr 0.7fr 0.9fr 1.4fr;

    gap: 50px;

    padding-bottom: 55px;
}


.footer-brand .logo {
    margin-bottom: 20px;
}


.footer-brand > p {

    max-width: 300px;

    font-size: 13px;
}


.social-links {

    display: flex;

    gap: 10px;

    margin-top: 25px;
}


.social-links a {

    width: 38px;

    height: 38px;

    display: flex;

    align-items: center;

    justify-content: center;

    border:
        1px solid rgba(255, 255, 255, 0.15);

    transition: var(--transition);
}


.social-links a:hover {

    background: var(--primary);

    color: var(--dark);

    border-color: var(--primary);
}


.footer-column h3 {

    color: var(--white);

    font-family: var(--font-heading);

    font-size: 22px;

    margin-bottom: 18px;
}


.footer-column > a {

    display: block;

    margin-bottom: 9px;

    font-size: 12px;

    transition: var(--transition);
}


.footer-column > a:hover {

    color: var(--primary);

    transform: translateX(4px);
}


.newsletter p {

    font-size: 12px;

    margin-bottom: 18px;
}


.footer-email-btn {

    display: inline-flex !important;

    align-items: center;

    gap: 10px;

    color: var(--primary) !important;

    border-bottom:
        1px solid var(--primary);

    padding-bottom: 7px;
}


.footer-bottom {

    border-top:
        1px solid rgba(255, 255, 255, 0.08);

    padding: 20px 0;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    font-size: 10px;
}



/* =========================
   WHATSAPP
========================= */

.whatsapp-btn {

    position: fixed;

    right: 25px;

    bottom: 25px;

    width: 55px;

    height: 55px;

    border-radius: 50%;

    background: #25d366;

    color: var(--white);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 27px;

    z-index: 900;

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.25);

    transition: var(--transition);
}


.whatsapp-btn:hover {

    transform: scale(1.1);
}



/* =========================
   BACK TO TOP
========================= */

.back-to-top {

    position: fixed;

    right: 25px;

    bottom: 95px;

    width: 45px;

    height: 45px;

    border: 1px solid var(--primary);

    background: var(--dark);

    color: var(--primary);

    opacity: 0;

    visibility: hidden;

    transform: translateY(15px);

    z-index: 899;

    transition: var(--transition);
}


.back-to-top.show {

    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}


.back-to-top:hover {

    background: var(--primary);

    color: var(--dark);
}



/* =========================
   SCROLL REVEAL
========================= */

.reveal {

    opacity: 0;

    transform: translateY(25px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}


.reveal.revealed {

    opacity: 1;

    transform: translateY(0);
}



/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {

    .navbar {
        gap: 18px;
    }


    .nav-link {
        font-size: 10px;
    }


    .section-grid {
        gap: 50px;
    }


    .reservation-box {

        gap: 40px;

        padding: 45px;
    }

}



@media (max-width: 900px) {

    .mobile-menu-btn {

        display: block;

        position: relative;

        z-index: 1100;
    }


    .navbar {

        position: fixed;

        top: 0;

        right: -100%;

        width: 300px;

        height: 100vh;

        background: #111;

        display: flex;

        flex-direction: column;

        justify-content: center;

        align-items: center;

        gap: 25px;

        transition: var(--transition);

        box-shadow:
            -10px 0 30px rgba(0, 0, 0, 0.3);
    }


    .navbar.active {
        right: 0;
    }


    .nav-link {
        font-size: 12px;
    }


    .nav-reservation {
        margin-top: 10px;
    }


    .intro-grid {

        grid-template-columns:
            repeat(2, 1fr);

        gap: 25px;
    }


    .intro-item {
        border-right: 0;
    }


    .section-grid {

        grid-template-columns: 1fr;
    }


    .about-images {

        max-width: 700px;

        width: 100%;

        margin: auto;
    }


    .dish-grid,
    .review-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }


    .dish-card:last-child,
    .review-card:last-child {

        grid-column: 1 / -1;

        max-width: 500px;

        width: 100%;

        margin: auto;
    }


    .chef-grid {
        display: grid;
    }


    .chef-image {

        order: -1;

        height: 500px;
    }


    .reservation-box {

        grid-template-columns: 1fr;
    }


    .contact-grid {

        grid-template-columns: 1fr;
    }


    .footer-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }

}



@media (max-width: 650px) {

    .section-padding {
        padding: 75px 0;
    }


    .header {
        padding: 17px 0;
    }


    .logo {
        font-size: 23px;
    }


    .hero {
        min-height: 750px;
    }


    .hero-content {
        padding-top: 70px;
    }


    .hero h1 {
        font-size: 53px;
    }


    .hero p {
        font-size: 14px;
    }


    .hero-scroll {
        display: none;
    }


    .intro-grid {

        grid-template-columns:
            1fr 1fr;

        gap: 25px 10px;
    }


    .intro-item {

        justify-content: flex-start;
    }


    .intro-item i {
        font-size: 18px;
    }


    .intro-item strong {
        font-size: 21px;
    }


    .intro-item span {
        font-size: 8px;
    }


    .about-images {
        min-height: 470px;
    }


    .about-image-main {

        height: 400px;

        width: 88%;
    }


    .about-image-small {

        width: 50%;

        height: 210px;
    }


    .experience-badge {

        width: 105px;

        height: 105px;

        left: auto;

        right: 5px;

        top: 10px;
    }


    .experience-badge strong {
        font-size: 35px;
    }


    .section-heading {
        margin-bottom: 40px;
    }


    .dish-grid,
    .review-grid {

        grid-template-columns: 1fr;
    }


    .dish-card:last-child,
    .review-card:last-child {

        grid-column: auto;

        max-width: none;
    }


    .dish-image {
        height: 280px;
    }


    .menu-item {
        gap: 15px;
    }


    .menu-item-info h3 {
        font-size: 21px;
    }


    .menu-item-info p {
        font-size: 12px;
    }


    .menu-price {
        font-size: 16px;
    }


    .experience-section {
        min-height: 540px;
    }


    .gallery-grid {

        grid-template-columns:
            1fr 1fr;

        grid-auto-rows: 200px;
    }


    .gallery-large {

        grid-column: 1 / -1;

        grid-row: span 1;
    }


    .form-row {

        grid-template-columns: 1fr;

        gap: 0;
    }


    .reservation-box {

        padding: 30px 20px;
    }


    .footer-grid {

        grid-template-columns: 1fr;

        gap: 35px;
    }


    .footer-bottom {

        flex-direction: column;

        align-items: flex-start;
    }


    .whatsapp-btn {

        width: 50px;

        height: 50px;

        right: 18px;

        bottom: 18px;
    }


    .back-to-top {

        right: 18px;

        bottom: 80px;
    }

}



@media (max-width: 400px) {

    .hero h1 {
        font-size: 45px;
    }


    .hero-buttons {

        flex-direction: column;

        align-items: stretch;
    }


    .btn {
        width: 100%;
    }


    .intro-grid {
        grid-template-columns: 1fr;
    }


    .intro-item {
        justify-content: center;
    }


    .gallery-grid {
        grid-template-columns: 1fr;
    }


    .gallery-large {
        grid-column: auto;
    }

}



/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }


    *,
    *::before,
    *::after {

        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;

        transition-duration: 0.01ms !important;
    }

}

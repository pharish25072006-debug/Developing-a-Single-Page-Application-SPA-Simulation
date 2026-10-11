/* =====================================================
   WEEK 5 SPA PROJECT
   Client-Side Routing using JavaScript
===================================================== */


/* =====================================================
   DOM ELEMENTS
===================================================== */

const app = document.getElementById("app");

const navigation = document.getElementById("navigation");

const menuToggle = document.getElementById("menuToggle");

const year = document.getElementById("year");


/* =====================================================
   CURRENT YEAR
===================================================== */

year.textContent = new Date().getFullYear();


/* =====================================================
   PAGE CONTENT
===================================================== */

const pages = {

    home: `
        <section class="hero page">

            <div class="hero-content">

                <div class="hero-text">

                    <h1>
                        Build Better
                        <span>Web Experiences</span>
                    </h1>

                    <p>
                        Welcome to my Single Page Application.
                        This project demonstrates client-side routing,
                        dynamic content loading, browser history,
                        responsive design and smooth transitions
                        using pure HTML, CSS and JavaScript.
                    </p>

                    <div class="hero-buttons">

                        <a
                            href="/services"
                            data-link
                            class="btn btn-primary"
                        >
                            Explore Services
                        </a>

                        <a
                            href="/about"
                            data-link
                            class="btn btn-secondary"
                        >
                            Learn More
                        </a>

                    </div>

                </div>


                <div class="hero-card">

                    <div class="hero-icon">
                        🚀
                    </div>

                    <h2>
                        Single Page Application
                    </h2>

                    <p>
                        Navigate between pages without
                        refreshing the browser.
                    </p>

                </div>

            </div>

        </section>


        <section class="section">

            <div class="section-title">

                <h1>Why This SPA?</h1>

                <p>
                    A modern frontend architecture that
                    provides a smooth and interactive
                    user experience.
                </p>

            </div>


            <div class="cards">

                <div class="card">

                    <div class="card-icon">
                        ⚡
                    </div>

                    <h3>Fast Navigation</h3>

                    <p>
                        Content changes instantly without
                        completely reloading the webpage.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        🔗
                    </div>

                    <h3>Client Routing</h3>

                    <p>
                        JavaScript manages URL routes using
                        the browser History API.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        📱
                    </div>

                    <h3>Responsive Design</h3>

                    <p>
                        The application works smoothly on
                        desktop, tablet and mobile devices.
                    </p>

                </div>

            </div>

        </section>
    `,


    about: `
        <section class="section page">

            <div class="section-title">

                <h1>About This Project</h1>

                <p>
                    Understanding the architecture behind
                    this Single Page Application.
                </p>

            </div>


            <div class="about-content">

                <h2>Project Overview</h2>

                <br>

                <p>
                    This project is a small-scale Single Page
                    Application developed using HTML, CSS and
                    vanilla JavaScript.
                </p>

                <p>
                    Unlike traditional websites, this SPA does
                    not reload the entire webpage whenever a
                    user navigates to another section.
                </p>

                <p>
                    JavaScript captures navigation events and
                    dynamically updates the main content area.
                    The browser History API is used to update
                    the URL while maintaining a smooth user
                    experience.
                </p>

                <p>
                    The application also supports browser
                    back and forward buttons through the
                    popstate event.
                </p>

                <h2>Technologies Used</h2>

                <br>

                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript ES6</li>
                    <li>History API</li>
                    <li>Responsive Web Design</li>
                </ul>

            </div>

        </section>
    `,


    services: `
        <section class="section page">

            <div class="section-title">

                <h1>Our Services</h1>

                <p>
                    Explore the services demonstrated
                    in this SPA project.
                </p>

            </div>


            <div class="cards">

                <div class="card">

                    <div class="card-icon">
                        💻
                    </div>

                    <h3>Web Development</h3>

                    <p>
                        Modern and responsive websites
                        built with clean frontend code.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        🎨
                    </div>

                    <h3>UI Design</h3>

                    <p>
                        Clean, accessible and visually
                        attractive user interfaces.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        ⚙️
                    </div>

                    <h3>SPA Development</h3>

                    <p>
                        Fast client-side applications
                        using JavaScript routing.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        📱
                    </div>

                    <h3>Responsive Design</h3>

                    <p>
                        Websites that adapt to different
                        screen sizes and devices.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        🔧
                    </div>

                    <h3>Maintenance</h3>

                    <p>
                        Debugging, optimization and
                        continuous improvements.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        🚀
                    </div>

                    <h3>Performance</h3>

                    <p>
                        Optimized interfaces for fast
                        and smooth user experiences.
                    </p>

                </div>

            </div>

        </section>
    `,


    projects: `
        <section class="section page">

            <div class="section-title">

                <h1>My Projects</h1>

                <p>
                    Some example projects represented
                    inside the SPA.
                </p>

            </div>


            <div class="cards">

                <div class="card project-card">

                    <div class="project-image">
                        🌐
                    </div>

                    <h3>Responsive Website</h3>

                    <p>
                        A responsive website developed
                        using HTML and CSS.
                    </p>

                </div>


                <div class="card project-card">

                    <div class="project-image">
                        ⚡
                    </div>

                    <h3>JavaScript App</h3>

                    <p>
                        Interactive frontend application
                        using vanilla JavaScript.
                    </p>

                </div>


                <div class="card project-card">

                    <div class="project-image">
                        🚀
                    </div>

                    <h3>SPA Simulation</h3>

                    <p>
                        This current project demonstrates
                        client-side SPA routing.
                    </p>

                </div>

            </div>


            <div class="stats">

                <div class="stat">

                    <h2>3+</h2>

                    <p>Projects</p>

                </div>


                <div class="stat">

                    <h2>5</h2>

                    <p>Routes</p>

                </div>


                <div class="stat">

                    <h2>100%</h2>

                    <p>Responsive</p>

                </div>

            </div>

        </section>
    `,


    contact: `
        <section class="section page">

            <div class="section-title">

                <h1>Contact Me</h1>

                <p>
                    Send a message using the form below.
                </p>

            </div>


            <div class="contact-container">

                <form
                    class="contact-form"
                    id="contactForm"
                >

                    <div class="form-group">

                        <label for="name">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="email">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            required
                        ></textarea>

                    </div>


                    <button
                        type="submit"
                        class="btn btn-primary"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    `

};


/* =====================================================
   ROUTES
===================================================== */

const routes = {

    "/": "home",

    "/about": "about",

    "/services": "services",

    "/projects": "projects",

    "/contact": "contact"

};


/* =====================================================
   GET CURRENT ROUTE
===================================================== */

function getCurrentRoute() {

    let path = window.location.pathname;

    /*
       When using the project through some local servers,
       the path may contain index.html.
    */

    if (path === "/index.html") {
        path = "/";
    }

    return path;

}


/* =====================================================
   UPDATE ACTIVE NAVIGATION
===================================================== */

function updateActiveNavigation(path) {

    const links =
        document.querySelectorAll("[data-link]");

    links.forEach(link => {

        const linkPath =
            new URL(link.href).pathname;

        link.classList.remove("active");

        if (linkPath === path) {
            link.classList.add("active");
        }

    });

}


/* =====================================================
   LOAD PAGE
===================================================== */

function loadPage(path, addToHistory = true) {

    /*
       Check if requested route exists.
    */

    if (!routes[path]) {

        show404();

        return;

    }


    /*
       Show loading animation.
    */

    app.innerHTML = `
        <div class="loader-container">

            <div class="loader"></div>

            <p>Loading page...</p>

        </div>
    `;


    /*
       Small delay creates a smooth transition.
    */

    setTimeout(() => {

        const pageName = routes[path];

        app.innerHTML = pages[pageName];

        updateActiveNavigation(path);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        /*
           Update browser URL.
        */

        if (addToHistory) {

            window.history.pushState(
                { page: pageName },
                "",
                path
            );

        }


        /*
           Close mobile menu.
        */

        navigation.classList.remove("show");


        /*
           Activate contact form if available.
        */

        initializeContactForm();

    }, 200);

}


/* =====================================================
   404 PAGE
===================================================== */

function show404() {

    app.innerHTML = `

        <section class="error-page page">

            <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>
                Sorry, the page you are looking for
                does not exist.
            </p>

            <br>

            <a
                href="/"
                data-link
                class="btn btn-primary"
            >
                Back to Home
            </a>

        </section>

    `;

    updateActiveNavigation("");

}


/* =====================================================
   HANDLE NAVIGATION CLICKS
===================================================== */

document.addEventListener("click", function(event) {

    const link =
        event.target.closest("[data-link]");

    if (!link) {
        return;
    }


    /*
       Prevent normal browser page reload.
    */

    event.preventDefault();


    const url =
        new URL(link.href);


    const path =
        url.pathname;


    loadPage(path, true);

});


/* =====================================================
   BROWSER BACK/FORWARD BUTTON
===================================================== */

window.addEventListener("popstate", function() {

    const path =
        getCurrentRoute();

    loadPage(path, false);

});


/* =====================================================
   MOBILE MENU
===================================================== */

menuToggle.addEventListener("click", function() {

    navigation.classList.toggle("show");

});


/* =====================================================
   CONTACT FORM
===================================================== */

function initializeContactForm() {

    const form =
        document.getElementById("contactForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        alert(
            `Thank you, ${name}! Your message has been received.`
        );


        form.reset();

    });

}


/* =====================================================
   INITIAL APPLICATION LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    const path =
        getCurrentRoute();


    if (routes[path]) {

        loadPage(path, false);

    } else {

        show404();

    }

});
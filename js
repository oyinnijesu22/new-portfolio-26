 // Active nav link on scroll
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-links a");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 80;
                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });

        // Hamburger menu
        const hamburger = document.querySelector(".hamburger");
        const navList = document.querySelector(".nav-links");
        hamburger.addEventListener("click", () => {
            navList.classList.toggle("show");
        });


        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");


        window.addEventListener(
            "load",
            function () {

                const intro =
                    document.getElementById(
                        "introScreen"
                    );


                /*
                    Wait 3 seconds
                    then hide intro
                */

                setTimeout(
                    function () {

                        intro.classList.add(
                            "hide"
                        );

                    },
                    3000
                );

            }
        );
        /* OPEN / CLOSE MENU */

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");


            /* Change ☰ to ✕ */

            if (navLinks.classList.contains("active")) {

                menuBtn.textContent = "✕";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        /* CLOSE MENU AFTER CLICKING A LINK */

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    
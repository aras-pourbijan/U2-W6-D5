let changeTheme = function () {
    const allNav = document.querySelectorAll("nav");
    const bodyCss = document.querySelector(".container-fluid");
    const logos = document.querySelector("#partner-logo");
    bodyCss.classList.toggle("bg-dark");
    bodyCss.classList.toggle("text-light");

    for (const nav of allNav) {
        nav.classList.toggle("navbar-dark");
        nav.classList.toggle("navbar-light");
        nav.classList.toggle("bg-light");
        nav.classList.toggle("bg-dark");
    }
};

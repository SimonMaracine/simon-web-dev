$(function() {
    $("header").load("/html/navigation.html");
});

function setActivePage(pageName) {
    const home = document.getElementById("home-page");
    home.classList.remove("active");

    const page = document.getElementById(pageName);
    page.classList.add("active");
}

$(window).on("load", function() {
    const pageName = window.location.href;
    console.log(pageName);

    const tokens = pageName.split("/");
    console.log(tokens);

    switch (tokens[tokens.length - 1]) {
        case "services.html":
            setActivePage("services-page");
            break;
        case "about.html":
            setActivePage("about-page");
            break;
        case "contact.html":
            setActivePage("contact-page");
            break;
    }
});

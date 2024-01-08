function setActivePage(pageName) {
    const home = document.getElementById("home-page");
    home.classList.remove("active");

    const page = document.getElementById(pageName);
    page.classList.add("active");
}

function onNavigationLoad(responseText, textStatus, jqXHR) {
    const pageName = window.location.href;
    const tokens = pageName.split("/");

    switch (tokens[tokens.length - 1]) {  // TODO maybe should just do string search instead of comparison
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
}

$(function() {
    $("header").load("/html/navigation.html", "", onNavigationLoad);
});

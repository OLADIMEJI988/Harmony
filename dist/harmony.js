function Menu(e) {
    let list = document.getElementById("menu-list");

    if (e.name === "menu") {
        e.name = "close";
        list.classList.add("opacity-100");
        list.classList.remove("opacity-0");
    } else {
        e.name = "menu";
        list.classList.remove("opacity-100");
        list.classList.add("opacity-0");
    }
}

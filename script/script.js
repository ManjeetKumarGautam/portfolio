let tabBtns = document.querySelectorAll(".about-tabs .tab-btns .tab-btn");
const tabPanels = document.querySelectorAll(".about-tabs .tab-panel");

function showPanel(panelIndex) {
    tabBtns.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabBtns[panelIndex].style.backgroundColor = "#7C3AED";
    tabBtns[panelIndex].style.color = "white";

    tabPanels.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.display = "";
    });
    // tabPanels[panelIndex].style.backgroundColor = "red";
    tabPanels[panelIndex].style.display = "block";
}
showPanel(0);


const navMenu = document.querySelector(".nav-items");
function showMenu() {
    navMenu.style.display = "flex";
}
function closeMenu() {
    navMenu.style.display = "none";
}


// send email


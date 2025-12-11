/* ------------------------------ POPUP ------------------------------ */
function openPopup(id) {
    document.getElementById(id).classList.add("active");
}

function closePopup(id) {
    document.getElementById(id).classList.remove("active");
}

/* -------------------- MOBILE MENU TOGGLE -------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const siteTitle = document.querySelector(".site-title-mobile");

    if (toggleBtn && mobileMenu && siteTitle) {
        // initial state
        mobileMenu.style.display = "none";
        siteTitle.style.display = "none";
        toggleBtn.textContent = "☰";

        toggleBtn.addEventListener("click", () => {
            const isOpen = mobileMenu.style.display === "flex";
            mobileMenu.style.display = isOpen ? "none" : "flex";
            siteTitle.style.display = isOpen ? "none" : "inline-block";
            toggleBtn.textContent = isOpen ? "☰" : "✖";
        });
    }
});



/* -------------------- SUBMENU TOGGLE ON MOBILE -------------------- */
function toggleSubmenu(event) {
    event.preventDefault(); // prevent navigation
    const li = event.target.closest("li");
    const submenu = li.querySelector(".submenu");
    const arrow = li.querySelector(".arrow");
    if (submenu.style.display === "flex") {
        submenu.style.display = "none";
        if (arrow) arrow.textContent = "▼";
    } else {
        submenu.style.display = "flex";
        if (arrow) arrow.textContent = "▲";
    }
}

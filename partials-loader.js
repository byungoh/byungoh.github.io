// Load title
fetch("/_partials/title.html")
    .then(res => res.text())
    .then(html => document.getElementById("title-container").innerHTML = html);

// Load menu
fetch("/_partials/menu.html")
  .then(res => res.text())
  .then(html => {
      document.getElementById("menu-container").innerHTML = html;

      // --- MOBILE MENU TOGGLE ---
      const toggleBtn = document.getElementById("mobile-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      const siteTitle = document.querySelector(".site-title-mobile");

      // initial state
      if (mobileMenu) mobileMenu.style.display = "none";
      if (siteTitle) siteTitle.style.display = "none";
      if (toggleBtn) toggleBtn.textContent = "☰";

      // toggle on click
      if (toggleBtn) {
          toggleBtn.addEventListener("click", () => {
              const isOpen = mobileMenu.style.display === "flex";
              mobileMenu.style.display = isOpen ? "none" : "flex";
              siteTitle.style.display = isOpen ? "none" : "inline-block";
              toggleBtn.textContent = isOpen ? "☰" : "✖";
          });
      }
  });


// Load footer
fetch("/_partials/footer.html")
    .then(res => res.text())
    .then(html => document.getElementById("footer-container").innerHTML = html);

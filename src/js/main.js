(function () {
  "use strict";

  document.documentElement.classList.add("js-enabled");

  var toggle = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-site-nav]");

  if (!toggle || !nav) {
    return;
  }

  function closeMenu() {
    nav.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var isActive = nav.classList.toggle("is-active");
    toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-active")) {
      closeMenu();
      toggle.focus();
    }
  });
})();

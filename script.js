/* Elite Barbers & Spa concept: minimal JS */
(function () {
  "use strict";

  // Mobile menu toggle
  var btn = document.getElementById("menuBtn");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    var setOpen = function (open) {
      menu.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    };
    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // If a placeholder image fails to load, hide it so the dark tile shows instead of a broken icon
  var imgs = document.querySelectorAll("img");
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("error", function () {
      this.style.visibility = "hidden";
    });
  }
})();
       

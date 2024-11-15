document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top:
          target.offsetTop -
          3.5 * parseFloat(getComputedStyle(document.documentElement).fontSize),
        behavior: "smooth",
      });
    }
  });
});

toggleMenu();
toggleLanguage();
searchPortfolio();

function toggleLanguage() {
  const languageSelector = document.querySelector(".language-selector");
  const languageContent = document.querySelector(".language-content");

  languageContent.addEventListener("click", function () {
    languageSelector.classList.toggle("visible");
  });

  const fr = document.querySelector("#fr");
  const en = document.querySelector("#en");

  fr.addEventListener("click", function () {
    const metaLanguage = document.querySelector(
      'meta[http-equiv="Content-Language"]'
    );
    if (metaLanguage && metaLanguage.getAttribute("content") === "fr") {
      languageSelector.classList.remove("visible");
      return;
    } else {
      window.location.href = "index.html";
    }
  });

  en.addEventListener("click", function () {
    const metaLanguage = document.querySelector(
      'meta[http-equiv="Content-Language"]'
    );
    if (metaLanguage && metaLanguage.getAttribute("content") === "en") {
      languageSelector.classList.remove("visible");
      return;
    } else {
      window.location.href = `unavailable.html`;
    }
  });
}

function searchPortfolio() {
  const theme = document.querySelector("#theme");
  const year = document.querySelector("#year");
  const themeSelect = document.querySelector("#project-theme");
  const yearSelect = document.querySelector("#project-year");
  const projectBox = document.querySelectorAll(".project-box");
  const themeText = document.querySelector("#project-theme div p");
  const yearText = document.querySelector("#project-year div p");
  const imgYearArrow = document.querySelector(
    "#project-year div img[src='img/vers-le-bas.png']"
  );
  const imgThemeArrow = document.querySelector(
    "#project-theme div img[src='img/vers-le-bas.png']"
  );

  themeSelect.addEventListener("click", function () {
    const tAll = document.querySelector("#tAll");
    const info = document.querySelector("#info");
    const network = document.querySelector("#network");
    const cyber = document.querySelector("#cyber");
    const imgtAll = document.querySelector("#tAll img");
    const imgInfo = document.querySelector("#info img");
    const imgNetwork = document.querySelector("#network img");
    const imgCyber = document.querySelector("#cyber img");
    theme.classList.toggle("visible");
    imgThemeArrow.classList.toggle("rotate90deg");
    year.classList.remove("visible");
    imgYearArrow.classList.add("rotate90deg");

    info.addEventListener("click", function () {
      imgInfo.classList.remove("invisible");
      imgNetwork.classList.add("invisible");
      imgCyber.classList.add("invisible");
      imgtAll.classList.add("invisible");
      themeText.textContent = "Informatique";
      projectBox.forEach((box) => {
        if (box.contains(box.querySelector(".info"))) {
          box.style.display = "flex";
        } else {
          box.style.display = "none";
        }
      });
    });

    network.addEventListener("click", function () {
      imgInfo.classList.add("invisible");
      imgNetwork.classList.remove("invisible");
      imgCyber.classList.add("invisible");
      imgtAll.classList.add("invisible");
      themeText.textContent = "Réseaux";
      projectBox.forEach((box) => {
        if (box.contains(box.querySelector(".network"))) {
          box.style.display = "flex";
        } else {
          box.style.display = "none";
        }
      });
    });

    cyber.addEventListener("click", function () {
      imgInfo.classList.add("invisible");
      imgNetwork.classList.add("invisible");
      imgCyber.classList.remove("invisible");
      imgtAll.classList.add("invisible");
      themeText.textContent = "Cybersécurité";
      projectBox.forEach((box) => {
        if (box.contains(box.querySelector(".cyber"))) {
          box.style.display = "flex";
        } else {
          box.style.display = "none";
        }
      });
    });

    tAll.addEventListener("click", function () {
      imgInfo.classList.add("invisible");
      imgNetwork.classList.add("invisible");
      imgCyber.classList.add("invisible");
      imgtAll.classList.remove("invisible");
      themeText.textContent = "Tout";
      projectBox.forEach((box) => {
        box.style.display = "flex";
      });
    });
  });

  yearSelect.addEventListener("click", function () {
    const yAll = document.querySelector("#yAll");
    const y2023 = document.querySelector("#y2023");
    const y2024 = document.querySelector("#y2024");
    const c2023 = document.querySelector("#c2023");
    const c2024 = document.querySelector("#c2024");
    const img2023 = document.querySelector("#y2023 img");
    const img2024 = document.querySelector("#y2024 img");
    const imgyAll = document.querySelector("#yAll img");
    year.classList.toggle("visible");
    imgYearArrow.classList.toggle("rotate90deg");
    theme.classList.remove("visible");
    imgThemeArrow.classList.add("rotate90deg");

    y2023.addEventListener("click", function () {
      c2023.style.display = "flex";
      c2024.style.display = "none";
      yearText.textContent = "2023";
      img2023.classList.remove("invisible");
      img2024.classList.add("invisible");
      imgyAll.classList.add("invisible");
    });

    y2024.addEventListener("click", function () {
      c2023.style.display = "none";
      c2024.style.display = "flex";
      yearText.textContent = "2024";
      img2024.classList.remove("invisible");
      img2023.classList.add("invisible");
      imgyAll.classList.add("invisible");
    });

    yAll.addEventListener("click", function () {
      c2023.style.display = "flex";
      c2024.style.display = "flex";
      yearText.textContent = "Tout";
      img2024.classList.add("invisible");
      img2023.classList.add("invisible");
      imgyAll.classList.remove("invisible");
    });
  });
}

function toggleMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const backgroundNav = document.querySelector(".background-nav");
  const Nav = document.querySelector(".nav-links");
  const close = document.querySelector(".close");
  const links = document.querySelectorAll(".nav-links .links");
  const nameMenuText = document.querySelector(".name-menu-text");
  const html = document.querySelector("html");

  function closeMenu() {
    backgroundNav.classList.add("hidden");
    Nav.classList.remove("menu-on");
    html.style.overflowY = "scroll";
  }

  function updateOverflow() {
    if (window.innerWidth > 82.5 * 16) {
      closeMenu();
    }
  }

  hamburgerMenu.addEventListener("click", function () {
    backgroundNav.classList.remove("hidden");
    Nav.classList.add("menu-on");
    html.style.overflowY = "hidden";
  });

  close.addEventListener("click", function () {
    closeMenu();
  });

  nameMenuText.addEventListener("click", function () {
    closeMenu();
  });

  links.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  window.addEventListener("resize", updateOverflow);
}

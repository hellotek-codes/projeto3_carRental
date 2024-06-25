const menuItems = document.getElementById("menu_items");
const menuButton = document.getElementById("menu_button");
const menuIcon = document.getElementById("menu_icon");

function handleResize() {
  if (window.innerWidth > 630) {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
    menuIcon.style.fontSize = "3rem";
  }
}

function toggleDisplay() {
  if (menuItems.style.display === "none" || menuItems.style.display === "") {
    menuItems.style.display = "flex";
    setTimeout(() => menuItems.classList.add('open'), 15); 
    menuIcon.style.fontSize = "1.3rem";
    menuIcon.style.marginTop = "0";
    menuButton.styles.marginTop = "0rem"

  } else {
    menuItems.classList.remove('open');
    setTimeout(() => menuItems.style.display = "none", 500); 
    menuIcon.style.fontSize = "3rem";
    menuButton.style.marginTop = "2rem"
  }
}

menuButton.addEventListener("click", toggleDisplay);
window.addEventListener("resize", handleResize);
handleResize();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document.getElementById("contactBtn").addEventListener("click", function () {
  const contact = document.getElementById("contact");

  if (contact) {
    window.scrollTo({
      top: contact.offsetTop,
      behavior: "smooth",
    });
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide_img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex)
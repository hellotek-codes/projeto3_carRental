const menu_items = document.getElementById("menu_items")
const menu_button = document.getElementById("menu_button");
const menu_icon = document.getElementById("menu_icon");
const menu_nav = document.getElementById("menu_nav")

function toggleDisplay() {
  if(menu_items.style.display === "none") {
    menu_items.style.display = "flex";
    menu_button.style.marginRight = "1rem";
    menu_icon.style.fontSize = "1rem";
  } else {
    menu_items.style.display = "none";
    menu_button.style.marginRight = "0";
    menu_icon.style.fontSize = "3rem";
  }
}

menu_button.addEventListener("click", toggleDisplay)


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
  let i;
  let slides = document.getElementsByClassName("slide_img");

  let dots = document.getElementsByClassName("button");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

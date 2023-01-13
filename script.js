function mobileMenu() {
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");

  if (btn.innerText === "MENU") {
    menu.style.display = "flex";
    btn.innerText = "Close";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
}
let imgNum = 0;
let images = document.querySelectorAll(".slider-images img");

function rightBtn() {
  displayNone(images);
  imgNum++;
  if (imgNum === images.length) {
    imgNum = 0;
  }
  images[imgNum].style.display = "block";
}

function leftBtn() {
  displayNone(images);
  imgNum--;
  if (imgNum === -1) {
    imgNum = images.length - 1;
  }
  images[imgNum].style.display = "block";
}
function displayNone(images) {
  images.forEach((img) => {
    img.style.display = "none";
  });
}

function portfolioSort(btn) {
  let portBtn = btn.getAttribute("data-category");
  let portfolioItem = document.querySelectorAll(" .portfolio-single-item");

  portfolioItem.forEach((item) => {
    item.style.display = "none";
  });
  if (portBtn === "all") {
    portfolioItem.forEach((item) => {
      item.style.display = "block";
    });
  }

  portfolioItem.forEach((item) => {
    if (item.getAttribute("data-category").includes(portBtn)) {
      item.style.display = "flex";
    }
  });
}

function openModal() {
  let modal = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");
  modal.style.display = "block";
  overlay.style.display = "block";
}

function closeModal() {
  let modal = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
}

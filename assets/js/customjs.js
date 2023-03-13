const langSwitchLinks = document.getElementById("ku");
const langSwitchLink = document.getElementById("En");

// Loop through each link and attach a click event listener

function redirectUserToSecondIndexPage() {
  // window.location.href = "index2.html";
}
function redirectUserToFirstIndexPage() {
  window.location.href = "/";
}

langSwitchLinks.addEventListener("click", redirectUserToSecondIndexPage);

langSwitchLink.addEventListener("click", redirectUserToFirstIndexPage);

const nextImage = document.querySelector(
  ".project-detail__navigation-link-image"
);

const prevImage = document.getElementsByClassName(
  "project-detail__navigation-link-image"
)[1];

const mainSliderImage = document.querySelector(".parallax-image__image");
const style = getComputedStyle(mainSliderImage);
function replaceMainSliderImage() {
  // style.backgroundImage = "url(../assets/images/1.jpg)";
  console.log(`hello`);
}

nextImage.addEventListener("click", replaceMainSliderImage);

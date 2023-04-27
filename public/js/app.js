// Overlay Controls
const overlayMenuOpen = document.getElementById("overlay-menu");
const overlayMenuClose = document.getElementById("closeOverlay");
const overlayBioClose = document.getElementById("menu-link1");
const overlayResumeClose = document.getElementById("menu-link2");
const overlayResourceClose = document.getElementById("menu-link3");

//Open Menu
overlayMenuOpen.addEventListener("click", function openMenu() {
  document.getElementById("myOverlay").style.width = "100%";
});
//Close Menu
overlayMenuClose.addEventListener("click", function closeMenu() {
  document.getElementById("myOverlay").style.width = "0%";
});
//Close Bio
overlayBioClose.addEventListener("click", function closeBioLink() {
  document.getElementById("myOverlay").style.width = "0%";
});
//Close Resume
overlayResumeClose.addEventListener("click", function closeResumeLink() {
  document.getElementById("myOverlay").style.width = "0%";
});
//Close Resources
overlayResourceClose.addEventListener("click", function closeResourceLink() {
  document.getElementById("myOverlay").style.width = "0%";
});

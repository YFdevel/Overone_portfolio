const mobileMenuBtn=document.querySelector(".mobile-menu-btn");
const closeBtn=document.querySelector(".nav-close");
const mobileMenuWrapper=document.querySelector(".mobile-menu-wrapper");

mobileMenuBtn.addEventListener("click",openMobileMenu);
closeBtn.addEventListener("click",closeMobileMenu);

function openMobileMenu(){
mobileMenuWrapper.classList.add("active");
}
function closeMobileMenu(){
mobileMenuWrapper.classList.remove("active");
}


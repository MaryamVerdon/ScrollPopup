let playOnce = true;
window.addEventListener("scroll", () => {
    //Navbar effect
    if (window.scrollY == 0 ) {
        navbar.style.height = "90px";
    }
    else {
        navbar.style.height = "45px";
    }
   
    //Image
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
    }
   
    //Popup
    if (scrollValue > 0.9 && playOnce){
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;
    }

    closeBtn.addEventListener("click", () => {
        popup.style.opacity = 0;
        popup.style.transform = "translateX(500px)";
        //document.querySelector(".pop-up").remove();
    });

});













// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

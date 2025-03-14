document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const certificateImg = document.getElementById("certificate-img");
    const links = document.querySelectorAll(".certification-link");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            certificateImg.src = this.getAttribute("data-img");
            lightbox.style.display = "flex"; 
        });
    });

   
    document.querySelector(".close-btn").addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});

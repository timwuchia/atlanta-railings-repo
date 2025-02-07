document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-title").forEach((accordion) => {
        accordion.addEventListener("click", function () {
            this.parentNode.classList.toggle("active");
        });
    });
});
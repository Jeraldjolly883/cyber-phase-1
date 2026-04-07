const button = document.getElementById("toggleBtn");
const image = document.getElementById("targetImage");

button.addEventListener("click", function () {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});
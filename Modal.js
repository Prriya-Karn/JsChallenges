// Modal Popup
// Show a modal when a button is clicked and hide it when the close button is pressed.

document.querySelector(".modalOpen").addEventListener("click", () => {
    document.querySelector(".modalContent").style.display = "block";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".modalOpen").style.display = "none"
})

document.querySelector(".closeModal").addEventListener("click", () => {
    document.querySelector(".modalContent").style.display = "none";
    document.querySelector(".modalOpen").style.display = "block";
    document.querySelector("body").style.backgroundColor = "";
})
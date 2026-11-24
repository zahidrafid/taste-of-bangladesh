// ==========================================================
// Taste of Bangladesh - JavaScript
// Author: Abrar Zahid Rafid
// ==========================================================


// ---------- 1. Mobile menu button ----------
// On small screens the menu is hidden. Clicking the button
// adds or removes the "open" class so the links show or hide.
const menuButton = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open");

        // Tell screen readers if the menu is open or closed
        const isOpen = nav.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}


// ---------- 2. Feedback form (contact page) ----------
// The form does not really send anything. When it is submitted,
// we stop the page from reloading and show a thank-you message
// using the visitor's name and favorite dish.
const form = document.getElementById("feedbackForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop the page from reloading

        const name = document.getElementById("fullName").value.trim();
        const dishSelect = document.getElementById("favDish");
        const dishName = dishSelect.options[dishSelect.selectedIndex].text;

        formMessage.textContent = "Thank you, " + name + "! Great choice: " + dishName + ". Your feedback was received (this is a demo form, so nothing was actually sent).";

        form.reset(); // clear the form fields
    });

    // Remove the message when the Clear Form button is clicked
    const clearButton = form.querySelector("button[type='reset']");
    clearButton.addEventListener("click", function () {
        formMessage.textContent = "";
    });
}


// ---------- 3. Recipe checklist (recipe page) ----------
// When an ingredient is checked, the text gets a line through it.
const checkboxes = document.querySelectorAll(".checklist input[type='checkbox']");

checkboxes.forEach(function (box) {
    box.addEventListener("change", function () {
        const label = box.parentElement;
        if (box.checked) {
            label.style.textDecoration = "line-through";
            label.style.color = "#777777";
        } else {
            label.style.textDecoration = "none";
            label.style.color = "";
        }
    });
});

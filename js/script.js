/* =========================================================
   CV Web Page - Nimusiimah Matthew
   File: js/script.js
   Purpose: mobile menu, active menu link, and contact form validation
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- 1. Footer year ---------- */
    document.getElementById("year").textContent = new Date().getFullYear();

    /* ---------- 2. Mobile (hamburger) menu ---------- */
    var menuToggle = document.getElementById("menuToggle");
    var mainNav = document.getElementById("mainNav");
    var navLinks = mainNav.querySelectorAll("a");

    menuToggle.addEventListener("click", function () {
        var isOpen = mainNav.classList.toggle("open");
        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close the menu after a link is clicked (on small screens)
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    /* ---------- 3. Highlight the menu link of the section in view ---------- */
    var sections = document.querySelectorAll("main section");

    function highlightMenu() {
        var scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            var link = mainNav.querySelector('a[href="#' + section.id + '"]');
            if (scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", highlightMenu);
    highlightMenu();

    /* ---------- 4. Contact form validation ---------- */
    var form = document.getElementById("contactForm");
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var commentInput = document.getElementById("comment");
    var successMsg = document.getElementById("formSuccess");

    // Show an error under a field
    function showError(input, message) {
        var errorBox = document.getElementById(input.id + "Error");
        errorBox.textContent = message;
        input.classList.add("invalid");
        input.classList.remove("valid");
    }

    // Mark a field as correct
    function showValid(input) {
        var errorBox = document.getElementById(input.id + "Error");
        errorBox.textContent = "";
        input.classList.remove("invalid");
        input.classList.add("valid");
    }

    // Name: required, letters only (spaces, hyphens and apostrophes allowed),
    // at least two names, 3 - 50 characters
    function validateName() {
        var value = nameInput.value.trim();
        var namePattern = /^[A-Za-z]+(?:[ '\-][A-Za-z]+)*$/;

        if (value === "") {
            showError(nameInput, "Please enter your name.");
            return false;
        }
        if (value.length < 3 || value.length > 50) {
            showError(nameInput, "Name must be between 3 and 50 characters.");
            return false;
        }
        if (!namePattern.test(value)) {
            showError(nameInput, "Name should contain letters only.");
            return false;
        }
        if (value.split(/\s+/).length < 2) {
            showError(nameInput, "Please enter at least your first and last name.");
            return false;
        }
        showValid(nameInput);
        return true;
    }

    // Phone: required, Ugandan format 07XXXXXXXX or +2567XXXXXXXX
    // (spaces and dashes are ignored)
    function validatePhone() {
        var value = phoneInput.value.trim();
        var digits = value.replace(/[\s\-]/g, "");
        var phonePattern = /^(07\d{8}|\+2567\d{8})$/;

        if (value === "") {
            showError(phoneInput, "Please enter your phone number.");
            return false;
        }
        if (!/^\+?\d+$/.test(digits)) {
            showError(phoneInput, "Phone number should contain digits only.");
            return false;
        }
        if (!phonePattern.test(digits)) {
            showError(phoneInput, "Enter a valid number, e.g. 0782040298 or +256782040298.");
            return false;
        }
        showValid(phoneInput);
        return true;
    }

    // Comment: required, 10 - 500 characters
    function validateComment() {
        var value = commentInput.value.trim();

        if (value === "") {
            showError(commentInput, "Please write a comment.");
            return false;
        }
        if (value.length < 10) {
            showError(commentInput, "Comment must be at least 10 characters.");
            return false;
        }
        if (value.length > 500) {
            showError(commentInput, "Comment must not exceed 500 characters.");
            return false;
        }
        showValid(commentInput);
        return true;
    }

    // Validate each field as the user types / leaves it
    nameInput.addEventListener("blur", validateName);
    phoneInput.addEventListener("blur", validatePhone);
    commentInput.addEventListener("blur", validateComment);

    [nameInput, phoneInput, commentInput].forEach(function (input) {
        input.addEventListener("input", function () {
            successMsg.textContent = "";
            if (input.classList.contains("invalid")) {
                if (input === nameInput) validateName();
                if (input === phoneInput) validatePhone();
                if (input === commentInput) validateComment();
            }
        });
    });

    // Submit button
    form.addEventListener("submit", function (event) {
        event.preventDefault();   // stop the page from reloading

        // Run all three checks (so every error is shown at once)
        var nameOk = validateName();
        var phoneOk = validatePhone();
        var commentOk = validateComment();

        if (nameOk && phoneOk && commentOk) {
            var firstName = nameInput.value.trim().split(/\s+/)[0];
            alert("Thank you " + firstName + "! Your comment has been submitted successfully.");
            form.reset();
            clearValidation();
            successMsg.textContent = "Your message was sent successfully. I will get back to you soon.";
        } else {
            successMsg.textContent = "";
            // Put the cursor in the first field that has an error
            form.querySelector(".invalid").focus();
        }
    });

    // Reset button: clear all error messages and colours
    function clearValidation() {
        [nameInput, phoneInput, commentInput].forEach(function (input) {
            input.classList.remove("invalid", "valid");
            document.getElementById(input.id + "Error").textContent = "";
        });
    }

    form.addEventListener("reset", function () {
        clearValidation();
        successMsg.textContent = "";
    });
});

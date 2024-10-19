"use strict";

// variables declarations
const dashboardBtn = document.querySelector(".dashboard-btn");
const dashboardContent = document.querySelector(".dashboard-content");
const overlayElement = document.querySelector(".overlay")
const studentContent = document.querySelector(".student");
const toggleSidebar = document.querySelector(".toggle-sidebar");

// Buttons
const studentBtn = document.querySelector(".student-btn");
const addNewStudentBtn = document.querySelector(".addStudent");
const addNewStudentForms = document.querySelector(".addNewStudent");
const newStudentSubmitBtn = document.querySelector(".submit");
const newStudentCancelBtn = document.querySelector(".cancel");
const toggleBtn = document.querySelector(".toggle");
const closeToggleBtn = document.querySelector(".close-toggle");


// Click Function for Dashboard button
dashboardBtn.addEventListener("click", function () {
    studentContent.classList.add("hidden");
    dashboardContent.classList.remove("hidden");
    addNewStudentForms.classList.add('hidden');
});


// Click Function for Students button
studentBtn.addEventListener("click", function () {
    dashboardContent.classList.add("hidden");
    studentContent.classList.remove("hidden");
    addNewStudentForms.classList.add('hidden');
});

// Click Function for Add Student button
addNewStudentBtn.addEventListener("click", () => {
    addNewStudentForms.classList.remove('hidden');
    overlayElement.classList.remove('hidden');
});

// Click Function for Cancel button
newStudentCancelBtn.addEventListener("click", () => {
    addNewStudentForms.classList.add('hidden');
    overlayElement.classList.add('hidden');
});

// Click Function for toggle button
toggleBtn.addEventListener("click", () => {
    // console.log('hello')
    toggleSidebar.classList.toggle('hidden');
});

// Click Function to close toggle side

// closeToggleBtn.addEventListener("click", () => {
//     toggleSidebar.classList.add('hidden');
//     // overlayElement.classList.add('hidden');

// });

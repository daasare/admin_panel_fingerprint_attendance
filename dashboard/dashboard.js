"use strict";

// variables declarations
const dashboardBtn = document.querySelector(".dashboard-btn");
const dashboardContent = document.querySelector(".dashboard-content");
const overlayElement = document.querySelector(".overlay")
const studentContent = document.querySelector(".student");
const topNav = document.querySelector(".sidebar");

// Buttons
const studentBtn = document.querySelector(".student-btn");
const addNewStudentBtn = document.querySelector(".addStudent");
const addNewStudentForms = document.querySelector(".addNewStudent");
const newStudentSubmitBtn = document.querySelector(".submit");
const newStudentCancelBtn = document.querySelector(".cancel");
const toggleBarsBtn = document.querySelector(".toggle");
const closeToggleBtn = document.querySelector(".closeIcon");


// Click Function for Dashboard button
dashboardBtn.addEventListener("click", function () {
    studentContent.classList.add("hidden");
    dashboardContent.classList.remove("hidden");
    addNewStudentForms.classList.add('hidden');
    topNav.classList.toggle('vanish')
    overlayElement.classList.add('hidden');


});


// Click Function for Students button
studentBtn.addEventListener("click", function () {
    dashboardContent.classList.add("hidden");
    studentContent.classList.remove("hidden");
    addNewStudentForms.classList.add('hidden');
    topNav.classList.toggle('vanish')
    overlayElement.classList.add('hidden');

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
toggleBarsBtn.addEventListener("click", () => {
    topNav.classList.toggle('vanish')
    overlayElement.classList.remove('hidden');

});

// close function
closeToggleBtn.addEventListener('click', ()=> {
    topNav.classList.add('vanish')

})

// Variables
var currentDay = document.querySelector("#currentDay");
//Selects entire text area for color coordination and for loop to compare time
var projectData = document.querySelectorAll("textarea");
var saveBtn = document.querySelector(".saveBtn");

// For current time in certain format
var currentTime = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
var rightNow = dayjs().format("HH");

// Add textContent
currentDay.textContent = currentTime;

// If statement for present, future and past - colors
for (let i = 0; i < projectData.length; i++) {
    var takeTime = projectData[i].dataset.time;
    if (takeTime === rightNow) {
        projectData[i].classList.add("present");
    } else if (takeTime > rightNow) {
        projectData[i].classList.add("future");
    } else if (takeTime < rightNow) {
        projectData[i].classList.add("past");
    }
}

// Save Button
$(".saveBtn").on("click", function (event) {
    var textValue = $(this).siblings(".description").val();
    var hourID = $(this).parent().attr("id");

// Values saved in local storage
    localStorage.setItem(hourID, textValue);
});

// For each time-block element, the id grabs the related value from localstorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
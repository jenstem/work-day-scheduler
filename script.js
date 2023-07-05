$(function () {

// Variables
var currentDay = $('#currentDay');
var projectData = $('textarea');
var saveBtn = $('.saveBtn');

// For current time
var currentTime = dayjs();
var rightNow = moment().format("HH")

// Current time in certain format
function updateTime() {
  currentTime = dayjs();
  var formattedTime = currentTime.format("MMMM DD, YYYY hh:mm:ss A");
  currentDay.text(formattedTime);
}

updateTime();

setInterval(updateTime, 1000);

// For loop and If statement for present, future and past - colors
  for (var index = 0; index < projectData.length; index++) {
    var dataEl = projectData[index].dataset.time;
    if (dataEl === rightNow) {
      projectData[index].classList.add("present");
    } else if (dataEl > rightNow) {
      projectData[index].classList.add("future");
    } else if (dataEl < rightNow) {
      projectData[index].classList.add("past");
    }
    }


// Save Button
$(".saveBtn").on("click", function (event) {
  // this is related to scope and can change, what it points to can change based on its scope
  // this is refering to element that the event occurs on
  // this = specific button that was clicked
  var textValue = $(this).siblings(".description").val();
  var hourID = $(this).parent().attr("id");
  localStorage.setItem(hourID, textValue);
});

// Values saved in local storage, need to print to DOM
// For each time-block element, the id grabs the related value from localstorage
// and sets it as the text of the child
  $("hour-9 .description").val(localStorage.getItem("hour-9"));
  $("hour-10 .description").val(localStorage.getItem("hour-10"));
  $("hour-11 .description").val(localStorage.getItem("hour-11"));
  $("hour-12 .description").val(localStorage.getItem("hour-12"));
  $("hour-13 .description").val(localStorage.getItem("hour-13"));
  $("hour-14 .description").val(localStorage.getItem("hour-14"));
  $("hour-15 .description").val(localStorage.getItem("hour-15"));
  $("hour-16 .description").val(localStorage.getItem("hour-16"));
  $("hour-17 .description").val(localStorage.getItem("hour-17"));

});
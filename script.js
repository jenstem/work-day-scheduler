$(function () {

// Variables
var currentDay = $('#currentDay');
var projectData = $('textarea');
var saveBtn = $('.saveBtn');

// For current time
var currentTime = dayjs();

// Current time in certain format
function updateTime() {
  currentTime = dayjs();
  var formattedTime = currentTime.format("MMMM DD, YYYY hh:mm:ss A");
  currentDay.text(formattedTime);
}

updateTime();

setInterval(updateTime, 1000);

// If statement for present, future and past - colors
for (var index = 0; index < projectData.length; index++) {
  var dataEl = projectData[index].dataset.time;
  if (dataEl === currentTime) {
    projectData[index].classList.add("present");
  } else if (dataEl > currentTime) {
    projectData[index].classList.add("future");
  } else if (dataEl < currentTime) {
    projectData[index].classList.add("past");
  }
  }


// Save Button
$(".saveBtn").on("click", function() {
  var thisBtn = $(this);
  // this is related to scope and can change, what it points to can change based on its scope
  // this is refering to element that the event occurs on
  // this = specific button that was clicked
  var siblingTextArea = thisBtn.siblings(".description");
  var textValue = siblingTextArea.val();
  var hourID = thisBtn.parent().attr('id');
  localStorage.setItem(hourID, textValue);
})

// Values saved in local storage, need to print to DOM
$('.time-block').each(function(i) {
  // For each time-block element, the id grabs the related value from localstorage
  // and sets it as the text of the child
  var storeStorage9 = localStorage.getItem("hour-9");
  var storeStorage10 = localStorage.getItem("hour-10");
  var storeStorage11 = localStorage.getItem("hour-11");
  var storeStorage12 = localStorage.getItem("hour-12");
  var storeStorage13 = localStorage.getItem("hour-13");
  var storeStorage14 = localStorage.getItem("hour-14");
  var storeStorage15 = localStorage.getItem("hour-15");
  var storeStorage16 = localStorage.getItem("hour-16");
  var storeStorage17 = localStorage.getItem("hour-17");
  $("hour-9 .description").val(localStorage.getItem("hour-9"));
  $("hour-10 .description").val(localStorage.getItem("hour-10"));
  $("hour-11 .description").val(localStorage.getItem("hour-11"));
  $("hour-12 .description").val(localStorage.getItem("hour-12"));
  $("hour-13 .description").val(localStorage.getItem("hour-13"));
  $("hour-14 .description").val(localStorage.getItem("hour-14"));
  $("hour-15 .description").val(localStorage.getItem("hour-15"));
  $("hour-16 .description").val(localStorage.getItem("hour-16"));
  $("hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-9").children("textarea").val(storeStorage9);
  $("#hour-10").children("textarea").val(storeStorage10);
  $("#hour-11").children("textarea").val(storeStorage11);
  $("#hour-12").children("textarea").val(storeStorage12);
  $("#hour-13").children("textarea").val(storeStorage13);
  $("#hour-14").children("textarea").val(storeStorage14);
  $("#hour-15").children("textarea").val(storeStorage15);
  $("#hour-16").children("textarea").val(storeStorage16);
  $("#hour-17").children("textarea").val(storeStorage17);
})

});
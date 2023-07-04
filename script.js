
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

// variables
var currentDay = $('#currentDay');
var projectData = $('textarea');
var saveBtn = $('.saveBtn');

var currentTime = dayjs();

// where should this go? This isn't getting called
// function stopBrowserDefault(e) {
//   e.preventDefault();
// }

function updateTime() {
  currentTime = dayjs();
  var formattedTime = currentTime.format("MMMM DD, YYYY hh:mm:ss A");
  currentDay.text(formattedTime);
}

// stopBrowserDefault();

updateTime();

setInterval(updateTime, 1000);


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. X



// HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes?

// How can Day.js be used to get the current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page. X


// needs work - flicks on for a moment - only change class for a split second
for (var index = 0; index < projectData.length; index++) {
  var dataEl = projectData[index];
  if (dataEl === currentTime) {
    projectData[index].classList.add("present");
  } else if (dataEl > currentTime) {
    projectData[index].classList.add("future");
  } else if (dataEl < currentTime) {
    projectData[index].classList.add("past");
  }
  }

// saveBtn - needs work - will be applied to every .saveBtn
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

// values saved in local storage, need to print to DOM
$('.time-block').each(function(i) {
  // $(id .description).val(localStorage.getItem(id));
  // for each time-block element, use the id to grab the related value from localstorage
  // and set it as the text of the child <textarea>
  // assign the value from local storage using getItem to a variable with textContent attached to the
  // element of textarea
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
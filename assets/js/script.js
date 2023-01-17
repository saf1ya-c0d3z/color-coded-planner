var saveButton = document.querySelector(".saveBtn")
var hourNine = document.querySelector("#hour-9")
var saveOnScreen = [9, 10, 11, 12, 13, 14, 15, 16, 17]

$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY H:m'));
// save Btn event listener
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id")

    var content = $(this).siblings("textarea").val()
    localStorage.setItem(hour, JSON.stringify(content))

    $("#added").text("item added to Local Storage.")
    var timerR = 3
    //timer for local storage pop up message
    setInterval(function () {
      if (timerR <= 0) {
        $("#added").text(" ")
        clearInterval()
      }
      timerR -= 1
    }
      , 1000)
  })

  var currentHour = dayjs().hour()
// change color of planner based on time, (comparing blocks to time)
  saveOnScreen.forEach(time => {
    $(`#${time}`).children("textarea").val(JSON.parse(localStorage.getItem(time)))

    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY H:m'));
    if (currentHour > time) {
      $(`#${time}`).children("textarea").addClass("past").removeClass("present").removeClass("future")
    }
    if (currentHour == time) {
      $(`#${time}`).children("textarea").addClass("present").removeClass("past").removeClass("future")
    }
    if (currentHour < time) {
      $(`#${time}`).children("textarea").addClass("future").removeClass("past").removeClass("present")
    }
  })
});



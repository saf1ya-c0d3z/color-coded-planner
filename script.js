// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = document.querySelector(".saveBtn")
var hourNine = document.querySelector ("#hour-9")
var saveOnScreen = [9,10,11,12,13,14,15,16,17]


$(function () {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY H:m'));
    


  $(".saveBtn").on("click", function(){
    var hour = $(this).parent().attr("id")

    var content = $(this).siblings("textarea").val()
console.log(hour, content)
    localStorage.setItem(hour, JSON.stringify(content))
    
$("#added").text("item added to Local Storage.") 
var timerR = 3
setInterval (function(){
if (timerR <=0) {
    $("#added").text(" ")  
    clearInterval()
    }
    timerR-=1
}
    
    
    ,1000)


  
  })


  saveOnScreen.forEach(time=>{
$(`#${time}`).children("textarea").val(JSON.parse(localStorage.getItem(time)))

  })

  //Help Changing Colors//

  
  if (dayjs().isBefore().format(H, today)){
    $(`#${time}`).children("textarea").addClass("past").removeClass("present").removeClass("future")
  }

  if (dayjs().isSame().format(H, today)){
    $(`#${time}`).children("textarea").addClass("present").removeClass("past").removeClass("future")
  }
  if (dayjs().isAfter().format(H, today)){
    $(`#${time}`).children("textarea").addClass("future").removeClass("past").removeClass("present")
  }
  
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });



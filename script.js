 //DISPLAY CURRENT DATE
 $("#currentDay").text(moment().format('ddd MMM Do, YYYY'));

//FUNCTION FOR WHEN USER CLICKS SAVE BUTTON 
$(".saveBtn").on("click", function () {})

//PSEUDOCODE:
// when you click on the middle column 


//FUNCTION TO GET CURRENT TIME - this shows the hour in terms of which hour in 24 hour clock time, so 8pm is hour 20 
//function timeTracker() {
let timeNow = moment().hour();
//}
//timeTracker();
console.log(timeNow);
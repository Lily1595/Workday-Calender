 //DISPLAY CURRENT DATE
 $("#currentDay").text(moment().format('ddd MMM Do, YYYY'));

//FUNCTION FOR WHEN USER CLICKS SAVE BUTTON 
$(".saveBtn").on("click", function () {})

//PSEUDOCODE:
// when you type text in the middle column, the value of that text needs to be saved to local storage
// the value of what is written in the text book should only saved to local storage upon an event of clicking the save button, if user hasn't pressed save then their written content won't be saved when they refresh the page 
// Color-code each timeblock based on past, present, and future when the timeblock is viewed: use the time now function to get the current time, if the current time is in the future then background is set to green, if its current, leave it blank, if its in the past, then set the background to red. 
// you need to give each row a value, and then do if statements that assess the 'timenow' against the value of the the row... (?)

//FUNCTION TO GET CURRENT TIME - this shows the hour in terms of which hour in 24 hour clock time, so 8pm is hour 20 
//function timeTracker() {
let timeNow = moment().hour();
//}
//timeTracker();
console.log(timeNow);
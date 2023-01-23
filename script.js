 //DISPLAY CURRENT DATE
 $("#currentDay").text(moment().format('ddd MMM Do, YYYY HH:mm'));


//FUNCTION FOR WHEN USER CLICKS SAVE BUTTON 
$('.saveBtn').on('click', function() {
    let textareaValue = $('.textarea').val();
    localStorage.setItem('textareaValue', textareaValue);
});

$(document).ready(function() {
    let storedValue = localStorage.getItem("textareaValue");
    $("textarea").val(storedValue);
});

//give each row/ timeblock a value: 
//SCOPE OF THIS IS WRONG, FIND A WAY TO GET THE PROPER SCOPING ISSUES RIGHT 

$(document).ready(function(){
    let rows = $(".row");
    for (let i = 0; i < rows.length; i++) {
    $(rows[i]).val(i + 9);
    let rowValues = $(rows[i]).val();
    console.log(rowValues);
    }
    });

//IF ELSE STATEMENTS TO COMPARE THE VALUE OF EACH ROW TO THE CURRENT TIME SO COLOUR CODING CAN COMMENCE 




    
//FUNCTION TO GET CURRENT TIME - this shows the hour in terms of which hour in 24 hour clock time, so 8pm is hour 20 
//function timeTracker() {
    let timeNow = moment().hour();
    //}
    //timeTracker();
    console.log(timeNow);


//PSEUDOCODE:
// when you type text in the middle column, the value of that text needs to be saved to local storage
// the value of what is written in the text book should only saved to local storage upon an event of clicking the save button, if user hasn't pressed save then their written content won't be saved when they refresh the page DONE 
// Color-code each timeblock based on past, present, and future when the timeblock is viewed: use the time now function to get the current time, if the current time is in the future then background is set to green, if its current, leave it blank, if its in the past, then set the background to red. 
// you need to give each row a value, and then do if statements that assess the 'timenow' against the value of the the row... (?)



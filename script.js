 //CURRENT BUGS: 
 // - ALL TIME BLOCKS ARE DISPLAYING AS GREEN BUT I KNOW COMPARISON STATEMENTS ARE WORKING FROM THE CONSOLE 
 // - WHEN USER WRITES IN ONE TEXT BOX, IT CHANGES ALL THE BOXES TO SAY THE SAME THING
 
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

//GET CURRENT TIME
let timeNow = moment().hour();
console.log(timeNow);

//FUNCTION TO GIVE EACH ROW A VALUE, COMPARE VALUE WITH CURRENT TIME, ADD OR REMOVE CSS CLASSES ACCORDINGLY  

$(document).ready(function(){
    let rows = $(".row");
    for (let i = 0; i < rows.length; i++) {
    $(rows[i]).val(i + 9);
    let rowValues = $(rows[i]).val();
    console.log(rowValues);
    if (rowValues < timeNow) {
        console.log("in the past");
        $('textarea').removeClass("future");
        $('textarea').removeClass("present");
        $('textarea').addClass("past");
    }
    else if (rowValues == timeNow) {
        console.log("in the present");
        $('textarea').removeClass("past");
        $('textarea').removeClass("future");
        $('textarea').addClass("present");
    }
    else {
        console.log("in the future");
        $('textarea').removeClass("present");
        $('textarea').removeClass("past");
        $('textarea').addClass("future");
    }
    }
    });

//PSEUDOCODE:
// when you type text in the middle column, the value of that text needs to be saved to local storage
// the value of what is written in the text book should only saved to local storage upon an event of clicking the save button, if user hasn't pressed save then their written content won't be saved when they refresh the page DONE 
// Color-code each timeblock based on past, present, and future when the timeblock is viewed: use the time now function to get the current time, if the current time is in the future then background is set to green, if its current, leave it blank, if its in the past, then set the background to red. 
// you need to give each row a value, and then do if statements that assess the 'timenow' against the value of the the row



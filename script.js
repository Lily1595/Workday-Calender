//CURRENT BUGS:
// - WHEN USER WRITES IN ONE TEXT BOX, IT CHANGES ALL THE BOXES TO SAY THE SAME THING
// - REVISE SCOPE AND DATA ATTRIBUTES 

//DISPLAY CURRENT DATE
$("#currentDay").text(moment().format('ddd MMM Do, YYYY HH:mm'));

//FUNCTION FOR WHEN USER CLICKS SAVE BUTTON - SAVE USER INPUT TO LOCAL STORAGE 

$(document).ready(function() {
    $(".saveBtn").click(function() {
      let text = $(this).closest('.row').find('.textarea').val();
      let rowId = $(this).closest('.row').attr('id');
      localStorage.setItem(rowId, text);
    });
  });

  $(document).ready(function() {
    $(".row").each(function() {
      let rowId = $(this).attr('id');
      let storedText = localStorage.getItem(rowId);
      if (storedText) {
        $(this).find('.textarea').val(storedText);
      }
    });
  });
  
  

//GET CURRENT TIME
let timeNow = moment().hour();
console.log(timeNow);

//FUNCTION TO GIVE EACH ROW A VALUE, COMPARE VALUE WITH CURRENT TIME, ADD OR REMOVE CSS CLASSES ACCORDINGLY  

$(document).ready(function () {
    let rows = $(".row");
    for (let i = 0; i < rows.length; i++) {
        $(rows[i]).val(i + 9);
        let rowValues = $(rows[i]).val();
        console.log(rowValues);
        if (rowValues < timeNow) {
            console.log("in the past");
            $(rows[i]).find("textarea").addClass("past");
        }
        else if (rowValues == timeNow) {
            console.log("in the present");
            $(rows[i]).find("textarea").addClass("present");
        }
        else {
            console.log("in the future");
            $(rows[i]).find("textarea").addClass("future");
        }
    }
});

 

//PSEUDOCODE:
// when you type text in the middle column, the value of that text needs to be saved to local storage
// the value of what is written in the text book should only saved to local storage upon an event of clicking the save button, if user hasn't pressed save then their written content won't be saved when they refresh the page DONE 
// Color-code each timeblock based on past, present, and future when the timeblock is viewed: use the time now function to get the current time, if the current time is in the future then background is set to green, if its current, leave it blank, if its in the past, then set the background to red. 
// you need to give each row a value, and then do if statements that assess the 'timenow' against the value of the the row



$(document).ready(function () {

    //this saves the inputted text to local storage + onto the page
    $(".saveBtn").on("click", function () {

        //"this" uses the $(".saveBtn") variable without actually typing it all out
        var time = $(this).attr("id");
        var value = $(this).siblings(".description").val();


        localStorage.setItem(time, value);

    })

    //pulls value out of local storage and puts it in text area
    for (var i = 7; i <= 22; i++) {
        $(`#${i}`).siblings("textarea").val(localStorage.getItem(i));
    };


    //this function checks the time of day and highlights the planner accordingly
    function checkHour() {

        //this checks the current hour of the day
        var currentHour = moment().hours();

        //grabs the button from HTML
        $("button").each(function () {
            //this creates a variable selecting the ID attribute from the button HTML element 
            var elementHour = $(this).attr("id");
            // if the current time equals the value of the element hour the present class will be applied
            if (currentHour == elementHour) {
                $(this).siblings("textarea").removeClass("past future")
                $(this).siblings("textarea").addClass("present")
            }
            //if the current time has exceeded the value of the element hour, the past class will be applied
            else if (currentHour > elementHour) {
                $(this).siblings("textarea").removeClass("future present")
                $(this).siblings("textarea").addClass("past")
            }//if the current time is below the value of the element hour, the future class will be applied
            else if (currentHour < elementHour) {
                $(this).siblings("textarea").removeClass("present past")
                $(this).siblings("textarea").addClass("future")
            }

        });


    }

    //this executes the function to check the time
    checkHour()

    //this puts the current day's date below the title 
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

});
    //this creates the spaces in which to input your to-do by the hour
    // for (let i = 7; i < 23; i++) {

    //     var timeBlock = $("<div>").attr("id", `hour-${i}`).addClass("row time-block");

    //     //this creates the spaces + gives them styling
    //     timeBlock.append($("<div>")
    //         .addClass("col-md-1 hour")
    //         .text(civilianTime(i)));
    //     timeBlock.append($("<textarea>")
    //         .addClass("col-md-10 description"));
    //     timeBlock.append($("<button>")
    //         .addClass("col-md-1 btn saveBtn").on("click",)
    //         .append($("<i>")
    //             .addClass("fa fa-check")));

    //     //this adds the newly created spaces to the page
    //     container.append(timeBlock);



    // }



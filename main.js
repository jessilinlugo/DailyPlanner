$(document).ready(function () {

    //this saves the inputted text to local storage + onto the page
    $(".saveBtn").on("click", function(){
        var time = $(this).attr("id");
        var value = $(this).siblings(".description").val();


        localStorage.setItem(time, value);

    })

    //pulls value out of local storage and puts it in text area
    for (var i = 7; i <= 22; i++){
        $(`#${i}`).siblings("textarea").val(localStorage.getItem(i));
    };

    function checkHour (){
        
        var currentHour = moment().hours();

        $("button").each(function() {
            var elementHour = $(this).attr("id");
            
            if (currentHour == elementHour){
                $(this).siblings("textarea").removeClass("past future")
                $(this).siblings("textarea").addClass("present")
            }
            else if (currentHour > elementHour){
                $(this).siblings("textarea").removeClass("future present")
                $(this).siblings("textarea").addClass("past")
            }
            else if (currentHour < elementHour){
                $(this).siblings("textarea").removeClass("present past")
                $(this).siblings("textarea").addClass("future")
            }

        });


    }

    checkHour()


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



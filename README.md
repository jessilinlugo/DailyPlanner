# DailyPlanner

Link to my Daily Planner : https://jessilinlugo.github.io/DailyPlanner/ 

------------

I am so thankful for review. Slowly my muscle memory is kicking in and I'm having to look things up less and less frequently. 

Still, I accept all help that is offered. 

HTML is like an old friend, and I love reconnecting. I began by creating individual divs for each hour section with areas for the time, input text area, and confirm button. 

I have this strong desire to follow the basic outline of a lesson plan, but make the visual layout just slightly different, slightly my own, so once I got the basic structure laid out, I changed some minimal elements such as the "save" icon and the color palette.

After creating the divs, setting my customization, and labeling everything for use in JS, I created my new file and wrapped the entire thing in a $(document).ready(function) to ensure the script would wait until my HTML and CSS had loaded. 

First I created a click function that pulled the saveBtn class from my HTML file, and let me assign actual function (saving the task in the text area) to each button I had previously created, without having to grab them individually. 

On line 7, "this" is using the $(".saveBtn") variable without requiring the need to type out the full syntax each time. In this case, we are creating a new variable from the "id" of the save button, and in line 8, another variable from the "description" and the value within that description (which will be our inputted text).

Once the task has been inputted in the text area (description) and clicked to save, it will be saved in Local Storage, (line 11). 

In order to keep the items from clearing, a for loop is created for each text area, where the inputted text is pulled from local storage and saved on the page. Now, the tasks will stay on the page and not disappear if/when the page is refreshed.


The next function is used to determine the time of day and how the planner should be highlighted. I began with keeping track of the time by creating a variable and using moment() and since i'm only checking for the hour, i only put .hours().

I created a function for each text area using the button element from my HTML file. Because I assigned an ID within the button for each hour, I used "this" again to select the ID, and establish it within a variable which will later be compared against the time tracking variable.

The if/else statements then check the value of the currentHour variable versus the elementHour variable and applies different CSS styles accordingly. 

It begins with the currentHour being equal in value to elementHour, which will first remove the "past" and "future" classes, and apply the "present" class. The rest of the else if goes through the different iterations. If the current hour has exceeded the element hour, the past class is applied, and if the current hour is still less than the element hour, the future class is applied.

Finally, I need to actually execute the function in order to run the different classes on the text areas. 

And just as a little something extra, I added a line with today's day and calendar date right below the title in the head.

I had a decent enough time with the assignment and definitely appreciated the mental break it provided. I know a lot of it was review, and like I said, I am grateful as I definitely feel the imposter syndrome kicking in.

------------


** Screenshots of my daily planner + filled in tasks **
<img src="/assets/empty-planner.png" alt="blank planner page">
<img src="/assets/planned-day.png" alt="filled in tasks">

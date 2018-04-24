// Challenge 1: Create a function called 'go' that takes 2 arguments: 
//direction (forwards, backwards, etc.) and speed (mph). 
//The function, when invoked, will print out the following in your console 
//(for example): "The car is moving forward, at 25 mph."


function go(speed, direction){
    document.write("<p>The car is moving " + direction + "at " + speed + " mph</p>");
}

go(25, "forward");


// Challenge 2: Instead of the function printing to the console, print to the DOM 
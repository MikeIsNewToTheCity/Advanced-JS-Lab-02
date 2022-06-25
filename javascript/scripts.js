/*
    Name: Mike Villeneuve
    Date: 6/25/2022
*/


// Global Variables
const labTitle = "Programming for Designers - Lab 2";

/*
Initialization function that plays the role of the controller.
Prints to the console, on page load, the values of the id, name, and bornInMadison 
variables and then calls the printLabTitle function.
*/
const init = () => {
    "use strict";

    let id = 10;
    let name = "Mike";
    let bornInMadison = false;

    console.log(`ID: ` + `${id}`);
    console.log(`Name: ` + `${name}`);
    console.log(`Born in Madison: ` + `${bornInMadison}`);

    printLabTitle();
    
}

// A function that prints to the console the value of the global variable labTitle.
const printLabTitle = () => {
    "use strict";

    console.log(labTitle);
}

// Calls the init function on page load.
window.onload = init;
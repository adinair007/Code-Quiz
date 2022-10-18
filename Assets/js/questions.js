var questions = [
    {
        title: "1. If you type the following code in the console window, what result will you get? \n 3 > 2 > 1 === false;",
        choices: ['true', 'false'],
        answer: 'true'
    },

    {
        title: "2. JavaScript is a ___ -side programming language." ,
        choices: ['Client', 'Server', 'Both', "None of the Above"],
        answer: 'Both'
    },

    {
        title: "3. Which of the following will write the message “Hello User!” in an alert box?" ,
        choices: ['alertBox(“Hello User!”);', 'alert(Hello User!);', 'msgAlert(“Hello User!”);', 'alert(“Hello User!”);'],
        answer: 'alert(“Hello User!”);'
    },

    {
        title: "4. How do you find the minimum of x and y using JavaScript?" ,
        choices: ['min(x,y);', ' Math.min(x,y)', 'Math.min(xy)', 'min(xy);'],
        answer: 'Math.min(x,y)'
    },

    {
        title: "5. Which JavaScript label catches all the values, except for the ones specified?" ,
        choices: ['catch', 'label', 'try', 'default'],
        answer: 'default'
    },

    {
        title: "6. Which are the correct “if” statements to execute certain code if “x” is equal to 2?" ,
        choices: ['if(x 2)', 'if(x = 2)', 'if(x == 2)', 'if(x != 2)'],
        answer: 'if(x == 2)'
    }, 

    {
        title: "7.What will the code return? \n Boolean(3 < 7)",
        choices: ['true', 'false', 'NaN', 'SyntaxError'],
        answer: 'true'
    },

    {
        title: "8. Which is the correct JavaScript syntax to change the HTML content given below?"/
        "<p id=”test”>Hello World!</p>" ,
        choices: ['document.getElementById(“test”).innerHTML = “Hello”;', 'document.getElementsById(“test”).innerHTML = “Hello”;', 'document.getElementById(test).innerHTML = “Hello”;', 'document.getElementByTagName(“p”)[0].innerHTML = “Hello”;'],
        answer: 'document.getElementById(“test”).innerHTML = “Hello”;'
    },

    {
        title: "9. If the value of x is 40, then what is the output of the following program?\n(x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);" ,
        choices: ['ReferenceError', 'Divisible by 10', 'Not divisible by 10', 'None of the above'],
        answer: 'Divisible by 10'
    },

    {
        title: "10. What is the output of the following code in the console?\n var x = 0; \n function fun(){ \n ++x; \n this.x = x;\n return x; \n }\n var bar = new new fun; \n console.log(bar.x);",
        choices: ['ReferenceError', "undefined", "1", "Type Error"],
        answer: 'Type Error'
    },
];
/**
 * CHAPTER 1
 */

// QUESTION 1
// alert("Hello world");

// QUESTION 2
// alert("Error! Please enter a valid password.");

// QUESTION 3
// alert("Welcome to JS Land... \n Happy Coding!");

// QUESTION 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

/**
 * CHAPTER 2
 */

// QUESTION 1
// var username;

// QUESTION 2
// var myName = "Fuzail Afsar";

// QUESTION 3
// var message;
// message = "Hello World";
// alert(message);

// QUESTION 4
// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// QUESTION 5
// var pizzas = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizzas);

// QUESTION 6
// var email;
// email = "fuzailafsar92@gmail.com";
// alert("My email address is " + email);

// QUESTION 7
// var book;
// book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// QUESTION 8
// var para = document.createElement("p");
// para.innerHTML = "Yah! I can write HTML content through JavaScript";
// document.getElementsByTagName("body")[0].append(para);

// QUESTION 9
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(pattern);

/**
 * CHAPTER 3
 */

// QUESTION 1
// var age;
// age = 22;
// alert("I am " + age + " years old");

// QUESTION 2
// var visitedCount = +localStorage.getItem("visited") || 0;
// localStorage.setItem("visited", ++visitedCount);
// alert("You have visited this site " + visitedCount + " times");

// QUESTION 3
// var birthYear;
// birthYear = 1999;
// document.write(
//   "My birth year is " +
//     birthYear +
//     "<br /> Data type of my declared variable is " +
//     typeof birthYear
// );

// QUESTION 4
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;

// document.write(
//   "<b>" +
//     visitorName +
//     "</b> ordered <b>" +
//     quantity +
//     " " +
//     productTitle +
//     "</b>(s) " +
//     "on XYZ Clothing store"
// );

/**
 * CHAPTER 4
 */

// QUESTION 1
// var v1, v2, v3;

// QUESTION 2
// var legalVariable1;
// var LegalVariable2;
// var legal_variable3;
// var _legal_variable_4;
// var $legalVariable5;

// var var;
// var 2illegalVariable;
// var @illegalVariable3;
// var illegal@Variable4;
// var illegalVariable();

// QUESTION 3

// a)
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br>");

// b)
// document.write(
//   "Variable names can only contain, numbers, $ and _. For example: $my_1stVariable"
// );
// document.write("<br>");

// c)
// document.write(
//   "Variables must begin with a letter, $ or _ . For exmaple: $name, _name or name"
// );
// document.write("<br>");

// d)
// document.write("Variable names are case sensitive");
// document.write("<br>");

// e)
// document.write("Variable names should not be JS keywords");

/**
 * CHAPTER 5
 */

// QUESTION 1
// var num1 = 3;
// var num2 = 5;
// var add = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + add);

// QUESTION 2
// var num3 = 3;
// var num4 = 5;
// var subtraction = num3 - num4;
// document.write(
//   "Subtraction of " + num3 + " and " + num4 + " is " + subtraction
// );

// var num5 = 3;
// var num6 = 5;
// var multiplication = num5 * num6;
// document.write(
//   "Multiplication of " + num5 + " and " + num6 + " is " + multiplication
// );

// var num7 = 3;
// var num8 = 5;
// var division = num7 / num8;
// document.write("division of " + num7 + " and " + num8 + " is " + division);

// QUESTION 3
// var num;
// document.write("Value after variable declaration is: " + num);
// document.write("<br />");

// num = 5;
// document.write("Initial value: " + num);
// document.write("<br />");

// document.write("Value after increment is: " + ++num);
// document.write("<br />");

// num += 7;
// document.write("Value after addition is: " + num);
// document.write("<br />");

// document.write("Value after decrement is: " + --num);
// document.write("<br />");

// document.write("The remainder is: " + (12 % 3));

// QUESTION 4
// var ticketPrice = 600;
// var noOfTicketBuy = 5;
// document.write(
//   "Total cost to buy " +
//     noOfTicketBuy +
//     " tickets to a movie is " +
//     ticketPrice * noOfTicketBuy +
//     "PKR"
// );

// QUESTION 5
// var table = 4;
// var count = 0;
// document.write("Table of " + table);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);

// QUESTION 6
// var celsiusUnit = "°C";
// var fahrenheitUnit = "°F";
// var celsiusTemperature = 25;
// var celsiusToFahrenheit = (celsiusTemperature * 9) / 5 + 32;
// document.write(
//   celsiusTemperature +
//     celsiusUnit +
//     " is " +
//     celsiusToFahrenheit +
//     fahrenheitUnit
// );
// document.write("<br />");
// var fahrenheitTemperature = 70;
// var fahrenheitToCelsius = ((fahrenheitTemperature - 32) * 5) / 9;
// document.write(
//   fahrenheitTemperature +
//     fahrenheitUnit +
//     " is " +
//     fahrenheitToCelsius +
//     celsiusUnit
// );

// QUESTION 7
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var total =
//   priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

// document.write("Price of item 1 is " + priceItem1 + "<br />");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br />");
// document.write("Price of item 2 is " + priceItem2 + "<br />");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br />");
// document.write("Shipping Charges " + shippingCharges + "<br /><br />");
// document.write("Total cost of your order is " + total);

// QUESTION 8
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("<p>Total marks: " + totalMarks + "</p>");
// document.write("<p>Marks obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage + "%</p>");

// QUESTION 9
// var usDollars = 10;
// var saudiRiyals = 25;
// var usDollarRate = 104.8;
// var saudiRiyalRate = 28;
// var total = usDollars * usDollarRate + saudiRiyals * saudiRiyalRate;

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + total);

// QUESTION 10
// var num9 = 10;
// num9 = ((num9 + 5) * 10) / 2;
// console.log(num9);

// QUESTION 11
// var currentYear = 2022;
// var birthYear = 1999;
// var age = currentYear - birthYear;

// document.write("<h1>Age Calculator</h1>");
// document.write("Your Age is: " + age);

// QUESTION 12
// var circleRadius = 20;
// var PI = 3.142;
// var circleCircumference = 2 * PI * circleRadius;
// var circleArea = PI * circleRadius ** 2;

// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of circle:" + circleRadius + "<br />");
// document.write("The circumference is:" + circleCircumference + "<br />");
// document.write("The area is:" + circleArea);

// QUESTION 13
// var snack = "lays";
// var currentAge = 22;
// var estimatedMaxAge = 50;
// var noOfSnacksPerDay = 4;
// var estimatedSnacksAtMaxAge =
//   (estimatedMaxAge - currentAge) * 365 * noOfSnacksPerDay;

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack:" + snack);
// document.write("<br />");
// document.write("Current Age:" + currentAge);
// document.write("<br />");
// document.write("Estimated Maximum Age:" + estimatedMaxAge);
// document.write("<br />");
// document.write("Amount of snacks per day:" + noOfSnacksPerDay);
// document.write("<br />");
// document.write(
//   "You will need " +
//     estimatedSnacksAtMaxAge +
//     " chocolate chip to last you until the ripe old age of " +
//     estimatedMaxAge
// );

/**
 * CHAPTER 6-9
 */

// QUESTION 1
// var a = 10;
// document.write("Result:");
// document.write("<br />");
// document.write("The value of a is: " + a);
// document.write("<br />");
// document.write("......................");
// document.write("<br />");
// document.write("The value of ++a is: " + ++a);
// document.write("<br />");
// document.write("Now the value of a is: " + a);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of a++ is: " + a++);
// document.write("<br />");
// document.write("Now the value of a is: " + a);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of --a is: " + --a);
// document.write("<br />");
// document.write("Now the value of a is: " + a);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of a is: " + a--);
// document.write("<br />");
// document.write("Now the value of a is: " + a);

// QUESTION 2
// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;
// var output = "a is " + a;
// output += "<br />";
// output += "b is " + b;
// output += "<br />";
// output += "result is " + result;
// document.write(output);

// QUESTION 3
// var userName = prompt("Enter your name");
// document.write("<h1>Hello " + userName + "</h1>");

// QUESTION 5
// var table = +prompt("Enter a number", 5);
// var count = 0;
// var output = table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// document.write(output);

// QUESTION 6
// var subject1 = prompt("Enter first subject name");
// var subject2 = prompt("Enter second subject name");
// var subject3 = prompt("Enter third subject name");

// var totalMarks = 100;

// var marksSubject1 = +prompt("Enter first subject marks");
// var marksSubject2 = +prompt("Enter second subject marks");
// var marksSubject3 = +prompt("Enter third subject marks");

// var percentageSubject1 = (marksSubject1 / totalMarks) * 100;
// var percentageSubject2 = (marksSubject2 / totalMarks) * 100;
// var percentageSubject3 = (marksSubject3 / totalMarks) * 100;

// var totalPercentage =
//   percentageSubject1 + percentageSubject2 + percentageSubject3;

// var totalMarksObtained = marksSubject1 + marksSubject2 + marksSubject3;

// var output = "<table>";
// output += "<thead><tr>";
// output += "<th>Subject</th>";
// output += "<th>Total Marks</th>";
// output += "<th>Obtained Marks</th>";
// output += "<th>Percentage</th>";
// output += "</tr></thead>";
// output += "<tbody>";
// output += "<tr>";
// output += "<td>" + subject1 + "</td>";
// output += "<td>" + totalMarks + "</td>";
// output += "<td>" + marksSubject1 + "</td>";
// output += "<td>" + percentageSubject1 + "%</td>";
// output += "</tr>";
// output += "<tr>";
// output += "<td>" + subject2 + "</td>";
// output += "<td>" + totalMarks + "</td>";
// output += "<td>" + marksSubject2 + "</td>";
// output += "<td>" + percentageSubject2 + "%</td>";
// output += "</tr>";
// output += "<tr>";
// output += "<td>" + subject3 + "</td>";
// output += "<td>" + totalMarks + "</td>";
// output += "<td>" + marksSubject3 + "</td>";
// output += "<td>" + percentageSubject3 + "%</td>";
// output += "</tr>";
// output += "</tbody>";
// output += "<tfoot><tr>";
// output += "<th></th>";
// output += "<th>" + totalMarks * 3 + "</th>";
// output += "<th>" + totalMarksObtained + "</th>";
// output += "<th>" + totalPercentage + "%</th>";
// output += "</tr></tfoot>";
// output += "</table>";

// document.write(output);

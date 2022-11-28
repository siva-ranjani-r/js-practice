var profit = parseInt(prompt("Enter a value of profit percentage:"));
var sp = parseInt(prompt("Enter a value of selling price:"));
var cp = (100/(100+profit))*sp;
alert(cp);


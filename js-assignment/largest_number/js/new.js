var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));
var num3 = parseInt(prompt("Enter third number: "));
var largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
alert(largest);
var boys = parseInt(prompt("Total number of boys:"));
var girls = parseInt(prompt("Total number of girls:"));
var scoreBoys =  parseInt(prompt("Score of boys:"));
var scoreGirls =  parseInt(prompt("Score of girls:"));
var x = boys*scoreBoys;
var y = girls*scoreGirls;
var total = x+y;
var avg = total/(boys+girls);
alert(avg);

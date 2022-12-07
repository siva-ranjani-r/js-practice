var number=parseInt(prompt("enter the number"))
var sum=0;
var temp=number;
var a=number;
var count=0;
while(a>0)
{
var rem=a%10;
a=parseInt(a-rem)/10;
count++;
}
while(number>0){
	digit=number%10
	digit1=digit**count
	sum+=digit1;
	number=(number-digit)/10
}
if(temp==sum)
{
	document.write("it is amstrong number")
}
else
{
	document.write("it is not amstrong number")
}
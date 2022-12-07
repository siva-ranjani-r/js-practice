var number=parseInt(prompt("enter the value "));
var i=2;
while(number%i!=0)
{
	if(i==number-1)
	{
		document.write(number+" is a prime number");
	}
	i++;
}
if(i!=number)
{
	document.write(number+" is not a prime number");
}
a=parseInt(prompt("enter a number"));
flag=true;
for(i=2;i<a;i++)
{
	if(a%i==0)
	{
	flag=false;
	}
				
}
if(flag==true)
{
	alert("It is an prime number")
}
else
{
	alert("It is not an prime number")
}
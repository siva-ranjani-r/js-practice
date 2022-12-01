/*var a=parseInt(prompt("Enter value"));
var b=parseInt(prompt("Enter value"));
var c=parseInt(prompt("Enter value"));
if(a<b && a<c)
{
	if(b<c)
	{
		console.log(a+","+b+","+c);
	}
	else
	{
		console.log(a+","+c+","+b);
	}
}
else if(b<a && b<c)
{
	if(a<c)
	{
		console.log(b+","+a+","+c);
	}
	else
	{
		console.log(b+","+c+","+a);
	}
}
else if(c<a && c<b)
{
	if(a<b)
	{
		console.log(c+","+a+","+b);
	}
	else
	{
		console.log(c+","+b+","+a);
	}
}*/

var a=parseInt(prompt("Enter value"));
var b=parseInt(prompt("Enter value"));
var c=parseInt(prompt("Enter value"));
var d=parseInt(prompt("Enter value"));
if ((a>b) && (a>c) && (a>d))
{
	if ((b>c)&&(b>d))
	{
		if(c>d)
		{
			console.log(a+","+b+","+c+","+d);
		}
		else
		{
			console.log(a+","+b+","+d+","+c)
		}
	}
	else
	{
		console.log(a+","+b+","+d+","+c);
	}
}		
else if ((b>a) && (b>c) && (b>d))
	{
		if ((a>c)&& (a>d))
		{
			if(c>d)
			{
				console.log(b+","+a+","+d+","+c);
			}
			else
			{
			console.log(b+","+a+","+d+","+c)
			}
			
		}
		else
		{
			console.log(b+","+a+","+d+","+c);
		}

}
else if ((c>a) && (c>b) && (c>d))
{
	if ((a>b)&&(a>d))
	{
		if(b>d)
		{
			console.log(c+","+a+","+b+","+d);
		}
		else
		{
			console.log(c+","+a+","+d+","+b)
		}
	}					
	else
		{
			console.log(c+","+a+","+d+","+b);
		}

}
else if((d>a) && (d>b) && (d>c))
{
	if ((a>b)&&(a>c))
    {
       if(b>c)
		{
			console.log(d+","+a+","+b+","+c);
		}
		else
		{
			console.log(d+","+a+","+c+","+b)
		}
	}
	else
		{
			console.log(d+","+a+","+d+","+c);
		}

}
else
{
	console.log(a+","+b+","+c+","+d)
}
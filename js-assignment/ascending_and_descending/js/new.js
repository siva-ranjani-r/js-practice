/*var numbers=[71,25,15,10,5];
numbers.sort(comparefunction);
console.log(numbers);
//alert(numbers);
function comparefunction(a,b){
//1.<0-----a come first a<b => -1
//if(a.numbers < b.numbers)return -1;
//2.if =0------nthy will be changed a===b => 0
//if(a.numbers === b.numbers)return 0;
//3/if>0-----b come first  a>b => 1
//if(a.numbers > b.numbers)return 1;
return(a+b);
}

var numbers1=[71,25,15,10,5];
numbers.sort(comparefunction);
console.log(numbers1);
//alert(numbers);
function comparefunction(a,b){
//1.<0-----a come first a<b => -1
//if(a.numbers < b.numbers)return -1;
//2.if =0------nthy will be changed a===b => 0
//if(a.numbers === b.numbers)return 0;
//3/if>0-----b come first  a>b => 1
//if(a.numbers > b.numbers)return 1;
return(a-b);
}*/
var numbers = [0,1,20,10,40,8,60];
numbers.sort(function(a,b){
	if(a > b)
	{
		return -1;
	}
		if(a < b)
	{
		return 1;
	}
		if(a == b)
	{
		return 0;
	}
});
console.log(numbers);
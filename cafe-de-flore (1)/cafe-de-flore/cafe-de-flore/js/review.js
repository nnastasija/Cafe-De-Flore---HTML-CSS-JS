function required()
{
var empt = document.forms["form1"]["text1"].value;
var empt2 = document.forms["form1"]["text2"].value;
if (empt == "")
{
alert("Please fill out name field");
return false;
}
else if (empt2 == ""){
alert("Please fill out your opinion field");
return false;
}
else
{
alert('Thanks for your review!');
return true; 
}
}
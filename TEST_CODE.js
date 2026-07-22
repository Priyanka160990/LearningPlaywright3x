//const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
/*let data =55
if (data == 100 && data >= 90)
{
    console.log("A")
}
else if(data == 89 && data >= 80)
{
    console.log("B")
}   
else if(data == 79 && data >= 70)
{
    console.log("C")
}   
else if(data = 69 && data >= 60)
{
    console.log("D")
}   
else
{
    console.log("F")
}*/

//Write a program to check if a given year is a leap year. A leap year is divisible by 4, except for century years which must be divisible by 400.

let data=2001
if ((data%4==0 && data % 100!=0) || (data % 400==0) )
{
    console.log("Leap Year")
}
else
{
    console.log("Not a Leap Year")
}
/*
//Mathmatical Operator
let num1 = 5;
let num2 = 3;
//let result = num1 + num2; //Addition
//let result = num1 - num2; //sub
//let result = num1 * num2; //multi
//let result = num1 / num2; //Division

//module operator
//To find out Reminder
let num3 = 29;
let odd = num3 % 2;
console.log(odd);

//Exponentiation operator
let square = 2**2;
console.log(square); //4

//Relation Operator
//To compare two values
console.log(10 > 5); //Boolean
console.log(10 < 5); //Boolean
console.log(5 >= 5); //Boolean
console.log(10 >! 5); //Boolean
console.log(!5);

//Equality Operator:
// '==' : Value Check
// '===' : Value $ Data type check
//'!' -  not operator
console.log(5 >= 5);  //Boolean
console.log(5 == 6);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

//Conditional
//if (conditional){
//true code to be executed here
//}


//falsy value :
//false, 0, -0, "", ``, '', null, undefined, NaN
*/

/*
if("") {
    console.log("it is true");
}

if(-0.0512) {
    console.log("it is true");
}

*/

/*//Task:
//Given total_bill, discount_start_price if ypu satisfy the condition print Discount
//Availabible OthetherWise print No Discount


let total_bill = 750;
if( total_bill > 500 ) {
    console.log("Discount Available");
} else {
    console.log("No Discount");
}
 */
/*
//task: 2
let age=18;
if (age>=60)
{
    console.log("senior citizen");
}
else if(age> 18)
{
    console.log("Adult");
    
}
else
{
    console.log("minor");
    
}
*/
/*
//task: 3
//check if male and then check (22+) then he can able to marry  

let gender="male";
let age1=20;
if(age1 >=22 && gender =="male")
{
    console.log("you can marry");
    
}
else
{
 console.log("yor can't marry");
 
}
*/
/*
//task 4
//print all the vowels(a,e,i,o,u)

let char="e";
switch(char){
        case"a":
        case"e":
        case"i":
        case"o":
        case"u":
        console.log("vowel");
        break;  //to break the flow
        default:
            console.log("consonnant");
            break;
}
*/
/*
//task 5
//sunday,monday,tuesday,wednesday,thursday,friday,saturday(week)& month

let day=1;
switch(day){
    case 0:
        console.log("sunday");
        break;
        case 0:
        console.log("sunday");
        break;
        
        case 1:
        console.log("monday");
        break;
        
        case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        
        case 4:
        console.log("thursday");
        break;
        
        case 5:
        console.log("friday");
        break;
        
        case 6:
        console.log("saturday");
        break;
        
        default:
         console.log("invalid day");
        break;        
}
*/
/*
//task 6
//months
let month=3;
switch(month){

    case 0:
        console.log("january");
        break;
        case 2:
        console.log("february");
        break;
        case 3:
        console.log("march");
        break;
        case 4:
        console.log("april");
        break;
        case 5:
        console.log("may");
        break;
        case 6:
        console.log("june");
        break;
        case 7:
        console.log("july");
        break;
        case 8:
        console.log("august");
        break;
        case 9:
        console.log("september");
        break;
        case 10:
        console.log("october");
        break;
        case 11:
        console.log("november");
        break;
        case 12:
        console.log("december");
        break;
        default:
        console.log("invalid month");
        break;
        
}
*/

//rl module:
const readline = requuire("readline");

const rl=readline.createInterface({input: process.stdin, output: process.stdout});
 
let item1, item2, item3;
rl.question("enter item1", (input1)=> {
    item1 =parseInt(input1);
    if(item1 % 2 !== 0){}
    })


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

//Task:
//Given total_bill, discount_start_price if ypu satisfy the condition print Discount
//Availabible OthetherWise print No Discount


let total_bill = 750;
if( total_bill > 500 ) {
    console.log("Discount Available");
} else {
    console.log("No Discount");
}
 
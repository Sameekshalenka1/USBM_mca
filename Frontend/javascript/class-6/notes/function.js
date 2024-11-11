//to do print your name
/*
function printName(){
    console.log(`my name is sameeksha`);

}
printName();  //invokation of function call

//Arguments and parameters
function printNam(name){    //name parameter
    console.log(`my name is : ${name}`);
}

printName("sameeksha");  //sameeksha-argument

*/

//name,age,city
/*
function printName(name,age,city){
    console.log(`my name is: ${name}, my age is: ${age}, my city is: ${city}`);
}
console.log(printName("sameeksha",23,"bbsr"));

*/


/*//return keyword
function printName(name,age,city){
    return `my Name is: ${name}, my age is: ${age}, my city is: ${city}`;
}
console.log(printName("sameeksha",23,"bbsr"));


//let output = printName ("sameeksha",23,"bbsr");  //tradition way to a declair a function
//console.log(output);
*/

/*//Arrow function
console.log(printName("sameeksha"));  //before
const printName= (name) =>{        //=> - Fat arrow symbol
return `my name is ${name}`;
}
console.log(printName("sameeksha"));  //referance error because it can not store in the memory*/



/*//Ex:
 let newArray=[];       //let-keyword  //newArray-variable   //[]-empty Array
console.log(newArray);
//output-[]

console.log(typeof newArray);
//output-object
*/


/*//ex:
let name="ram";
let age=45;
let profession="gamer";
let ismarried= true;

//Reasoin 1-  we need every thing under single name(variable)
//reasion 2-  structured way, (code readablly) easily to maintain.
let useArry =["Ram",45,"gamer",true];
console.log(useArry);*/


//Array declaration:-

/*let newNumber= [1,2,3,4,5];
console.log(newNumber);

//in order index/indices  -   always start now "0" index

//  (Q)-How to check the length
console.log(number.length);*/

//Accessing
let cities = ["Bhubaneswar","cuttack","kendrapara","jajpur","Bhadrak"];
 /*console.log(cities[0]);  //Bhubaneswar
 console.log(cities[4]);  //Bhadrak

// //Last element:
 let lastcity=cities.length-1;  //4
 console.log(cities[lastcity]);

// //kendrapara (varity methods)
 console.log(cities[2]);
 console.log(cities[lastcity / 2]);
 console.log(cities[lastcity - 2]);



// //jajpur
 console.log(cities[3]);


//modify
 console.log(cities);
 let modifycity = "Balesor";
 cities[2]=modifycity;
 console.log(cities);
*/
//add element:
//push();
 console.log(cities);
 let addcity = "Jagasingpur";
 cities.push(addcity);
 console.log(cities);


//remove:
//pop():
console.log(cities);
let removecity = "Jagasingpur";
 cities.pop(removecity);
 console.log(cities);

//shift()
//Array - MDN
console.log(cities);
let shiftcity ="jagasingpur";
cities.shift(shiftcity);
console.log(cities);








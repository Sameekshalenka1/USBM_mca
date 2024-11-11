/*//concat :
let fruits = ["apple","mango"];
let addArray = fruits.concat(["strwaberry","dragon-fruit"]);
console.log(addArray);
*/


/*let students=["ram","romi","soumya","sasmita"];
console.log(students.includes("ram"));
*/

/*
let animals=['ant','duck','camel','elephant','bison'];
const slice = animals.slice(2);
console.log(slice);
animals.slice(1,4);
*/
/*
let months = ['jan','feb','march','april','june'];
//months.splice(1,0,'feb');
//console.log(months);

// months.splice(2,0,'december');  //add
// console.log(months);

// months.splice(2,1,'august');    //replace
// console.log(months);

months.splice(2,1);    //delete
console.log(months);
*/

const array1 = ['a','b','c'];
const array2 = [1,2,3,4,5];
//double the no of array2
/*
for(let i=0; i<array2.length; i++)
{
    const doubled = array2[i]*2;
    array2[i] = doubled;
}
console.log(array2);
*/

//forEach()

array2.forEach((element, i) => {
    console.log(element * 2,i);
    
})
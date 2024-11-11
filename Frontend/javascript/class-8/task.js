// Date - 11-11-2024, Monday, USBM
// Synchronous & Asynchronous
// What Why How + Dry Run

//Synchronous
console.log("Start");  //step 1
console.log("Middle"); //step 2
console.log("End"); //step 3


//Asynchronous code with serTimeout
console.log("Start"); //step 1
setTimeout(()=> console.log("middle"),2000)// Executes after 2 seconds - Non Blocking Agent  // Step-3
console.log("End"); //step 2 due to time interval

//fetch("https://www.google.com") //success
// .then((res,res))=>res.json()); //succes
// .then((res)=> console.log(res)); //success 
// .catch((error)=>)console.log(error); //error




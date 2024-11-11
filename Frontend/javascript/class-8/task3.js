const url = "https://jsonplaceholder.typicode.com/users"

async function fetchData(){
    try{
const responce = await fetch(url);
const data = await responce.json();
console.log(data);

    }
    catch(error){
        console.log(error);
    }
}

fetchData();
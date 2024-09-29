const url = "https://pokeapi.co/api/v2/pokemon/3"

async function getData(url) {
    const response = await fetch(url);
  
    return response.json();
  }
  
const data = getData(url);
  
console.log({ data })
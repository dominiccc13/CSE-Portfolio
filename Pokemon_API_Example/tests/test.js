const url = "https://pokeapi.co/api/v2/pokemon/3"

async function GetActivity(url) {
    const promise = await fetch(url)
    const json = await promise.json()
    console.log(json)
    const h1 = document.getElementById("h1");
    const name = json.name
    h1.innerText = name

    return json

    // console.log(promise)
    // console.log("test within function")
}

const data = await GetActivity(url)
console.log(data)
console.log("test")
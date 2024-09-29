for (let i = 0; i < 5; i++) {
    let sprite = document.getElementById(`sprite${i+1}`);

    // fetch("https://pokeapi.co/api/v2/pokemon/" + `${(i+1)*3}`)
    // .then(result => console.log(result.json()))

    fetch("https://pokeapi.co/api/v2/pokemon/" + `${(i+1)*3}`)
    .then(result => result.json())
    .then(data => {
        sprite.src = data.sprites.front_default;
    })
}

// Add additional details to div (health, 3 abilities)
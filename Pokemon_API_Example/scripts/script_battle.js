// userPokemon variables
let userPokemon = document.getElementById("card1")
let sprite = document.getElementById("sprite1")
let ability1el = document.getElementById("ability1")
let ability2el = document.getElementById("ability2")
let ability3el = document.getElementById("ability3")
let health = document.getElementById("health")
let name = document.getElementById("name1")
let nameCapital = null

let maxHealth = null
let currentHealth = null

let ability1 = null // blaze
let ability2 = null // solar power

let activityLog = document.getElementById("activity")

// opponentPokemon variables
let opponentPokemon = document.getElementById("opponentCard")
let opSprite = document.getElementById("opsprite1")
let opAbility1el = document.getElementById("opability1")
let opAbility2el = document.getElementById("opability2")
let opAbility3el = document.getElementById("opability3")
let opHealth = document.getElementById("ophealth")
let opName = document.getElementById("opname1")
let opNameCapital = null

let opMaxHealth = null
let opCurrentHealth = null

let opAbility1 = null // blaze
let opAbility2 = null // solar power

// populate userPokemon
fetch("https://pokeapi.co/api/v2/pokemon/6")
.then(promise => promise.json())
.then(data => 
    { // make name uppercase
    nameCapital = data.name
    nameCapital = nameCapital.charAt(0).toUpperCase() + nameCapital.slice(1).toLowerCase()

    name.innerText = nameCapital
    sprite.src = data.sprites.front_default
    ability1el.innerText = `1. ${data.abilities[0].ability.name}`
    ability2el.innerText = `2. ${data.abilities[1].ability.name}`
    health.innerText = `Health: ${data.stats[0].base_stat}`
    maxHealth = data.stats[0].base_stat
    currentHealth = data.stats[0].base_stat
    // ability3 = 
    console.log(data)
    })

// populate opponentPokemon
fetch("https://pokeapi.co/api/v2/pokemon/15")
.then(promise => promise.json())
.then(data => 
    { // make name uppercase
    opNameCapital = data.name
    opNameCapital = opNameCapital.charAt(0).toUpperCase() + opNameCapital.slice(1).toLowerCase()

    opName.innerText = opNameCapital
    opSprite.src = data.sprites.front_default
    opAbility1el.innerText = `1. ${data.abilities[0].ability.name}`
    opAbility2el.innerText = `2. ${data.abilities[1].ability.name}`
    opHealth.innerText = `Health: ${data.stats[0].base_stat}`
    opMaxHealth = data.stats[0].base_stat
    opCurrentHealth = data.stats[0].base_stat
    // ability3 = 
    console.log(data)
    })

function determineBlaze(maxHealth, health) {
    if (health < maxHealth/2) {
        return true
    } else {return false}
}

function determineHit() {
    let rndNum = Math.floor(Math.random()*10)
    if (rndNum > 2) {return true} else {return false}
}
// let attackerName = null
function attack(ability1, hit, user) {
    
    if (user) {attackerName = nameCapital; handicap = 1}
    else {attackerName = opNameCapital; handicap = 1.5}

    if (hit) {
        let damage = Math.floor(Math.random()*15*handicap + 1)
        if (ability1) {
            damage = damage*2
            activityLog.innerText = `${attackerName}'s attack was affected by blaze! It did ${damage} damage!` 
            return damage
        }
        else {
            activityLog.innerText = `${attackerName}'s attack did ${damage} damage!`}
            return damage
    } else {
        activityLog.innerText = `${attackerName}'s attack missed!`
        return 0
    }
}

let gameOver = null

function turn() {
    // determine hit 
    const hit = determineHit()

    // determine abilities
    ability1 = determineBlaze(maxHealth,currentHealth)

    // attack
    let dam = attack(ability1, hit, true)
    
    // reduce opponentPokemon health
    if (opCurrentHealth - dam <= 0) {
        opHealth.innerText = "Health: 0"
        activityLog.innerText = "You win!"
        gameOver = true
        attackBtn.remove()
    } else {
        opCurrentHealth -= dam
        opHealth.innerText = `Health: ${opCurrentHealth}`
    }

    // enemy attacks code
    // determine enemy abilities
    attackBtn.remove()
    setTimeout(() => {
        if (gameOver == false || gameOver == null) {
            userPokemon.appendChild(attackBtn)
            dam = attack(ability2, hit, false, gameOver)
            
            // reduce userPokemon health
            if (currentHealth - dam <= 0) {
                health.innerText = "Health: 0"
                activityLog.innerText = "You lose!"
                gameOver = true
                attackBtn.remove()
            } else {
                currentHealth -= dam
                health.innerText = `Health: ${currentHealth}`
            }
        } 
    }, 2000);
}

const attackBtn = document.getElementById("attack")
attackBtn.addEventListener("click", turn)


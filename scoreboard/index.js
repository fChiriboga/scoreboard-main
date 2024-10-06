let homescore = document.getElementById("home-score")
let guestscore = document.getElementById("guest-score")
let home = 0
let guest = 0

function add1PointHome() {
    home += 1
    homescore.textContent = home
}

function add2PointHome() {
    home += 2
    homescore.textContent = home
}

function add3PointHome() {
    home += 3
    homescore.textContent = home
}


function add1PointGuest() {
    guest += 1
    guestscore.textContent = guest
}

function add2PointGuest() {
    guest += 2
    guestscore.textContent = guest
}

function add3PointGuest() {
    guest += 3
    guestscore.textContent = guest
}
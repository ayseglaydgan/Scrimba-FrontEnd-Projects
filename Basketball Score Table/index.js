let homeScore = document.getElementById("home_score");
let guestScore = document.getElementById("guest_score");


let score_home = 0;
let score_guest = 0;

function incrementOneH()
{
    score_home += 1;
    homeScore.textContent = score_home;
}

function incrementTwoH()
{
    score_home += 2;
    homeScore.textContent = score_home;
}

function incrementThreeH()
{
    score_home += 3;
    homeScore.textContent = score_home;
}

function incrementOneG()
{
    score_guest += 1;
    guestScore.textContent = score_guest;
}

function incrementTwoG()
{
    score_guest += 2;
    guestScore.textContent = score_guest;
}

function incrementThreeG()
{
    score_guest += 3;
    guestScore.textContent = score_guest;
}

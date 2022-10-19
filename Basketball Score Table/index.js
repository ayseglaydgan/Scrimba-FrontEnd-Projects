let homeScore = document.getElementById("home_score");
let guestScore = document.getElementById("guest_score");


let score_home = 0;
let score_guest = 0;

function increment(type, value)
{
    if (type == 'home') {
        score_home += value;
        homeScore.textContent = score_home;
    } else {
        score_guest += value;
        guestScore.textContent = score_guest;
    }
}

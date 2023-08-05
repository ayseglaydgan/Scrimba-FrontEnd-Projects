
const activities = document.getElementById("activity-name")

const btnActivities = document.getElementById("btn-activities")

btnActivities.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activities.textContent = data.activity
        })
})
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return Math.floor(Math.random() * 6) + 1
    });
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return `<div class="placeholder-dice"></div>`
    })
}

const getPercentage = (maxHealth, remainingHealt) => remainingHealt * 100 / maxHealth


export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }


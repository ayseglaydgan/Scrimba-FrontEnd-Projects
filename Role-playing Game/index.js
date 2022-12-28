const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   diceRoll: [3, 1, 4],
   diceCount: 3
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   diceRoll: [2],
   diceCount: 1
}

function getDiceRollArray(diceCount) {
   const randomDiceArray = [];
   for (let i = 0; i < diceCount; i++) {
      randomDiceArray.push(Math.floor(Math.random() * 6));
   }
   return randomDiceArray
}

function renderCharacter(obj) {
   const { elementId, name, avatar, health, diceRoll, diceCount } = obj

   const diceHtml = diceRoll.map(function (diceNum) {
      return `<div class="dice">${diceNum}</div>`
   })
   const diceHtmlString = diceHtml.join(' ')

   document.getElementById(elementId).innerHTML =
      `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
               ${diceHtmlString} 
            </div>
        </div>`
}
getDiceRollArray(hero.diceCount)
renderCharacter(hero);
renderCharacter(monster);

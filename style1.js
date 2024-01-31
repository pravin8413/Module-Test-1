const closeBtn = document.getElementById("close-btn");
const gameRules = document.querySelector(".game-rules")
const ruleButton = document.querySelector("#rule-btn")


closeBtn.addEventListener("click",()=>{
    gameRules.style.display = "none";
    console.log(gameRules);
})

ruleButton.addEventListener("click",()=>{
    gameRules.style.display = "block";
})


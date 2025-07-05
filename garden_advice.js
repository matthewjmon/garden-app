// Object to hold advice rules
const adviceRules = {
    summer: {
        flower: "Water your plants regularly and provide some shade.\nUse fertiliser to encourage blooms.",
        vegetable: "Water your plants regularly and provide some shade.\nKeep an eye out for pests!"
    },
    winter: {
        flower: "Protect your plants from frost with covers.\nUse fertiliser to encourage blooms.",
        vegetable: "Protect your plants from frost with covers.\nKeep an eye out for pests!"
    }
};

// Function to get advice based on season and plant type
function getAdvice(season, plantType) {
    if (adviceRules[season] && adviceRules[season][plantType]) {
        return adviceRules[season][plantType];
    } else {
        return "No advice for this season or plant type.";
    }
}

// Hardcoded values (to be replaced in next issue)
let season = "summer";
let plantType = "flower";

console.log(getAdvice(season, plantType));

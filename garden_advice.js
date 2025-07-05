// Prompt the user to enter the current season
let season = prompt("Enter the current season (e.g., summer, winter):");

// Prompt the user to enter the type of plant
let plantType = prompt("Enter the plant type (e.g., flower, vegetable):");

// Object storing advice messages for different seasons and plant types
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

// Function to get gardening advice based on season and plant type
function getAdvice(season, plantType) {
    if (adviceRules[season] && adviceRules[season][plantType]) {
        return adviceRules[season][plantType];
    } else {
        return "No advice available for this season or plant type.";
    }
}

// Generate and display the gardening advice in the console
console.log(getAdvice(season, plantType));

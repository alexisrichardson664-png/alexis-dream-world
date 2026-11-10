
const outfitOptions = {
    bow: ["🎀", "🌸", "💜", "🤍", "🦋"],
    top: ["👚", "👗", "🩷", "💖", "👕"],
    shoes: ["👠", "👢", "👟", "🥿", "👡"],
    accessory: ["💎", "👜", "🧸", "🌷", "✨"]
};

const startingOutfit = {
    bow: "🎀",
    top: "👗",
    shoes: "👠",
    accessory: "💎"
};

let currentOutfit = { ...startingOutfit };

function chooseItem(category, item) {
    currentOutfit[category] = item;
    updateOutfit();
}

function updateOutfit() {
    Object.keys(currentOutfit).forEach(category => {
        const display = document.getElementById(category + "-display");

        if (display) {
            display.textContent = currentOutfit[category];
        }
    });
}

function randomizeOutfit() {
    Object.keys(outfitOptions).forEach(category => {
        const choices = outfitOptions[category];
        const randomIndex = Math.floor(Math.random() * choices.length);

        currentOutfit[category] = choices[randomIndex];
    });

    updateOutfit();
}

function resetOutfit() {
    currentOutfit = { ...startingOutfit };
    updateOutfit();
}

updateOutfit();

function changeBow(filename) {
    const bow = document.getElementById("melody-bow");

    if (bow) {
        bow.src = "images/" + filename;
    }
}

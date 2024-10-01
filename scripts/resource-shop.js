
import warriorsModule from "./modules/warriorModule.js";
import machinesModule from "./modules/machineModule.js";
import animalsModule from "./modules/animalModule.js";


const warriorSection = document.getElementById("warrior-content");
const machineSection = document.getElementById("machine-content");
const animalSection = document.getElementById("animal-content");

const showAllWarriors = () => {
    const allWarriors = warriorsModule.getAllWarriors();
    let htmlTxt = "";
    allWarriors.forEach((warrior) => {
        htmlTxt += `       
        <article class="warrior-content__warrior">
            <h2 class="warrior-content__warrior-name">${warrior.categoryName}</h2>
            <img class="warrior-content__warrior-img" src="${warrior.image}" alt="Bildet av krigeren ${warrior.categoryName}" height = "160px">
            <p>${warrior.priceGold} Gold</p>
            <button class="warrior-content__resource-shop-button" onclick="buyItem('warrior', '${warrior.categoryName}', '${warrior.priceGold}')">
                Buy Warrior
                <img src="../images/coin.png" height="20px">
            </button>
        </article>
        `;
    });
    warriorSection.innerHTML = htmlTxt;
}

(
    () => {
        showAllWarriors();
    }
)();

const showAllMachines = () => {
    const allMachines = machinesModule.getAllMachines();
    let htmlTxt= "";
    allMachines.forEach((machine) => {
        htmlTxt += `
        <article class="machine-content__machine">
        <h2 class="machine-content__machine-name">${machine.categoryName}</h2>
        <img class="machine-content__machine-img" src="${machine.image}" alt="Bildet av krigsmaskinen ${machine.categoryName}" height = "160px">
        <p>${machine.priceMetal} Metal</p>
            <button class="machine-content__resource-shop-button" onclick="buyItem('machine', '${machine.categoryName}', '${machine.priceMetal}')">
                Buy War Machine
                <img src="../images/coin.png" height="20px">
            </button>
        </article>
        `
    });
    machineSection.innerHTML = htmlTxt;
}

(
    () => {
        showAllMachines();
    }
)();

const showAllAnimals = () => {
    const allAnimals = animalsModule.getAllAnimals();
    let htmlTxt = "";
    allAnimals.forEach((animal) => {
        htmlTxt += `
        <article class="animal-content__animal">
        <h2 class="animal-content__animal-name">${animal.categoryName}</h2>
        <img class="animal-content__animal-img" src="${animal.image}" alt="Bildet av dyret ${animal.categoryName}" height = "160px">
        <p>${animal.priceWood} Wood</p>
            <button class="animal-content__resource-shop-button" onclick="buyItem('animal', '${animal.categoryName}', '${animal.priceWood}')">
                Buy Animal
                <img src="../images/coin.png" height="20px">
            </button>
        </article>
        `
    });
    animalSection.innerHTML = htmlTxt;
}

(
    () => {
        showAllAnimals();
    }
)();




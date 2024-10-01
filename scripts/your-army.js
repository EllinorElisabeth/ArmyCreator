const warriorSection = document.getElementById("warrior-army");
const machineSection = document.getElementById("machine-army");
const animalSection = document.getElementById("animal-army");

const showWarriorArmy = () => {
    let warriorArmy = JSON.parse(localStorage.getItem("warriorArmy")) || [];
    let htmlTxt = "";
    warriorArmy.forEach((warrior) => {
        htmlTxt += `       
        <article class="warrior-content__warrior">
            <h2 class="warrior-content__warrior-name">${warrior.categoryName}</h2>
            <img class="warrior-content__warrior-img" src="${warrior.image}" alt="Bildet av krigeren ${warrior.categoryName}" height = "60px">
        </article>
        `;
    });
    warriorSection.innerHTML = htmlTxt;
}

(
    () => {
        showWarriorArmy();
    }
)();

const showMachineArmy = () => {
    let machineArmy = JSON.parse(localStorage.getItem("machineArmy")) || [];
    let htmlTxt= "";
    machineArmy.forEach((machine) => {
        htmlTxt += `
        <article class="machine-content__machine">
            <h2 class="machine-content__machine-name">${machine.categoryName}</h2>
            <img class="machine-content__machine-img" src="${machine.image}" alt="Bildet av krigsmaskinen ${machine.categoryName}" height = "60px">
        </article>
        `
    });
    machineSection.innerHTML = htmlTxt;
}

(
    () => {
        showMachineArmy();
    }
)();

const showAnimalArmy = () => {
    let animalArmy = JSON.parse(localStorage.getItem("animalArmy")) || [];
    let htmlTxt = "";
    
    animalArmy.forEach((animal) => {
        htmlTxt += `
        <article class="animal-content__animal">
            <h2 class="animal-content__animal-name">${animal.categoryName}</h2>
            <img class="animal-content__animal-img" src="${animal.image}" alt="Bildet av dyret ${animal.categoryName}" height = "160px">
        </article>
        `
    });

    animalSection.innerHTML = htmlTxt;
}

(
    () => {
        showAnimalArmy();
    }
)();




const showBoughtArmy = () => {
    let htmlTxt = "";
    
    filteredData.forEach((animal) => {
        htmlTxt += `
        <article class="animal-content__animal">
            <h2 class="animal-content__animal-name">${animal.categoryName}</h2>
            <img class="animal-content__animal-img" src="${animal.image}" alt="Bildet av dyret ${animal.categoryName}" height = "160px">
        </article>
        `
    });

    animalSection.innerHTML = htmlTxt;
}
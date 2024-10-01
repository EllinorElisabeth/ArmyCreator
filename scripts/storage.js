function updateResourceDisplay() {

    document.getElementById("aside-content__gold").innerHTML = localStorage.getItem("gold") || 0;
    document.getElementById("aside-content__metal").innerHTML = localStorage.getItem("metal") || 0;
    document.getElementById("aside-content__wood").innerHTML = localStorage.getItem("wood") || 0;

}

(
    () => {
        updateResourceDisplay();
    }
)();

// Function: buy war resources
function buyItem(type, categoryName, price) {

    let goldAmount = Number.parseInt(localStorage.getItem("gold")) || 0;
    let metalAmount = Number.parseInt(localStorage.getItem("metal")) || 0;
    let woodAmount = Number.parseInt(localStorage.getItem("wood")) || 0;

    if (type === "warrior") {
        if (categoryName === "Snake") {
            if (price <= goldAmount) {
                updateLocalStorage(goldAmount, price, "gold");
                addWarriorToArmy(categoryName, "../images/warrior-1.png");
            } else {
                alert("Not enought Gold...");
            }
        } else if(categoryName === "Giant") {
            if (price <= goldAmount) {
                updateLocalStorage(goldAmount, price, "gold");
                addWarriorToArmy(categoryName, "../images/warrior-2.png");
            } else {
                alert("Not enought Gold...");
            }
        } else if(categoryName === "Big Axe") {
            if (price <= goldAmount) {
                updateLocalStorage(goldAmount, price, "gold");
                addWarriorToArmy(categoryName, "../images/warrior-3.png");

            } else {
                alert("Not enought Gold...");
            }
        } else if(categoryName === "Thief") {
            if (price <= goldAmount) {
                updateLocalStorage(goldAmount, price, "gold");
                addWarriorToArmy(categoryName, "../images/warrior-4.png");

            } else {
                alert("Not enought Gold...");
            }
        } else if(categoryName === "Tank") {
            if (price <= goldAmount) {
                updateLocalStorage(goldAmount, price, "gold");
                addWarriorToArmy(categoryName, "../images/warrior-5.png");

            } else {
                alert("Not enought Gold...");
            }
        } else {
            if (price <= goldAmount) {
                updateLocalStorage(goldAmount, price, "gold");
                addWarriorToArmy(categoryName, "../images/warrior-5.png");
            } else {
                alert("Not enought Gold...");
            }
        }
    }

    if (type === "machine") {
        console.log("HAdet");
        if (categoryName === "Canon") {
            if (price <= metalAmount) {
                updateLocalStorage(metalAmount, price, "metal");
                addMachineToArmy(categoryName, "../images/cannon.png");

            } else {
                alert("Not enought metal...");
            }
        } else if (categoryName === "Catapult") {
            if (price <= metalAmount) {
                updateLocalStorage(metalAmount, price, "metal");
                addMachineToArmy(categoryName, "../images/catapult.png");
            } else {
                alert("Not enought metal...");
            }
        } 
    }

    if (type === "animal") {
        if (categoryName === "Elephant") {
            if (price <= woodAmount) {
                updateLocalStorage(woodAmount, price, "wood");
                addAnimalToArmy(categoryName, "../images/elephant.png");
            } else {
                alert("Not enought wood...");
            }
        } else if (categoryName === "Horse") {
            if (price <= woodAmount) {
                updateLocalStorage(woodAmount, price, "wood");
                addAnimalToArmy(categoryName, "../images/horse.png");
            } else {
                alert("Not enought wood...");
            }
        } 
    }
    updateResourceDisplay();
}

// Function: Update resource localstorage for display
function updateLocalStorage(resources, price, type) {
    resources -= price;
    localStorage.setItem(type, resources);
}

// Function: Add only necessary war resources to localstorage
function addWarriorToArmy(categoryName, image) {
    let warriorArmy = JSON.parse(localStorage.getItem("warriorArmy")) || [];
    warriorArmy.push(
        {            
        categoryName:  categoryName,
        image: image
        }
    );
    localStorage.setItem("warriorArmy", JSON.stringify(warriorArmy))
}

function addMachineToArmy(categoryName, image) {
    let machineArmy = JSON.parse(localStorage.getItem("machineArmy")) || [];
    machineArmy.push(
        {
            categoryName: categoryName,
            image: image
        }
    );
    localStorage.setItem("machineArmy", JSON.stringify(machineArmy))
}

function addAnimalToArmy(categoryName, image) {
    let animalArmy = JSON.parse(localStorage.getItem("animalArmy")) || [];
    animalArmy.push(
        {
            categoryName: categoryName,
            image: image
        }
    );
    localStorage.setItem("animalArmy", JSON.stringify(animalArmy)) || [];
}

// Function: Seach through My Army
function getArmyData() {

    // Get all purchased items
    let warriorArmy = JSON.parse(localStorage.getItem("warriorArmy")) || [];
    let machineArmy = JSON.parse(localStorage.getItem("machineArmy")) || [];
    let animalArmy = JSON.parse(localStorage.getItem("animalArmy")) || [];

    // Combine all purchased item lists into one array
    return [...warriorArmy, ...machineArmy, ...animalArmy];
}

function searchBoughtArmy() {

    const searchSection = document.getElementById("search-section");

    const input = document.getElementById("search-input").value;
    let htmlTxt = "";

    if (input.length > 0) {
        htmlTxt = `
            <header class="search-content__header">
                <h1 class="search-content__title">Search Results</h1>
            </header>
        `;

        const army = getArmyData();

        const filteredData = army.filter(object => object.categoryName.slice(0, input.length).toLowerCase().includes(input.toLowerCase));
    

        filteredData.forEach((searchObject) => {
            htmlTxt += `
            <article class="object-content">
                <h2 class="object-content">${searchObject.categoryName}</h2>
                <img class="object-content__img" src="${searchObject.image}" alt="Bildet av dyret ${searchObject.categoryName}" height = "160px">
            </article>
            `
        });
    } else {
        htmlTxt = "";
    }


    searchSection.innerHTML = htmlTxt;
}

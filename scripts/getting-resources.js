
let goldAmount = parseInt(localStorage.getItem("gold")) || 0;
let metalAmount = parseInt(localStorage.getItem("metal")) || 0;
let woodAmount = parseInt(localStorage.getItem("wood")) || 0;

function getMineResource() { 
    const randomValue = Math.random(); 
    const randomAmount = Math.floor(Math.random() * 10) + 1;
    if(randomValue < 0.25) {
        goldAmount += randomAmount;
        localStorage.setItem("gold", goldAmount);
        alert(`Du fikk ${randomAmount} gull`);
    } else {
        metalAmount += randomAmount;
        localStorage.setItem("metal", metalAmount);
        alert(`Du fikk ${randomAmount} metal`);
    }
    document.getElementById("aside-content__gold").innerHTML = goldAmount;
    document.getElementById("aside-content__metal").innerHTML = metalAmount;
}

function getWoodResource() {
    const randomAmount = Math.floor(Math.random() * 10) + 1;
    woodAmount += randomAmount;
    localStorage.setItem("wood", woodAmount);
    alert(`Du hamstret ${randomAmount} trestammer`);

    document.getElementById("aside-content__wood").innerHTML = woodAmount;
}



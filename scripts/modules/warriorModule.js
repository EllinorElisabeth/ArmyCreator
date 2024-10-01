const warriorsModule = ( () => {

    const warriors = [
        {
            id: 1,
            categoryName: "Snake",
            priceGold: 2,
            image: "../images/warrior-1.png"
        },
        {
            id: 2,
            categoryName: "Giant",
            priceGold: 4,
            image: "../images/warrior-2.png"
        },
        {
            id: 3,
            categoryName: "Big Axe",
            priceGold: 5,
            image: "../images/warrior-3.png"
        },
        {
            id: 4,
            categoryName: "Thief",
            priceGold: 3,
            image: "../images/warrior-4.png"
        },
        {
            id: 5,
            categoryName: "Tank",
            priceGold: 6,
            image: "../images/warrior-5.png"
        },
        {
            id: 6,
            categoryName: "Berserker",
            priceGold: 5,
            image: "../images/warrior-6.png"
        },
    ];

    const getAllWarriors = () => {
        return structuredClone(warriors);
    }
    
    const getWarriorsById = (id) => {
        const warrior = warriors.find( (warrior) => warrior.id === id);
        return structuredClone(warrior);
    }
    
    return {
        getAllWarriors,
        getWarriorsById
    }

} )();

export default warriorsModule;
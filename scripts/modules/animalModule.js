const animalsModule = ( () => {

    const animals = [
        {
            id: 1,
            categoryName: "Elephant",
            priceWood: 14,
            image: "../images/elephant.png"
        },
        {
            id: 2,
            categoryName: "Horse",
            priceWood: 12,
            image: "../images/horse.png"
        }
    ];

    const getAllAnimals = () => {
        return structuredClone(animals);
    }

    const getAnimalById = () => {
        const animal = animals.find( (animal) => animal.id === id);
    }

    return {
        getAllAnimals,
        getAnimalById
    }

} )();

export default animalsModule;
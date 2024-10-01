const machinesModule = ( () => {

    const machines = [
        {
            id: 1,
            categoryName: "Canon",
            priceMetal: 50,
            image: "../images/cannon.png"
        },
        {
            id: 2,
            categoryName: "Catapult",
            priceMetal: 35,
            image: "../images/catapult.png"
        }
    ];

    const getAllMachines = () => {
        return structuredClone(machines);
    }

    const getAllMachineById = () => {
        const machine = machines.find( (machine) => machine.id === id);
        return structuredClone(machine);
    }

    return {
        getAllMachines,
        getAllMachineById
    };

} )();

export default machinesModule;
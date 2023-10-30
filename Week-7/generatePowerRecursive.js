
function generatePowerSet(set) {
    if (set.length === 0) {
        return [[]];
    }

    const element = set[0];
    const subsetsWithoutElement = generatePowerSet(set.slice(1));
    const subsetsWithElement = subsetsWithoutElement.map(subset => [element, ...subset]);

    return [...subsetsWithoutElement, ...subsetsWithElement];
}

const input = "1 2 3";
const distinctIntegers = input.split(" ").map(Number);

const powerSet = generatePowerSet(distinctIntegers);
const input = [
    ["apple", "banana", "cherry"],
    ["dog", "elephant", "frog", "giraffe"],
    ["red", "blue", "green", "yellow", "purple"]
];

const occurces = input.flat().reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(occurces);
export default occurces;
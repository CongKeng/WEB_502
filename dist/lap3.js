"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Lab 3 - TypeScript");
const average = (scores) => {
    let sum = 0;
    for (let s of scores) {
        sum += s;
    }
    return scores.length ? sum / scores.length : 0;
};
console.log("Average:", average([8, 9, 7, 10])); 
const checkEvenOdd = (n) => {
    if (n % 2 === 0)
        return "Even";
    return "Odd";
};
console.log("Check 5:", checkEvenOdd(5)); 
console.log("Check 8:", checkEvenOdd(8)); 
function createUser(name = "Guest", age) {
    return {
        name: name,
        age: age ?? "Not set"
    };
}
console.log(createUser("Alice", 25));
console.log(createUser("Bob"));
console.log(createUser());
function addProducts(existing, ...newProducts) {
    return [...existing, ...newProducts];
}
let products = [
    { id: 1, name: "Phone", price: 1000 },
    { id: 2, name: "Laptop", price: 2000 },
];
products = addProducts(products, { id: 3, name: "Tablet", price: 1500 }, { id: 4, name: "Monitor", price: 800 });
console.log("All Products:", products);

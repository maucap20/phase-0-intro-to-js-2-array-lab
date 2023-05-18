// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name){
    let copyCats = [...cats];
    copyCats.push(name);
    return copyCats;
}
function prependCat(name) {
    let copyCats = [...cats];
    copyCats.unshift(name);
    return copyCats;
}
function removeLastCat() {
    let copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}
function removeFirstCat() {
    let copyCats = [...cats];
    copyCats.shift();
    return copyCats;
}
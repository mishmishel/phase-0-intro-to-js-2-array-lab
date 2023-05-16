// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    return cats.push(name);
}

destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}

function  removeFirstCat() {
    return cats.slice(1)
}






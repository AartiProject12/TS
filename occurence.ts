let str = "playwright with typescript";
let occurence = new Map<string, number>();

for (let char of str) {
    if (occurence.has(char)) {
        occurence.set(char, occurence.get(char)! + 1);
    } else {
        occurence.set(char, 1);
    }
}

console.log(occurence);


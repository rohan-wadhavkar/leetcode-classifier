/**
 * @param {string[]} words
 * @return {number}
 */
const morseCode = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." }

function uniqueMorseRepresentations(words) {
    const set = new Set();

    for(let i = 0; i < words.length; i++) {
        let encryptedWord = "";

        for (let l = 0; l < words[i].length; l++) {
            const character = words[i][l];
            
            encryptedWord += morseCode[character];
        }

        set.add(encryptedWord);
    }

    return set.size;
}
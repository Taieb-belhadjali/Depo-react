const findLongestWord = (words) => {
    let[...tablemots] = words;
    let motavecLongueur = tablemots.map(mot=>({word: mot, length: mot.length}));
    let resultat = motavecLongueur.reduce((acc, curr) => 
        curr.length > acc.length ? curr : acc
    );
    return resultat;
};
const mots = ["apple", "banana", "cherry", "watermelon", "kiwi"];
console.log(findLongestWord(mots));
export default findLongestWord;
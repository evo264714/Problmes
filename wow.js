// How to get 1 - 6 random numbers in a dice

function getRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 6));

//How to sort students name alphabetically?

const student = ["Evo", "Sakib", "Messi", "Tamim"];

console.log(student.sort());

// How to sort students roll numbers

const roll_numbers = [3, 5, 8, 12, 2, 10, 9];

console.log (roll_numbers.sort(function(a, b){

    return a - b;
}));

// How to find out Leap years

function isLLeapYear(year){
    if ((year % 400 === 0 ) || ((year % 4 === 0 ) && (year % 100 !==0))){
        console.log (`${year} is a lear year!`);

    }
    else {

        console.log(`{year} is not a leap year`);
    }
}
isLLeapYear(2028);

// How do we find vowels in a sentence?

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}
console.log(countVowels("I love Bangladesh"))

//How to find duplicate numbers from an array?

const numbers = [1, 2, 5, 5, 8, 5, 3, 9, 10, 2];

const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index 
});
console.log(duplicates);

//How to find out the longest string from an array and show it's index number?

function longestString(names){
    let longestWord = '';
    let name;

    for (name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord, names.indexof(longestWord)];
}

console.log(longestString(['Mehedi Hasan', 'Evo', 'Learn with Sumit', 'Sumit']));


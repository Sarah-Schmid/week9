/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

/*

function reverseWords(str) {
  var words = str.split(/(\s)/);
  let reverseArr = [];
  for (var i = 0; i < words.length; i++) {
    var splitString = words[i].split("");
    reverseArr.push(splitString.reverse().join(""));
  }
  return reverseArr.join("");
}
console.log(reverseWords("hello  sarah"));


What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
  for (var i = 0; i < word.length; i++) {
    for (var i = 0; i < words.length; i++) {
      if (word[i] === words[i]) {
        return words[i];
      } else {
        return words[i];
      }
    }
  }
}

console.log(anagrams("hello", ["hello", "next"]));

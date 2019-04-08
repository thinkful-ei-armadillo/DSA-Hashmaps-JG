'use strict';
const HashMap = require('./DSA-Hashmaps');
const SepHashMap = require('./seperate-chaining-hashmap');


function main(){

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  let lor = new HashMap;

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  // console.log(lor);
  // // Retrieve the value that is hashed in the key "Maiar" and Hobbit.
  // console.log(lor.get('Hobbit'));
  // console.log(lor.get('Maiar'));

  SepHashMap.MAX_LOAD_RATIO = 0.5;
  SepHashMap.SIZE_RATIO = 3;

  let lotr = new SepHashMap;
  const chums = [
    {'Hobbit': 'Bilbo'}, 
    {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'}, 
    {'Human': 'Aragon'}, 
    {'Elf': 'Legolas'}, 
    {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'}, 
    {'RingBearer': 'Gollum'}, 
    {'LadyOfLight': 'Galadriel'}, 
    {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}];
  chums.forEach(chum => {

    const character = Object.keys(chum)[0];

    lotr.set(character, chum[character]);
  });

  console.log(lotr);
  console.log(lotr.get('Hobbit'));
  console.log(lotr.get('Maiar'));
}

main();

//When setting the hashTable the old item with the duplicate key is overwritten by the 
//new item. This is why there is only one 'hobbit' and one 'maiar';


//Our initial capacity is 8. When the length exceeds the capacity, 
//we do capacity * size_ratio which equals 24.


//Problem #2
//This function creates collision on both maps as the keys are both "Hello World." 
//Because of this, the values get overriden. When the function gets called, the code still sees
//"Hello World." as the key but gets the value that overwrote it, 20 for map1 and 10 for map2.

//Problem #3
//3-1 our map is:
//key:    0   1   2     3     4   5   6   7   8   9   10
//value:  22  88  null  null  4   15  28  17  59  31  10

//3-2 our map is:
//key:    0             1           2   3   4     5     6       7     8
//value:  null  [head: 28, 19, 10]  20  12  null  5  [15, 33]  null  17

//Problem #4
function removeDups(string) {
  const map = new Map();
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if(map.has(string[i])) {
      newString += '';
    }
    else{
      map.set(string[i], string[i]);
      newString += string[i];
    }
  }
  // console.log(newString);
  return newString;
}

// removeDups('google all that you think can think of');

//Problem #5
function palindrome(str){
  const pal = new Map();
  let letters = 0;
  for(let i = 0; i<str.length; i++){
    if(!pal.has(str[i])){
      letters++;
      pal.set(str[i]);
    }else{
      letters--;
      pal.delete(str[i]);
    }
  }
  if(letters > 1){
    return false;
  }
  return true;
}

// console.log(palindrome('acecarr'));
// console.log(palindrome('north'));
// console.log(palindrome('nono'));

//Problem #6

const words = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];


function listAnagrams(list){

  const map = new Map();
  const wordTable = {};
  list.forEach(function(word){
    var wordKey = word.split('').sort().join('');
    if(wordTable[wordKey]){
      wordTable[wordKey].push(word);
    }
    else {
      wordTable[wordKey] = [word];
    }
  });
  Object.keys(wordTable).forEach(function(key){
    if(wordTable[key].length > 1){
      map.set(key, wordTable[key]);
    }
  });
  return map.values();
}


console.log(listAnagrams(words));
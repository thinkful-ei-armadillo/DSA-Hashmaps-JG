'use strict';
const HashMap = require('./DSA-Hashmaps');


function main(){

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  let lor = new HashMap;
  // lor.MAX_LOAD_RATIO = 0.5;
  // lor.SIZE_RATIO = 3;

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
  console.log(lor);
  // Retrieve the value that is hashed in the key "Maiar" and Hobbit.
  console.log(lor.get('Hobbit'));
  console.log(lor.get('Maiar'));
}

main();

//When setting the hashTable the old item with the duplicate key is overwritten by the 
//new item. This is why there is only one 'hobbit' and one 'maiar';


//Our initial capacity is 8. When the length exceeds the capacity, 
//we do capacity * size_ratio which equals 24.
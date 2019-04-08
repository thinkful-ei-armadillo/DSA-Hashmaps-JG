'use strict';

class SepHashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
  }

  static _hashString(str){
    let hash = 5381;
    for (let i = 0; i<str.length; i++){
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  get(key) {
    const index = SepHashMap._hashString(key) % this._capacity;
    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }
    for (let i = 0; i < this._hashTable[index].length; i++) {
      if(this._hashTable[index][i].key === key) {
        return this._hashTable[index][i].value;
      }
    }
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > SepHashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * SepHashMap.SIZE_RATIO);
    }
    const index = SepHashMap._hashString(key) % this._capacity;

    if(!this._hashTable[index]){
      this._hashTable[index] = [];
    }
    for (let i = 0; i < this._hashTable[index].length; i++) {
      if(this._hashTable[index][i].key === key) {
        return this._hashTable[index][i].value = value;
      }
    }
    this.length++;
    this._hashTable[index].push({
      key,
      value
    });
  }

  delete(key) {
    const index = SepHashMap._hashString(key) % this._capacity;
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error ('key error');
    }
    for (let i = 0; i < slot.length; i++) {
      if(slot[i].key === key) {
        this.length--;
        slot.splice(i, 1);
        return;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    this.length = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        slot.forEach(item => this.set(item.key, item.value));
      }
    }
  }

}

module.exports = SepHashMap;
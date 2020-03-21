const hashFunction = (key, tableSize) => {
  let hash = 17;
  for (i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
};

class Hashtable {
  constructor() {
    this.table = new Array(100);
  }
  setItem = (key, value) => {
    const idx = hashFunction(key, this.table.length);
    if (this.table[idx]) this.table[idx].push([key, value]);
    else this.table[idx] = [[key, value]];
  };

  getItem = key => {
    const idx = hashFunction(key, this.table.length);
    if (!this.table[idx]) return null;
    else return this.table[idx].find(x => x[0] === key)[1];
  };
}

let a = new Hashtable();
a.setItem('name', 'bob');
let b = a.getItem('name');
console.log(b);
console.log(1);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    node = new Node(value);
    let current;
    if (this.head === null) this.head = node;
    else current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

const hashFunction = (key, tableSize) => {
  let hash = 17;
  for (i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
};

class Hashtable {
  table = new Array(100);

  setItem = (key, value) => {
    const idx = hashFunction(key, this.table.length);
    if (this.table[idx]) this.table[idx].push([key, value]);
    else this.table[idx] = [[key, value]];
  };

  getItem = key => {
    const idx = hashFunction(key, this.table.length);
    if (!this.table[idx]) return null;
    else return this.table[idx].find(x => x[0] === key)[1];
  };
}

let a = new Hashtable();
a.setItem('name', 'bob');
let b = a.getItem('name');
console.log(b);
console.log(1);

//input 'banana', 'an'
//output 3a 2n
function countOcurrences(string, char) {
  const arrayOfString = string.split('');
  const arrayOfChar = char.split('');

  let counts = {};
  arrayOfChar.map(char => (counts[char] = 0));

  for (i = 0; i < arrayOfString.length; i++) {
    currentStringChar = arrayOfString[i];
    if (counts[currentStringChar] !== undefined) {
      counts[currentStringChar] += 1;
    }
  }
  return counts;
}
console.log(countOcurrences('banana', 'raspberry'));

//input string, input2 mapping  a:x,b:z,c:w
// a:X  b:y
// dictionary[a] : x
// !dictionary[string] string[char]
// string => dictionary
//output string mapped with the encription

function encryption(string, mapping) {
  let arrayOfMapping = mapping.split(',');
  let dictionary = {};
  let ans = '';
  for (i = 0; i < arrayOfMapping.length; i++) {
    let tempArray = arrayOfMapping[i].split(':');
    dictionary[tempArray[0]] = tempArray[1];
  }
  for (i = 0; i < string.length; i++) {
    curCharacter = string[i];
    if (dictionary[curCharacter]) {
      ans += dictionary[curCharacter];
    } else ans += curCharacter;
  }
  return ans;
}
let string = 'fork';
let mapping = 'r:z,f:b,k:o';
console.log(encryption(string, mapping));

//send email
//***reverse a linked list****
//input 1,2,3 should be 3,2,1

//remove duplicates from a linked list
//1,2,3,3,2,1 should return 1,2,3
//make my own classes and methods

//next session binary search trees

//javascript server app that returns hello world hello name returns hello Raymond
//containerize it (docker image)
//next session bst
//next two sessions after that an app running in the cloud

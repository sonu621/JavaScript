// ------------------- For Of in JavaScript --------------------

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// -------------- Maps in JavaScript ----------

const map = new Map()
map.set('IN', 'India')
map.set('KSA', 'Saudi Arabia')
map.set('IN', 'India')
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);   
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   
// }

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['JS', 'RB', 'RJ', 'HC']

for (const key in programming) {
    // console.log(programming[key]);
    
}


const map1 = new Map()
map1.set('IN', 'India')
map1.set('KSA', 'Saudi Arabia')

for (const key in map1) {
    console.log(key);
    
}
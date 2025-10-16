// ------------------------- Iterations in JavaScript ---------------------------

for (let i = 0; i < 10; i++){
    const element = i;
    if (element == 5) {
       // console.log('5 is the best number');
    }
    // console.log(element);
}

for (let i = 0; i < 20; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j<= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArray = ['Iron Man', 'Captain America', 'Super Man']

for (let index = 0; index < myArray.length; index++) {
    // console.log(myArray.length);
    const element = myArray[index];
    // console.log(element);
}


// ---------------- Break and Continue in JavaScript ------------------

for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        // console.log(`Detected 5`);
        break
    }
    // console.log(`Value of i is ${index}`);   
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}
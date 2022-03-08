// Tugas 3
let printSegitiga = 5;
let x = '';

let type = typeof printSegitiga;

if (type === 'number') {
    for(let i = printSegitiga; i >= 0; i--) {
        for (let j = 1; j <= printSegitiga - i; j++) {
            console.log(j)
            x += j + ' ';
        }
        x += '\n';
    }
    console.log(x)
} else  {
    console.log('Data harus number');
} 
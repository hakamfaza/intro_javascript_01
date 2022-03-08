// Tugas 3
let printSegitiga = 5;
let x = '';

let type = typeof printSegitiga;

if (type === 'number') {
    for(let i = 0; i < printSegitiga; i++) {
        for (let j = 1; j <= printSegitiga - i; j++) {
            x += j + ' ';
        }
        x += '\n';
    }
    console.log(x)
} else  {
    console.log('Data harus number');
} 
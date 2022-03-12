let mathematics = 90
let indonesian = 80
let english = 80
let naturalScience = 90

const isNumber = typeof(mathematics && naturalScience && indonesian && english);
const isMaxValue = mathematics <= 100 && naturalScience <= 100 && indonesian <= 100 && english <= 100;

const showAverage = (mathematics + indonesian + english +naturalScience) / 4;

if (isNumber === 'number' && isMaxValue == true) {
    if (showAverage >= 90 && showAverage <= 100) {
        console.log(`Rata-rata = ${showAverage}
        Grade = A`)
    } else if(showAverage >= 80 && showAverage < 90) {
        console.log(`Rata-rata = ${showAverage}
        Grade = B`)
    } else if (showAverage >= 70 && showAverage < 80) {
        console.log(`Rata-rata = ${showAverage}
        Grade = C`)
    } else if(showAverage >= 60 && showAverage < 70) {
        console.log(`Rata-rata = ${showAverage}
        Grade = D`)
    } else if(showAverage >= 0 && showAverage < 60) {
        console.log(`Rata-rata = ${rataRata}
        Grade = E`)
    } else {
        console.log(undefined)
    }
} else {
    console.log('Semua nilai harus diisi!')
}
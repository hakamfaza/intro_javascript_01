// Tugas 2
let mtk;
let bahasaIndonesia = 50
let bahasaInggris = 50
let ipa = 50

let ratarata = (mtk + bahasaIndonesia + bahasaInggris +ipa) / 4;

let validasi = typeof(mtk && bahasaIndonesia && bahasaInggris && ipa);
console.log(validasi)

if (validasi === 'number' && mtk != '' && bahasaIndonesia != '' && bahasaInggris !='' && ipa != '') {
    if (ratarata >= 90 && ratarata <= 100) {
        console.log(`Rata-rata = ${ratarata}
        Grade = A`)
    } else if(ratarata >= 80 && ratarata <= 89) {
        console.log(`Rata-rata = ${ratarata}
        Grade = B`)
    } else if (ratarata >= 70 && ratarata <= 79) {
        console.log(`Rata-rata = ${ratarata}
        Grade = C`)
    } else if(ratarata >= 60 && ratarata <= 69) {
        console.log(`Rata-rata = ${ratarata}
        Grade = D`)
    } else if(ratarata >= 0 && ratarata <= 59) {
        console.log(`Rata-rata = ${ratarata}
        Grade = E`)
    } else {
        console.log(undefined)
    }
} else {
    console.log('Semua nilai harus diisi dan bertipe number');
}
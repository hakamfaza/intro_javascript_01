// Tugas 2
let mtk = 200
let bahasaIndonesia = 0
let bahasaInggris = 0
let ipa = 0

let rataRata = (mtk + bahasaIndonesia + bahasaInggris +ipa) / 4;

let validasi = typeof(mtk && bahasaIndonesia && bahasaInggris && ipa);

if (validasi === 'number' && mtk || bahasaIndonesia || bahasaInggris || ipa !== undefined) {
    if (rataRata >= 90 && rataRata <= 100) {
        console.log(`Rata-rata = ${rataRata}
        Grade = A`)
    } else if(rataRata >= 80 && rataRata < 90) {
        console.log(`Rata-rata = ${rataRata}
        Grade = B`)
    } else if (rataRata >= 70 && rataRata < 80) {
        console.log(`Rata-rata = ${rataRata}
        Grade = C`)
    } else if(rataRata >= 60 && rataRata < 70) {
        console.log(`Rata-rata = ${rataRata}
        Grade = D`)
    } else if(rataRata >= 0 && rataRata < 60) {
        console.log(`Rata-rata = ${rataRata}
        Grade = E`)
    } else {
        console.log(undefined)
    }
} else {
    console.log('Semua nilai harus diisi dan bertipe number');
}
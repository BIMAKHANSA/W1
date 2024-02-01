let quest = "1234";
function hitungAngka(quest) {
    let angkaGanjil = 0;
    let angkaGenap = 0;
    let totalAngka = 0;


    for (let i = 0; i < quest.length; i++) {
        let angka = parseInt(quest[i]);
    
    if(!isNaN(angka)) {
        totalAngka += angka;

        if (angka % 2 === 0) {
            angkaGenap++;
        } else {
            angkaGanjil++;
        }
    }
}

console.log(`Terdapat ${angkaGanjil} angka ganjil, ${angkaGenap} angka genap, dan roral keseluruhan angkanya yaitu ${totalAngka}`);
}

// Case 1:
let quest1= "1234";
hitungAngka(quest1);

// Case 2:
let quest2 = "2934756";
hitungAngka(quest2);

// Case 3:
let quest3 = "2746592736459172654264305826475";
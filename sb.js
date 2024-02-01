/*
1. Apa itu algoritma ?
- Jawaban : langkah yang tersusun dan berurutan untuk menuntaskan sebuah masalah dengan instruksi yang dibuat

2. Apa itu pseudocode ?
- Jawaban :

3. Apabila ada sebuah pseudocode
    STORE suhu WITH ANY NUMBER
    IF suhu GREATER THAN 37.5 THEN
      DISPLAY "Anda Demam"
    ELSE IF suhu GREATER THAN 37 THEN
      DISPLAY "Anda Terindikasi Demam"
    ELSE 
      DISPLAY "Anda sehat"
    END IF

    Apa output dari pseudocode di atas apabila nilai dari "suhu" diisi dengan 37.2?
- Jawaban : Karena nilai dari suhu diisi dengan 37.2 maka akan output akan mendisplay "Anda Sehat" karena 37.2<37.5

4. Buatlah sebuah algoritma dan pseudocode untuk menentukan dan menampilkan hasil perhitungan luas dari bidang segitiga, Dimana rumus luas bidang segitiga adalah 1/2 x alas x tinggi
*/var alas,tinggi,rumus;
alas = prompt ("12");
tinggi = prompt ("20");
rumus = 1/2*alas*tinggi; 
console.log(rumus);
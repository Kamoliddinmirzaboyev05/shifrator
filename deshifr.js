
const inputText = document.getElementById('text');
const inputKalit = document.getElementById('kalit');
const btnChiqar = document.getElementById('chiqar');
const shifrmatn = document.getElementById('shifrmatn');

btnChiqar.addEventListener('click', () => {
    const text = inputText.value.toUpperCase();
    const kalit = inputKalit.value.toUpperCase();

    if (text === '' || kalit === '') {
        alert('Deshifrlash uchun matn va kalitni kiriting!');
        return;
    }

    // Vigenere deshifrlash funksiyasi
    function vigenereDecrypt(text, key) {
        let decryptedText = '';
        let keyIndex = 0;

        for (let i = 0; i < text.length; i++) {
            const textChar = text[i];

            // Faqat lotin harflarini deshifrlaymiz
            if (textChar >= 'A' && textChar <= 'Z') {
                const textCode = textChar.charCodeAt(0) - 65; // A=0, B=1, ...
                const keyCode = key[keyIndex % key.length].charCodeAt(0) - 65; // A=0, B=1, ...
                const decryptedChar = String.fromCharCode(((textCode - keyCode + 26) % 26) + 65);
                decryptedText += decryptedChar;

                keyIndex++; // Kalitni keyingi harfiga o'tish
            } else {
                decryptedText += textChar; // Agar harf bo'lmasa, o'zgarmaydi
            }
        }

        return decryptedText;
    }

    // Deshifrlashni amalga oshirish
    const result = vigenereDecrypt(text, kalit);

    // Natijani chiqarish
    shifrmatn.textContent = `Deshifrlangan matn: ${result}`;
});

const inputText = document.getElementById('text');
        const inputKalit = document.getElementById('kalit');
        const btnChiqar = document.getElementById('chiqar');
        const shifrmatn = document.getElementById('shifrmatn');

        btnChiqar.addEventListener('click', () => {
            const text = inputText.value.toUpperCase();
            const kalit = inputKalit.value.toUpperCase();

            if (text === '' || kalit === '') {
                alert('Shifrlanadigan matn va kalitni kiriting!');
                return;
            }

            // Vigenere shifrlash funksiyasi
            function vigenereEncrypt(text, key) {
                let encryptedText = '';
                let keyIndex = 0;

                for (let i = 0; i < text.length; i++) {
                    const textChar = text[i];

                    // Faqat lotin harflarini shifrlaymiz
                    if (textChar >= 'A' && textChar <= 'Z') {
                        const textCode = textChar.charCodeAt(0) - 65; // A=0, B=1, ...
                        const keyCode = key[keyIndex % key.length].charCodeAt(0) - 65; // A=0, B=1, ...
                        const encryptedChar = String.fromCharCode(((textCode + keyCode) % 26) + 65);
                        encryptedText += encryptedChar;

                        keyIndex++; // Kalitni keyingi harfiga o'tish
                    } else {
                        encryptedText += textChar; // Agar harf bo'lmasa, o'zgarmaydi
                    }
                }

                return encryptedText;
            }

            // Shifrlashni amalga oshirish
            const result = vigenereEncrypt(text, kalit);

            // Natijani chiqarish
            shifrmatn.textContent = `Shifrlangan matn: ${result}`;
        });
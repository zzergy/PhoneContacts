//Moving the div's.
(function () {
    const bigListElement = document.getElementById('big-list');
    bigListElement.style.marginLeft = '-405px';

    const keypadElement = document.getElementById('keypad');
    keypadElement.addEventListener('click', function () {
        bigListElement.style.marginLeft = '0';
        keypadElement.style.color = '#1abc9c';

        if (keypadElement.style.color = '#1abc9c') {
            resentsElement.style.color = '#f5f5f5';
            contactsElement.style.color = '#f5f5f5';
        }
    });

    const resentsElement = document.getElementById('resents');
    resentsElement.addEventListener('click', function () {
        bigListElement.style.marginLeft = '-405px';
        resentsElement.style.color = '#1abc9c';

        if (resentsElement.style.color = '#1abc9c') {
            keypadElement.style.color = '#f5f5f5';
            contactsElement.style.color = '#f5f5f5';
        }
    });


    const contactsElement = document.getElementById('contacts');
    contactsElement.addEventListener('click', function () {
        bigListElement.style.marginLeft = '-810px';
        contactsElement.style.color = '#1abc9c';

        if (contactsElement.style.color = '#1abc9c') {
            keypadElement.style.color = '#f5f5f5';
            resentsElement.style.color = '#f5f5f5';
        }
    });

})();

//Keypad functionality.
let allNumbers = document.querySelectorAll('.keypad-numbers');
for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i].addEventListener('click', function () {
        let textFromButton = this.innerText;
        const numberInput = document.getElementById('entered-number');
        numberInput.value += textFromButton;
    });
}

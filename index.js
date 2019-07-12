//Moving the div's.
(function () {
    const bigListElement = document.getElementById('big-list');
    bigListElement.style.marginLeft = '-405px';

    const keypadElement = document.getElementById('keypad');
    keypadElement.addEventListener('click', function () {
        bigListElement.style.marginLeft = '0';
    });

    const resentsElement = document.getElementById('resents');
    resentsElement.addEventListener('click', function () {
        bigListElement.style.marginLeft = '-405px';
    });


    const contactsElement = document.getElementById('contacts');
    contactsElement.addEventListener('click', function () {
        bigListElement.style.marginLeft = '-810px';
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

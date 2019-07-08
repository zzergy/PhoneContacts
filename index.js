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

const addButton = document.querySelector('.addElementButton');
const saveButton = document.querySelector('.saveElementButton');
const objectsContainer = document.querySelector('.generalObj');
const savedDataContainer = document.querySelector('.saved');

addButton.addEventListener('click', () => {
    const newObj = document.createElement('div');

    newObj.classList.add('objects');
    newObj.innerHTML = `
        <input type="text" class="inputText">
        <input type="text" class="inputText">
        <button id="upButton" type="button" class="objButton">&uarr;</button>
        <button id="downButton" type="button" class="objButton">&darr;</button>
        <button id="closeButton" type="button" class="objButton">&times;</button>
    `;
    newObj.querySelector('#upButton').addEventListener('click', moveObjectUp);
    newObj.querySelector('#downButton').addEventListener('click', moveObjectDown);
    newObj.querySelector('#closeButton').addEventListener('click', removeObject);

    objectsContainer.append(newObj);
});

saveButton.addEventListener('click', () => {
    const objectItems = document.querySelectorAll('.objects');
    let savedObj = '{';

    objectItems.forEach((item) => {
        const firstValue = item.querySelector('input:nth-child(1)').value;
        const secondValue = item.querySelector('input:nth-child(2)').value;

        savedObj += `"${firstValue}":"${secondValue}",`;
    });

    savedObj = savedObj.slice(0, savedObj.length - 1);
    savedObj += '}';

    savedDataContainer.textContent = savedObj;
});

const moveObjectUp = ($event) => {
    const currentObj = $event.target.closest('.objects');
    const prevObj = currentObj.previousElementSibling;
    prevObj?.before(currentObj);
};

const moveObjectDown = ($event) => {
    const currentObj = $event.target.closest('.objects');
    const nextObj = currentObj.nextElementSibling;
    nextObj?.after(currentObj);
};

const removeObject = ($event) => {
    $event.target.closest('.objects').remove();
};

document.querySelector('#upButton').addEventListener('click', moveObjectUp);
document.querySelector('#downButton').addEventListener('click', moveObjectDown);
document.querySelector('#closeButton').addEventListener('click', removeObject);

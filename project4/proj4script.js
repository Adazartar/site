
const initialConfig = "auto auto auto auto";
document.querySelector('.grid-container').style.gridTemplateColumns = initialConfig;

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

const newPlayerBtn = document.querySelector('#newPlayer');
newPlayerBtn.addEventListener('click',() => {
    const rows = document.querySelectorAll('.grid-row');

    for(let i = 0; i < rows.length; i++){

        const div = document.createElement('div');
        div.className = 'grid-item';
        const input = document.createElement('input');
        div.appendChild(input);

        insertAfter(div, rows[i]);
    }

    const currentConfig = document.querySelector('.grid-container').style.gridTemplateColumns;
    document.querySelector('.grid-container').style.gridTemplateColumns = currentConfig + " auto";
});

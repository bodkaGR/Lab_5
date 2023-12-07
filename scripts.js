//task 1
function chang_text(){
    var header = document.getElementById('text_top_bar');
    var footer = document.getElementById('footer');

    var headerText = header.innerText;
    var footerText = footer.innerText;

    header.innerText = footerText;
    footer.innerText = headerText;
}

//task 2
function diamond_square(){
    const input_value_1 = parseFloat(document.getElementById('input_1').value);
    const input_value_2 = parseFloat(document.getElementById('input_2').value);

    console.log('d1: ' + input_value_1);
    console.log('d2: ' + input_value_2);

    const square_output = document.getElementById('squareOutput')

    if (isNaN(input_value_1) || isNaN(input_value_2)){
        alert('Error: d1 and d2 can not be null');
        square_output.textContent = 'error';
    }else{
        const result = 0.5*input_value_1*input_value_2;
        square_output.textContent = 'Square: ' + result;
        console.log('square: ' + result);
    }
}

//task 3
function isTriangleValid(){
    const aSide = document.triangle.a.value;
    const bSide = document.triangle.b.value;
    const cSide = document.triangle.c.value;

    let result = ((aSide + bSide) <= cSide) ? ' impossible': ' possible';
    alert(result);

    const data = {aSide, bSide, cSide};

    localStorage.setItem(JSON.stringify(data), result);
    showStorageData();
}

function showStorageData(){
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

function checkForExisting(){
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.includes('aSide')){
            return true;
        }
    }
    return false;
}

function questionForDelete(){
    if (checkForExisting()){
        var data = '';
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            data += `${key}` + `${localStorage.getItem(key)}` + "\n";
        }
        let userResponse = confirm("Delete data?\n" + data);

        if (userResponse){
            localStorage.clear();
        }else{
            confirm("You have cookies that need to reload");
            location.reload();
        }
    }
}

//task 4
const leftBar = document.getElementById("left");

leftBar.addEventListener('mouseover', function (){
    leftBar.style.fontStyle = 'italic';
});

leftBar.addEventListener("mouseout", function() {
    italicStyle();
});

const radioButtons = document.querySelectorAll('input[name="italicOption"]');

function italicStyle() {
    const italicOption = localStorage.getItem('italicOption');
    if (italicOption === 'italicOn') {
        leftBar.style.fontStyle = 'italic';
    } else {
        leftBar.style.fontStyle = 'normal';
    }
}

italicStyle();

radioButtons.forEach((radio) => {
    radio.addEventListener('change', function() {
        const value = this.value;
        localStorage.setItem('italicOption', value);
        italicStyle();
    });
});

//task 5
const list = document.getElementById('numberedList').getElementsByTagName('ul')[0];
const colors = ['whiteRow', 'blackRow'];
const listData = [];

function addListData(){
    const newRowNum = list.children.length + 1;
    const newRowColor = colors[newRowNum % 2];
    const newRow = createRow(newRowColor, newRowNum);
    list.appendChild(newRow);
    listData.push({text: newRow.textContent, color: newRowColor});
}

function createRow(newRowCol, newRowNum){
    const newRow = document.createElement('li');
    newRow.className = newRowCol;
    newRow.innerHTML = `${newRowNum}- <span>Element ${newRowNum}<span>`;
    return newRow;
}

function saveListToStorage(){
    const listRows = list.getElementsByTagName('li');
    listData.length = 0;
    for(const row of listRows){
        const rowText = row.getElementsByTagName('span')[0].textContent;
        const rowColor = row.classList.contains('whiteRow') ? 'whiteRow': 'blackRow';
        listData.push({text: rowText, color: rowColor});
    }
    localStorage.setItem('numberedList', JSON.stringify(listData));
}

function clearList(){
    list.innerHTML = '';
    localStorage.removeItem('numberedList');
}

function deleteLastRow(){
    const lastRow = list.lastElementChild;
    if(lastRow){
        list.removeChild(lastRow);
    }
}

function loadRowsFromStorage(){
    const savedData = JSON.parse(localStorage.getItem('numberedList'));
    if (savedData){
        list.innerHTML = '';
        savedData.forEach((row, index) => {
            const rowColor = row.color;
            const newRow = document.createElement('li');
            newRow.className = rowColor;
            newRow.innerHTML = `${index + 1}- <span>${row.text}</span>`;
            list.appendChild(newRow);
        })
    }
}

loadRowsFromStorage();

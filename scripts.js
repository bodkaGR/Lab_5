//task 1
function chang_text(){
    var header = document.getElementById('header');
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

    let result = ((aSide + bSide) <= cSide) ? 'impossible': 'possible';
    alert(result);

    localStorage.setItem(localStorage.length, result);
    showStorageData();
}

function showStorageData(){
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

function question(){
    if (localStorage.length !== 0){
        var data = '';
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            data += `${key}` + `: ` + `${localStorage.getItem(key)}` + "\n";
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

function deleteDataFromStorage(){
    if (localStorage.length !== 0){
        localStorage.clear();
        alert("data was deleted");
    }else{
        alert("storage is empty");
    }
}

function hideForm(){
    const form = document.triangle;
    form.style.display = "none";
}
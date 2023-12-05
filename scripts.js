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

    ((aSide + bSide) <= cSide) ? alert('impossible'): alert('possible');
}
function calculateArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Please enter valid numeric values for base and height.');
        return;
    }

    var area = 0.5 * base * height;
    document.getElementById('areaValue').textContent = area.toFixed(2);
}

function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Please enter valid numeric values for all sides.');
        return;
    }

    var perimeter = sideA + sideB + sideC;
    document.getElementById('perimeterValue').textContent = perimeter.toFixed(2);
}

function resetValues() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('areaValue').textContent = '';
    document.getElementById('perimeterValue').textContent = '';
}

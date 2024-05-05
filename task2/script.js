function drawShape() {
    var width = document.getElementById('widthInput').value;
    var height = document.getElementById('heightInput').value;
    var color = document.getElementById('colorInput').value;
    var text = document.getElementById('textInput').value;
    
    var shapeDiv = document.getElementById('shapeDiv');
    shapeDiv.style.width = width + 'px';
    shapeDiv.style.height = height + 'px';
    shapeDiv.style.backgroundColor = color;
    shapeDiv.innerText = text;
  }
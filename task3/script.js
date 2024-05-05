function moveBall() {
    var ball = document.getElementById('ball');
    ball.style.animation = 'none';
    void ball.offsetWidth;
    ball.style.animation = 'moveBall 3s infinite';
  }
  
  function changeBallColor() {
    var ball = document.getElementById('ball');
    var colorInput = document.getElementById('colorInput');
    ball.style.backgroundColor = colorInput.value;
  }
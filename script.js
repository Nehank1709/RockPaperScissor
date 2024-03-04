document.getElementById('rules').addEventListener('click', () => {
    document.getElementById('rules-popup').style.display = 'block';
  });

  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('rules-popup').style.display = 'none';
  });



function selectImage(selection) {
    sessionStorage.setItem('selectedImage', selection);
    const options = ['rock', 'paper', 'scissor'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    sessionStorage.setItem('computerChoice', computerChoice);

    window.location.href='win.html';
}
function getBorderColor(selection) {
    switch (selection) {
        case 'rock':
            return '10px solid #0074B6';
        case 'paper':
            return '10px solid #FFA943';
        case 'scissor':
            return '10px solid #BD00FF';
        default:
            return 'transparent';
    }
}

function navigate() {
    // Change the URL to the desired page
    window.location.href = 'index.html';
}
 

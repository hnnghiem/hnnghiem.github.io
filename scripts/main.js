let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bananas-bunch.jpg') {
      myImage.setAttribute('src','images/banana-2.jpg');
    } else {
      myImage.setAttribute('src','images/bananas-bunch.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Bananas are cool, ${myName}!`;
      }
    }
    
if(!localStorage.getItem('name')) {
setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bananas are cool, ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
  }
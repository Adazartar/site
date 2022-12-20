
const container = document.querySelector('body');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = "black";
div.style.backgroundColor = "pink";

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const p_2 = document.createElement('p')
p_2.textContent = "ME TOO!";
div.appendChild(p_2);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello sexy");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',() => {
    alert("Hello zaddy");
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click',function (e){
    if(e.target.style.background !== 'blue'){
        e.target.style.background = 'blue';
    }
    else{
        e.target.style.background = 'white';
    }
});

const changingText = document.querySelector('.changingText');

changingText.addEventListener('copy', () => {
    if(changingText.textContent === "Hey there"){
        changingText.textContent = "Did you just copy me?";
    }
    else if(changingText.textContent !== "Stop that"){
        changingText.textContent = "Stop that";
    }
    else{
        changingText.textContent = "Stop that now";
    }
});



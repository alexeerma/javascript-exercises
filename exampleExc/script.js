
const container = document.querySelector('.container');

const para = document.createElement('p');

para.textContent = "Hey I'm Red!";
para.classList.add('para1');
container.appendChild(para);

// Adding the h3

const titl = document.createElement('h3');
titl.classList.add('titl-css');
titl.textContent = 'Im blue h3!';
container.appendChild(titl);

//adding a div with different info inside (h1,p,)

const content = document.createElement('div');
content.classList.add('content');
const titl2 = document.createElement('h1');
const para2 = document.createElement('p')
titl2.textContent = 'Im in a div!';
para2.textContent = 'ME TOO!';
content.appendChild(titl2);
content.appendChild(para2);
container.appendChild(content);

//adding the css










/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */



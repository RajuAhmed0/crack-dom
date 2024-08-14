// New element added way
const added = document.getElementById('added-li'); /* access the id */

const li = document.createElement('li'); /* creat the tag */
li.innerText = 'WaterMalon';

 added.appendChild(li); /* linkup the tag from id */

 // option - 1 : js conect the full html  : this is the dificult way 
 const addedProgress = document.getElementById('added-progress');

 const section = document.createElement('section');

 const h1 = document.createElement('h1');
 h1.innerText = 'The color list'

 section.appendChild(h1);

// creat the ul tag
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'red'
ul.appendChild(li1) /* li tag connet the ul tag */

const li2 = document.createElement('li');
li2.innerText = 'yollow'
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'blue'
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = 'green'
ul.appendChild(li4)

const li5 = document.createElement('li');
li5.innerText = 'purple'
ul.appendChild(li5)

const li6 = document.createElement('li');
li6.innerText = 'tomato'
ul.appendChild(li6)


section.appendChild(ul) /* ul tag connet the section tag  */

addedProgress.appendChild(section)


// option - 2 : this is the shortcut way and all time use 
const addedProgress2 = document.getElementById('added-progress')

const section2 = document.createElement('section')
section2.innerHTML = `
<h1> The car name</h1>
<ul>
<li>toyota</li>
<li>sujuki</li>
<li>honda</li>
<li>farari</li>
</ul>
`
addedProgress2.appendChild(section2);


 





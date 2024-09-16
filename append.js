const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'united kingdome';
placesList.append(li);

const sectionAdd = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = 'create a new h1 and section';
section.appendChild(h1)
sectionAdd.appendChild(section)
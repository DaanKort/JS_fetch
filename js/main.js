'use strict';

const createEl = element => document.createElement(element);

function append(parent, el){
	return parent.appendChild(el);
}

const upper = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


const ul = document.querySelector('.contacts');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(data => {
	const contacts = data.results;
	contacts.sort(function (a, b) {
		return a.name.first.charCodeAt(0) - b.name.first.charCodeAt(0);
	});	
	contacts.forEach( contact => {
	  console.log(contact.name.first);
	  let li = createEl('li');
	  let img = createEl('img');
	  let span = createEl('span');
	  let p = createEl('p')
	  img.src = contact.picture.medium;
	  span.innerHTML = upper(contact.name.first) + " " + upper(contact.name.last);
	  p.innerHTML = contact.cell;
	  append(ul, li);
	  append(li, img);
	  append(li, span);
	  append(span, p);
	})
	
})
.catch(function(error) {
	console.log(error);
});

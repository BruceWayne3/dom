'use strict';
const contacts = document.querySelector('.contacts-list');
try {
	const downloadedContacts = JSON.parse(loadContacts());
} catch (e) {
	console.error (e.name, e.message);
};

let data = '';

downloadedContacts.forEach(contact => {
  data += `<li data-email="${contact.email}" data-phone="${contact.phone}"><strong>${contact.name}</strong></li>`
});

contacts.innerHTML = data;

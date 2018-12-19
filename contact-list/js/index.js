'use strict';
const contacts = document.querySelector('.contacts-list');
contacts.innerHTML = ''; 
try {
	const downloadedContacts = JSON.parse(loadContacts());
} catch (e) {
	console.error (e.name, e.message);
};

function showContacts(downloadedContacts) {
	let newContacts;
	let i;
	for (const downloadedContact of downloadedContacts) {  
		contacts.appendChild(document.createElement('li'));
		newContacts = document.querySelectorAll('.contacts-list > li'); 
		i = downloadedContacts.indexOf(downloadedContact); 
		newContacts[i].innerHTML =`<strong> ${downloadedContact.name} </strong>`;	 
		newContacts[i].dataset.phone = downloadedContact.phone; 
		newContacts[i].dataset.email = downloadedContact.email;	
	}
}

showContacts(downloadedContacts);

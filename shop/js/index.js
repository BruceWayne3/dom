'use strict';

const addProducts = document.querySelectorAll('.add');
const count = document.querySelector('#cart-count');
const totalPrice = document.querySelector('#cart-total-price');
let counter = 0;
let total = 0;

function result(){
	count.innerHTML = ++counter;
	total += +this.dataset.price;
	totalPrice.innerHTML = getPriceFormatted(total);	
};

for (const addProduct of addProducts){ 
	addProduct.addEventListener('click', result); 
};
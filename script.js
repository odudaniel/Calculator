const buttonEl = document.querySelectorAll('button');
const displayEL = document.getElementById('display');
const equalSign = document.querySelector('.equals');
const footerEl = document.querySelector('footer');

console.log(footerEl);

for (let i = 0; i < buttonEl.length; i++) {
	buttonEl[i].addEventListener('click', () => {
		const buttonValue = buttonEl[i].textContent;

		if (buttonValue === 'clear') {
			clearDisplay();
		} else if (buttonValue === 'delete') {
			deleteNumber();
		} else if (buttonValue === '=') {
			CalculateResult();
		} else {
			displayEL.innerText += buttonValue;
		}
	});
}

function clearDisplay() {
	displayEL.innerText = '';
}

function CalculateResult() {
	displayEL.innerText = eval(displayEL.innerText);
}

function deleteNumber() {
	displayEL.innerText = String(displayEL.innerText).slice(0, -1);
}

let copyYear = new Date().getFullYear();

footerEl.innerHTML = `&copy; ${copyYear} Daniel Odu`;

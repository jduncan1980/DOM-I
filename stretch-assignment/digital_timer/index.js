const body = document.querySelector('body');
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');
let digit = document.querySelectorAll('.digit');

//START BUTTON
const startButton = document.createElement('button');
startButton.textContent = 'START!';
body.prepend(startButton);

const handleStart = () => {
	digitalCounter();
};
startButton.addEventListener('click', handleStart);

//RESET BUTTON
const resetButton = document.createElement('button');
resetButton.textContent = 'RESET!';
body.appendChild(resetButton);

// COUNTER FUNCTION
const digitalCounter = () => {
	let time = 0;
	digit.forEach((digit) => {
		digit.style.color = 'black';
	});
	const setZeros = () => {
		msTens.textContent = '0';
		msHundreds.textContent = '0';
		secondOnes.textContent = '0';
		secondTens.textContent = '0';
	};

	const handleReset = () => {
		clearInterval(intervalID);
		setZeros();
		startButton.addEventListener('click', handleStart);
		digit.forEach((digit) => {
			digit.style.color = 'black';
		});
	};
	resetButton.addEventListener('click', handleReset);

	let intervalID = setInterval(() => {
		if (time < 10000) {
			setZeros();
			startButton.removeEventListener('click', handleStart);
			time += 10;
			let stringTime = time.toString();
			if (time < 100) {
				msTens.textContent = stringTime;
			} else if (time >= 100 && time < 1000) {
				msTens.textContent = stringTime[1];
				msHundreds.textContent = stringTime[0];
			} else if (time >= 1000 && time < 10000) {
				msTens.textContent = stringTime[2];
				msHundreds.textContent = stringTime[1];
				secondOnes.textContent = stringTime[0];
			} else if (time === 10000) {
				msTens.textContent = stringTime[3];
				msHundreds.textContent = stringTime[2];
				secondOnes.textContent = stringTime[1];
				secondTens.textContent = stringTime[0];

				//Clear the interval, re-add event listener, and set color to red
				clearInterval(intervalID);
				startButton.addEventListener('click', handleStart);
				digit.forEach((digit) => {
					digit.style.color = 'red';
				});
			}
		}
	}, 10);
};

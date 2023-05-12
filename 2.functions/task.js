function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	max = Math.max(...arr);
	min = Math.min(...arr);
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	a = sum / arr.length;
	avg = Number(a.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};

}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;

	max = Math.max(...arr);
	min = Math.min(...arr);
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;
	max = Math.max(...arr);
	min = Math.min(...arr);
	let difference = 0;
	for (let i = 0; i < arr.length; i++) {
		difference = max - min;
	}

	return difference;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}

	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const a = func(...arrOfArr[i]);
		if (a > maxWorkerResult) {
			maxWorkerResult = a;
		}
	}
	return maxWorkerResult;
}

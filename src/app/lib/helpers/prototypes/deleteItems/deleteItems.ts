Array.prototype.deleteItems = function <T>(items: T[]) {
	let currentArray: T[] = [...this];

	items.forEach((item) => {
		currentArray = currentArray.filter((filterItem) => {
			if (filterItem !== item) return true;
		});
	});

	return currentArray;
};

/* 

	const arr = [1, 2, 3, 4, 5];
	console.log(arr.deleteItems([3, 2]));

*/

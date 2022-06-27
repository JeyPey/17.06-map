const phonesArr = [
	{ brand: 'apple', battery: 2200, ram: 4, camera: 12, processor: 'A12' },
	{ brand: 'samsung', battery: 3000, ram: 8, camera: 12, processor: 'A16' },
	{ brand: 'xiaomi', battery: 1870, ram: 2, camera: 34, processor: 'A14' },
	{ brand: 'huawei', battery: 4020, ram: 4, camera: 8, processor: 'A16' }
]



// Создать новый массив, где телефоны с емкостью акумуллятора выше чем 2000 и ram > 4


function checkArr(arr) {

	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].battery > 2000 && arr[i].ram > 4) {
			newArr.push(arr[i]);

		}
	}

	return newArr;
}

console.log(checkArr(phonesArr));
// ------------------------------------------------------------------------------------------------


// 2. с помощью цепочки вызовов, вызвать метод map и добавить диагональ экрана.


function addDiagonal(phone, diagonal) {

	return { ...phone, diagonal }

}
console.log(addDiagonal(phonesArr[0], '5.4'));
console.log(addDiagonal(phonesArr[1], '5.85'));
console.log(addDiagonal(phonesArr[2], '6.06'));
console.log(addDiagonal(phonesArr[3], '6.68'));


const newPhonesArr = phonesArr.map((phone) => addDiagonal(phone, '5.85'));
console.log(newPhonesArr);
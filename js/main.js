var nums = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var nums2 = [46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,16,-37,54,-4,72,-56,47,4,-16,25,-37];

//Найти сумму и количество положительных элементов.
function summAndQuantity(arr){
	var summ = 0;
	var qantity = 0;
	for( var i = 0; i < nums.length; i++){
		if(nums[i] > 0){
			summ = summ + nums[i];
			qantity++;
		};
	};
	console.log(summ, qantity);
};

//Найти минимальный элемент массива и его порядковый номер.
function minAndIndex(arr){
	for (var i = 0; i < nums.length; i++) {
    	if(nums[i] < nums[0]){
    	    nums[0] = nums[i];
			var index = i;
    	}
	};
		console.log(nums[0], index);
};

//Найти максимальный элемент массива и его порядковый номер.
function maxAndIndex(arr){
	for (var i = 0; i < nums.length; i++) {
    	if(nums[i] > nums[0]){
    	    nums[0] = nums[i];
			var index = i;
    	};
	};
		console.log(nums[0], index);
};

//Определить количество отрицательных элементов.
function quantityOfNegative(arr){
	var negative = [];
	var quantity = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] < 0){
			negative.push(nums[i]);
		};
	};
	quantity = negative.length;
	console.log(quantity);
};

//Найти количество нечетных положительных элементов.
function quantityOfPositiveOdd(arr){
	var positiveOdd = [];
	var quantity = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] > 0 && nums[i] % 2 != 0){
			positiveOdd.push(nums[i]);
		};
	};
	quantity = positiveOdd.length;
	console.log(quantity);
};

//найти количество четных положительных элементов.
function quantityOfPositiveEven(arr){
	var positiveEven = [];
	var quantity = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] > 0 && nums[i] % 2 === 0){
			positiveEven.push(nums[i]);
		};
	};
	quantity = positiveEven.length;
	console.log(quantity);
};

//Найти сумму четных положительных элементов.
function summOfPositiveEven(arr){
	var summ = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] > 0 && nums[i] % 2 === 0){
			summ = summ + nums[i];
		};
	};
	console.log(summ);
};

//Найти сумму нечетных положительных элементов.
function summOfPositiveOdd(arr){
	var summ = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] > 0 && nums[i] % 2 != 0){
			summ = summ + nums[i];
		};
	};
	console.log(summ);
};

//Найти произведение положительных  элементов.
function multiplicationOfPositive(arr){
	var multiplication = 1;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] > 0){
			multiplication = multiplication * nums[i];
		};
	};
	console.log(multiplication);
};

//Найти определить количество элементов, равных 4.
function quantityOfFourNums(arr){
	var arrOfFour = [];
	var quantityOfFour = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] === 4){
			arrOfFour.push(nums[i]);
		};
	};
	quantityOfFour = arrOfFour.length;
	console.log(quantityOfFour);
};

//Найти наибольший среди элементов массива, остальные обнулить.
function maxElemOfArr(arr){
	var max =  -Infinity;
	var zero = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] > max){
    	    max = nums[i];
    	};
	};
	for(i = 0; i < nums.length; i++){
		if(nums[i] < max){
			nums[i] = zero;
		};
	};
	console.log(max, nums);
};

//Вычислить разность соответствующих элементов массивов и записать в новый массив 
function residualOfArrays(arr1, arr2){
	var residualArr= [];
	for(var i = 0; i < nums.length; i++){
			residualArr.push(nums[i] - nums2[i]);
	};
	console.log(residualArr);
};

//summAndQuantity(nums);
//minAndIndex(nums);
//maxAndIndex(nums);
//quantityOfNegative(nums);
//quantityOfPositiveOdd(nums);
//quantityOfPositiveEven(nums);
//summOfPositiveEven(nums);
//summOfPositiveOdd(nums);
//multiplicationOfPositive(nums);
//quantityOfFourNums(nums);
//maxElemOfArr(nums);
residualOfArrays(nums, nums2);
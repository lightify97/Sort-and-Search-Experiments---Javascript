/*
 * Sort the array and use a timed loop to stagger 
 * the results on the page. 
 */


/* 
 * Selection sort
 * function to sort an array of random integers
 */
function selection_sort(arr) {

	var arrLength = arr.length;
	for(var i = 0; i < arrLength - 1; i++) {
		var min = i;
		for(var j = i + 1; j < arrLength; j++) {
			if(arr[j] < arr[min]) {
				min = j;
			}
		}
		if(min != i) {
			var tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
}

// Call the selection sort function
var list = selection_sort(listToSort = [12, 44, 55, 76, 2, 1, 10, 66, 87, 6, 79, 123, 80]);
// get the length of the sorted list
var sortedLength = listToSort.length;

// Create a display function that puts 
// content in a HTML element
function getIndexValue(value) {
   $('.sorter').append($('<div class="item"></div>').css({"height" : value}).append('<span>' + value + '</span>'));
}

// Timed loop to display the results with a staggered effect
var i = 0;
function timedLoop() {
	setTimeout(function () {
		getIndexValue(listToSort[i]);
		i++;
		if(i < listToSort.length) {
			timedLoop();
		}
	}, 500)
}

timedLoop();


/* 
 * Binary search 
 * search through a list of presorted integers 
 * using binary search, AKA the divide and conquer method
 */
function binary_search(value, values, n) {
	var min = 0;
	var max = n - 1;
	var middleIndex;
	while(min <= max) {
		middleIndex = Math.floor((min + max) / 2);
		if(values[middleIndex] === value) {
			$('.message').text("You found " + values[middleIndex] + ".");
			return middleIndex;
		}
		if(values[middleIndex] < value) {
			min = middleIndex + 1;
		}
		else {
			max = middleIndex - 1;
		}
	}
	$('.message').text(value + " not found.");
	return -1;
}


function getNeedle() {
	var select = document.querySelector("input");
	select.addEventListener("change", function() {
		
		var number = Number(select.value);
		if(!isNaN(number)) {
			binary_search(number, listToSort , sortedLength);
		} else {
			$('.message').text("Numbers only, please");
		}
		
		
	});
}
getNeedle();

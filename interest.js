function itemsOfInterest(array) {
	items = []
	if (array[0] >= array[1])
		items.push(array[0]) // condition 2
	for (let m = 1; m < array.length; m++) {
		if (m == array.length-1) { // condition 3
			if (array[m] >= array[m-1]) {
				items.push(array[m])
				break // that's the end
			}
		}
		if ((array[m] >= array[m-1]) && (array[m] >= array[m+1]))
				items.push(array[m]) // condition 1
	}
	return items
}

console.log(itemsOfInterest([4, 3, 1, 5, 7, 4]))
console.log(itemsOfInterest([2, 3, 1, 5, 7, 4]))
console.log(itemsOfInterest([2, 3, 1, 5, 7, 4, 1]))
console.log(itemsOfInterest([2, 3, 1, 5, 4, 4, 4]))
console.log(itemsOfInterest([2, 3, 1, 5, 4, 3, 4]))
console.log(itemsOfInterest([4, 3, 1, 5, 7, 8]))
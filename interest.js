function itemsOfInterest(array) {
	items = []
	if (array[0] >= array[1])
		items.push(array[0]) // condition 2
	for (let m = 1; m < array.length; m++) {
		if (m == array.length-2) { // 
			if (array[m] >= array[m-1]) {
				items.push(array[m])
				break // all that's left is the last one, ignore it
			}
		}
		if ((array[m] >= array[m-1]) && (array[m] >= array[m+1]))
				items.push(array[m]) // condition 1
	}
	return items
}

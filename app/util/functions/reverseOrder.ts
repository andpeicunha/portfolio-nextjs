export function reverseOrder<T>(array: readonly T[]): T[] {
	const newArray: T[] = []

	for (let i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i])
	}

	return newArray
}

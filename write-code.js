function addToZero(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return false
    }
    const cache = {}
    for (let num of arr) {
        if (cache[`${num}`]) {
            return true
        } else {
            cache[`${-num}`] = num
        }
    }
    return false
}

console.log(addToZero([]))
// -> False

console.log(addToZero([1]))
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]))
// -> True

console.log(addToZero([1, 2, 3, 2]))
// -> False

console.log(addToZero([1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, -4, 6, -7, 3, 4]))
// -> True

// In the worst case scenario, this would be O(n) runtime because it has to go through the entire array trying to find a match.
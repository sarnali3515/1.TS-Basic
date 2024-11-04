{
    /*
    Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
    
    // Sample Input:
    filterEvenNumbers([1, 2, 3, 4, 5, 6])
    
    // Sample Output:
    [2, 4, 6]
    */

    function filterEvenNumbers(arr: number[]): number[] {
        let arr2: number[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                arr2.push(arr[i])
            }
        }
        return arr2;
    }
    console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


}
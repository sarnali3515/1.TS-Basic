{
    /* 
    Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

    Sample Input:
    findLargestNumber([10, 5, 8, 20, 3])
    
    Sample Output:
    20 
    */

    function findLargestNumber(arr: number[]): number {
        let largestNum: number = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largestNum) {
                largestNum = arr[i]
            }
        }
        return largestNum;
    }

    console.log(findLargestNumber([10, 5, 8, 20, 3]));



    //
}
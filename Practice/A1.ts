{

    // Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

    // Sample Input: 
    // repeatString("Hello!", 3)

    // Sample Output:
    // "Hello!Hello!Hello!"


    function repeatString(input1: string, input2: number): string {
        let result: string = "";

        for (let i = 0; i < input2; i++) {
            result += input1;
        }

        return result;
    }

    console.log(repeatString("Hello!", 3));



}
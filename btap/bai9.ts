let inputString: string = "banana";

function removeDuplicates(input: string): string {
    let result: string = "";

    for (let i = 0; i < input.length; i++) {
        if (result.indexOf(input[i]) === -1) {
            result += input[i];
        }
    }

    return result;
}

let outputString: string = removeDuplicates(inputString);
console.log(outputString);

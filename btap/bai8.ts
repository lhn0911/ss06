let firstName: string = "john";
let lastName: string = "doe";

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

if (firstName.length > 0) {
    firstName = capitalizeFirstLetter(firstName);
}

if (lastName.length > 0) {
    lastName = capitalizeFirstLetter(lastName);
}

let fullName: string = firstName + " " + lastName;

console.log(fullName);

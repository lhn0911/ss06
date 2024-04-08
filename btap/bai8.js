var firstName = "john";
var lastName = "doe";
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
if (firstName.length > 0) {
    firstName = capitalizeFirstLetter(firstName);
}
if (lastName.length > 0) {
    lastName = capitalizeFirstLetter(lastName);
}
var fullName = firstName + " " + lastName;
console.log(fullName);

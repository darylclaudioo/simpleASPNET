function TSButton() {
    var name = "Daryl";
    document.getElementById("ts-example").innerHTML = greeter(user);
}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Daryl", "Deril", "Claudio");
//# sourceMappingURL=app.js.map
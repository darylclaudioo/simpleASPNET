function TSButton() {
    var name = "Muhammad";
    document.getElementById("ts-example").innerHTML = greeter(user);
}
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleName + " " + person.lastName;
}
var user = new Student("Muhammad", "Ichsan", "Ridho");
//# sourceMappingURL=app.js.map
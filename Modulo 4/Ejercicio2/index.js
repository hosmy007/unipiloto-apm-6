var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    /**
     *
     * @param id
     * @param age
     * @param name
     * @param lastname
     */
    function Person(id, age, name, lastname) {
        this.id = id;
        this.age = age;
        this.lastname = lastname;
        this.name = name;
    }
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getLastname = function () {
        return this.lastname;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    /**
     *
     * @param id
     * @param age
     * @param name
     * @param lastname
     * @param classes
     * @param grade
     * @param glaup
     */
    function Student(id, age, name, lastname, classes, grade, glaup) {
        _super.call(this, id, age, name, lastname);
        this.classes = classes;
        this.grade = grade;
        this.glaup = glaup;
    }
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.getGlaup = function () {
        return this.glaup;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    /**
     *
     * @param id
     * @param age
     * @param name
     * @param lastname
     * @param profession
     * @param grades
     * @param glaups
     */
    function Teacher(id, age, name, lastname, profession, grades, glaups) {
        _super.call(this, id, age, "Profesor: " + name, lastname);
        this.profession = profession;
        this.grades = grades;
        this.glaups = glaups;
    }
    return Teacher;
}(Person));
var classes = ["Calculo", "Programacion", "Teoría"];
var grades = [10, 8, 9, 6];
var glaups = ["QQ10QQQ", "R8R", "*9*", ".6."];
var student1 = new Student(1, 20, "Rafael 1 Guillermo", "Blanco 1 Banquez", classes, 10, "otra cosa212");
var student2 = new Student(2, 25, "Rafael 2 Guillermo", "Blanco 2 Banquez", classes, 10, "otra cosa2323");
var student3 = new Student(3, 26, "Rafael 3 Guillermo", "Blanco 3 Banquez", classes, 10, "otra cosa112");
var studets = [student1, student2, student3];
var teacher = new Teacher(2, 45, "Angel", "Banquez", "Doctor en ciencias", grades, glaups);
studets.forEach(function (aStudent) {
    console.log(aStudent);
});
console.log(teacher);

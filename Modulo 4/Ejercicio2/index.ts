class Person{

    private id:number;
    private age:number;
    private name:string;
    private lastname:string;
    
    /**
     * 
     * @param id 
     * @param age 
     * @param name 
     * @param lastname 
     */
    constructor( id:number, age:number, name:string, lastname:string ){
        this.id = id;
        this.age = age;
        this.lastname = lastname;
        this.name = name;
    }    
	getId(): number{
		return this.id;
    }
    getAge(): number{
		return this.age;
    }
    getName(): string{
		return this.name;
    }
    getLastname(): string{
		return this.lastname;
	}
}

class Student extends Person{

    private classes:string[];
    private grade:number;
    private glaup:string;

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
    constructor( id:number, age:number, name:string, lastname:string, classes:string[], grade:number, glaup:string ){
        super( id, age, name, lastname);
        this.classes = classes;
        this.grade = grade;
        this.glaup = glaup;        
    }
    getGrade(): number{
		return this.grade;
    }
    getGlaup(): string{
		return this.glaup;
    }         
}

class Teacher extends Person{

    private profession:string;
    private grades:number[];
    private glaups:string[];
    private students:Student[];

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
    constructor( id:number, age:number, name:string, lastname:string, profession:string, grades:number[], glaups:string[] ){
        super( id, age, "Profesor: "+name, lastname);
        this.profession = profession;
        this.grades = grades;
        this.glaups = glaups;        
    }       
    setStudents(st:Student[]): void{
		this.students = st;
	}      
}

let classes: string[] = ["Calculo", "Programacion", "Teoría"];
let grades: number[] = [10,8,9,6];
let glaups: string[] = ["QQ10QQQ","R8R","*9*",".6."];

let student1 = new Student(1,20,"Rafael 1 Guillermo","Blanco 1 Banquez", classes, 10, "otra cosa212" );
let student2 = new Student(2,25,"Rafael 2 Guillermo","Blanco 2 Banquez", classes, 10, "otra cosa2323" );
let student3 = new Student(3,26,"Rafael 3 Guillermo","Blanco 3 Banquez", classes, 10, "otra cosa112" );

let studets: Student[] = [student1, student2, student3 ];

var teacher = new Teacher(2,45,"Angel","Banquez", "Doctor en ciencias", grades, glaups);
teacher.setStudents( studets );

/*studets.forEach(aStudent => {
    console.log(aStudent); 
});*/
console.log(teacher);
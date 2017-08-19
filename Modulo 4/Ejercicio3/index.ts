
interface Person{
    
    id:number;
    age:number;
    name:string;
    lastname:string;

    getId(): number;
	getName(): string;
    getAge(): number;
    getLastname(): string;

	setId(id:number): void;
	setName(name:string): void;
    setAge(age:number): void;
    setLastname(lastname:string): void;

}

class Student implements Person{

    private id:number;
    private age:number;
    private name:string;
    private lastname:string;

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
        
        this.id = id;
        this.name = name
        this.age = age;
        this.lastname = lastname;

        this.classes = classes;
        this.grade = grade;
        this.glaup = glaup;        
    }

    getId(): number{
        return this.id;
    }
	getName(): string{
        return this.name;
    }
    getAge(): number{
        return this.age;
    }
    getLastname(): string{
        return this.lastname;
    }

	setId(id:number): void{
        this.id = id;
    }
	setName(name:string): void{
        this.name = name;
    }
    setAge(age:number): void{
        this.age = age;
    }
    setLastname(lastname:string): void{
        this.lastname = lastname;
    }

    getGrade(): number{
		return this.grade;
    }
    getGlaup(): string{
		return this.glaup;
    }         
}

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
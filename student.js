
class Person {
  constructor(name, age) {
    if (!name || age <= 0) {
      throw new Error('Invalid data for Person: Name must be provided and Age must be greater than zero');
    }
    this.name = name;
    this.age = age;
  }

 
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Child class - Student (inherits from Person)
class Student extends Person {
  constructor(name, age, rollNo, grade) {
    
    super(name, age);
    if (rollNo <= 0) {
      throw new Error('Invalid Roll Number: Roll Number must be greater than zero');
    }
    this.rollNo = rollNo;
    this.grade = grade;
  }

 
  introduce() {
    
    return `${super.introduce()} I am a student with roll number ${this.rollNo} in grade ${this.grade}.`;
  }

  
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}, Grade: ${this.grade}`;
  }
}


try {
  const student1 = new Student('Prajyot Shinde', 21, 57, 'D15A');
  console.log(student1.introduce()); 
  console.log(student1.getDetails());

  
  const student2 = new Student('Laksh', 21, 59, 'D15B'); 
} catch (error) {
  console.error('Error:', error.message); 
}

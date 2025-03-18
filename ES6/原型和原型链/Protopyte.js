class Student {
    constructor(name,score){
        this.name  = name;
        this.score = score;
    }

    introduce() {
        console.log(`我是${this.name}我的成绩是${this.score}`);
    }
}

console.log('Student', Student);
console.log('Student.constructor', Student.constructor);
console.log('Student.prototype', Student.prototype);
console.log('Student.prototype.constructor', Student.prototype.constructor);
console.log('Student.constructor.prototype', Student.constructor.prototype);
console.log('Student.prototype == Student.constructor.prototype', Student.prototype == Student.constructor.prototype);
console.log('Student.prototype === Student.constructor.prototype', Student.prototype === Student.constructor.prototype);

const student = new Student('JimmyWang', 100);

// console.log('student', student);
// console.log('student.__proto__', student.__proto__);

// student.introduce();

class Teacher  {
    constructor(name, subject){
        this.name  = name;
        this.subject = subject;
    }

    introduce() {
        console.log(`我是${this.name}我的教的学科是${this.subject}`);
    }
}

const teacher = new Teacher('JimmyWang', '前端开发');

// console.log('teacher', teacher);

// teacher.introduce();


function functionA() {

}

function functionB() {

    const a = 'a';

    let b = 'b';

    function constructor(name,score){
        this.name  = name;
        this.score = score;
    }

    function introduce() {
        console.log(`我是${this.name}我的成绩是${this.score}`);
    }
}

console.log('(function(){}).prototype', (function(){}).prototype);

console.log('(()=>{}).prototype', (()=>{}).prototype);

console.log('functionA', functionA);
console.log('functionA()', functionA());
console.log('(new functionA()).prototype', (new functionA()).prototype);
console.log('(new functionA()).__proto__', (new functionA()).__proto__);
console.log('functionA.prototype', functionA.prototype);
console.log('(new functionA()).__proto__ === functionA.prototype', (new functionA()).__proto__ === functionA.prototype);
console.log('functionA.__proto__', functionA.__proto__);
console.log('functionA.__proto__ === Function.prototype', functionA.__proto__ === Function.prototype);

console.log('functionB', functionB);
console.log('functionB.prototype', functionB.prototype);
console.log('functionB.__proto__', functionB.__proto__);
console.log('functionB.__proto__ === Function.prototype', functionB.__proto__ === Function.prototype);

console.log('functionA.__proto__ === functionB.__proto__', functionA.__proto__ === functionB.__proto__);


function Parent(){}

console.log(Parent.__proto__);
console.log(Parent.constructor);

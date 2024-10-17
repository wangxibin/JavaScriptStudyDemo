class Student {
    constructor(name,score){
        this.name  = name;
        this.score = score;
    }

    introduce() {
        console.log(`我是${this.name}我的成绩是${this.score}`);
    }
}


const student = new Student('JimmyWang', 100);

console.log('student', student);

student.introduce();


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

console.log('teacher', teacher);

teacher.introduce();


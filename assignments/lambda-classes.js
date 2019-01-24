// CODE here for your Lambda Classes
// Constructor Class:

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

//Sub Classes:

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubject = props.favSubject;
    };
    listsSubjects(subjects) {
        return subjects.map(subject => subject);
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    };
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    };
};

// Instructors
 const teacher1 = new Instructor ({
    name: 'Professor Oak',
    location: 'Pallet Town',
    age: '47',
    gender: 'Male',
    specialty: 'Pokemon and Human Interactions',
    favLanguage: 'Sarcasm',
    catchPhrase: 'Catch em all!',
});
const teacher2 = new Instructor ({
    name: 'Professor Stone',
    location: 'Yosemite National Park',
    age: '31',
    gender: 'Male',
    specialty: 'Cyber Security',
    favLanguage: 'Python',
    catchPhrase: 'When you become a teacher, you can do things differently, until then, its my way! muahahahahaha!',
});
const teacher3 = new Instructor ({
    name: 'Professor Reynolds',
    location: 'Danville',
    age: '23',
    gender: 'Female',
    specialty: 'Advanced CSS',
    favLanguage: 'Ruby on Rails',
    catchPhrase: 'Now that wasn\'t too hard, was it?',
});

// Students
const student1 = new Student ({
    name: 'Josh Diamond',
    location: 'Malibu',
    age: '27',
    gender: 'Male',
    previousBackground: 'Restaurant Manager',
    className: 'WEB17',
    favSubject: ['HTML', 'CSS', 'JavaScript'],
});
const student2 = new Student ({
    name: 'Remy Diamond',
    location: 'Mesa',
    age: '5',
    gender: 'Male',
    previousBackground: 'Poison Checker',
    className: 'CS-213',
    favSubject: ['Culinary Arts', 'Meditation', 'Debate'],
});
const student3 = new Student ({
    name: 'Sonya Diamond',
    location: 'Hawaii',
    age: '21',
    gender: 'Female',
    previousBackground: 'Care Giver',
    className: 'React-17',
    favSubject: ['Art', 'Physical Education', 'Music'],
});

//ProjectManagers
const pm1 = new ProjectManager ({
    name: 'Anthony Green',
    location: 'Huntington Beach',
    age: '37',
    gender: 'Male',
    specialty: 'Vocals/Singing',
    favLanguage: 'Python',
    catchPhrase: 'Real Magic',
    gradClassName: 'Musicians Institute',
    favInstructor: 'Brian "Synyster Gates" Haner, Jr.'
});
const pm2 = new ProjectManager ({
    name: 'John Butler',
    location: 'Fremantle, Australia',
    age: '41',
    gender: 'Male',
    specialty: 'Acoustic Guitar',
    favLanguage: 'English',
    catchPhrase: 'because..I want to',
    gradClassName: 'JB Trio',
    favInstructor: 'Self-Taught',
});
const pm3 = new ProjectManager ({
    name: 'Tony Horton',
    location: 'San Diego',
    age: '34',
    gender: 'Male',
    specialty: 'Advanced CSS/Design',
    favLanguage: 'Music',
    catchPhrase: 'Do you\'re best and forget the rest!',
    gradClassName: 'Power 90 Extreme',
    favInstructor: 'Professor Oak',
});

// Instructor Tests:
console.log(teacher3.catchPhrase);
console.log(teacher1.name);
console.log(teacher2.favLanguage);
console.log(teacher1.demo('Redux'));
console.log(teacher2.grade(student3, student3.className))

// Student Tests:
console.log(student1.listsSubjects(student1.favSubject));
console.log(student2.PRAssignment(student2.className));
console.log(student3.sprintChallenge(student3.className));
console.log(student3.name);
console.log(student2.previousBackground);
console.log(student1.age);

//ProjectManager Tests:
console.log(pm1.catchPhrase);
console.log(pm2.location);
console.log(pm3.catchPhrase);
console.log(pm1.debugsCode(student2, 'JavaScript VI'));
console.log(pm2.standup('WEB17'))
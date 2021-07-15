import { kStringMaxLength } from "buffer";

let studentID: number=12345;
let studentName: string='Jenny';
let age: number=21;
let gender: string='female';
let subject: string='Javascript';
let courseCompleted: boolean=false;

// enum GenderType{
//     Male='male', //문자열 저장하며 각 0,1,2로 숫자타입이었던 값을 문자타입으로(string enum) 
//     Female='female', 
//     GenderNeutral='genderNeutral' 
// }

let student1: Student={
    studentID: 121212,
    studentName: 'Janet',
    age: 30,
    gender: 'female',
    subject: 'Mongo DB',
    courseCompleted: false
}

interface Student{
    readonly studentID: number,
    studentName: string,
    age?: number, //선택적 프로퍼티 : ?
    gender: 'male'|'female'|'genderNeutral', //GenderType;
    subject: string,
    courseCompleted: boolean,
    //addComment (comment:string): string; // 메소드를 인터페이스 내에서 정의하는 두가지 방법
    addcomment?: (comment:string) => string
}

function getStudentDetails(studentID: number): Student
{
        return {
            studentID: 123456,
            studentName: 'Mark',
            age: 20,
            gender: 'male', //<='male'
            subject: 'Node JS',
            courseCompleted: true
        } 
}
function saveStudentDetails (student: Student): void{
}
saveStudentDetails(student1)


type StringOrNum = string | number;
let itemPrice:number;

const SetItemPrice = (price: StringOrNum):void =>{
    if (typeof price === 'string'){
        itemPrice = 0;
    } else{
        itemPrice = price; //itemPrice는 number로만 타입지정 되어있으므로 오류발생 -> typeofOperator와 조건문 사용
    }
};
SetItemPrice(50);

// function sendGreeting(message: string, userName?: string): void //선택적 매개변수 가능, 필수 매개변수 뒤에 위치

// function sendGreeting(message: string, userName='there'): //매개변수 기본값 설정시 타입선언x
//     void{
//     console.log(`${message}, ${userName}`);
// }
const sendGreeting = (message='Hello', userName='there'):
void => console.log(`${message}, ${userName}`);
sendGreeting('Hello');

class Employee { 

    constructor( //객체가 생성될 때 컨스트럭터의 매개변수로 전달된 값은 객체의 프로퍼티 값으로 자동으로 초기화되고 할당됨
        private _fullName: string,
        private _age: number,
        private _jobTitle: string,
        private _hourlyRate: number,
        public workingHoursPerWeek: number){
    }

    get fullName(){
        return this._fullName;
    }
    set fullName(value: string){
        this._fullName = value;
    }
    printEmployeeDetails = (): void=> {
        console.log(`${this._fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
    }
}
let employee1 : Employee = new Employee('민수', 28, '주니어 개발자', 40, 35); //객체 생성
employee1.fullName = '헨리';
console.log(employee1.fullName);
employee1.printEmployeeDetails();
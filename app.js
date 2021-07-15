"use strict";
exports.__esModule = true;
var studentID = 12345;
var studentName = 'Jenny';
var age = 21;
var gender = 'female';
var subject = 'Javascript';
var courseCompleted = false;
// enum GenderType{
//     Male='male', //문자열 저장하며 각 0,1,2로 숫자타입이었던 값을 문자타입으로(string enum) 
//     Female='female', 
//     GenderNeutral='genderNeutral' 
// }
var student1 = {
    studentID: 121212,
    studentName: 'Janet',
    age: 30,
    gender: 'female',
    subject: 'Mongo DB',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Mark',
        age: 20,
        gender: 'male',
        subject: 'Node JS',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
var itemPrice;
var SetItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price; //itemPrice는 number로만 타입지정 되어있으므로 오류발생 -> typeofOperator와 조건문 사용
    }
};
SetItemPrice(50);
// function sendGreeting(message: string, userName?: string): void //선택적 매개변수 가능, 필수 매개변수 뒤에 위치
// function sendGreeting(message: string, userName='there'): //매개변수 기본값 설정시 타입선언x
//     void{
//     console.log(`${message}, ${userName}`);
// }
var sendGreeting = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    return console.log(message + ", " + userName);
};
sendGreeting('Hello');
var Employee = /** @class */ (function () {
    function Employee(//객체가 생성될 때 컨스트럭터의 매개변수로 전달된 값은 객체의 프로퍼티 값으로 자동으로 초기화되고 할당됨
    _fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC774\uB2E4.");
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('민수', 28, '주니어 개발자', 40, 35); //객체 생성
employee1.fullName = '헨리';
console.log(employee1.fullName);
employee1.printEmployeeDetails();

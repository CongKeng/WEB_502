"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1
class Std {
    id;
    name;
    score;
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
    showInfo() {
        return `ID: ${this.id} - Name: ${this.name} - Score: ${this.score}`;
    }
}
const st1 = new Std(1, "Nguyễn Duy Công", 8);
console.log(st1.showInfo());
const user1 = {
    id: 1,
    email: "nguyencong16072006@gmail.com"
};
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(2, 3));
console.log(multiply(2, 3));
function logStatus(status) {
    if (status === "loading") {
        console.log("Đang tải...");
    }
    else if (status === "success") {
        console.log("Thành công");
    }
    else if (status === "error") {
        console.log("Có lỗi xảy ra");
    }
}
logStatus("loading");
logStatus("success");
logStatus("error");

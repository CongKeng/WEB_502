"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const st1 = {
    id: 1,
    name: "Nguyễn Duy Công",
    score: 8
};
function showInfo(st) {
    return `ID: ${st.id} - Name: ${st.name} - Score: ${st.score}`;
}
console.log(showInfo(st1));
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

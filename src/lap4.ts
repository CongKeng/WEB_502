type Std = {
  id: number;
  name: string;
  score: number;
};
const st1: Std = {
  id: 1,
  name: "Nguyễn Duy Công",
  score: 8
};

function showInfo(st: Std): string {
  return `ID: ${st.id} - Name: ${st.name} - Score: ${st.score}`;
}

console.log(showInfo(st1));
//2
interface User {
  id: number;
  email: string;   
  phone?: string;  
}

const user1: User = {
  id: 1,
  email: "nguyencong16072006@gmail.com"
};

//3
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => a + b;
const multiply: Calculate = (a, b) => a * b;

console.log(add(2, 3));       
console.log(multiply(2, 3)); 
//4
type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
  if (status === "loading") {
    console.log("Đang tải...");
  } else if (status === "success") {
    console.log("Thành công");
  } else if (status === "error") {
    console.log("Có lỗi xảy ra");
  }
}
logStatus("loading");
logStatus("success");
logStatus("error");
//1
class Std {
  id: number;
  name: string;
  score: number;

  constructor(id: number, name: string, score: number) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  showInfo(): string {
    return `ID: ${this.id} - Name: ${this.name} - Score: ${this.score}`;
  }
}

const st1 = new Std(1, "Nguyễn Duy Công", 8);
console.log(st1.showInfo());

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
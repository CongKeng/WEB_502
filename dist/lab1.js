"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Hàm trả về chu vi và diện tích hình chữ nhật
function ChuViDienTichHCN(dai, rong) {
    const chuVi = (dai + rong) * 2;
    const dienTich = dai * rong;
    return { chuVi, dienTich };
}
// 2. Hàm tính tổng nhiều số (rest parameter)
function tinhTong(...numbers) {
    return numbers.reduce((tong, n) => tong + n, 0);
}
// 3. Hàm đếm số lần xuất hiện của 1 ký tự trong chuỗi
function demKyTu(chuoi, kyTu) {
    let dem = 0;
    for (const c of chuoi) {
        if (c === kyTu)
            dem++;
    }
    return dem;
}
function laSoNguyenTo(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}

/* 1. Tìm hiểu về cấu trúc mảng
    - Destructuring (hủy cấu trúc) là  cách giải nén các gtri từ 1 mảng hoặc 1 đối tượng thành các biến riêng biệt
    Hoặc nói cách khác là phá vỡ 1 cấu trúc DL phức tạp thành 1 cấu trúc DL nhỏ hơn như 1 biến
    - Đối vs mảng, cta sdung hàm hủy để lấy các phần tử từ mảng và lưu trữ chúng vào các biến 1 cách dễ dàng

    VD:
*/
'use strict';

const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

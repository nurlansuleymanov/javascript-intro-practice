// console.log("JavaScript işləyir");

//task 1
// Verilmiş n ədədinin 3-ə və 7-yə bölünüb-bölünmədiyini tapın.let n = 21;

// if (n % 3 === 0 && n % 7 === 0) {
//     console.log("n 3 və 7-ə bölünür");
// }
// else{
//     console.log("n 3 və 7-ə bölünmür");
// }


//task 2
// Verilmiş n və m ədədləri arasında neçə tək ədəd olduğunu tapın.

// let n = 5;
// let m = 15;
// let count = 0;

// for (let i = n; i <= m; i++) {
//     if (i % 2 !== 0) {
//         count++;
//     }
    
// }

// console.log(`n və m arasında ${count} ədəd tək ədəd var`);



//task 3
// Verilmiş n və m ədədləri arasında neçə cüt ədəd olduğunu tapın.

// let n = 2;
// let m = 10;
// let sum = 0;

// for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }

// console.log(`n və m arasında cüt ədədlərin cəmi: ${sum}`);



//task 4
// Verilmiş n ədədinin sadə və ya mürəkkəb olduğunu tapın.

// let n = 7;
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         count++;
//     }
// }
// if (count === 2) {
//     console.log("n sadə ədəddir");
// } else {
//     console.log("n mürəkkəb ədəddir");
// }



//task 5
//Verilmiş array-in içindəki cüt ədədlərin cəmini tapın.


// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         sum += numbers[i];
//     }
// }

// console.log(`Cüt ədədlərin cəmi: ${sum}`);


//task 6
// Verilmiş array-in içindəki ən böyük və ən kiçik ədədi tapın.

// let numbers = [5, 2, 9, 1, 7];

// let max = numbers[0];
// let min = numbers[0];

// numbers.forEach(function(num) {
//     if (num > max) {
//         max = num;
//     }
//     if (num < min) {
//         min = num;
//     }
// }); 

// console.log(`Ən böyük ədəd: ${max}`);
// console.log(`Ən kiçik ədəd: ${min}`);




//task 7
// Verilmiş array-in içindəki müsbət, mənfi və sıfır ədədlərin sayını tapın.


// let numbers = [-2, 5, 0, -1, 8, 0, 3];

// let positive = 0;
// let negative = 0;
// let zero = 0;

// numbers.forEach(function(num) {
//     if (num > 0) {
//         positive++;
//     } else if (num < 0) {
//         negative++;
//     } else {
//         zero++;
//     }
// });

// console.log(`Müsbət ədədlər: ${positive}`);
// console.log(`Mənfi ədədlər: ${negative}`);
// console.log(`Sıfır: ${zero}`);


//task 8
//Verilmiş array-də müəyyən bir ədədin neçə dəfə təkrarlandığını tapın.

// let numbers = [1, 3, 5, 3, 7, 3];
// let tekrarlana = 3;
// let count = 0;

// numbers.forEach(function(num) {
//     if (num === tekrarlana) {
//         count++;
//     }
// });

// console.log(`Təkrarlanan ədəd: ${tekrarlana}, Sayı: ${count}`);


//task 9
//Verilmiş array-in elementlərini tərsinə çevirilmiş formada göstərin.


// let numbers = [1, 2, 3, 4, 5];
// let reversed = [];

// for(let i = numbers.length - 1; i >= 0; i--) {
//     reversed.push(numbers[i]);
// }

// console.log("Reversed:", reversed);




//task 10
// Verilmiş n ədədinin rəqəmlərinin cəmini tapın.



// let n = 1234;
// let sum = 0;

// while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
// }

// console.log(`Reqemlerin cəmi: ${sum}`);


//task 11
// Verilmiş n ədədinin palindrom olub-olmadığını tapın.



// let n = 121;
// let original = n;
// let reversed = 0;

// while (n > 0) {
//     reversed = reversed * 10 + (n % 10);
//     n = Math.floor(n / 10);
// }

// if (original === reversed) {
//     console.log(`${original} palindrom ədəddir`);
// } else {
//     console.log(`${original} palindrom ədəd deyil`);
// }


//task 12
//Student məlumatlarını saxlayan bir obyekt yaradın. 
// Obyektdə name, age, group və score məlumatları olsun. 
// Bütün məlumatları console-a çıxarın.



// let student = {
//     name: "Nurlan",
//     age: 28,
//     group: " PA203",
//     score: 85
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.group);
// console.log(student.score);


//task 13
//Student obyektinin score məlumatına əsasən, 
//studentin imtahandan keçib-keçmədiyini tapın. 
//Əgər score 51-dən böyük və ya bərabərdirsə, "Passed", əks halda "Failed" yazdırın.



// let student = {
//     name: "Nurlan",
//     age: 28,
//     group: " PA203",
//     score: 85
// };
// if (student.score >= 51 ) {
//     console.log("Passed");
// }
// else {
//     console.log("Failed");
// }


//task 14
// Bir neçə student obyektindən ibarət array yaradın 
// və score-u 80-dən yuxarı olan studentləri tapın.



// let students = [
//     {
//         name: "Nurlan",
//         score: 100
//     },
//     {
//         name: "Vuqar",
//         score: 93
//     },
//     {
//         name: "Rufat",
//         score: 87
//     },
//     {
//         name: "Aysel",
//         score: 75
//     },
//     {
//         name: "Ali",
//         score: 50
//     }
// ];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].score >= 80) {
//         console.log(`Student: ${students[i].name}`);
//     }
// }



//task 15
// Məhsullardan ibarət array yaradın. Hər məhsulda name və 
// price məlumatları olsun. Ən bahalı məhsulu tapın.



// let products = [
//     {
//         name: "Laptop",
//         price: 2500
//     },
//     {
//         name: "Phone",
//         price: 1200
//     },
//     {
//         name: "Tablet",
//         price: 800
//     },
//     {
//         name: "Monitor",
//         price: 600
//     }
// ];

// let expensiveProduct = products[0];

// for (let i = 1; i < products.length; i++) {

//     if (products[i].price > expensiveProduct.price) {
//         expensiveProduct = products[i];
//     }

// }

// console.log(`Ən bahalı məhsul: ${expensiveProduct.name}`);
// console.log(`Qiyməti: ${expensiveProduct.price}`);




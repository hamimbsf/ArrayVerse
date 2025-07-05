// Question One --> How to take user input and store values in an array?

// let arr = new Array(5);
// for (let index = 0; index < arr.length; index++) {
//   arr[index] = Number(prompt("Enter a number: "));
// }
// console.log(arr);

// Step one : -->

// ✅ let arr = new Array(5);
// এখানে arr নামে একটি array তৈরি করা হয়েছে, যার প্রাথমিক length হচ্ছে 5।

// মানে, এতে ৫টি slot (index 0 থেকে 4) থাকবে — কিন্তু এখনো কোনো মান দেওয়া হয়নি, সব slot empty বা undefined।

// এটি এমন দেখাবে:
// [ <5 empty items> ]

// Step two : -->

// for (let index = 0; index < arr.length; index++) {
//   arr[index] = Number(prompt("Enter a number: "));
// }

//এখানে index 0 নেওয়ার কারণ হলো আমরা জানি array এর index 0 থেকে শুরু হয়
// এবং লুপ এর condition হইল index এর মান 4 হওয়া অব্দি চলবে আমরা যেহেতু 0 থেকে শুরু করছি সেহেতু 0-4 অব্দি 5 length হয়
// যেহেতু লুপ এর মধ্যের লজিক প্রতি iteration এ চলবে সেহেতু arr[index]--> arr[0] index এর মান যখন 0 তখন ও চলবে 1,2,3,4 অব্দি চলবে এবং প্রত্যেক বার prompt থেকে একটি করে নাম্বার নিবে

// Step three : -->

//এর পরেই console হবে

//Question two --> Sum of n element of an array

// let arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
//   // let element = arr[index];
//   // sum = sum + element;
//   sum = sum + arr[index];
// }
// console.log(sum);

// Question Three --> How to find the maximum element in an array?

// let arr = [10, 2, 13, 61, 78];
// let max = arr[0];

// for (let index = 1; index < arr.length; index++) {
//   if (arr[index] > max) {
//     max = arr[index];
//   }
// }

// console.log(max);

// Question Four --> How to find the minimum element from an array?

// let arr = [10, 2, 13, 61, 78];
// let min = arr[0];
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] < min) {
//     min = arr[index];
//   }
// }
// console.log(min);

// Question Four --> How to find the first and second maximum elements from an array?

// let arr = [10, 2, 13, 81, 61, 78, 65, 53, 72];
// let max = Math.max(arr[0], arr[1]);
// let max2 = Math.min(arr[0], arr[1]);
// for (let index = 2; index < arr.length; index++) {
//   if (arr[index] > max) {
//     max2 = max;
//     max = arr[index];
//   } else if (arr[index] > max2 && arr[index] !== max) {
//     max2 = arr[index];
//   }
// }
// console.log(max);
// console.log(max2);

// Question four --> How to reverse an array using an extra variable?

// let arr = [10, 2, 13, 81, 61, 78, 65, 53, 72];
// let temp = new Array(arr.length);
// let j = 0;
// for (let index = arr.length - 1; index >= 0; index--) {
//   temp[j] = arr[index];
//   j++;
// }
// console.log(temp);

// Question Five --> How to reverse an array without using an extra variable?

// let arr = [10, 2, 13, 81, 61, 78, 65, 53, 72];
// let j = arr.length - 1;
// let i = 0;
// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// let arr = [10, 2, 13, 81, 61, 78, 65, 53, 72];
// let j = arr.length - 1;
// for (let index = 0; index < Math.floor(arr.length / 2); index++) {
//   let temp = arr[index];
//   arr[index] = arr[j];
//   arr[j] = temp;
//   j--;
// }
// console.log(arr);

// let arr = [10, 2, 13, 81, 61, 78, 65, 53, 72];
// let j = arr.length - 1;
// for (let index = 0; index < j; index++) {
//   let temp = arr[index];
//   arr[index] = arr[j];
//   arr[j] = temp;
//   j--;
// }
// console.log(arr);

// Question Six --> How to move all 0s to the left side of an array?

let arr = [0, 1, 0, 0, 1, 1, 1, 1, 0];

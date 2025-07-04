// 📘 Array = Collection of values (একাধিক মানের সমষ্টি)

// মূলত [] (স্কোয়ার ব্র্যাকেট) কেই Array বলা হয়।
// আপনি Array এর মধ্যে একাধিক বা একটি মাত্র ভ্যালু রাখতে পারেন।
// এই ভ্যালুগুলো হতে পারে: স্ট্রিং, নাম্বার, অবজেক্ট,
// এমনকি আপনি চাইলে Array এর মধ্যেও আরেকটি Array রাখতে পারেন — একে nested array বলা হয়।

// ✅ উদাহরণ:

// const arr1 = [1, 2, 3]; // নাম্বারের Array
// const arr2 = ["apple", "banana"]; // স্ট্রিং Array
// const arr3 = [{ name: "Hamim" }, { age: 22 }]; // অবজেক্টের Array
// const arr4 = [
//   [1, 2],
//   [3, 4],
// ]; // nested Array

// ⚡ মিক্সড টাইপের Array
// let arr = ["Hamim", 12, false, { name: "Hamim" }, [1, 3, 5]];

// 📘 Details about Array

// Array এর প্রতিটি মান/উপাদানকে বলা হয় element।
// প্রতিটি element-এর একটি নির্দিষ্ট ক্রম বা অবস্থান থাকে,
// যাকে index বলা হয়। এই index হল এক ধরনের আইডেন্টিটি,
// যার মাধ্যমে আমরা নির্দিষ্ট element-কে খুঁজে পেতে পারি।
// JavaScript-এ index সংখ্যা 0 থেকে শুরু হয়।
// অর্থাৎ, প্রথম উপাদানের index হবে 0, দ্বিতীয়টার 1 — এভাবে ক্রমানুসারে বাড়তে থাকে।

// ✅ উদাহরণ:
// let arr = ["a", "b", "c", "d"];

// এখানে:
// arr[0] → "a"
// এখানে [0] দ্বারা বোঝানো হচ্ছে arr নামের array-এর 0 নম্বর index-এ থাকা element।
// arr[1] → "b"
// এখানে [1] দ্বারা বোঝানো হচ্ছে arr নামের array-এর 1 নম্বর index-এ থাকা element।
// arr[2] → "c"
// এখানে [2] দ্বারা বোঝানো হচ্ছে arr নামের array-এর 2 নম্বর index-এ থাকা element।
// arr[3] → "d"
// এখানে [3] দ্বারা বোঝানো হচ্ছে arr নামের array-এর 3 নম্বর index-এ থাকা element।

// console.log(arr[0]); // 👉 "a"

// NOTE ::
// let arr = ["a", "b", "c"];
/*
Index:   0    1    2
Value:  "a"  "b"  "c"
*/
// console.log(arr[0]); // "a"

// let arr1 = ["Hamim", "Nadim", "Nafiz", "Alif", "Aurtho"];

// 👉 এখানে arr1[2] মানে হচ্ছে ২ নম্বর index-এ থাকা মান, অর্থাৎ "Nafiz"
// console.log(arr1[2]); // Nafiz

// 👉 এখন আমরা ২ নম্বর index-এর মান পরিবর্তন করে দিচ্ছি "NAFIZ" দিয়ে
// arr1[2] = "NAFIZ"; (এভাবে array এর নির্দিষ্ট মান পরিবর্তন করা যায় )

// 👉 এবার আবার প্রিন্ট করলে দেখা যাবে নতুন মান: "NAFIZ"
// console.log(arr1[2]); // NAFIZ

// ✅ Set element by index

// যেমন আমরা index ব্যবহার করে কোনো element "পড়তে" পারি (get),
// তেমনিভাবে index ব্যবহার করেই নতুন element "রাখতেও" পারি (set)

// নিচে একটি ফাঁকা array নেওয়া হলো
// let arrTwo = [];

// নির্দিষ্ট index-এ মান সেট করছি
// arrTwo[0] = "Hamim";
// arrTwo[1] = "Nafiz";
// arrTwo[2] = "Aurtho";
// arrTwo[5] = "Aurtho"; // index 5-এ মান রাখলাম

// console.log(arrTwo); //[ 'Hamim', 'Nafiz', 'Aurtho', <2 empty items>, 'Aurtho' ]

// 📌 ব্যাখ্যা:
// তুমি এখানে arrTwo[5] সেট করেছো কিন্তু index 3 ও 4 এ কিছুই দাওনি।

// তাই সেগুলো undefined নয়, বরং empty slot হিসেবে থাকবে (JavaScript এর "sparse array" behavior)।

// JavaScript এ Array flexible হওয়ায় তুমি direct index jump করতে পারো, কিন্তু মাঝের gap ফাঁকা থেকে যাবে।

// ✅ মনে রাখবে:

// JavaScript এ যদি কোনো index সেট না করা হয়, তাহলে সেই index-গুলো undefined বা empty থাকে।

// 📌 Extra Note (Advanced learners-এর জন্য):

// এই ধরনের ফাঁকা index নিয়ে কাজ করা কিছু ক্ষেত্রে সমস্যার কারণ হতে পারে, যেমন forEach বা map চলবে না ঐ ফাঁকা index-গুলোর উপর।

/* 📘 Array Methods */

// ধরো আমরা একটি সাধারণ Array নিচ্ছি
// let arr = [1, 2, 3];

// ✅ push(): Array-এর শেষে একটি মান যোগ করে (অর্থাৎ শেষ index-এ মান যোগ করা হয়)
// arr.push(5); // এখন arr = [1, 2, 3, 5]

// ✅ pop(): Array-এর শেষের মান মুছে ফেলে
// arr.pop(); // এখন arr = [1, 2, 3]

// ✅ shift(): Array-এর শুরু থেকে একটি মান মুছে ফেলে
// arr.shift(); // এখন arr = [2, 3]

// ✅ unshift(): Array-এর শুরুতে একটি মান যোগ করে (অর্থাৎ প্রথম  index-এ মান যোগ করা হয়)
// arr.unshift(0); // এখন arr = [0, 2, 3]

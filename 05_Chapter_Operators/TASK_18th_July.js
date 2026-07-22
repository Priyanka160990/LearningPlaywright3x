let a = 100;
console.log(a++ + ++a +a++ + ++a);
//(100 + 102 + 102 + 104) = 408 
console.log(a); // = 104 


let a1 = 37;
console.log(--a1 + a1--);  //36 + 36 = 72
console.log(a1);  // 35

let a2 = 5; 
let b = a2-- - --a2;   // b= 5-3 = 2
console.log(b, a2);  //a2= 3


let i = 1; 
let r = i++ > 1 ? i++ : ++i;  // i=1 > 1 ? T=2 : F=3
console.log(r, i);  // (3 ; 3 )  

let m = 1; 
let n = ++m > 1 ? m++ : ++m;  // m=2 > 1 ? T=2 : F=3
console.log(n, m);  // (2 ; 3)  

let u = 1; 
let v = u++ > 1 ? ++u : u++;  // u=1 > 1 ? T=2 : F=2
console.log(v, u); //2,3


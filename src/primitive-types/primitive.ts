enum Amounts {
  mon = 10,
  tue = 14,
  wed = 7,
  thur = 21
}

let a:number = Amounts.mon + Amounts.wed;
let b:string|number = Amounts[21];
console.log(a);
console.log(b);
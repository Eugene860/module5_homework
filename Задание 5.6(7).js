const arr = [1, 3, 5, "a", 4, 6, null, 0];
const onlyNum = arr.filter(item => typeof item =='number'); 
let even = 0;
let odd = 0;
let zero = 0;
for (let i = 0; i < onlyNum.length; i++) {
  if (onlyNum[i] % 2 == 0 && onlyNum[i] !== 0) 
  {even = even + 1} 
  else if (onlyNum[i] % 2 == 1) 
    {odd = odd + 1}
  else if (onlyNum[i] === 0) 
   {zero = zero + 1}
}
console.log(`количество чётных цифр: ` + even);
console.log(`количество нечётных цифр: ` + odd);
console.log(`количество нулей: ` + zero);
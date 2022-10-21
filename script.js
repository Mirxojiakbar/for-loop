//////////////////// 2-dars for()//////////////////////////
// // k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing
// let word =(prompt('K ni kiriting: '));
// let loopTime = +prompt('Nechhi martta K kreak: ');
// for (let i = 0; i < loopTime; i++) {
//     console.log(word);
// }


// a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin
// let b= +prompt('a: ');  
// let a = +prompt('b: ');
// alert('look to console-->')
// for(b=b;b<=a;b++){
//     console.log(b+1-1);
// }
// console.log('a='+b);
// console.log('b='+a);



//1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing
// let n = 5
// for(i=1;i<=n;i++) {
//     console.log(i + ' kilogram shkar konfet' + i*10000 + 'so\'m!')
// }



//1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping
// let n = 10
// for(i=1;i<=n;i++) {
//     console.log(i*0.1, ' kilogram shkar konfet' + i*1000 + 'so\'m!')
// }



// a,b son berilgan, A dan B gacha sonlar yig'indisi topuvchi dastur tuzing!
// let a = +prompt('a:');
// let b = +prompt('b:');
// let itog = 0;
// for (a = a; a <= b; a++) {
//     itog += a;
// }
// console.log(itog);





//n son berilgan quydagi yg'indini topuvchi dastur tuzing S = 1/1+1/2+ ...+1/n
// let n=+prompt('n=');
// let one=1
// for(let i = 1;i<=n;i++){
//     console.log('S=',one,'/n=',i/one);
// }




//n son berilgan shu sonni ichidan toqlarni koruvchi dastur tuzing!!
// let n = +prompt('n=')
// for (let i=0; i < n; i++) {
//     if (i % 2 != 0) {
//     console.log(i);
//     }
// }



//n son berilgan shu sonni ichidan juft koruvchi dastur tuzing!!
// let n = +prompt('n=')
// for (let i=0; i < n; i++) {
//     if (i % 2 == 0) {
//     console.log(i);
//     }
// }




//n son berilgan shu sonni ichidan juft va toq koruvchi dastur tuzing!!
// let n = +prompt('n=')
// for (let i=0; i < n; i++) {
//     if (i % 2 == 0) {
//         console.log('juft sonlar:',i);
//     }
// }
// for (let i=0; i < n; i++) {
//     if (i % 2 != 0){
//         console.log('toq sonlar:',i);
//     }
// }




//n son berilgan, n sondan kamaysh tartibda chqsin!
// let n = +prompt('n:')
// let amal = n.toString().split('').reverse().join('')*1;
// console.log(amal);



//n son berilgan 0 va ngacha sonlar orasidagi 5 ga karralisini tashlab ketuvchi dastur tuzing.
// let n = +prompt('n:');
// for(let i=0;i<=n;i++)
// {
//     if(i%5!=0){
//         console.log(i);
//     }
// }



//n butub son berilgan ngacha butun sonlarni kopaytmasini topuvchi dastur tuzing!
// let n=+prompt('n:');
// let n_gacha=1;
// for(let i=1;i<=n;i++){
//     n_gacha*=i;
//     }
//     console.log(n_gacha);







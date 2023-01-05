// console.log('Hello world')

// let
// var
// const

// let age = 22
// let age = 13

// let age = 22

// console.log(age);

// age = 25

// console.log(age);

//  +   -   /   *   **   %   ++a    a++   --a   a--

// console.log(9%2);   // 1
// console.log(15%12); // 3
// console.log(15%8);  // 7
// console.log(21%5);  // 1

//  ++a   =>  a = a + 1

// let son = 23

// ++son // son = son + 1
// console.log(son);
// son++ // son = son + 1

// console.log(son);

// let natija = 43

// console.log(++natija);
// console.log(natija++);
// console.log(natija);

// let a = 45

// a = a/5

// console.log(a);

// a++

// console.log(a--);

// a=a+8 //    a+=8
// a=a*8 //    a*=8
// a=a/8 //    a/=8

//                  TYPES
//    number,  string,  boolean,  NaN,  Null,  Undefined

// let say = 123
// let a = 'Salom'
// let b = "Salom"
// let c = `Salom`
// let d = true
// // let d = false
// let g

// let hi = "\"O'zbekiston mustaqil davlat!\"-dedi Javohir."

// console.log(hi);

// console.log(typeof(a));
// console.log(typeof(d));
// console.log(typeof(g));
// console.log(say/0);

// let a = 6
// // a = a = a+1

// console.log(a++);
// console.log(a);

// let name = 'Dilshod'
// let b = 2022
// let year = 2000

// console.log('Dilshodning yoshi ' + (b - year) + ' da.');

// console.log(11 + "11");  //Olima => '11' => '1111'
// console.log(3 * "22" + 45);  // Umar => 111
// console.log(45 / "9" - 23);  // Javohir => -18
// console.log(15 + "2" + 33 - 2);  // Umidjon => 46 => '15233' - 2 = 15231
// console.log((11 % "2") + 22);  // Muhammadamin => 11222 => 23
// console.log('11' - '22');

// number + number = number
// string + number = string
// number + string = string
// number - number = number
// string + string = string
// string - string = number
// number * string = number
// number / string = number
// string * number = number
// string / number = number
// string - number = number
// number - string = number

// let a = 453.9678

// let natija = Math.round(a)

// let natija = Math.ceil(a)

// let natija = Math.floor(a)
// let natija = Math.trunc(a)

// let a = Math.random() * 100;

// let rand = Math.ceil(a);

// let natija = Math.pow(2, 1/2);
// let natija = Math.max(1,2,4,4,2,23,4,56,7,33,4,46,7,9)
// let natija = Math.min(1,2,4,4,2,23,4,56,7,33,4,46,7,9,-11)

// console.log(natija);

// >   ;   <  ;    >=    ;    <=    ;    ==    ;   ===   ;   !=    ;   !==

//     ||    ;    &&

// console.log(12 < 90);
// console.log(12 >= '90');
// console.log(12 >= '12');
// console.log(12 === '12');
// console.log(12 !== '12');

// console.log(12%2 == 0 && 12%3 == 1 || 12 == '12');

//     &&
// 1 * 1 = 1
// 0 * 0 = 0
// 0 * 1 = 0
// 1 * 0 = 0

//     ||
// 1 + 1 = 1
// 0 + 1 = 1
// 1 + 0 = 1
// 0 + 0 = 0

// let son1 = +prompt("Birinchi sonni kiriting....")

// son1 = parseInt(son1)

// console.log(12 + +'12');

// if () {
//     // .
//     // .
//     // .
// } else {
//     // .
//     // .
//     // .
// }

// let son1 = prompt("Sonni kiriting..")

// if (son1 % 2 == 0 ) {
//     console.log(son1 + " soni juft");
// } else{
//     console.log(son1 + " soni toq");
// }

// let son1 = prompt("Sonni kiriting..")

// if ( son1%2 == 0 ){
//     if ( son1%3 == 0){
//         console.log(son1 + ' soni 2 va 3 ga bo\'linadi');
//     } else {
//         console.log(son1 + ' soni faqat 2 ga bo\'linadi');
//     }
// } else {
//     if (son1%3 == 0){
//         console.log("3 ga bo'linadi");
//     }else{
//         console.log( son1 + ' soni 2 ga ham 3 ga ham bo\'linmaydi');
//     }
// }

// if(){

// }else if (){

// }else if(){

// }else{

// }

// let a = +prompt("A sonni kiriting:::")
// let b = +prompt("B sonni kiriting:::")
// let c = +prompt("C sonni kiriting:::")

// if ( a>b && a>c ){
//     if (b>c) {
//         console.log(c, b, a);
//     }else{
//         console.log(b, c, a);
//     }
// } else if (b>a && b>c) {
//     if (a>c){
//         console.log(c, a, b);
//     }else{
//         console.log(a, c, b);
//     }
// }else if (c>a && c>b){
//     if(a>b){
//         console.log(b, a, c);
//     }else{
//         console.log(a, b, c);
//     }
// }

// let a = prompt('Ikki xonali son kiriting...')  // 98

// let bir = a%10
// let ikki = (a-a%10)/10

// alert(bir+ikki)

// let a = prompt('Uch xonali son kiriting...')  // 982

// let bir = a%10
// let ikki = (a%100 - a%10)/10
// let uch = (a-a%100)/100


//                                                uyga vazifa 

// let name1 = "Daler"
// let shot = "1221"
// let money = 12000
// let bank_shot = 15000

// let qu_name = prompt("Ismingizini kiriting...")
  
// if (name1 == qu_name) {
//    let qu_shot = prompt("Shot raqamni kiriting...")
//    if (shot == qu_shot) {
//     let balans = +prompt(money + 'So\'m pul bor \n qancha pul yechmoqchisiz?')
//     if (money >= balans+balans*0.01) {
//         let qolgan_sum = money - (balans+balans*0.01)
//         let bank_sum = bank_shot + balans*0.01
//         alert("Tranzaksiya muvofaqiyatli amalga oshdi. \n Shotingizda::" + qolgan_sum + "\n Bankdagi summa::"+ bank_sum + 'Bank xizmati uchun 1% ushlab qolindi')
//     } else{
//         alert("Mablag' yetarli emas")
//     }
//    } else {
//     alert("Shot raqamda xatolik bor")
//    }  
// } else {
//     alert("ismda xatolik bor")
// }







// 33-dars     ARRAY - MASSIV

// let data = [1,2,4,2,3,5,6,65,43,3,32,23, 'Salom', true, "hello", [12,3,2,4], 9]
// let fruits = ['Olma', 'Anor', 'Nok', ['Salom', 'Hello', [1,2,2,3,4,4,5,56]], 'O\'rik']

// let fruits = ['Olma', 'Nok', 'Anor']

// fruits.pop()
// fruits.push('Banan')
// fruits.shift()
// fruits.unshift('Uzum')
// console.log(fruits.length);
// console.log(fruits.join('🫡'));
// console.log(fruits.indexOf('Olma'));
// fruits.splice(1,3,'Banan', 'Uzum')

// console.log(fruits);

// let text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatum?";
// let arr = text.split('')
// let text = 'salom salom'
// let a = text.toLocaleLowerCase()
// let a = text.toLocaleUpperCase()
// let a = text.length
// let a = text.replace('salom', 'Hello guys')





// let text = ("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum earum Salom facere natus nobis explicabo! Est, exercitationem! Magni accusamus Wepro id, earum qui alias wepro facere aliquam veritatis ratione is sapiente dolorum ducimusthe perspicBestiatis?")

// console.log(text);



//                                uyga vazifa 

// let object = {
//     Country: {
//         Uzb: {
//             GeneralMotors: {
//                 name: "Gentra",
//                 color:"gray",
//                 created:2018,
//                 year:2020,
//                 price:13000
//             }
//         }
//         // Rus: {
//         //     RussianMotors: {
//         //         name_: "Lada",
//         //         color: "red",
//         //         created:1998,
//         //         year:2004,
//         //         price:6000
//         //     }
//         // }

//         // Usa: {
//         //     Tesla:{
//         //         name_: "Tesla",
//         //         color:"Darkblue",
//         //         created:2020,
//         //         year:2022,
//         //         price:140000
//         //     }
//         // }
//     }
// }

// // console.log(object.Country.Uzb);
// let uz = prompt("Davlatni nomini kiriting...")
// if (object == uz) {
//     let gm = prompt("Avtomobil nomini kiriting..")
//     if (object.Country.Uzb.GeneralMotors == gm ) {
        
//     } else {
//         alert("Avtomobil nomida xatolik bor!!")
//     }
// } else {
//     alert("Davlat nomida xatolik bor!!")
// }


// let name_co = {
//     'Uzb':
//     'Rus':
//     'Usa':
// }


// let co_name = prompt("Davlat nomini kiriting..")
//  if (name_co == co_name) {

//  } else {
//     alert("Davlat nomida xatolik bor! \n Qaytadan urinib ko'ring!!")
//  }
    

//


//                               LOOP
// let a = ['salom', 121, 3101, 'hello', 'world' , 0101 ]
// let text = []
// let number = []

                            //   
// let toq = []
// let juft = []

// for(let i=0; i<=100; i++) {
    
    // 
// let a = prompt("Xoxlagan sonningizni kiriting..")

// for(let i=0; i<=100; i++){

//   if(i%2 == 0){
//     console.log(i+'-juft son;');
//     if(i == a) {

//     } else {
        
//     }
//   } else {
//     console.log(i+'-toq son;');
//   }
// }
   //
   
   // let n = +prompt("Ixtiyoriy son kiriting")
   // let count = 1 
   
   // for(let i=1; i<=n; i++) {
   //     count*=i
   //     console.log(count);
   // }

//                             uyga vazifa loop


// let son = prompt("Sonni kiriting...")

// let a = son.split("")
// let sum = 0

// for (let i=0; i<a.length; i++) {
//     sum+= +a[i]
// }
// console.log(sum);


//                                loop 2


let nums = [12,4,4,4,43,45,76,8,5,3,4,6,78,3,4]

for( let item in nums) {
   if(nums[item] == 4 ){
    if(nums[item] == 4) {
        nums.splice(item,1)
    }
    nums.splice(1,1)
   } 
}
console.log(nums);




//                                                                                                           

// let ism = prompt("Ismingizni kiriting:")

// let bosh = ism.charAt().toUpperCase()
// let davomi = ism.slice(1).toLowerCase()
// let result = bosh + davomi 

// alert('Salom, ${ism}')

// // charAt()
// // slice()
// //toUpperCase
// //toLowerCase
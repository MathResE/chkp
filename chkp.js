let buttonEnter=document.querySelector('.startButton');
let enterNamber=document.querySelector('.inputNumber');
let resaltOut=document.querySelector('.resalt');


function selectInvertorSecondHalf(resalt){
let lengthResalt=resalt.toString().length;
let halfLenght=lengthResalt/2;

let firstHalfResalt=resalt.slice(0, halfLenght); //Первая поливина отстается такой же
let secondHalfResalt=resalt.slice(halfLenght, lengthResalt); //Вторая половина должна инвертироваться

let lengthSecondHalf=secondHalfResalt.toString().length;

let arrSecondHalf={};
let shr=secondHalfResalt;
for (let i = lengthSecondHalf; i > 0 ; i--) { // Заненсение в массив
   
    arrSecondHalf[i]=Math.floor(shr%10);
    Math.floor(shr/=10);
   
    
}
let SHR=""
for (let i = 1; i < lengthSecondHalf+1; i++) { //Инверсия
  
    if(arrSecondHalf[i]===1){arrSecondHalf[i]=0}
    else{arrSecondHalf[i]=1};  
    SHR=SHR+arrSecondHalf[i];
  
}

return(firstHalfResalt+SHR);


}

function selectInvertorFirstHalf(resalt){
    let lengthResalt=resalt.toString().length;
    let halfLenght=lengthResalt/2;
    
    let firstHalfResalt=resalt.slice(0, halfLenght); //Первая поливина инверт
    let secondHalfResalt=resalt.slice(halfLenght, lengthResalt); //Вторая половина должна остаться такой же
    
   // let lengthFirstHalf=HalfResalt.toString().length;
    
    let arrFirstHalf={};
    let fhr=firstHalfResalt;
    for (let i = halfLenght; i > 0 ; i--) { // Заненсение в массив
       
        arrFirstHalf[i]=Math.floor(fhr%10);
        Math.floor(fhr/=10);
       
        
    }
    let FHR=""
    for (let i = 1; i < halfLenght+1; i++) { //Инверсия
      
        if(arrFirstHalf[i]===1){arrFirstHalf[i]=0}
        else{arrFirstHalf[i]=1};  
        FHR=FHR+arrFirstHalf[i];
      
    }
    
    return(FHR+secondHalfResalt);
    //alert(SHR);
    
    }
    



buttonEnter.onclick=()=>{
    polinom=enterNamber.value;
//alert(polinom);
let arrPolinom={};
let resalt="1";
let errorInput=false;
lengthPolinom=polinom.toString().length;

for (let i = 0; i < lengthPolinom; i++) {
    

//namberEnterInArr[i]=Math.floor(namberEnter%10);
  //   Math.floor(namberEnter/=10);
   arrPolinom[i]=Math.floor(polinom%10);
    Math.floor(polinom/=10);
 
   // alert(arrPolinom[i]);
}

let prob1=true;
for (let j = 0; j < lengthPolinom; j++) {

 
   // alert(arrPolinom[j]);

if (prob1) {
    if(arrPolinom[j]===0){resalt="11"}
    if(arrPolinom[j]===1){resalt="10"}

    prob1=false;
}

else{

    if(arrPolinom[j]===0){resalt=resalt+selectInvertorSecondHalf(resalt)}
    if(arrPolinom[j]===1){resalt=resalt+selectInvertorFirstHalf(resalt)}
}
if(arrPolinom[j]!==1&&arrPolinom[j]!==0){
   // alert("Вы ввели не число, либо оно не в двоичной форме")
    errorInput=true;
    break;
}

}
if (errorInput===true) {
    resaltOut.innerHTML="Вы ввели не число, либо оно не в двоичной форме";
}
else{
resaltOut.innerHTML="Сформированная ЧКП: "+resalt;}

}
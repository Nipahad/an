let rslt = document.querySelector(".rslt");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");

let a = 0;
inc.addEventListener('click', function(){
 
    if(a === 10){
        alert("r na");
        inc.style.backgroundColor = "aqua"
    }else{
        a++;
        rslt.innerHTML = a;
    }
})
let c = 0;
dec.addEventListener('click',()=>{
    a--;
    rslt.innerHTML= a;

    if(a<1){
        alert("sesh...!")
    }else{
        a--;
        rslt.innerHTML= a;
    }
})







let btn_1 = document.querySelector('.btn_1');
let btn_2 = document.querySelector('.btn_2');
let input = document.querySelector('.input');

btn_1.addEventListener('click',() =>{
 input.type ="text";
 btn_1.style.display = "none";
 btn_2.style.display = "block";
});
   
btn_2.addEventListener('click',()=>{ 
 input.type = "password";
 btn_2.style.display ="none";
 btn_1.style.display = "block";
});
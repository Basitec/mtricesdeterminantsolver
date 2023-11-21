let btn1 = document.querySelector(".two");
let btn2 = document.querySelector(".three");
let a = document.querySelector("#no1");
let b = document.querySelector("#no2");
let c = document.querySelector("#no3");
let d = document.querySelector("#no4");
let button = document.querySelector(".deter1")
let p = document.querySelector("p")
let f = document.querySelector("#num1");
let se = document.querySelector("#num2");
let t = document.querySelector("#num3");
let fo = document.querySelector("#num4");
let fi =document.querySelector("#num5");
let si =document.querySelector("#num6");
let sev = document.querySelector("#num7");
let ei =document.querySelector("#num8");
let ni = document.querySelector("#num9");
let button2 = document.querySelector(".deter2");
let p2 = document.querySelector(".answer")
btn1.addEventListener("click",function () {
let section1 = document.querySelector(".twoby")
    section1.classList.toggle("show")
    btn1.classList.toggle("hide")
    btn2.classList.toggle("hide")

})
btn2.addEventListener("click",function () {
let section2 = document.querySelector(".threeby")
    
        section2.classList.toggle("show")
    btn2.classList.toggle("hide")
    btn1.classList.toggle("hide")


    })
button.addEventListener("click",function () {
    let ad = (a.value)*(d.value);
    let bc = (b.value)*(c.value);
    let derterminant1 = ad-bc;
    // alert(derterminant1)
    p.innerHTML="The Determinant of the two by two matrices is  "+derterminant1;
})
button2.addEventListener("click",function () {
    let first = +(f.value)*((fi.value*ni.value) - (si.value*ei.value));
    // console.log(first)
    let second = -(se.value)*((fo.value*ni.value) - (sev.value*si.value));
    let third = +(t.value)*((fo.value*ei.value) - (fi.value*sev.value));
    let derterminant2 = first + second + third ;
    p2.innerHTML="The determinant of the three by three matrices is "+derterminant2
})
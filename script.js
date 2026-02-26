window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekElerese5();
    elemekFormazasa1();
    esemenyKezeles1();
});

function elemekElerese1() {
   const hkettoElen=document.querySelectorAll("section h2 ")[0]
   console.log(hkettoElen.innerHTML)
    
}
function elemekElerese2() {
   const elsopElem=document.getElementById("ide")
   elsopElem.innerHTML="Jó regelt"
    
}

function elemekElerese3() {
    const beleteszElem=document.getElementsByClassName("ide")
    beleteszElem[0].innerHTML="Jó regelt"
}

function elemekElerese4(){
    let numbers = []
    for(let i=0; i<5; i++)
    {
        numbers.push(getRandomInt(1,30))
    }

}

function elemekFormazasa1(){
    const hkettoElen=document.querySelectorAll("section h2 ")[0]
    listaElem[0].classList.add("numbers")
}

function esemenyKezeles1(){
    const gombElem=document.getElementById("BTN")
    gombElem.addEventListener("click",function()){
        document.getElementById("szoveg").innerHTML="esemeny"
    }
}
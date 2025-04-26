var numero = 0
var bonus1= 0
var bonus2= 0
function Clicar(){
    numero += 1 + bonus1 + bonus2;

    document.querySelector("#contador").innerText= numero;
}
function Clicar2(){
    if (numero >= 20){
        bonus1 = 1;
    } else {
        alert("criterios não atingidos você precisa de 20 pontos para continuar, atualmente você tem: " + numero);
    }  
}
function Clicar3(){
    if (numero >= 100){
        bonus2 = 2;
    } else {
        alert("criterios não atingidos você precisa de 100 pontos para continuar, atualmente você tem: " + numero);
    }  
}
function Clicar4(){
    if (numero >= 400){
        window.location.href = "https://bom-dia-eliti.vercel.app/"; 

    } else {
        alert("criterios não atingidos você precisa de 400 pontos para continuar, atualmente você tem: " + numero);
    }  
}

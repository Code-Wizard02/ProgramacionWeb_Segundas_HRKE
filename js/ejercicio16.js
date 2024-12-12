
function sumar (){
    let texto1 = document.getElementById("num1").value;
    let num1 = parseInt(texto1);
    let texto2 = document.getElementById("num2").value;
    let num2 = parseInt(texto2);
    let result = num1 + num2;
    document.getElementById("resultado").value = result;
    console.log(result);
    
}

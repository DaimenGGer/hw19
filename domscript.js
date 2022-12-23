// const plus = document.querySelector("#plus")
// const minus = document.querySelector("#minus")
// const del = document.querySelector("#del")
// const umno = document.querySelector("#umno")
// const variants = document.querySelector("button")
const resultText = document.querySelector("#result")
const rav = document.querySelector("#rav")
const n1 = document.querySelector("#num1")
const n2 = document.querySelector("#num2")
const errorMessage = document.querySelector("span")

const variants = [plus, minus, del, umno, rav];

function calc(event){
    event.preventDefault();

    if (!n1.value && !n2.value){
        errorMessage.innerHTML="Напишите что нибудь";
    }else if (!isNaN(n1.value) && !isNaN(n2.value)){
        errorMessage.innerHTML="";
    }else{
        errorMessage.innerHTML = "not num";
    }
}
let count = 0;
variants.forEach((item, index, arr) => {
    if (!isNaN(n1.value) && !isNaN(n2.value)){

        item.addEventListener("click", function(){
            switch (item.innerHTML){
                case "+":
                    count = parseInt(n1.value) + parseInt(n2.value);
                    break;
                case "-":
                    count = parseInt(n1.value) - parseInt(n2.value);
                    break;
                case "/":
                    count = parseInt(n1.value) / parseInt(n2.value);
                    break;
                case "*":
                    count = parseInt(n1.value) * parseInt(n2.value);
                    break;
                case "=":
                    resultText.innerHTML = Math.round();
                default:
                    resultText.innerHTML = count;
            }
        })
    }
});

// plus.addEventListener("click", () => {
//     let result = parseInt(n1.value) + parseInt(n2.value);
//     if (result>=0){
//         calculator(result);
//     }else(result<=0)
//     calculator(result);
// })  

// const calculator = () => {
//     resultText.innerHTML = result
// }

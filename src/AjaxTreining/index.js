



/*

let a = 5;

$.ajax('https://repetitora.net/api/JS/Images')

a=8
console.log(a)
*/

























const resultBlock=document.querySelector("#result")
const clickMeButton=document.querySelector("#click-me")
clickMeButton.addEventListener("click",makeRequest)

function makeRequest(){
    resultBlock.innerHTML='result'
}

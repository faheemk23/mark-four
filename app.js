var btnTranslate=document.querySelector("#btn-translate")
var inputTxt=document.querySelector("#input-txt")
var output=document.querySelector("#output")

function urlGenerator(text){
    return "https://api.funtranslations.com/translate/shakespeare.json?text="+text
}

function errorHandler(error){
    return alert("There is something wrong with the server. Try again later.")
}


btnTranslate.addEventListener("click",clickhandler)

function clickhandler(){
    var text=inputTxt.value 
    fetch(urlGenerator(text))
    .then(response => response.json())
    .then(json => output.innerText=json.contents.translated)
    .catch(errorHandler)
}


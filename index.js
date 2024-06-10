let saveButtonEle = document.getElementById("saveButton");
let inputTextEle = document.getElementById("inputText");

saveButtonEle.onclick = function(){
    let textVal = inputTextEle.value ;
    if(textVal === ""){
        textVal = localStorage.setItem("your story",textVal)
    }else{
        textVal = localStorage.setItem("your story",textVal);
    }
};
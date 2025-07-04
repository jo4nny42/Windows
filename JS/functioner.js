    const inputBox = document.getElementById("textAdded");
    const resultList = document.getElementById("listContent");

function addTask(){
    if(inputBox.value === ""){
        console.log("Empty");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        resultList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

function saveTask(){
    localStorage.setItem("data",resultList.innerHTML);
}

function showTask(){
    resultList.innerHTML = localStorage.getItem("data");
}

resultList.addEventListener(
    "click",
    function (e){  
        if(e.target.tagName === "LI"){
            e.target.classList.toggle('checked');
            saveTask();
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveTask();
        }
    },
    false
);

showTask();
var ANS = 0;


function append(input){

    displayStr = document.getElementById("display").value

    if(displayStr == 0 ){ 
        document.getElementById("display").value = input;
    }else if(displayStr == ANS && isNaN(input)){
        document.getElementById("display").value += input;
    }else if(displayStr == ANS && !isNaN(input)){
        document.getElementById("display").value = input;
    }else{
        document.getElementById("display").value += input;
    }
}

function clr(){
    document.getElementById("display").value = "0";
}

function del(){
    displayStr = document.getElementById("display").value

    if(displayStr.substr(displayStr.length - 3) == "ANS"){
        document.getElementById("display").value = displayStr.slice(0, -3);
    }else{
        document.getElementById("display").value = displayStr.slice(0, -1);    
    }
}


function ans(){
    displayStr = document.getElementById("display").value

    if(displayStr == 0){ 
        document.getElementById("display").value = "ANS";
    }else if(isNaN(displayStr.substr(displayStr.length - 1))){
        document.getElementById("display").value += "ANS";
    }else{
        document.getElementById("display").value += "×ANS";
    }
}


function eql(){

    var displayStr = document.getElementById("display").value;

    displayStr = displayStr.replace(/×/gi, "*");
    displayStr = displayStr.replace(/÷/gi, "/");
    displayStr = displayStr.replace("ANS", ANS);

    try{
        eval(displayStr);
    } catch (e) {
        if(e instanceof ReferenceError  || e instanceof SyntaxError){
            let result = "Syntax Error";
            document.getElementById("display").value = result;
        }
    } 

    let result = eval(displayStr);
    ANS = result;
    document.getElementById("display").value = result;
}

var ANS = 0;


function append(input){

    let displayStr = document.getElementById("display").value

    if((displayStr == 0 && !isNaN(input)) || (displayStr == 0 && input == '(')
        || (displayStr == 0 && input == ')') 
        ||(displayStr.includes('='))
        ||(displayStr == "Syntax Error")){ 

        document.getElementById("display").value = input;
        
    }else if(!isNaN(input) && displayStr.substr(displayStr.length - 3) == "ANS"){
        document.getElementById("display").value += '×' + input; 
    }else{
        document.getElementById("display").value += input;
    }
}

function clr(){
    document.getElementById("display").value = "0";
}

function del(){
    let displayStr = document.getElementById("display").value

    if(displayStr.substr(displayStr.length - 3) == "ANS"){
        document.getElementById("display").value = displayStr.slice(0, -3);
    }else if(displayStr.includes("Error") || displayStr.length == 1 || displayStr.includes('=')){
        clr();  
    }else if(displayStr == '0'){

    }else{
        document.getElementById("display").value = displayStr.slice(0, -1);    
    }
}


function ans(){
    let displayStr = document.getElementById("display").value

    if(displayStr == 0){ 
        document.getElementById("display").value = "ANS"; //if nothing input yet
    }else if(isNaN(displayStr.substr(displayStr.length - 1))){ //if last char is a symbol
        document.getElementById("display").value += "ANS";
    }else{
        document.getElementById("display").value += "×ANS"; //if last char is a number
    }
}


function eql(){

    let displayStr = document.getElementById("display").value;

    displayStr = displayStr.replace(/×/gi, "*");
    displayStr = displayStr.replace(/÷/gi, "/");
    displayStr = displayStr.replace("ANS", ANS);

    try{
        let result = eval(displayStr);

        ANS = result;
        document.getElementById("display").value += '=' + result;

    } catch (e) {
        if(e instanceof ReferenceError  || e instanceof SyntaxError){
            let result = "Syntax Error";
            document.getElementById("display").value = result;
        }
    } 

    
}

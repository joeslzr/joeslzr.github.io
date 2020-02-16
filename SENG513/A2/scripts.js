var ANS = 0;
var complete = false;

function append(input){

    let displayStr = document.getElementById("display").value

    // cases where we need to refresh/overwrite display
    if( (displayStr != "0.") &&
        (displayStr == 0 && !isNaN(input)) 
        || (displayStr == 0 && input == '(')
        || (displayStr == 0 && input == ')') 
        || (displayStr == "Syntax Error")
        || complete == true
        ){ 
        document.getElementById("display").value = input;
        document.getElementById("mini-display").innerHTML = "Ans = " + ANS;
        complete = false;
        
    }else if(!isNaN(input) && displayStr.substr(displayStr.length - 3) == "Ans"){ // Automatically multiply by ANS
        document.getElementById("display").value += '×' + input; 
    }else{
        //else append to display
        document.getElementById("display").value += input;
    }
}

function clr(){
    document.getElementById("display").value = "0";
    document.getElementById("mini-display").innerHTML = "Ans = " + ANS;
}

function del(){
    let displayStr = document.getElementById("display").value

    if(displayStr.substr(displayStr.length - 3) == "Ans"){  //Del whole ANS string
        document.getElementById("display").value = displayStr.slice(0, -3);
    }else if(displayStr.includes("Error") || displayStr.length == 1 || displayStr.includes('=')){ //Delete Syntax error messages
        clr();  
    }else if(displayStr == '0'){ //if display is just 0, dont do anything
    }else{
        document.getElementById("display").value = displayStr.slice(0, -1);    
    }
}


function ans(){

    let displayStr = document.getElementById("display").value

    if(displayStr == 0 || complete == true){ 
        document.getElementById("display").value = "Ans"; //if nothing input yet or theres already a solved expression
        document.getElementById("mini-display").innerHTML = "Ans = " + ANS;
    }else if(isNaN(displayStr.substr(displayStr.length - 1))){ //if last char is a symbol
        document.getElementById("display").value += "Ans";
    }else{
        document.getElementById("display").value += "×Ans"; //if last char is a number
    }
}


function eql(){

    let displayStr = document.getElementById("display").value;

    if(displayStr.includes('=') || displayStr == 0){
        document.getElementById("display").value = "0";
        return; 
    }

    let equation = displayStr;

    // replace symbols for eval
    displayStr = displayStr.replace(/×/gi, "*");
    displayStr = displayStr.replace(/÷/gi, "/");
    displayStr = displayStr.replace("Ans", ANS);

    try{
        let result = eval(displayStr);
        ANS = result;
        
        document.getElementById("mini-display").innerHTML = equation + '=';
        document.getElementById("display").value = result;
        complete = true;

    } catch (e) {
        if(e instanceof ReferenceError  || e instanceof SyntaxError){
            let result = "Syntax Error";
            document.getElementById("display").value = result;
        }
    } 

    
}

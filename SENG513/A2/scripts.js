var ANS = 0;

function append(input){

    let displayStr = document.getElementById("display").value
    
    if((displayStr == 0 && !isNaN(input) && displayStr.substr(displayStr.length - 1) != '.') // if blank and inputting a new number overwrite the 0
        || (displayStr == 0 && input == '(')
        || (displayStr == 0 && input == ')') 
        ||(displayStr.includes('='))
        ||(displayStr == "Syntax Error")
        ){ 
        
        console.log(1);
            
        
        document.getElementById("display").value = input;

    }else if(!isNaN(input) && displayStr.substr(displayStr.length - 3) == "ANS"){
        document.getElementById("display").value += '×' + input; 
        console.log(2);
    }else{
        console.log(4);
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

    if(displayStr == 0 || displayStr.includes("=")){ 
        document.getElementById("display").value = "ANS"; //if nothing input yet or theres already a solved expression
    }else if(isNaN(displayStr.substr(displayStr.length - 1))){ //if last char is a symbol
        document.getElementById("display").value += "ANS";
    }else{
        document.getElementById("display").value += "×ANS"; //if last char is a number
    }
}


function eql(){

    let displayStr = document.getElementById("display").value;

    if(displayStr.includes('=') || displayStr == 0){
        document.getElementById("display").value = "0";
        return; 
    }


    displayStr = displayStr.replace(/×/gi, "*");
    displayStr = displayStr.replace(/÷/gi, "/");
    displayStr = displayStr.replace("ANS", ANS);




    try{
        let result = eval(displayStr);

        console.log(result);
        if(result== "" || result == undefined){
            let result = "Syntax Error";
        }else{
            ANS = result;
        }
        document.getElementById("display").value += '=' + result;

    } catch (e) {
        if(e instanceof ReferenceError  || e instanceof SyntaxError){
            let result = "Syntax Error";
            document.getElementById("display").value = result;
        }
    } 

    
}

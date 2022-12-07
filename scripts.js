var num = "" ;
var num2 = "" ;
var op = "";

function N1(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '1';
    num = num + '1';
}
function N2(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '2';
    num = num + '2';
}
function N3(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '3';
    num = num + '3';
}
function N4(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '4';
    num = num + '4';
}
function N5(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '5';
    num = num + '5';
}
function N6(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '6';
    num = num + '6';
}
function N7(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '7';
    num = num + '7';
}
function N8(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '8';
    num = num + '8';
}
function N9(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '9';
    num = num + '9';
}
function N0(){
    if(num2 != ""){
        document.getElementById('txtResultado').value = null;
    }
    document.getElementById('txtResultado').value = num + '0';
    num = num + '0';
}


function Soma(){
    
    if(num2 != ""){
        if(num == ""){
            num = "0";
        }
        num2 = parseFloat(num2) + parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
    }
    else{
        document.getElementById('txtResultado').value = null;
        num2 = num;
        num = "";
    }
    op = "+";
}

function Subtracao(){
    if(num2 != ""){
        if(num == ""){
            num = "0";
        }
        num2 = parseFloat(num2) - parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
    }
    else{
        document.getElementById('txtResultado').value = null;
        num2 = num;
        num = "";
    }
    op = "-";
}

function Multiplicacao(){
    if(num2 != ""){
        if(num == ""){
            num = "1";
        }
        num2 = parseFloat(num2) * parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
    }
    else{
        document.getElementById('txtResultado').value = null;
        num2 = num;
        num = "";
    }
    op = "*";
}

function Divisao(){
    if(num2 != ""){
        if(num == ""){
            num = "1";
        }
        num2 = parseFloat(num2) / parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
    }
    else{
        document.getElementById('txtResultado').value = null;
        num2 = num;
        num = "";
    }
    op = "/";
}

function Igual(){
    if(num == ""){
        num = "0";
    }
    if(op == "+"){
        num2 = parseFloat(num2) + parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
        op = "";
    } 
    if(op == "-"){
        num2 = parseFloat(num2) - parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
        op = "";
    }
    if(op == "*"){
        if(num == ""){
            num = "1";
        }
        num2 = parseFloat(num2) * parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
        op = "";
    }
    if(op == "/"){
        if(num == ""){
            num = "1";
        }
        num2 = parseFloat(num2) / parseFloat(num);
        document.getElementById('txtResultado').value = num2;
        num = "";
        op = "";
    }
}

function Limpar(){
    document.getElementById('txtResultado').value = null;
    num = "";
    num2 = "";
}
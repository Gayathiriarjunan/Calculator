function getinput(val){
 document.getElementById("display").value=document.getElementById("display").value+val;
}

function clearinput(){
    document.getElementById("display").value=" "
}
function euqlintput(){
    var userinput=document.getElementById("display").value;
    var result = eval(userinput);

    document.getElementById("display").value=result;
}

//get pressed button value
function getInputValue(val){
    screen =  document.getElementById('calc_screen').innerHTML;
    if(screen == 0){
        document.getElementById('calc_screen').innerHTML=val;
    }
    else{
    document.getElementById('calc_screen').innerHTML+=val;
    }
}
//evaluate for answer
function evaluateAnswer(){
  var  result =  document.getElementById('calc_screen').innerHTML;
   var showAns= eval(result);

   document.getElementById('calc_screen').innerHTML=showAns;
}

//clear screen
function clearScreen(){
    
    document.getElementById('calc_screen').innerHTML='0';
}


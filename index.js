let asking;

btn.addEventListener("click", handler);

function handler(){
    asking=inp.value;
    
    for (let i=0; i<asking.length; i++){
        if ((+asking[i]!=0)&&(+asking[i]!=1)){
            alert ('неверный ввод!');
            asking=inp.value='';
            break;
        }
    }   
    
    if(inp.value!=''){
    while (asking.length<8){
        asking="0"+asking
    }
    let result=0;    
    for (let i=0;i<8;i++){
        result=result+ +asking[i]*(2**(7-i));
    }
    output.innerHTML =`результат в десятичной системе: ${result}`;
    inp.value='';
    }
}


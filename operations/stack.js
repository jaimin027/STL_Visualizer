let stack=[];

function updateStack(){
    let res="stack={ ";
    for(let i=stack.length -1;i>=1;i--){
        res+=String(stack[i]);
        res+=", ";
    }
    if(stack.length>=1) res+=stack[0];
    res+=" }"
    document.getElementById("stack").innerHTML=res;
}

function push(){
    let x=Math.floor(Math.random() * 100);
    stack.push(x);
    updateStack();
}

function pop(){
    if(stack.length>0){
        stack.pop();
        updateStack();
    }else{
        alert("OOPS! Stack is Empty :(");
    }
}

function stackTop(){
    if(stack.length>0){
        alert("Stack's Top Element is "+stack[stack.length -1]);
    }else{
        alert("OOPS! Stack is Empty :(");
    }
}

function empty(){
    if(stack.length>0){
        alert("False, Stack is Not Empty!");
    }else{
        alert("True, Stack is Empty!");
    }    
}
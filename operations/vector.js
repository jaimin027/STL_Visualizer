let vector=[]

function updateVector(){
    let res="vector={ ";
    for(let i=0;i<vector.length -1;i++){
        res+=String(vector[i]);
        res+=", ";
    }
    if(vector.length>=1) res+=vector[vector.length -1];
    res+=" }"
    document.getElementById("vector").innerHTML=res;
}

function push_back(){
    let x=Math.floor(Math.random() * 100);
    vector.push(x);
    updateVector();
}

function pop_back(){
    if(vector.length>0){
        vector.pop();
        updateVector();
    }else{
        alert("OOPS! Vector is Empty :(");
    }
}

function insertAt(){
    let at=Math.floor(Math.random() * vector.length);
    let x=Math.floor(Math.random() * 100);
    vector.splice(at,0,x);
    alert("Inserting "+ x +" at Index "+ at);
    updateVector();
}

function erase(){
    let start=Math.floor(Math.random() * vector.length);
    let end=Math.floor(Math.random() * vector.length);
    if(start>end){
        [start,end]=[end,start];
    }
    alert("Erasing elements from index "+ start + " to index "+end);
    vector.splice(start,end-start);
    updateVector();
}

function getSize(){
    alert("Size of Vector is "+ vector.length);
}

function clearVector(){
    vector=[];
    updateVector();
}
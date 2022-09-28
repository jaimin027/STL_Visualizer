let queue=[];

function updateQueue(){
    let res="queue={ ";
    for(let i=0;i<queue.length -1;i++){
        res+=String(queue[i]);
        res+=", ";
    }
    if(queue.length>=1) res+=queue[queue.length -1];
    res+=" }"
    document.getElementById("queue").innerHTML=res;
}

function push(){
    let x=Math.floor(Math.random() * 100);
    queue.push(x);
    updateQueue();
}

function pop(){
    if(queue.length>0){
        queue.shift();
        updateQueue();
    }else{
        alert("OOPS! Queue is Empty :(");
    }
}

function front(){
    if(queue.length>0){
        alert("Queue's Front element is "+queue[0]);
    }else{
        alert("OOPS! Queue is Empty :(");
    }
}

function empty(){
    if(queue.length>0){
        alert("False, queue is Not Empty!");
    }else{
        alert("True, queue is Empty!");
    }    
}
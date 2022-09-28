let set= new Set();

function updateSet(){
    let res="set={ ";
    let len=0;
    set.forEach(function (value) 
    { 
        res+=value;
        if(len!=set.size-1) res+=" , ";
        len++; 
    });
    res+=" }";
    document.getElementById("set").innerHTML=res;
}

function insert(){
    let key=Math.floor(Math.random() * 100);
    set.add(key);
    updateSet();
}

function find(){
    let key=Math.floor(Math.random() * 100);
    alert("Finding key "+ key);
    if(set.has(key)){
        alert("Key Found!");
    }else{
        alert("Key Not Found!");
    }
}

function eraseKey(){
    let key=Math.floor(Math.random() * 100);
    alert("Deleting key "+ key);
    if(set.has(key)){
        set.delete(key);
        alert("Key Deleted Successfully!");
    }else{
        alert("Key Not Found!");
    }
}

function setClear(){
    set.clear();
    updateSet();
}
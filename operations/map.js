let map= new Map();

function updateMap(){
    let res="map={ ";
    let len=0;
    map.forEach(function (item, key, mapObj) 
    { 
        res+=key.toString()+" : "+item.toString();
        if(len!=map.size-1) res+=" , ";
        len++; 
    });
    res+=" }";
    document.getElementById("map").innerHTML=res;
}

function insert(){
    let key=Math.floor(Math.random() * 100);
    let val=String.fromCharCode(97+ Math.floor(Math.random() * 26));
    map.set(key,val);
    updateMap();
}

function find(){
    let key=Math.floor(Math.random() * 100);
    alert("Finding key "+ key);
    if(map.get(key)){
        alert("Key found with value "+ map[key]);
    }else{
        alert("Key Not Found!");
    }
}

function eraseKey(){
    let key=Math.floor(Math.random() * 100);
    alert("Deleting key "+ key);
    if(map.get(key)){
        map.delete(key);
        alert("Key Deleted Successfully!");
    }else{
        alert("Key Not Found!");
    }
}

function mapClear(){
    map.clear();
    updateMap();
}
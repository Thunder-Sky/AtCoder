i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[1].split(""),[x,y]=[0,0],q=[],q.push(x+""+y);
i.map(function(value){
    if(value=="R"){
        x++;
    }
    else if(value=="L"){
        x--;
    }
    else if(value=="U"){
        y++;
    }
    else {
        y--;
    }
    q.push(x+""+y);
})
h={};
q.map(function(value){
    if(h[value]===undefined){
        h[value]=1;
    }
    else {
        h[value]=h[value]+1;
    }
})
h=Object.keys(h).map((n)=>({name:n, val:h[n]}));
ans="No";
h.map(function(value){
    if(value.val>1){
        ans="Yes";
    }
})
console.log(ans);

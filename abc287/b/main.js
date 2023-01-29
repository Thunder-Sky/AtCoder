i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
a=Number(i[0].split(" ")[0]);
b=Number(i[0].split(" ")[1]);
i.shift();
q=[];
r=[];
for(c=0;c<a;c++){
    q.push(i[c].split("")[3]+i[c].split("")[4]+i[c].split("")[5]);
}
for(c=a;c<i.length-1;c++){
    r.push(i[c]);
}
c=0;
q.map(function(value){
    if(!(r.indexOf(value) == -1)){
        c++;
    }
})
console.log(c);

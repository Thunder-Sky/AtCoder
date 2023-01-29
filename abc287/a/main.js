i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
p=Number(i[0]);
i.shift();
i.pop();
c=0;
i.map(function(value){
    if(value == "For"){
        c++;
    }
})
console.log((p/2<=c)?"Yes":"No")

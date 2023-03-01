i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0].split(""),t=-1;
i.map(function(value, number){
    if(value==value.toUpperCase()){
        t=number+1;
    }
})
console.log(t)

i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0].split("");
i.map(function(value, number){
    if(value=="0"){
        i[number]=1;
    }
    else {
        i[number]=0;
    }
});
console.log(String(i).replace(/,/g, ""));

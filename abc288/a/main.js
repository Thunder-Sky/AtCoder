i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n"),i.shift(),i.pop();
i.map(function(value){
    a=value.split(" ");
    a.map(function(value, number){a[number]=Number(value)});
    console.log(a[0]+a[1]);
})

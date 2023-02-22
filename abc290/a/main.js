i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n"),t=i[1].split(" ").map((n)=>Number(n)),z=i[2].split(" ").map((n)=>Number(n)),m=0;
z.map(function(value){m+=t[value-1]});
console.log(m)

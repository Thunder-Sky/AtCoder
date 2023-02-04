i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n"),t=Number(i[0].split(" ")[1]),i.shift(),i.pop(),d=[];
i.map(function(value, number){if(number<t){d.push(value)}});
d.sort();
d.map(function(value){console.log(value)});

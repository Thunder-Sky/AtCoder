i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[1];
console.log(i.replace(/na/g, "nya"));

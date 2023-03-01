i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n"),i.pop(),[a,b]=i,a=Number(a),b=b.split(" ").map(Number);
b.sort((f,s)=>f-s);
for(c=0;c<a;c++){
  b.shift(),b.pop();
}
q=0,b.map((n)=>q+=n);
console.log((q/b.length).toFixed(15));

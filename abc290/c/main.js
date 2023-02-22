i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n"),t=Number(i[0].split(" ")[1]),i=i[1].split(" ").map((n)=>Number(n)),b=-1;
for(c=0;c<t;c++){
    if((i.indexOf(c)==-1)&&(b==-1)){
        b=c+1;
    }
}
console.log((b==-1)?t:b);

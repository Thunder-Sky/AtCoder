i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n"),[n,q]=i[0].split(" ").map(Number),i.shift(),i.pop(),t=[];
for(c=0;c<n;c++){
    t.push([0,0]);
}
for(c=0;c<i.length;c++){
    [w,e]=i[c].split(" ").map(Number);
    if(w==1){
        t[e-1][0]=t[e-1][0]+1
    }
    else if(w==2){
        t[e-1][1]=t[e-1][1]+1
    }
    else {
        if((t[e-1][0]>=2)||(t[e-1][1]>=1)){
            console.log("Yes");
        }
        else {
            console.log("No");
        }
    }
}

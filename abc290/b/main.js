i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n"),w=Number(i[0].split(" ")[1]),i=i[1].split(""),s=0;
i.map(function(value, number){
    if(!(value=="x")){
        if(w>s){
            s++;
        }
        else {
            i[number]="x"
        }
    }
})
console.log(i.join(""));

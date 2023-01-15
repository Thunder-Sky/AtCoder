s=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[1].split("");
saidai = 0;
for(q = 0;q < s.length-1;q++){
    count = 0;
    pp = "false";
    for(a = 0;a < s.length-1-q;a++){
        if(!(s[a] == s[a+q+1]) && (pp == "false")){
            count++;
        }
        else{
            pp = "true";
        }
    }
    console.log(count);
}

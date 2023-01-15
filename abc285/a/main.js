s=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0].split(" ");
s.map(function(value, number) { s[number] = Number(value)});
[a,b] = s;
if((a * 2 == b) || (a * 2 + 1 == b)){
    console.log("Yes");
}
else {
    console.log("No");
}

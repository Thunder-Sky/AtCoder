i=require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
a=i[0].split(" ");
a.map(function(value, number){a[number]=Number(value)});
b=i[1].split(" ");
b.map(function(value, number){b[number]=Number(value)});
leng = a[2]-a[1]+1;
for(c = 0;c < leng;c++){
    d = b[c+a[1]-1];
    e = b[c+a[3]-1];
    b[c+a[1]-1] = e;
    b[c+a[3]-1] = d;
}
console.log(String(b).replace(/,/g, " "));

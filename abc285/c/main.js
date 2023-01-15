input=require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0].split("");
math = 0;
item = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
keta = input.length;
input.forEach((data) => {
    math = math + (Math.pow(26, keta-1) * (item.indexOf(data) + 1));
    keta--;
})

console.log(math);

function Main(input) {
    var input = input.split("\n");
    var kihon = input[1].split(" ");
    var len = parseInt(input[2], 10);
    var len = len + 3;
    for(c = 3;c < len;c++){
        if((input[c].split(" ")).length == 2){
            var memo = (input[c].split(""))[2];
            var memo = parseInt(kihon[memo-1], 10);
            console.log(memo);
        }
        else if((input[c].split(" ")).length == 3){
            var ima = input[c].split(" ");
            kihon[[ima[1]]-1] = parseInt(ima[2], 10);
        }
    }
}

/* 変更禁止 */
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main(input) {
    var input = input.split(" ");
    var moto = parseInt(input[0], 10);
    var change = parseInt(input[0], 10);
    for(c = 0;c < parseInt(input[1], 10) - 1;c++){
        var change = change * moto
    }
    console.log(change);
}

/* 変更禁止 */
Main(require('fs').readFileSync('/dev/stdin', 'utf-8').trim());

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let arr = line.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }

    let minn = Math.min(...arr);
    let maxx = Math.max(...arr);

    for (let curr = 0; curr < maxx; curr++) {
        for (let i = minn - 2; i <= maxx + 2; i++) {
            if (arr.indexOf(i) == -1) {
                process.stdout.write("   ");
            } else {
                if (i < 0) {
                    process.stdout.write("   ");
                } else {
                    if (maxx - curr > i) {
                        process.stdout.write("   ");
                    } else {
                        process.stdout.write(" * ");
                    }
                }
            }
        }
        console.log();
    }

    for (let i = minn - 2; i <= maxx + 2; i++) {
        if (i < 0) process.stdout.write(i + " ");
        else {
            process.stdout.write(" " + i + " ");
        }
    }
    console.log();

    for (let curr = 0; curr > minn; curr--) {
        for (let i = minn - 2; i <= maxx + 2; i++) {
            if (arr.indexOf(i) == -1) {
                process.stdout.write("   ");
            } else {
                if (i >= 0) {
                    process.stdout.write("   ");
                } else {
                    if (i - curr >= 0) {
                        process.stdout.write("   ");
                    } else {
                        process.stdout.write(" * ");
                    }
                }
            }
        }
        console.log();
    }
    rl.close();
});
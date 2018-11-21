var args = process.argv; //USE args[2]
var readline = require('readline');
var fs = require('fs');
if (args.length === 3) {
    var mCount_1 = 0;
    var rl = readline.createInterface({
        input: fs.createReadStream('openthesaurus.txt'),
        crlfDelay: Infinity
    });
    rl.on('line', function (line) {
        if (line.includes(args[2])) {
            console.log("Line from file: " + line);
            mCount_1++;
        }
    });
    if (mCount_1 <= 0) {
        console.log("No matches found");
    }
}
else {
    console.log("Please specify words");
}

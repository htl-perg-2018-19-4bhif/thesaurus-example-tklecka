const args = process.argv; //USE args[2]

const readline = require('readline');
const fs = require('fs');

if (args.length === 3) {
    let mCount = 0;
    const rl = readline.createInterface({
        input: fs.createReadStream('openthesaurus.txt'),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        if (line.includes(args[2])) {
            console.log(`Line from file: ${line}`);
            mCount++;
        }
    });
    if(mCount<=0){
        console.log("No matches found");
    }
} else {
    console.log("Please specify words");
}
function solve(file) {
    let arr = file.split("\\");
    let lastEl = arr[arr.length - 1];
    let lastFile = lastEl.split(".");
    
    if (lastFile.length === 2) {
        console.log(`File name: ${lastFile[0]}`);
        console.log(`File extension: ${lastFile[1]}`);
    } else {
        console.log(`File name: ${lastFile[0]}.${lastFile[1]}`);
        console.log(`File extension: ${lastFile[2]}`);
    }
    
}
solve('C:\\Internal\\training-internal\\Template.pptx');
const isPrint = function(index, end,size) {
    let res = "";
    let empty = (end - index) / 2;
    for (let i = 0; i < empty; i++) {
        for (let j = 0; j < size; j++){
           res += " "; 
        }
        
    }
    return res;
}

const pyramid = function(str, num) {
    let res = "";
    let topLen = str.length;
    let printIndex = 1;
    let startIndex = [];

    for (let i = 1; i <= num; i++) {
        startIndex.push(printIndex);
        printIndex += 2;
    }

    console.log(startIndex)

    for (let i = 0; i < startIndex.length; i++) {
        let spaces = isPrint(startIndex[i], startIndex[startIndex.length - 1],str.length);
        let row = spaces;

        for (let j = 0; j < startIndex[i]; j++) {
            row += str;
        }

        if (i == startIndex.length -1 ){
            res += row;
        } else {
            res += row + "\n";
        }
    }

    return res;
}

// console.log(pyramid("{}", 5));

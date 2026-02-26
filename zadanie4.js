function groupStrings(strings) {
    const result = {};
    
   
    for (let str of strings) {
        const length = str.length;
        
    
        if (!result[length]) {
            result[length] = [];
        }
     
        result[length].push(str);
    }
    
    return result;
}

const strings = ['яблоко', 'груша', 'ананас', 'слива', 'киви', 'манго', 'арбуз'];

const grouped = groupStrings(strings);
console.log(grouped);

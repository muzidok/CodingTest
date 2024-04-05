function solution(numLog) {
    let n = numLog[0];
    let result = '';
    for(let i = 1; i < numLog.length; i++){
        if(numLog[i] === n+1){
            n += 1;
            result += "w";
        }else if(numLog[i] === n-1){
            n -= 1;
            result += "s";
        }else if(numLog[i] === n+ 10){
            n += 10;
            result+= "d";
        }else if(numLog[i] === n - 10){
            n -= 10;
            result+= "a";
        }
    }
    return result;
}
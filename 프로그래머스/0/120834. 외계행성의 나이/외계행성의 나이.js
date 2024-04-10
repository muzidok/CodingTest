function solution(age) {
    const alp = Array.from({length:10}, (v, i) => String.fromCharCode(i + 97));
    const ageStr = age.toString();
    let result = '';
    
    for (let i = 0; i < ageStr.length; i++) {
        result += alp[parseInt(ageStr[i])];
    }
    
    return result
}

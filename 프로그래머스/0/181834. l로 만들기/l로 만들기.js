function solution(myString) {
    const arr = [...myString];
    let result = [];
    for(i of arr){
        if( i < 'l'){
            result.push('l');
        }else{
            result.push(i);
        }
    }
    return result.join("");
}
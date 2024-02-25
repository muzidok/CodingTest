function solution(n) {
    let arr = [];
    let i = 1;
    
    while(i<= n){
        arr.push(i);
        i += 2;
    }
    return arr;
}
function solution(arr, k) {
    let result = 0;
    if(k%2 !== 0){
       result = arr.map(el => el*k);
    }else {
       result = arr.map(el => el+k);
    }
    return result;
}
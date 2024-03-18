function solution(cipher, code) {
    let result = [];
    const arr = [...cipher];
    for(let i = 0; i <= arr.length; i++){
        if(i%code === 0 && i !== 0){
            result.push(arr[i-1]);
        }
    }
    return result.join("");
}
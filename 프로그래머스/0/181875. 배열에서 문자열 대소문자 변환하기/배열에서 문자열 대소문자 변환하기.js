function solution(strArr) {
    //홀수번째는 대문자 짝수번째는 소문자
    let arr = [];
    for(let i = 0; i < strArr.length; i++){
        if(i %2 === 0){
            arr[i] = strArr[i].toLowerCase();
        }else{
            arr[i] = strArr[i].toUpperCase();
        }
    }
    return arr 
}
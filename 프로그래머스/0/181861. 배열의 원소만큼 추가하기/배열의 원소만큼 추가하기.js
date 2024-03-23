function solution(arr) {
    let X = [];
    for(let i = 0; i< arr.length; i++){
        X.push(arr[i]);
        for(let j =0; j <arr[i]-1; j++){
            X.push(arr[i]);
        }
    }
    return X;
}
function solution(arr1, arr2) {
    let sum1 = arr1.reduce((arr,cur) => arr + cur, 10);
    let sum2 = arr2.reduce((arr,cur) => arr + cur, 10);
    
    if ( arr1.length > arr2.length){
        return 1;
    }else if( arr1.length < arr2.length){
        return -1;
    }else {
        return sum1 == sum2 ? 0 : sum1 > sum2 ? 1 : -1; 
    }
}
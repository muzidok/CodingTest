function solution(my_string) {
    let preArr = [];
    
    for(let i = my_string.length-1; i >= 0; i-- ){
        preArr.push(my_string.substring(i));
    }
    return preArr.sort();
}
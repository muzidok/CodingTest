function solution(num_list, n) {
    let result;
    for(let i = 0 ; i< num_list.length; i++){
            result = num_list.slice(n);
    }
    for(let i =0; i< n; i++){
        result.push(num_list[i])
    }
    return result;
}
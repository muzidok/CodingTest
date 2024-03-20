function solution(my_str, index) {

    let result =[];
    for(let i=0; i<index.length; i++){
       result.push(my_str[index[i]]);
    }
    return result.join("");
}
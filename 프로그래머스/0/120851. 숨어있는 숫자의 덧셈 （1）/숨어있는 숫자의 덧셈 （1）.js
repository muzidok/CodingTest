function solution(my_string) {
    const numArr = [...my_string].filter((el) => parseInt(el)); 
    return numArr.map(Number).reduce((a,b) => a += b);
}

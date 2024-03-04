function solution(array) {
    const center = Math.floor(array.length/2);
    const newArr = array.sort((a,b) => a-b);
    return newArr[center];
 
}
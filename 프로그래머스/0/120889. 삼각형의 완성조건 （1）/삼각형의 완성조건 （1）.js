function solution(sides) {
    let arr = sides.sort((a,b) => a - b);
    console.log(arr)
    return  arr[2] >= arr[0] + arr[1] ? 2 : 1;
}
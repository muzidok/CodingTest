function solution(num_list) {
    let multi = 1;
    let sum = 0;
    for (i of num_list){
        multi *= i;
        sum += i
    }
    return multi < Math.pow(sum, 2) ? 1 : 0;
}
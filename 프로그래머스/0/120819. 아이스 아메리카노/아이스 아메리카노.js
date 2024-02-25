function solution(money) {
    const ia = Math.floor(money/5500);
    const remain = money - ia*5500;
    return [ia, remain];
}
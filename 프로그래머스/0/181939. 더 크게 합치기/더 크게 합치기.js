function solution(a, b) {
    const s = parseInt(a + "" + b);
    const s2 =  parseInt(b + "" + a);
    return s == s2 ? s : s > s2 ? s :s2;
}
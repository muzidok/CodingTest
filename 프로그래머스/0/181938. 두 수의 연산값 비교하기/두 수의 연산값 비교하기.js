function solution(a, b) {
    const fw = Number(a + "" + b);
    const sc = 2 * a * b;
    return fw > sc ? fw : sc;
}
function solution(myString) {
    let filtered = myString.split("x").filter(el => el !== 'x');
    return filtered.map(el => el.length);
}
function solution(n) {
    const arr = Array.from(String(n)); 
    const result = arr.reduce((acc, cur) => acc + Number(cur), 0); 
    return result;
    }



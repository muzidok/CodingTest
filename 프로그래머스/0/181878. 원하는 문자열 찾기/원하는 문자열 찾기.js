function solution(myString, pat) {
    const regex = new RegExp(pat, "gi"); 
    const matches = myString.match(regex); 
    return matches !== null ? 1 : 0; 
    
}
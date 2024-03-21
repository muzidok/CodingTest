function solution(myString) {
    let result = "";
    
    for(let i of myString){
        if(i === 'a' || i === 'A'){
            result += 'A';
        }else {
            result += i.toLowerCase();
        }
    }
    return result;
}
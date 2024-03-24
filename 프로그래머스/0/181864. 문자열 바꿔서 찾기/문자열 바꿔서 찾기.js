function solution(myString, pat) {
    let str ='';
    for(let i of myString){
        if(i === 'A'){
            str +='B';
        }else if( i === 'B'){
            str += 'A'
        }
    }
    return str.includes(pat) ? 1 : 0;
}
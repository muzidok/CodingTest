function solution(n, control) {
    const arr =[...control];
    for(let el of arr){
        if(el === "w"){
            n++;
        }else if(el === "s"){
            n--;
        }else if(el === "d"){
            n+=10;
        }else if(el === "a"){
            n-=10;
        }
    }
    return n;
}
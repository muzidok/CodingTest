function solution(rsp) {
    let ss = "2";
    let rc = "0";
    let pp = "5";
    
    let result =[];
    const arr = [...rsp];
    
    for( i of arr){
        if(i === "2"){
            result.push(rc);
        }else if(i === "0"){
            result.push(pp);
        }else if(i === "5"){
            result.push(ss);
        }
    }
    return result.join("");
}
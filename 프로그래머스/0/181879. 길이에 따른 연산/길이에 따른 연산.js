function solution(num_list) {
    let x = 0;
    let y = 1;
    

    for(let i = 0; i < num_list.length; i++){
        if(num_list.length < 11) {            
            y *= num_list[i];
        }else {
            x += num_list[i];
        }
    }
    return num_list.length < 11 ? y : x;
}
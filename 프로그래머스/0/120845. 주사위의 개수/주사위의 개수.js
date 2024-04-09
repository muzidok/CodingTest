function solution(box, n) {
    let width = Math.trunc(box[0]/n);
    let height = Math.trunc(box[1]/n);
    let length = Math.trunc(box[2]/n);
    
    return  width * height * length;
}
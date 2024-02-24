function solution(my_string, letter) {
    const arr = Array.from(my_string);
    const filteredArr = arr.filter((el) => {return el !== letter});
    
    return filteredArr.join("");
}
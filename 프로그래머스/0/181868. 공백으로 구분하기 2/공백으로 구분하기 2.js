function solution(my_string) {

    const arr = my_string.split(/\s+/);
    return arr.filter(el => el != "");
}